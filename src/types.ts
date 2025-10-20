export interface TaskExecutionModel {
  startTime: string;
  endTime: string;
  output: string;
}

export interface TaskModel {
  id?: string;
  name: string;
  owner: string;
  command: string;
  taskExecutions?: TaskExecutionModel[];
}
