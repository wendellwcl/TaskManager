import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskFormComponent } from '@components/task-form/task-form.component';
import { TaskListRenderComponent } from '@components/task-list-render/task-list-render.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, TaskFormComponent, TaskListRenderComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    title = 'TaskManager';
}
