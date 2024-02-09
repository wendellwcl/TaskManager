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
    #tasksList = inject(TasksListService);

    //Access page create task
    public handleCreateTask() {
        this.#router.navigate(['/create-task']);
    }

    //Handle task search
    public searchTasks($event: KeyboardEvent) {
        const target = $event.target as HTMLInputElement;
        const query = target.value;
        this.#tasksList.getTasksBySearch(query);
    }
}
