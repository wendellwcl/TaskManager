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
        path: 'history',
        title: 'Histórico | Task Manager',
        loadComponent: () =>
            import('@pages/history/history.component').then(
                (m) => m.HistoryComponent
            ),
    },
    {
        path: 'about',
        title: 'Sobre | Task Manager',
        loadComponent: () =>
            import('@pages/about/about.component').then(
                (m) => m.AboutComponent
            ),
    },
    {
        path: '**',
        title: '404 | Task Manager',
        loadComponent: () =>
            import('@pages/not-found/not-found.component').then(
                (m) => m.NotFoundComponent
            ),
    },
];
