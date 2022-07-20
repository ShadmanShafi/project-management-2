import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Home from "./Components/Home";
import MemberAdd from "./Components/MemberAdd";
import MemberDetail from "./Components/MemberDetail";
import Members from "./Components/Members";
import TaskAdd from "./Components/TaskAdd";
import TaskDetail from "./Components/TaskDetail";
import Tasks from "./Components/Tasks";

export default function () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />\
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/task-add" element={<TaskAdd />} />
        <Route path="/task/:id" element={<TaskDetail />} />
        <Route path="/members" element={<Members />} />
        <Route path="/member-add" element={<MemberAdd />} />
        <Route path="/member/:id" element={<MemberDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
