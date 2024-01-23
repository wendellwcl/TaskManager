import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

//Enums
import { ETaskPriority } from '@enums/task-priority.enum';

//Services
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
    #tasksListService = inject(TasksListService);

    #handleCreateTask(taskFormValues: any) {
        this.#tasksListService.createNewTask(taskFormValues);
    }

    #clearTaskForm() {
        this.taskForm.patchValue({
            title: null,
            subject: null,
            description: null,
            priority: ETaskPriority.DEFAULT,
            deadlineDate: null,
        });
    }

    public taskForm = this.#fb.group({
        title: [null, [Validators.required]],
        subject: [null],
        description: [null],
        priority: [ETaskPriority.DEFAULT],
        deadlineDate: [null],
    });

    public handleSubmitTaskForm() {
        if (this.taskForm.valid) {
            const taskFormValues = {
                title: this.taskForm.get('title')!.value,
                subject: this.taskForm.get('subject')!.value,
                description: this.taskForm.get('description')!.value,
                priority: this.taskForm.get('priority')!.value,
                deadlineDate: this.taskForm.get('deadlineDate')!.value,
            };

            this.#handleCreateTask(taskFormValues);
            this.#clearTaskForm();
        }
    }
}
