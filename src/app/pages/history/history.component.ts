import {
    ChangeDetectionStrategy,
    Component,
    inject,
    signal,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Subscription } from 'rxjs';

//Interfaces
import { ITask } from '@interfaces/task.interface';

//Components
import { TaskListRenderComponent } from '@components/task-list-render/task-list-render.component';

//Services
import { TasksListService } from '@services/tasksList/tasks-list.service';

@Component({
    selector: 'app-history',
    standalone: true,
    imports: [TaskListRenderComponent, MatIconModule],
    templateUrl: './history.component.html',
    styleUrl: './history.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoryComponent {
    #tasksList = inject(TasksListService);
    #historySubscription = new Subscription();

    public tasksHistory = signal<ITask[] | null>(null);

    ngOnInit(): void {
        //Subscribing to get the data from tasksHistory
        this.#historySubscription = this.#tasksList.getTasksHistory$.subscribe(
            (value) => this.tasksHistory.set(value)
        );
    }

    ngOnDestroy(): void {
        //Unsubscribing from tasksHistory
        this.#historySubscription.unsubscribe();
    }

    //Clear the history
    public handleClearHistory() {
        this.#tasksList.clearHistory();
    }
}
