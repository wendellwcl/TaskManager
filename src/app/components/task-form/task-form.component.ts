import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

//Enums
import { ETaskPriority } from '@enums/task-priority.enum';
import { ITask } from '@interfaces/task.interface';

//Services
import { FormatDateService } from '@services/formatDate/format-date.service';
import { LocalStorageService } from '@services/localStorage/local-storage.service';
import { TasksListService } from '@services/tasksList/tasks-list.service';

@Component({
    selector: 'app-task-form',
    standalone: true,
    imports: [ReactiveFormsModule],
    templateUrl: './task-form.component.html',
    styleUrl: './task-form.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskFormComponent {
    #fb = inject(FormBuilder);
    #localStorageService = inject(LocalStorageService);
    #tasksListService = inject(TasksListService);
    #formatDate = inject(FormatDateService);

    public taskForm = this.#fb.group({
        id: new Date().getTime(),
        creationDate: new Date().toLocaleDateString(),
        title: ['', [Validators.required]],
        subject: [''],
        description: [''],
        priority: [ETaskPriority.DEFAULT],
        deadlineDate: '',
    });

    #formatDeadlineDate() {
        const deadlineDate = this.taskForm.get('deadlineDate');
        const deadlineDateValue = deadlineDate?.value || null;

        if (deadlineDateValue) {
            const formatedDate =
                this.#formatDate.stringToLocaleDateString(deadlineDateValue);

            deadlineDate?.setValue(formatedDate);
        } else {
            deadlineDate?.setValue(null);
        }
    }

    #submitToLocalStorage() {
        const newTask = this.taskForm.value;

        const prevTasksList =
            this.#localStorageService.getLocalStorageItem('tasksList');

        if (prevTasksList) {
            this.#localStorageService.setLocalStorageItem('tasksList', [
                ...prevTasksList,
                newTask,
            ]);
        } else {
            this.#localStorageService.setLocalStorageItem('tasksList', [
                newTask,
            ]);
        }
    }

    #clearTaskForm() {
        this.taskForm.patchValue({
            title: '',
            subject: '',
            description: '',
            priority: ETaskPriority.DEFAULT,
            deadlineDate: '',
        });
    }

    #handleCreateTask(newTask: ITask) {
        this.#tasksListService.createTask(newTask);
    }

    public handleSubmitTaskForm() {
        if (this.taskForm.valid) {
            this.#formatDeadlineDate();
            this.#handleCreateTask(this.taskForm.value as ITask);
            this.#clearTaskForm();
        }
    }
}
