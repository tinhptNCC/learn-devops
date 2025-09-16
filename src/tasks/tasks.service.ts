import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private tasks: string[] = [];

  getAllTasks(): string[] {
    return this.tasks;
  }

  addTask(task: string): string[] {
    this.tasks.push(task);
    return this.tasks;
  }
}
