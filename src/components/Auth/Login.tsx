import { Link } from "react-router-dom";
import { Controller } from "react-hook-form";

import { PATHS } from "@/config/paths";
import { useSignInQuery } from "@/hooks/api/auth";

import AuthLayout from "./components/AuthLayout";
import * as Form from "@/components/Layouts/Form";
import SubmitButton from "./components/SubmitButton";
import { ErrorMessage, StandSpinner } from "@/components/Layouts";

const Login: React.FC = () => {
  const { form, onAuth, status } = useSignInQuery();

  return (
    <AuthLayout onSubmit={onAuth}>
      <Controller
        control={form.control}
        name="email"
        render={({ field, fieldState: { error } }) => (
          <Form.TextField
            fieldProps={field}
            label="ელ. ფოსტა"
            hasError={error ? true : false}
            message={error?.message || ""}
          />
        )}
      />

      <Controller
        control={form.control}
        name="password"
        render={({ field, fieldState: { error } }) => (
          <Form.TextFieldPassword
            fieldProps={field}
            label="პაროლი"
            hasError={error ? true : false}
            message={error?.message || ""}
          />
        )}
      />

      {status.error && <ErrorMessage message={status.message} />}

      <SubmitButton />

      <Link
        to={PATHS.root_page}
        style={{
          color: "royalblue",
          textAlign: "center",
          textDecoration: "underline",
        }}
      >
        აპზე გადასვლა
      </Link>

      {status.loading && <StandSpinner />}
    </AuthLayout>
  );
};

export default Login;
