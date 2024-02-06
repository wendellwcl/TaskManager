//Enums
import { ETaskPriority } from '@enums/task-priority.enum';
import { ETaskStatus } from '@enums/task-status.enum';

export interface ITask {
    id: number;
    creationDate: string;
    title: string;
    subject: string | null;
    description: string | null;
    priority: ETaskPriority;
    deadlineDate: string | null;
    status: ETaskStatus;
}
