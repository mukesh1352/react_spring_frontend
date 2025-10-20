import React from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import TaskSearch from "../components/TaskSearch";

const Dashboard: React.FC = () => {
  return (
    <div>
      <h2>Create / Update Task</h2>
      <TaskForm onSuccess={() => window.location.reload()} />
      <h2 style={{ marginTop: 30 }}>Search Tasks</h2>
      <TaskSearch />
      <h2 style={{ marginTop: 30 }}>All Tasks</h2>
      <TaskList />
    </div>
  );
};

export default Dashboard;
