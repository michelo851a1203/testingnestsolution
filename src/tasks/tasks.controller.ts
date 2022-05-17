import { Controller, Get, Inject, Post } from '@nestjs/common';
import { CreateTaskDTO, GetTaskByIdDTO } from './dto/task.dto';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(
    @Inject(TasksService)
    private tasksService: TasksService,
  ) {}
  @Get()
  findTaskHandler() {
    return this.tasksService.getTasksListService();
  }

  @Get()
  findTaskByIdHandler(getTaskByIdDTO: GetTaskByIdDTO) {
    return this.tasksService.getTaskByIdService(getTaskByIdDTO);
  }

  @Post()
  createTaskHandler(createTaskDTO: CreateTaskDTO) {
    return this.tasksService.createTaskService(createTaskDTO);
  }
}
