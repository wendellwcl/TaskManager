import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

//Interfaces
import { ITask } from '@interfaces/task.interface';

//Services
import { FormatDateService } from '@services/formatDate/format-date.service';
import { LocalStorageService } from '@services/localStorage/local-storage.service';

@Injectable({
    providedIn: 'root',
})
export class TasksListService {
    #localStorageService = inject(LocalStorageService);
    #formatDate = inject(FormatDateService);

    #tasksList = new BehaviorSubject<ITask[]>([]);
    public getTasksList$ = this.#tasksList.asObservable();

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
            deadlineDate: this.#formatDate.stringToLocaleDateString(
                taskValues.deadlineDate
            ),
            creationDate: new Date().toLocaleDateString(),
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
