import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTaskDTO {
  @IsNotEmpty()
  @IsString()
  name: string;
}

export class GetTaskByIdDTO {
  @IsNotEmpty()
  @IsString()
  id: string;
}
