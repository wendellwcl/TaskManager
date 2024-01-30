import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

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

    public handleCreateTask() {
        this.#router.navigate(['/create-task']);
    }
}
