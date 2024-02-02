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
    //List that will be rendered
    @Input({ required: true }) set inputListRender(value: ITask[] | null) {
        this.listRender.set(value);
    }
    public listRender = signal<ITask[] | null>(null);
}
