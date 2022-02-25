import { useSelector } from "react-redux";
import { useState } from "react";

const UserDetails = () => {
  const userList = useSelector((state) => state);
  const [userRole, setUserRole] = useState();

  return (
    <>
      <div className="userDetails">
        {userList.map((user, index) => {
          const { userName, role } = user;
          return (
            <div
              key={`${userName}_${index + 1}`}
              className="card"
              onClick={() => setUserRole(role)}
            >
              {userName}
            </div>
          );
        })}
      </div>
      <div>{userRole && userRole}</div>
    </>
  );
};

export default UserDetails;
