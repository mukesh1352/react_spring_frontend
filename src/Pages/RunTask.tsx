import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { runTask } from "../api/taskApi";
import TaskExecution from "../components/TaskExecution";

const RunTask: React.FC = () => {
  const [execution, setExecution] = useState<any>(null);

  const onFinish = async (values: any) => {
    try {
      const res = await runTask(values.id, values.namespace, values.podName, values.containerName);
      setExecution(res.data);
    } catch {
      message.error("Failed to run task");
    }
  };

  return (
    <div>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item label="Task ID" name="id" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Namespace" name="namespace" rules={[{ required: true }]}>
          <Input defaultValue="default" />
        </Form.Item>
        <Form.Item label="Pod Name" name="podName" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Container Name" name="containerName" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Button type="primary" htmlType="submit">Run Task</Button>
      </Form>
      {execution && <TaskExecution execution={execution} />}
    </div>
  );
};

export default RunTask;
