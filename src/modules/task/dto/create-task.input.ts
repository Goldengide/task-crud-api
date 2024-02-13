import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTaskInput {
  @Field(() => String, { description: 'Task Title' })
  title: string;

  @Field(() => String, { description: 'Task Description' })
  description: string;
}
