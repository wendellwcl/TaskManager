//Enums
import { ETaskPriority } from 'app/enums/task-priority';

export interface ITask {
    id: number;
    creationDate: string;
    title: string;
    subject?: string;
    description?: string;
    priority: ETaskPriority;
    deadlineDate?: string;
}
