import LoginForm from "../features/login/LoginForm";

const Login = () => {
  return (
    <>
      <div className="relative flex flex-col justify-center min-h-screen">
        <div className="relative mx-auto w-full max-w-md">
          <LoginForm />
        </div>
      </div>
    </>
  );
};

export default Login;
