import {
    ChangeDetectionStrategy,
    Component,
    OnDestroy,
    OnInit,
    inject,
    signal,
} from '@angular/core';

//Interfaces
import { ITask } from '@interfaces/task.interface';

//Services
import { TasksListService } from '@services/tasksList/tasks-list.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-task-list-render',
    standalone: true,
    imports: [],
    templateUrl: './task-list-render.component.html',
    styleUrl: './task-list-render.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskListRenderComponent implements OnInit, OnDestroy {
    #tasksListService = inject(TasksListService);
    #tasksListSubscription?: Subscription;

    public tasksList = signal<ITask[] | null>(null);

    ngOnInit(): void {
        this.#tasksListSubscription =
            this.#tasksListService.getTasksList$.subscribe((value) =>
                this.tasksList.set(value)
            );
    }

    ngOnDestroy(): void {
        this.#tasksListSubscription?.unsubscribe();
    }
}
