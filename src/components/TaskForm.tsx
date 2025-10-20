import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { createTask, updateTask } from "../api/taskApi";
import { TaskModel } from "../types";

interface Props {
  task?: TaskModel;
  onSuccess: () => void;
}

const TaskForm: React.FC<Props> = ({ task, onSuccess }) => {
  const [form] = Form.useForm();

  const onFinish = async (values: any) => {
    try {
      if (task?.id) {
        await updateTask({ ...values, id: task.id });
        message.success("Task updated");
      } else {
        await createTask(values);
        message.success("Task created");
      }
      onSuccess();
      form.resetFields();
    } catch (err) {
      message.error("Failed to save task");
    }
  };

  return (
    <Form form={form} layout="vertical" initialValues={task} onFinish={onFinish}>
      <Form.Item label="Name" name="name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Owner" name="owner" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item label="Command" name="command" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Button type="primary" htmlType="submit">
        {task ? "Update" : "Create"} Task
      </Button>
    </Form>
  );
};

export default TaskForm;
