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
import { TaskListRenderComponent } from '@components/task-list-render/task-list-render.component';

//Interfaces
import { ITask } from '@interfaces/task.interface';

//Services
import { TasksListService } from '@services/tasksList/tasks-list.service';

@Component({
    selector: 'app-historic',
    standalone: true,
    imports: [TaskListRenderComponent],
    templateUrl: './historic.component.html',
    styleUrl: './historic.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HistoricComponent implements OnInit, OnDestroy {
    #tasksListService = inject(TasksListService);
    #historicSubscription = new Subscription();

    public tasksHistoric = signal<ITask[] | null>(null);

    ngOnInit(): void {
        //Subscribing to get the data from tasksHistoric
        this.#historicSubscription =
            this.#tasksListService.getTasksHistoric$.subscribe((value) =>
                this.tasksHistoric.set(value)
            );
    }

    ngOnDestroy(): void {
        //Unsubscribing from tasksHistoric
        this.#historicSubscription.unsubscribe();
    }
}
