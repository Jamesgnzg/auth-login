import { Navigate } from "react-router-dom";
import { INDEX } from "./paths";

interface IPrivateRoutesProps {
  Component: React.ReactElement;
}

const PrivateRoutes = ({ Component }: IPrivateRoutesProps) => {
  const hasUserDetails = localStorage.getItem("userDetails");

  return <>{hasUserDetails ? Component : <Navigate to={INDEX} />}</>;
};

export default PrivateRoutes;
