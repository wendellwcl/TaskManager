import {
    ChangeDetectionStrategy,
    Component,
    OnDestroy,
    OnInit,
    inject,
    signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';

//Interfaces
import { ITask } from '@interfaces/task.interface';

//Components
import { TaskItemComponent } from '@components/task-item/task-item.component';

//Services
import { TasksListService } from '@services/tasksList/tasks-list.service';

@Component({
    selector: 'app-task-list-render',
    standalone: true,
    imports: [RouterLink, TaskItemComponent],
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
