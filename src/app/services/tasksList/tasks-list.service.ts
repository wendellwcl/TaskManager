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

    #setTasksList() {
        const getTasks =
            this.#localStorageService.getLocalStorageItem('tasksList');

        if (getTasks) {
            this.#tasksList.next(getTasks);
        }
    }

    public createTask(newTask: ITask) {
        const currentTasksList = this.#tasksList.value;
        const updateTasksList = [...currentTasksList, newTask];

        this.#localStorageService.setLocalStorageItem(
            'tasksList',
            updateTasksList
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
