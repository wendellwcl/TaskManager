import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-create-task',
  standalone: true,
  imports: [],
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateTaskComponent {

}
