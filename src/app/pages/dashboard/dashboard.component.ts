import {
    ChangeDetectionStrategy,
    Component,
    OnDestroy,
    OnInit,
    inject,
    signal,
} from '@angular/core';
import { Subscription } from 'rxjs';

//Components
import { DashboardHeaderComponent } from '@components/dashboard-header/dashboard-header.component';
import { TaskListRenderComponent } from '@components/task-list-render/task-list-render.component';
import { ITask } from '@interfaces/task.interface';

//Services
import { TasksListService } from '@services/tasksList/tasks-list.service';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [DashboardHeaderComponent, TaskListRenderComponent],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit, OnDestroy {
    #tasksListService = inject(TasksListService);
    #tasksListSubscription?: Subscription;

    public tasksLists = signal<ITask[] | null>(null);

    ngOnInit(): void {
        this.#tasksListSubscription =
            this.#tasksListService.getTasksListRender$.subscribe((value) => {
                this.tasksLists.set(value);
            });
    }

    ngOnDestroy(): void {
        this.#tasksListSubscription?.unsubscribe();
    }
}
