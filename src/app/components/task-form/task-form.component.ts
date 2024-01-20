import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

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

    public taskForm = this.#fb.group({
        title: ['', [Validators.required]],
        subject: [''],
        description: [''],
        priority: ['normal'],
        deadlineDate: [''],
    });

    #clearTaskForm() {
        this.taskForm.patchValue({
            title: '',
            subject: '',
            description: '',
            priority: 'normal',
            deadlineDate: '',
        });
    }

    handleSubmitTaskForm() {
        if (this.taskForm.valid) {
            console.log(this.taskForm.value);
            this.#clearTaskForm();
        }
    }
}
