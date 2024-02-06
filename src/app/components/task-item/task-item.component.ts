import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    Input,
    inject,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';

//Enums
import { ETaskPriority } from '@enums/task-priority.enum';
import { ETaskStatus } from '@enums/task-status.enum';

//Interfaces
import { ITask } from '@interfaces/task.interface';

//Services
import { TasksListService } from '@services/tasksList/tasks-list.service';

@Component({
    selector: 'app-task-item',
    standalone: true,
    imports: [CommonModule, RouterLink, MatIconModule],
    templateUrl: './task-item.component.html',
    styleUrl: './task-item.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskItemComponent {
    #router = inject(Router);
    #taskListService = inject(TasksListService);

    //Get values of Enum
    public taskPrioritiesValues = ETaskPriority;
    public taskStatusValues = ETaskStatus;

    //Task
    @Input({ required: true }) task!: ITask;

    //Edit task
    public handleEditTask(id: number) {
        this.#router.navigate([`/edit-task/${id}`]);
    }

    //Handle the action of completing or deleting a task
    public handleCompleteOrDeleteTask(
        id: number,
        action: 'complete' | 'delete'
    ) {
        this.#taskListService.completeOrDeleteTask(id, action);
    }

    public handleRestore(id: number) {
        this.#taskListService.restoreTask(id);
    }
}
