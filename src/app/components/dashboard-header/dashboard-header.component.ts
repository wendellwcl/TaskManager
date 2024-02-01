import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

//Services
import { TasksListService } from '@services/tasksList/tasks-list.service';

@Component({
    selector: 'app-dashboard-header',
    standalone: true,
    imports: [MatIconModule],
    templateUrl: './dashboard-header.component.html',
    styleUrl: './dashboard-header.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardHeaderComponent {
    #router = inject(Router);
    #tasksListService = inject(TasksListService);

    public handleCreateTask() {
        this.#router.navigate(['/create-task']);
    }

    public searchTasks($event: any) {
        this.#tasksListService.searchTasks($event.target.value);
    }
}
