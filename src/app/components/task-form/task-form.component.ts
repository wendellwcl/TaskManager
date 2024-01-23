import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

//Interfaces
import { ITask } from '@interfaces/task.interface';

//Enums
import { ETaskPriority } from '@enums/task-priority.enum';

//Services
import { FormatDateService } from '@services/formatDate/format-date.service';
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
    #formatDate = inject(FormatDateService);

    #createNewTask() {
        const formValues: any = this.taskForm.value;

        const newTask: ITask = {
            id: new Date().getTime(),
            title: formValues.title,
            subject: formValues.subject,
            description: formValues.description,
            priority: formValues.priority,
            deadlineDate: this.#formatDate.stringToLocaleDateString(
                formValues.deadlineDate
            ),
            creationDate: new Date().toLocaleDateString(),
        };

        return newTask;
    }

    #handleCreateTask(newTask: ITask) {
        this.#tasksListService.createTask(newTask);
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
            const newTask: ITask = this.#createNewTask();
            this.#handleCreateTask(newTask);
            this.#clearTaskForm();
        }
    }
}
