import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import fetchMembers from "../Redux/Members/thunk/fetchMembers";

export default function Dashboard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMembers);
  }, [fetchMembers]);

  const handleButtonClick = (navigateTo) => {
    navigate(navigateTo);
  };

  return (
    <div className="dashboard">
      <div>
        <p className="dashboard-bold-text">Welcome to task management system</p>
        <br />
        <p className="dashboard-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <br />
        <br />
        <br />
        <br />
        <p className="dashboard-bold-text">Get started</p>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <div className="dashboard-buttons-flex">
        <button
          className="dashboard-buttons"
          onClick={() => handleButtonClick("/tasks")}
        >
          Tasks
        </button>
        <button
          className="dashboard-buttons"
          onClick={() => handleButtonClick("/members")}
        >
          Members
        </button>
      </div>
    </div>
  );
}
