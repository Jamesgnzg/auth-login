import UserForm from "../features/dashboard/UserForm";
import UserList from "../features/dashboard/UserList";

const Dashboard: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-5 min-h-screen">
        <div className="col-span-4 p-5">
          <UserForm />
        </div>
        <div className="col-span-8 mt-5 p-2">
          <UserList />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
