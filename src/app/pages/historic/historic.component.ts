import {
    ChangeDetectionStrategy,
    Component,
    OnInit,
    inject,
    signal,
} from '@angular/core';

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
export class HistoricComponent implements OnInit {
    #tasksListService = inject(TasksListService);

    public tasksHistoric = signal<ITask[] | null>(null);

    ngOnInit(): void {
        this.#tasksListService.getTasksHistoric$.subscribe((value) =>
            this.tasksHistoric.set(value)
        );
    }
}
