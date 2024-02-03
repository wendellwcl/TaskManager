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
    #tasksListService = inject(TasksListService);
    #deadlineTasksListSubscription = new Subscription();

    public deadlineTasksList = signal<ITask[] | null>(null);

    ngOnInit(): void {
        //Subscribing to get the data from deadlineTasksList
        this.#deadlineTasksListSubscription =
            this.#tasksListService.getDeadlineTasksList$.subscribe((value) =>
                this.deadlineTasksList.set(value)
            );
    }

    ngOnDestroy(): void {
        //Unsubscribing from deadlineTasksList
        this.#deadlineTasksListSubscription.unsubscribe();
    }
}
