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

    //Get values of TaskPriority Enum
    public taskPrioritiesValues = ETaskPriority;

    //Task properties
    @Input({ required: true }) id!: number;
    @Input({ required: true }) creationDate!: string;
    @Input({ required: true }) title!: string;
    @Input() subject?: string | null;
    @Input() description?: string | null;
    @Input({ required: true }) priority!: ETaskPriority;
    @Input() deadlineDate?: string | null;

    //Edit task
    public handleEditTask(id: number) {
        this.#router.navigate([`/edit-task/${id}`]);
    }

    //Delete task
    public handleDeleteTask(id: number) {
        this.#taskListService.deleteTask(id);
    }
}
