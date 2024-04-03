import { lazy } from "react";

import { useRedirectAuthorized } from "@/hooks/auth";
import { SuspenseContainer } from "@/components/Layouts";

const Login = lazy(() => import("@/components/Auth/Login"));

const AuthPage: React.FC = () => {
  const { loading } = useRedirectAuthorized();

  return loading ? (
    <></>
  ) : (
    <SuspenseContainer>
      <Login />
    </SuspenseContainer>
  );
};

export default AuthPage;
