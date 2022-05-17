import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TaskRepositoryService } from './task-repository/task-repository.service';

@Module({
  controllers: [TasksController],
  providers: [TasksService, TaskRepositoryService],
})
export class TasksModule {}
