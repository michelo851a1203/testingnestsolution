import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RouterModule, Routes } from 'nest-router';
import { TasksModule } from './tasks/tasks.module';

const routes: Routes = [
  {
    path: '/api/v1',
    module: TasksModule,
  },
];

@Module({
  imports: [
    RouterModule.forRoutes(routes),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3100,
      username: 'root',
      password: 'secret',
      database: 'testdb',
      autoLoadEntities: true,
      synchronize: true,
    }),
    ,
    TasksModule,
  ],
})
export class AppModule {}
