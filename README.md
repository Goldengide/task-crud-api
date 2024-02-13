# task-crud-api


## This is a simple crud app for task management

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start


# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e


```
## Setting up

### Download Mongo Compass on your localhost or connect remotely
Please refer to the MongoDB documentation for comprehensive usage and reference: [Click here](https://docs.mongodb.com/).
Make sure to do your configuration in src/app.module.ts


## Interacting with the GraphQl Interface

### Query Commands

### Query all

```bash
query {
  tasks {
    _id
    title
    description
  }
}
```

### Query with id

```bash
query {
  task(_id: "your-task-id") {
    _id
    title
    description
  }
}
```


### create Mutation

```bash
mutation {
  createTask(createTaskInput: {title: "GOod morning", description: "A little chores"}) {
    _id
    title
    description
  }
}
```


### Update mutation with id

```bash
mutation {
  updateTask(updateTaskInput: {
    _id: "your-task-id",
    title: "Updated Title",
    description: "Updated Description",
  }) {
    _id
    title
    description
  }
}
```

### Delete mutation with id

```bash
mutation {
  removeTask(_id: "your-task-id") {
    _id
    title
    description
  }
}
```

