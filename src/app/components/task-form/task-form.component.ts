import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

//Enums
import { ETaskPriority } from '@enums/task-priority.enum';

//Services
import { FormatDateService } from '@services/formatDate/format-date.service';
import { LocalStorageService } from '@services/localStorage/local-storage.service';

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
    #formatDate = inject(FormatDateService);

    #storageEvent = new Event('storage');

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
        if (this.taskForm.get('deadlineDate')?.value) {
            const deadlineDate = this.taskForm.get('deadlineDate');
            const date = deadlineDate!.value;

            const formatedDate = this.#formatDate.stringToLocaleDateString(
                date!
            );

            deadlineDate?.setValue(formatedDate);
        } else {
            this.taskForm.get('deadlineDate')?.setValue(null);
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

    handleSubmitTaskForm() {
        if (this.taskForm.valid) {
            this.#formatDeadlineDate();
            this.#submitToLocalStorage();
            window.dispatchEvent(this.#storageEvent);
            this.#clearTaskForm();
        }
    }
}
