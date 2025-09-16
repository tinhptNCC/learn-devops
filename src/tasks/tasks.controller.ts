import { Controller, Get, Post, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getAllTasks(): string[] {
    return this.tasksService.getAllTasks();
  }

  @Get('/test')
  getTest(): string {
    return 'This is a test endpoint';
  }

  @Post()
  addTask(@Body('task') task: string): string[] {
    return this.tasksService.addTask(task);
  }
}
