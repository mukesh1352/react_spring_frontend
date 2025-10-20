import React, { useState } from "react";
import { Input, Button, Table, message } from "antd";
import { getAllTasks } from "../api/taskApi";

const TaskSearch: React.FC = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);

  const handleSearch = async () => {
    try {
      const res = await getAllTasks(); // filter on frontend for demo
      const filtered = res.data.filter((task: any) =>
        task.name.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    } catch {
      message.error("Search failed");
    }
  };

  return (
    <div>
      <Input placeholder="Search by name" value={query} onChange={e => setQuery(e.target.value)} style={{ width: 200, marginRight: 10 }} />
      <Button onClick={handleSearch}>Search</Button>
      <Table dataSource={results} rowKey="_id" style={{ marginTop: 20 }}>
        <Table.Column title="Name" dataIndex="name" key="name" />
        <Table.Column title="Owner" dataIndex="owner" key="owner" />
      </Table>
    </div>
  );
};

export default TaskSearch;
