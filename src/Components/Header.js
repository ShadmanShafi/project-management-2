import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../Redux/User/actions";
import clearMembers from "../Redux/Members/thunk/clearMembers";
import { taskLogout } from "../Redux/Tasks/actions";

export default function Header() {
  const name = useSelector((state) => state.user.name);
  const membersList = useSelector((state) => state.members)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleTabClick = (navigateTo) => {
    navigate(navigateTo);
  };

  const handleLogoutClick = () => {
    dispatch(logout());
    dispatch(clearMembers(membersList));
    dispatch(taskLogout());
    navigate("/");
  };

  return (
    <div className="header">
      <div className="header-row">
        <img
          src={process.env.PUBLIC_URL + "logo.png"}
          className="header-icon"
          alt="logo"
        />
        <h2 className="header-title">Task management</h2>
      </div>
      <div className="header-right">
        <div className="header-row">
          <p className="header-username">Hello {name}</p>
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
