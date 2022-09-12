import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Register from"./Components/Register";
import Dashboard from "./Components/Dashboard";
import MemberAdd from "./Components/MemberAdd";
import MemberDetail from "./Components/MemberDetail";
import Members from "./Components/Members";
import TaskAdd from "./Components/TaskAdd";
import TaskDetail from "./Components/TaskDetail";
import Tasks from "./Components/Tasks";
import NotFound from "./Components/NotFound";
import PrivateRoutes from "./PrivateRoutes";

export default function () {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<PrivateRoutes> <Dashboard /> </PrivateRoutes>} />
      <Route path="/tasks" element={<PrivateRoutes><Tasks /></PrivateRoutes>} />
      <Route path="/task-add" element={<PrivateRoutes><TaskAdd /></PrivateRoutes>} />
      <Route path="/task-detail-:id" element={<PrivateRoutes><TaskDetail /></PrivateRoutes>} />
      <Route path="/members" element={<PrivateRoutes><Members /></PrivateRoutes>} />
      <Route path="/member-add" element={<PrivateRoutes><MemberAdd /></PrivateRoutes>} />
      <Route path="/member-detail-:id" element={<PrivateRoutes><MemberDetail /></PrivateRoutes>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
