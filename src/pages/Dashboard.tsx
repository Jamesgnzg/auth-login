import UserForm from "../features/dashboard/UserForm";
import UserList from "../features/dashboard/UserList";
import { users } from "../data/users_data";
import { ReactElement, useState } from "react";
import { IUser } from "../interface/UserInterface";

const Dashboard: React.FC = (): ReactElement => {
  const [usersList, setUsersList] = useState<IUser[]>(users);

  const addNewUser = (newUser: IUser) => {
    setUsersList([...usersList, newUser]);
  };

  return (
    <>
      <div className="grid grid-cols-12 gap-5 min-h-screen">
        <div className="col-span-4 p-5">
          <UserForm userList={usersList} updateUserList={addNewUser} />
        </div>
        <div className="col-span-8 mt-5 p-2">
          <UserList users={usersList} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
