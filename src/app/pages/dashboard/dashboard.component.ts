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
import { DashboardHeaderComponent } from '@components/dashboard-header/dashboard-header.component';
import { TaskListRenderComponent } from '@components/task-list-render/task-list-render.component';

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
    #tasksService = inject(TasksListService);
    #tasksSubscription?: Subscription;

    public renderList = signal<ITask[] | null>(null);

    ngOnInit(): void {
        //Subscribing to get the data from tasksListToRender
        this.#tasksSubscription = this.#tasksService.getListToRender$.subscribe(
            (value) => {
                this.renderList.set(value);
            }
        );
    }

    ngOnDestroy(): void {
        //Unsubscribing from tasksListToRender
        this.#tasksSubscription?.unsubscribe();

        //Resetting the search on destroy, to ensure no unwanted behavior is caused
        this.#tasksService.getTasksBySearch('');
    }
}
