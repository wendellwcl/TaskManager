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

    #tasksList = new BehaviorSubject<ITask[]>([]);

    #tasksListRender = new BehaviorSubject<ITask[]>([]);
    public getTasksListRender$ = this.#tasksListRender.asObservable();

    #tasksFilterQuery = signal<string | null>(null);

    public getTaskById(id: number | string) {
        const taskId = Number(id);

        const task = this.#tasksList.value.filter((task) => {
            return task.id === taskId;
        });

        return task[0];
    }

    public searchTasks(query: string) {
        if (!query) {
            this.#tasksListRender.next(this.#tasksList.value);
            return;
        }

        this.#tasksFilterQuery.set(query);
        const regex = new RegExp(`^${query}`, 'i');
        const filterTasks = this.#tasksList.value.filter((task) => {
            return regex.test(task.title) || regex.test(task.subject!);
        });

        this.#tasksListRender.next(filterTasks);
    }

    #setTasksList() {
        const getTasks =
            this.#localStorageService.getLocalStorageItem('tasksList');

        if (getTasks) {
            this.#tasksList.next(getTasks);

            if (this.#tasksFilterQuery() !== '') {
                this.searchTasks(this.#tasksFilterQuery()!);
            } else {
                this.#tasksListRender.next(getTasks);
            }
        }
    }

    public addNewTaskToLocalStorage(newTask: ITask) {
        const currentTasksList = this.#tasksList.value;
        const updateTasksList = [...currentTasksList, newTask];

        this.#localStorageService.setLocalStorageItem(
            'tasksList',
            updateTasksList
        );
    }

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

    public updateTask(id: number, taskValues: any) {
        for (let task of this.#tasksList.value) {
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
            this.#tasksList.value
        );
    }

    public deleteTask(id: number) {
        const updateTaskList = this.#tasksList.value?.filter((task) => {
            return task.id !== id;
        });

        this.#localStorageService.setLocalStorageItem(
            'tasksList',
            updateTaskList
        );

        this.#setTasksList();
    }

    constructor() {
        this.#setTasksList();

        window.addEventListener('storage', () => {
            this.#setTasksList();
        });
    }
}
