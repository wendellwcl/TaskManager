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

    public storageEvent = new Event('storage');

    #tasksList = new BehaviorSubject<ITask[] | null>(null);
    public getTasksList$ = this.#tasksList.asObservable();

    #setTasksList() {
        const getTasks =
            this.#localStorageService.getLocalStorageItem('tasksList');
        this.#tasksList.next(getTasks);
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
