import { Routes } from '@angular/router';

//Components
import { TaskFormComponent } from '@components/task-form/task-form.component';

export const routes: Routes = [
    {
        path: '',
        title: 'TaskManager',
        component: TaskFormComponent,
    },
    {
        path: 'edit/:id',
        title: 'Editar',
        component: TaskFormComponent,
    },
];
