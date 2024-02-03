import { Injectable, inject, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

//Interfaces
import { ITask } from '@interfaces/task.interface';

//Services
import { LocalStorageService } from '@services/localStorage/local-storage.service';

@Injectable({
    providedIn: 'root',
})
export class TasksListService {
    #localStorageService = inject(LocalStorageService);

    #tasksSearchString = signal<string | null>(null);

    #completeTasksList = new BehaviorSubject<ITask[]>([]);

    #tasksListToRender = new BehaviorSubject<ITask[]>([]);
    public getTasksListToRender$ = this.#tasksListToRender.asObservable();

    #tasksSubjectsList = new BehaviorSubject<string[]>([]);
    public getTasksSubjectsList$ = this.#tasksSubjectsList.asObservable();

    constructor() {
        //Get data and set lists
        this.#setTasksLists();
        this.#setSubjectsList();

        //Added event to window to update lists automatically when localStorage has any modifications
        window.addEventListener('storage', () => {
            this.#setTasksLists();
            this.#setSubjectsList();
        });
    }

    //Get data from localStorage and set / update the tasks lists
    #setTasksLists() {
        //Get taskList from localStorage
        const getTasks =
            this.#localStorageService.getLocalStorageItem('tasksList');

        if (getTasks) {
            //Set / update the completeTasksList
            this.#completeTasksList.next(getTasks);

            //Set / update the tasksListToRender, checking if a search exists
            if (this.#tasksSearchString()) {
                this.getTasksBySearch(this.#tasksSearchString()!);
            } else {
                this.#tasksListToRender.next(getTasks);
            }
        }
    }

    //Set task subject list
    #setSubjectsList() {
        //Get subjects from all tasks
        const tasksList = this.#completeTasksList.value;
        const tasksSubjects = tasksList.map((task) => {
            return task.subject;
        });

        //Manipulate the subject list to exclude duplicate values
        const subjectsSet = new Set(
            tasksSubjects.filter((subject) => {
                return subject !== null;
            })
        );
        const subjects = [...subjectsSet] as string[];

        //Set tasks subjects list
        this.#tasksSubjectsList.next(subjects);
    }

    //Add a new task to localStorage
    public addNewTaskToLocalStorage(newTask: ITask) {
        const currentTasksList = this.#completeTasksList.value;
        const newTasksList = [...currentTasksList, newTask];

        this.#localStorageService.setLocalStorageItem(
            'tasksList',
            newTasksList
        );
    }

    //Create a new task
    public createNewTask(taskValues: any) {
        const newTask: ITask = {
            id: new Date().getTime(),
            title: taskValues.title,
            subject: taskValues.subject,
            description: taskValues.description,
            priority: taskValues.priority,
            deadlineDate: taskValues.deadlineDate,
            creationDate: new Date().toISOString().split('T')[0],
        };

        this.addNewTaskToLocalStorage(newTask);
    }

    //Update / edit a task
    public updateTask(id: number, taskValues: any) {
        for (let task of this.#completeTasksList.value) {
            if (task.id === id) {
                task.title = taskValues.title;
                task.subject = taskValues.subject;
                task.description = taskValues.description;
                task.priority = taskValues.priority;
                task.deadlineDate = taskValues.deadlineDate;
            }
        }

        this.#localStorageService.setLocalStorageItem(
            'tasksList',
            this.#completeTasksList.value
        );
    }

    //Delete a task
    public deleteTask(id: number) {
        const modifiedTasksList = this.#completeTasksList.value.filter(
            (task) => {
                return task.id !== id;
            }
        );

        this.#localStorageService.setLocalStorageItem(
            'tasksList',
            modifiedTasksList
        );
    }

    //Get task via ID
    public getTaskById(id: number | string) {
        const taskId = Number(id);

        const task = this.#completeTasksList.value.filter((task) => {
            return task.id === taskId;
        });

        return task[0];
    }

    //Search / get tasks that match the search
    public getTasksBySearch(searchValue: string) {
        //If there is no searchValue, set the tasksListToRender as a completeTasksList
        //And reset the search string, to ensure the correct display of the tasksListToRender
        if (!searchValue) {
            this.#tasksListToRender.next(this.#completeTasksList.value);
            this.#tasksSearchString.set(null);
            return;
        }

        //Store the search value
        this.#tasksSearchString.set(searchValue);

        //Filter the tasks that match the search
        const regex = new RegExp(`^${searchValue}`, 'i');
        const filterTasks = this.#completeTasksList.value.filter((task) => {
            return regex.test(task.title) || regex.test(task.subject!);
        });

        //Modify the tasksListToRender according to the search
        this.#tasksListToRender.next(filterTasks);
    }
}
