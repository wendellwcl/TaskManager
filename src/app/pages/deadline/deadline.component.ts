import {
    ChangeDetectionStrategy,
    Component,
    OnDestroy,
    OnInit,
    inject,
    signal,
} from '@angular/core';
import { Subscription } from 'rxjs';

//Interfaces
import { ITask } from '@interfaces/task.interface';

//Components
import { TaskListRenderComponent } from '@components/task-list-render/task-list-render.component';

//Services
import { TasksListService } from '@services/tasksList/tasks-list.service';

@Component({
    selector: 'app-deadline',
    standalone: true,
    imports: [TaskListRenderComponent],
    templateUrl: './deadline.component.html',
    styleUrl: './deadline.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeadlineComponent implements OnInit, OnDestroy {
    #tasksService = inject(TasksListService);
    #deadlineTasksSubscription = new Subscription();

    public deadlineTasks = signal<ITask[] | null>(null);

    ngOnInit(): void {
        //Subscribing to get the data from deadlineTasks
        this.#deadlineTasksSubscription =
            this.#tasksService.getDeadlineTasks$.subscribe((value) =>
                this.deadlineTasks.set(value)
            );
    }

    ngOnDestroy(): void {
        //Unsubscribing from deadlineTasks
        this.#deadlineTasksSubscription.unsubscribe();
    }
}
