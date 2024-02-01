import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    Input,
    OnInit,
    ViewChild,
    inject,
    signal,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

//Enums
import { ETaskPriority } from '@enums/task-priority.enum';

//Interfaces
import { ITask } from '@interfaces/task.interface';

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
export class TaskFormComponent implements OnInit, AfterViewInit {
    #fb = inject(FormBuilder);
    #router = inject(Router);
    #tasksListService = inject(TasksListService);

    @ViewChild('titleInput') titleInput!: ElementRef;
    @ViewChild('titleContainer') titleContainer!: ElementRef;

    public headerText = signal<string | null>(null);
    public btnText = signal<string | null>(null);
    public taskPriorities = ETaskPriority;

    public getId = signal<number | null>(null);
    @Input() set id(id: number) {
        this.getId.set(id);
    }

    #updateTask = signal<ITask | null>(null);

    #setInputValues() {
        this.taskForm.patchValue({
            title: this.#updateTask()?.title,
            subject: this.#updateTask()?.subject,
            description: this.#updateTask()?.description,
            priority: this.#updateTask()?.priority,
            deadlineDate: this.#updateTask()?.deadlineDate,
        });
    }

    #handleCreateTask() {
        this.#tasksListService.createNewTask(this.taskForm.value);
    }

    #handleUpdateTask() {
        this.#tasksListService.updateTask(
            this.#updateTask()!.id,
            this.taskForm.value
        );
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

    public removeInvalidClass($event: FocusEvent) {
        const element = $event.target as HTMLElement;
        const parentEl = element.parentNode as HTMLElement;
        parentEl.classList.remove('invalid');
    }

    public taskForm = this.#fb.group<any>({
        title: [null, [Validators.required]],
        subject: [null],
        description: [null],
        priority: [ETaskPriority.DEFAULT],
        deadlineDate: [null],
    });

    public handleSubmitTaskForm() {
        if (this.taskForm.valid) {
            if (this.#updateTask()) {
                this.#handleUpdateTask();
            } else {
                this.#handleCreateTask();
            }

            this.#router.navigate(['/dashboard']);
            this.#clearTaskForm();
            return;
        }

        if (!this.taskForm.get('title')?.valid) {
            this.titleContainer.nativeElement.classList.add('invalid');
        }
    }

    ngOnInit(): void {
        if (this.getId()) {
            const task = this.#tasksListService.getTaskById(this.getId()!);
            this.#updateTask.set(task);
            this.headerText.set('Editar tarefa');
            this.btnText.set('salvar');
        } else {
            this.#clearTaskForm();
            this.headerText.set('criar tarefa');
            this.btnText.set('criar');
        }
    }

    ngAfterViewInit(): void {
        if (this.#updateTask()) {
            this.#setInputValues();
        }

        this.titleInput.nativeElement.focus();

        document.querySelectorAll('.input-field').forEach((element) => {
            const inputElement = element as HTMLInputElement;
            if (inputElement.value) {
                inputElement.nextElementSibling?.classList.add('filled');
            }

            element.addEventListener('blur', (event) => {
                const inputElement = event.currentTarget as HTMLInputElement;
                if (inputElement.value != '') {
                    inputElement.nextElementSibling?.classList.add('filled');
                } else {
                    inputElement.nextElementSibling?.classList.remove('filled');
                }
            });
        });
    }
}
