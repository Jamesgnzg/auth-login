import { useState } from "react";
import { IUser } from "../../interface/UserInterface";
import Input from "../../components/Input";
import { Button } from "flowbite-react";

interface IUserFormProps {
  userList: IUser[];
  updateUserList: (newUser: IUser) => void;
}

interface IFormErrors {
  branchIdError: string;
  userNameError: string;
  passwordError: string;
  firstNameError: string;
  middleNameError: string;
  lastNameError: string;
  positionError: string;
}

const UserForm = ({
  userList,
  updateUserList,
}: IUserFormProps): React.ReactElement => {
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

  const saveUser = (e: React.SyntheticEvent) => {
    //validate user form
    e.preventDefault();
    updateUserList(userForm);
    console.log(userList);
    clearUserForm();
  };

  const clearUserForm = () => {
    setUserForm({
      branchId: 0,
      userName: "",
      password: "",
      firstName: "",
      middleName: "",
      lastName: "",
      position: "",
    });
  };

  return (
    <>
      <div className="mb-8 text-xl">User Form</div>
      <form onSubmit={saveUser}>
        <Input
          type="number"
          id="branchId"
          name="branchId"
          label="Branch ID"
          variant="outlined"
          value={userForm.branchId}
          color={formErrors.branchIdError ? "error" : "default"}
          min={10000}
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
          value={userForm.firstName}
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
          value={userForm.middleName}
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
          value={userForm.lastName}
          color={formErrors.lastNameError ? "error" : "default"}
          maxLength={30}
          updateField={setData}
        />
        <Input
          type="text"
          id="position"
          name="position"
          label="Position"
          variant="outlined"
          value={userForm.position}
          color={formErrors.positionError ? "error" : "default"}
          maxLength={30}
          updateField={setData}
        />
        <Input
          type="text"
          id="userName"
          name="userName"
          label="User Name"
          variant="outlined"
          value={userForm.userName}
          color={formErrors.userNameError ? "error" : "default"}
          maxLength={30}
          updateField={setData}
        />
        <Input
          type="password"
          id="password"
          name="password"
          label="Password"
          variant="outlined"
          value={userForm.password}
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
