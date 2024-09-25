import { Button } from "flowbite-react";

const TopBar = () => {
  const userFullName = localStorage.getItem("fullName") || "";
  const userPosition = localStorage.getItem("position") || "";

  return (
    <>
      <nav className="border-b-2 bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              {userFullName}
              <p className="text-center text-sm text-gray-400">
                {userPosition}
              </p>
            </span>
          </a>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <Button>Log out</Button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default TopBar;
