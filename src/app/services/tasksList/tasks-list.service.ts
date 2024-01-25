import { Injectable, inject } from '@angular/core';
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
    public getTasksList$ = this.#tasksList.asObservable();

    public getTaskById(id: number | string) {
        const taskId = Number(id);

        const task = this.#tasksList.value.filter((task) => {
            return task.id === taskId;
        });

        return task[0];
    }

    #setTasksList() {
        const getTasks =
            this.#localStorageService.getLocalStorageItem('tasksList');

        if (getTasks) {
            this.#tasksList.next(getTasks);
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
