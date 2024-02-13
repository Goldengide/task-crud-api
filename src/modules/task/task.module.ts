import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskResolver } from './task.resolver';
//import { Task, TaskSchema } from './task.schema';
import { Task, TaskSchema} from './entities/task.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Task.name, schema: TaskSchema}
    ])
  ],
  providers: [TaskResolver, TaskService]
})
export class TaskModule {}
