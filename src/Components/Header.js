import { useUserContext } from "../ContextStore";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const {name, logout} = useUserContext();
  const navigate = useNavigate();
  
  const handleTabClick = navigateTo => {
    navigate(navigateTo);
  } 

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
          <button className="header-logout" onClick={logout}>Logout</button>
        </div>
        <div>
          <button className="header-tab" onClick={() => handleTabClick('/dashboard')}>Home</button>
          <button className="header-tab" onClick={() => handleTabClick('/tasks')}>Tasks</button>
          <button className="header-tab" onClick={() => handleTabClick('/members')}>Members</button>
        </div>
      </div>
    </div>
  );
}
