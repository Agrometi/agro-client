import { useEffect } from "react";

import { authStore } from "@/store";
import { useAuthForm } from "@/utils/validations/auth/authSchema";

export default function useSignInQuery() {
  const form = useAuthForm();

  const login = authStore.use.login();
  const status = authStore.use.status();
  const cleanUpStatus = authStore.use.cleanUpStatus();

  const onAuth = form.handleSubmit(async (values) => {
    await login({ email: values.email, password: values.password });
    form.reset();
  });

  useEffect(() => {
    return () => {
      cleanUpStatus();
    };
  }, []);

  return { form, onAuth, status };
}
