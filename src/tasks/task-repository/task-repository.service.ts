import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tasks } from './task.entity';

@Injectable()
export class TaskRepositoryService {
  constructor(
    @InjectRepository(Tasks)
    private tasksRepository: Repository<Tasks>,
  ) {}

  async createTasks(name: string) {
    const taskEntity = this.tasksRepository.create({
      name,
    });
    return this.tasksRepository.save(taskEntity);
  }

  async findTasksList() {
    return this.tasksRepository.find();
  }

  async findTaskById(id: string) {
    try {
      const taskEntity = await this.tasksRepository.findOne({
        where: {
          id,
        },
      });
      if (!taskEntity) {
        throw new NotFoundException('not found');
      }

      return taskEntity;
    } catch (err) {
      throw err;
    }
  }
}
