import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
    },
    {
        path: 'dashboard',
        title: 'Dashboard | Task Manager',
        loadComponent: () =>
            import('@pages/dashboard/dashboard.component').then(
                (m) => m.DashboardComponent
            ),
    },
    {
        path: 'create-task',
        title: 'Criar tarefa | Task Manager',
        loadComponent: () =>
            import('@components/task-form/task-form.component').then(
                (m) => m.TaskFormComponent
            ),
    },
    {
        path: 'edit-task/:id',
        title: 'Editar tarefa | Task Manager',
        loadComponent: () =>
            import('@components/task-form/task-form.component').then(
                (m) => m.TaskFormComponent
            ),
    },
    {
        path: 'deadline',
        title: 'Vencimentos | Task Manager',
        loadComponent: () =>
            import('@pages/deadline/deadline.component').then(
                (m) => m.DeadlineComponent
            ),
    },
    {
        path: 'historic',
        title: 'Histórico | Task Manager',
        loadComponent: () =>
            import('@pages/historic/historic.component').then(
                (m) => m.HistoricComponent
            ),
    },
];
