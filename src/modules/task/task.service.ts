import { Injectable } from '@nestjs/common';
import { CreateTaskInput } from './dto/create-task.input';
import { UpdateTaskInput } from './dto/update-task.input';
import { Model } from 'mongoose';
//import { Task } from './task.schema';
import { Task } from './entities/task.entity';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TaskService {
  constructor(
    @InjectModel(Task.name)
    private readonly taskModel: Model<Task>,
  ) {}

  create(createTaskInput: CreateTaskInput) {
    try{
      const task = new this.taskModel(createTaskInput);
      return task.save();
    }
    catch (error) {
      return new Error(error.message)
    }
  }

  async findAll() {
    try{
      const task = await this.taskModel.find();

      if (!task) {
        return "Task not found"
      }
      return task;
    }
    catch (error) {
      return new Error(error.message)
    }
  }

  async findOne(id: string) {
    try{
      const task = await this.taskModel.findOne({ _id: id }).exec();
    if (!task) {
      return "Task not found"
    }
    return task;
    }
    catch (error) {
      return new Error(error.message)
    }
  }

  async update(id: string, updateTaskInput: UpdateTaskInput): Promise<Task> {
    // Find the task by ID
    const existingTask = await this.taskModel.findById(id).exec();
    
    // If the task does not exist, throw an error
    if (!existingTask) {
      throw new Error(`Task with ID ${id} not found`);
    }
    
    // Update the task properties based on updateTaskInput
    if (updateTaskInput.title !== undefined) {
      existingTask.title = updateTaskInput.title;
    }
    if (updateTaskInput.description !== undefined) {
      existingTask.description = updateTaskInput.description;
    }
    
    // Save the updated task in the database
    return existingTask.save();
  }

  async remove(id: string): Promise<Task> {
    // Find the task by ID
    const existingTask = await this.taskModel.findById(id).exec();
    
    // If the task does not exist, throw an error
    if (!existingTask) {
      throw new Error(`Task with ID ${id} not found`);
    }
    
    // Remove the task from the database
    return existingTask.remove();
  }
}
