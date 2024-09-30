import { useState } from "react";
import { IUser } from "../../interface/UserInterface";
import Input from "../../components/Input";
import { Button } from "flowbite-react";

interface IFormErrors {
  branchIdError: string;
  userNameError: string;
  passwordError: string;
  firstNameError: string;
  middleNameError: string;
  lastNameError: string;
  positionError: string;
}

const UserForm = () => {
  const [userForm, setUserForm] = useState<IUser>({
    branchId: 0,
    userName: "",
    password: "",
    firstName: "",
    middleName: "",
    lastName: "",
    position: "",
  });

  const [formErrors, setFormErrors] = useState<IFormErrors>({
    branchIdError: "",
    userNameError: "",
    passwordError: "",
    firstNameError: "",
    middleNameError: "",
    lastNameError: "",
    positionError: "",
  });

  const setData = (field: string, fieldValue: string | number) => {
    setUserForm({ ...userForm, [field]: fieldValue });
  };

  return (
    <>
      <div className="mb-8 text-xl">User Form</div>
      <form>
        <Input
          type="number"
          id="branchId"
          name="branchId"
          label="Branch ID"
          variant="outlined"
          color={formErrors.branchIdError ? "error" : "default"}
          min={1}
          max={99999}
          autoFocus={true}
          updateField={setData}
        />
        <Input
          type="text"
          id="firstName"
          name="firstName"
          label="First Name"
          variant="outlined"
          color={formErrors.firstNameError ? "error" : "default"}
          maxLength={30}
          updateField={setData}
        />
        <Input
          type="text"
          id="middleName"
          name="middleName"
          label="Middle Name"
          variant="outlined"
          color={formErrors.middleNameError ? "error" : "default"}
          maxLength={30}
          updateField={setData}
        />
        <Input
          type="text"
          id="lastName"
          name="lastName"
          label="Last Name"
          variant="outlined"
          color={formErrors.lastNameError ? "error" : "default"}
          maxLength={30}
          updateField={setData}
        />
        <Input
          type="text"
          id="userName"
          name="userNameame"
          label="User Name"
          variant="outlined"
          color={formErrors.userNameError ? "error" : "default"}
          maxLength={30}
          updateField={setData}
        />
        <Input
          type="password"
          id="passWord"
          name="passWord"
          label="Password"
          variant="outlined"
          color={formErrors.passwordError ? "error" : "default"}
          maxLength={30}
          updateField={setData}
        />
        <Button
          type="submit"
          className="mt-10 w-full rounded-md py-2 px-5 text-white"
        >
          Add User
        </Button>
      </form>
    </>
  );
};

export default UserForm;
