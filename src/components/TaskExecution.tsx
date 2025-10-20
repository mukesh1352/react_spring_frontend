import React from "react";
import { Card } from "antd";
import { TaskExecutionModel } from "../types";

interface Props {
  execution: TaskExecutionModel;
}

const TaskExecution: React.FC<Props> = ({ execution }) => {
  return (
    <Card style={{ marginTop: 10 }}>
      <p><b>Start:</b> {execution.startTime}</p>
      <p><b>End:</b> {execution.endTime}</p>
      <pre>{execution.output}</pre>
    </Card>
  );
};

export default TaskExecution;
