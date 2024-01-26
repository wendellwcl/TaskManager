import { ChangeDetectionStrategy, Component } from '@angular/core';

//Components
import { TaskListRenderComponent } from '@components/task-list-render/task-list-render.component';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [TaskListRenderComponent],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent {}
