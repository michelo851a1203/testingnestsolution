import { Inject, Injectable } from '@nestjs/common';
import { CreateTaskDTO, GetTaskByIdDTO } from './dto/task.dto';
import { TaskRepositoryService } from './task-repository/task-repository.service';

@Injectable()
export class TasksService {
  constructor(
    @Inject(TaskRepositoryService)
    private taskRepositoryService: TaskRepositoryService,
  ) {}

  async createTaskService(createTaskDTO: CreateTaskDTO) {
    const { name } = createTaskDTO;
    try {
      return this.taskRepositoryService.createTasks(name);
    } catch (error) {
      throw error;
    }
  }

  async getTasksListService() {
    try {
      return this.taskRepositoryService.findTasksList();
    } catch (error) {
      throw error;
    }
  }

  async getTaskByIdService(getTaskByIdDTO: GetTaskByIdDTO) {
    const { id } = getTaskByIdDTO;
    try {
      return this.taskRepositoryService.findTaskById(id);
    } catch (error) {
      throw error;
    }
  }
}
