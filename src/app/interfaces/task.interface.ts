//Enums
import { ETaskPriority } from '@enums/task-priority.enum';

export interface ITask {
    id: number;
    creationDate: string;
    title: string;
    subject?: string;
    description?: string;
    priority: ETaskPriority;
    deadlineDate?: string;
}
