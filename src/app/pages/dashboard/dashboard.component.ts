import { ChangeDetectionStrategy, Component } from '@angular/core';

//Components
import { DashboardHeaderComponent } from '@components/dashboard-header/dashboard-header.component';
import { TaskListRenderComponent } from '@components/task-list-render/task-list-render.component';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [DashboardHeaderComponent, TaskListRenderComponent],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {}
