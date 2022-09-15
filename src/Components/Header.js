import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import deleteMember from "../Redux/Members/thunk/deleteMember";
// import deleteTask from "../Redux/Tasks/thunk/deleteTask";
// import { logout } from "../Redux/User/actions";
// import { memberLogout } from "../Redux/Members/actions";
// import { taskLogout } from "../Redux/Tasks/actions";

export default function Header() {
  const name = useSelector((state) => state.user.name);
  // const membersList = useSelector((state) => state.members.members);
  // const tasksList = useSelector((state) => state.tasks.tasks);
  // const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleTabClick = (navigateTo) => {
    navigate(navigateTo);
  };

  const handleLogoutClick = () => {
    // dispatch(logout());
    // dispatch(memberLogout());
    // dispatch(taskLogout());
    // membersList.map((member) => dispatch(deleteMember(member.id)));
    // tasksList.map((task) => dispatch(deleteTask(task.id)));
    navigate("/");
  };

  return (
    <div className="header">
      <div className="header-row">
        <img
          src={process.env.PUBLIC_URL + "logo.png"}
          className="header-icon"
          alt="logo"
          onClick={() => handleTabClick("/dashboard")}
        />
        <h2 className="header-title" onClick={() => handleTabClick("/dashboard")}>Task Management</h2>
      </div>
      <div className="header-right">
        <div className="header-row">
          <p className="header-username">Welcome {name}</p>
          <button className="header-logout" onClick={handleLogoutClick}>
            Logout
          </button>
        </div>
        <div>
          <button
            className="header-tab"
            onClick={() => handleTabClick("/dashboard")}
          >
            Home
          </button>
          <button
            className="header-tab"
            onClick={() => handleTabClick("/tasks")}
          >
            Tasks
          </button>
          <button
            className="header-tab"
            onClick={() => handleTabClick("/members")}
          >
            Members
          </button>
        </div>
      </div>
    </div>
  );
}
