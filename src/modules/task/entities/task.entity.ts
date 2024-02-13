import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
@ObjectType()
export class Task {

  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Prop()
  @Field(() => String, { description: 'Task Title' })
  title: string;

  @Prop()
  @Field(() => String, { description: 'Task Description' })
  description: string;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
