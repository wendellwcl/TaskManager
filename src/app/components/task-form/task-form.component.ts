import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    OnInit,
    QueryList,
    Input as RouterInput,
    ViewChild,
    ViewChildren,
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
    @ViewChildren('inputField') inputFields!: QueryList<ElementRef>;

    //Access property id via router params
    public getId = signal<number | null>(null);
    @RouterInput() set id(id: number) {
        this.getId.set(id);
    }

    public headerText = signal<string | null>(null);
    public btnText = signal<string | null>(null);
    public taskPriorities = ETaskPriority;
    #taskToUpdate = signal<ITask | null>(null);

    ngOnInit(): void {
        //If has the id property, get data from the respective task to update / edit
        //Else clear the task form
        if (this.getId()) {
            const task = this.#tasksListService.getTaskById(this.getId()!);
            this.#taskToUpdate.set(task);
            this.headerText.set('Editar tarefa');
            this.btnText.set('salvar');
        } else {
            this.#clearTaskForm();
            this.headerText.set('criar tarefa');
            this.btnText.set('criar');
        }
    }

    ngAfterViewInit(): void {
        //If has a task to edit, set the respective values ​​to the input elements
        if (this.#taskToUpdate()) {
            this.#setInputValuesToTaskUpdate();
        }

        //Autofocus the title input element
        this.titleInput.nativeElement.focus();

        //Configuring the animation logic of input elements
        this.inputFields.toArray().forEach((element) => {
            const inputElement = element.nativeElement as HTMLInputElement;

            if (inputElement.value) {
                inputElement.nextElementSibling?.classList.add('filled');
            }

            inputElement.addEventListener('blur', (event) => {
                const targetElement = event.currentTarget as HTMLInputElement;

                if (targetElement.value !== '') {
                    targetElement.nextElementSibling?.classList.add('filled');
                } else {
                    targetElement.nextElementSibling?.classList.remove(
                        'filled'
                    );
                }
            });
        });
    }

    //Task form builder
    public taskForm = this.#fb.group<any>({
        title: [null, [Validators.required]],
        subject: [null],
        description: [null],
        priority: [ETaskPriority.DEFAULT],
        deadlineDate: [null],
    });

    //Handle task form submission
    public handleSubmitTaskForm() {
        if (this.taskForm.valid) {
            //Check whether to update a task or create a new task
            if (this.#taskToUpdate()) {
                this.#handleUpdateTask();
            } else {
                this.#handleCreateTask();
            }

            //Automatically redirect to dashboard page
            this.#router.navigate(['/dashboard']);
            //Clear form
            this.#clearTaskForm();
            return;
        }

        if (!this.taskForm.get('title')?.valid) {
            this.titleContainer.nativeElement.classList.add('invalid');
        }
    }

    //Create task
    #handleCreateTask() {
        this.#tasksListService.createNewTask(this.taskForm.value);
    }

    //Update task
    #handleUpdateTask() {
        this.#tasksListService.updateTask(
            this.#taskToUpdate()!.id,
            this.taskForm.value
        );
    }

    //Set input elements values ​​for task update
    #setInputValuesToTaskUpdate() {
        this.taskForm.patchValue({
            title: this.#taskToUpdate()?.title,
            subject: this.#taskToUpdate()?.subject,
            description: this.#taskToUpdate()?.description,
            priority: this.#taskToUpdate()?.priority,
            deadlineDate: this.#taskToUpdate()?.deadlineDate,
        });
    }

    //Clear input elements
    #clearTaskForm() {
        this.taskForm.patchValue({
            title: null,
            subject: null,
            description: null,
            priority: ETaskPriority.DEFAULT,
            deadlineDate: null,
        });
    }

    //Remove invalid field feedback when focusing on corresponding input element
    public removeInvalidClass($event: FocusEvent) {
        const element = $event.target as HTMLElement;
        const parentEl = element.parentNode as HTMLElement;
        parentEl.classList.remove('invalid');
    }
}
