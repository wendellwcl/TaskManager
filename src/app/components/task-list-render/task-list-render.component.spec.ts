import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListRenderComponent } from './task-list-render.component';

describe('TaskListRenderComponent', () => {
  let component: TaskListRenderComponent;
  let fixture: ComponentFixture<TaskListRenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskListRenderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskListRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
