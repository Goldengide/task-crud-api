import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TaskService } from './task.service';
import { Task } from './entities/task.entity';
//import { Task } from './task.schema';
import { CreateTaskInput } from './dto/create-task.input';
import { UpdateTaskInput } from './dto/update-task.input';

@Resolver(() => Task)
export class TaskResolver {
  constructor(private readonly taskService: TaskService) {}

  @Mutation(() => Task)
  createTask(@Args('createTaskInput') createTaskInput: CreateTaskInput) {
    return this.taskService.create(createTaskInput);
  }

  @Query(() => [Task], { name: 'tasks' })
  findAll() {
    console.log ("Hui");
    return this.taskService.findAll();
  }

  @Query(() => Task, { name: 'task' })
  findOne(@Args('_id', { type: () => String }) id: string) {
    return this.taskService.findOne(id);
  }

  @Mutation(() => Task)
  updateTask(@Args('updateTaskInput') updateTaskInput: UpdateTaskInput) {
    return this.taskService.update(updateTaskInput._id, updateTaskInput);
  }

  
  

  @Mutation(() => Task)
  removeTask(@Args('_id', { type: () => String }) id: string) {
    return this.taskService.remove(id);
  }
  
}
