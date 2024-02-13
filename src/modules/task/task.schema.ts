import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Schema as MongooseSchema } from 'mongoose';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Document } from 'mongoose'

@Schema()
@ObjectType()
export class Task {
  @Field(() => String)
  _id: string;

  @Prop()
  @Field(() => String, { description: 'Task Title' })
  title: string;

  @Prop()
  @Field(() => String, { description: 'Task Description' })
  description: string;
}

export type TaskDocument = Task & Document;

export const TaskSchema = SchemaFactory.createForClass(Task);