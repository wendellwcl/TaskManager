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

    #tasksList = new BehaviorSubject<ITask[] | null>(null);
    public getTasksList$ = this.#tasksList.asObservable();

    #setTasksList() {
        const getTasks =
            this.#localStorageService.getLocalStorageItem('tasksList');
        this.#tasksList.next(getTasks);
    }

    constructor() {
        this.#setTasksList();

        window.addEventListener('storage', () => {
            this.#setTasksList();
        });
    }
}
