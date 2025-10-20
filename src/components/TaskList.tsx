import React, { useEffect, useState } from "react";
import { Table, Button, message } from "antd";
import { getAllTasks, deleteTask } from "../api/taskApi";
import { TaskModel } from "../types";

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<TaskModel[]>([]);

  const fetchTasks = async () => {
    try {
      const res = await getAllTasks();
      setTasks(res.data);
    } catch (err) {
      message.error("Failed to fetch tasks");
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteTask(id);
      message.success("Task deleted");
      fetchTasks();
    } catch (err) {
      message.error("Failed to delete task");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <Table dataSource={tasks} rowKey="_id">
      <Table.Column title="Name" dataIndex="name" key="name" />
      <Table.Column title="Owner" dataIndex="owner" key="owner" />
      <Table.Column
        title="Action"
        key="action"
        render={(text, record: any) => (
          <Button danger onClick={() => handleDelete(record.id)}>Delete</Button>
        )}
      />
    </Table>
  );
};

export default TaskList;
