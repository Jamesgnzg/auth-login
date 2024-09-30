import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { INDEX } from "../routes/paths";

const TopBar = () => {
  const userFullName = localStorage.getItem("fullName") || "";
  const userPosition = localStorage.getItem("position") || "";
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.clear();
    navigate(INDEX);
  };

  return (
    <>
      <nav className="border-b-2 bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-lg font-semibold whitespace-nowrap dark:text-white">
              {userFullName}
              <p className="text-center text-sm text-gray-400">
                {userPosition}
              </p>
            </span>
          </a>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <Button onClick={handleLogOut}>Log out</Button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default TopBar;
