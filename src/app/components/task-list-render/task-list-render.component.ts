import {
    ChangeDetectionStrategy,
    Component,
    Input,
    signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';

//Interfaces
import { ITask } from '@interfaces/task.interface';

//Components
import { TaskItemComponent } from '@components/task-item/task-item.component';

@Component({
    selector: 'app-task-list-render',
    standalone: true,
    imports: [RouterLink, TaskItemComponent],
    templateUrl: './task-list-render.component.html',
    styleUrl: './task-list-render.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskListRenderComponent {
    @Input({ required: true }) set inputListRender(value: ITask[] | null) {
        this.tasksList.set(value);
    }

    public tasksList = signal<ITask[] | null>(null);
}
