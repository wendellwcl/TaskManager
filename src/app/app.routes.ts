import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
    },
    {
        path: 'dashboard',
        title: 'TaskManager',
        loadComponent: () =>
            import('@pages/dashboard/dashboard.component').then(
                (m) => m.DashboardComponent
            ),
    },
    {
        path: 'create-task',
        title: 'Criar tarefa',
        loadComponent: () =>
            import('@pages/create-task/create-task.component').then(
                (m) => m.CreateTaskComponent
            ),
    },
    {
        path: 'edit/:id',
        title: 'Editar',
        loadComponent: () =>
            import('@pages/edit-task/edit-task.component').then(
                (m) => m.EditTaskComponent
            ),
    },
    {
        path: 'deadline',
        title: 'Vencimentos',
        loadComponent: () =>
            import('@pages/deadline/deadline.component').then(
                (m) => m.DeadlineComponent
            ),
    },
    {
        path: 'historic',
        title: 'Histórico',
        loadComponent: () =>
            import('@pages/historic/historic.component').then(
                (m) => m.HistoricComponent
            ),
    },
];
