import AppTable from "../../components/Tables";
import { IUser } from "../../interface/UserInterface";

interface IUserListProps {
  users: IUser[];
}

const UserList = ({ users }: IUserListProps) => {
  const tableHeaders = ["Branch ID", "Username", "Complete Name", "Position"];
  const userList = users.map((user) => {
    const updatedUser = {
      branchId: user.branchId,
      userName: user.userName,
      completeName: `${user.firstName} ${user.middleName} ${user.lastName}`,
      position: user.position,
    };

    return updatedUser;
  });

  return (
    <>
      <AppTable headers={tableHeaders} data={userList} />
    </>
  );
};

export default UserList;
