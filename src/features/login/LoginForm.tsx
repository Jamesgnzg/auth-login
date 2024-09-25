import { useState } from "react";
import { Button } from "flowbite-react";
import Input from "../../components/Input";
import { users } from "../../data/users_data";
import { IUser } from "../../interface/UserInterface";
import { useNavigate } from "react-router-dom";
import { DASHBOARD } from "../../routes/paths";

interface ILoginForm {
  branchId: number;
  userName: string;
  passWord: string;
}

const LoginForm = (): React.ReactElement => {
  const [formData, setFormData] = useState<ILoginForm>({
    branchId: 0,
    userName: "",
    passWord: "",
  });
  const [hasError, setHasError] = useState(false);
  const navigate = useNavigate();
  const errorMessage = "Incorrect credentials. Please try again.";

  const setData = (field: string, fieldValue: string | number) => {
    setFormData({ ...formData, [field]: fieldValue });
  };

  const getUserDetails = (): IUser | undefined => {
    const userDetails = users.find(
      (user: IUser) =>
        user.branchId == formData.branchId &&
        user.userName == formData.userName &&
        user.password == formData.passWord
    );

    return userDetails;
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const userDetails = getUserDetails();

    if (userDetails) {
      localStorage.setItem("userDetails", JSON.stringify(userDetails));
      localStorage.setItem("position", userDetails.position);
      localStorage.setItem(
        "fullName",
        `${userDetails.firstName} ${userDetails.lastName}`
      );
      navigate(DASHBOARD);
    } else {
      setHasError(true);
    }
  };

  return (
    <>
      <div className="relative border-2 rounded-lg px-6 pt-10 pb-8">
        <div className="w-full">
          <div className="text-left mb-5">
            <p className="text-gray-500">Start your journey</p>
            <h1 className="mt-2 text-3xl font-semibold text-gray-900">
              Sign In
            </h1>
          </div>
          <div className="text-center text-red-500">
            {hasError ? errorMessage : ""}
          </div>
          <form className="mt-5" onSubmit={handleLogin}>
            <Input
              type="number"
              id="branchId"
              name="branchId"
              label="Branch ID"
              variant="outlined"
              color={hasError ? "error" : "default"}
              min={1}
              max={99999}
              autoFocus={true}
              updateField={setData}
            />
            <Input
              type="text"
              id="userName"
              name="userName"
              label="Username"
              variant="outlined"
              color={hasError ? "error" : "default"}
              maxLength={30}
              updateField={setData}
            />
            <Input
              type="password"
              id="passWord"
              name="passWord"
              label="Password"
              variant="outlined"
              color={hasError ? "error" : "default"}
              maxLength={30}
              updateField={setData}
            />
            <Button
              type="submit"
              className="mt-10 w-full rounded-md py-2 px-5 text-white"
            >
              Sign in
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
