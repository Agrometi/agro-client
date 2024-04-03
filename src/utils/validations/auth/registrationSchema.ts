import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  isValidPassword,
  confirmPasswordValidation,
} from "@/utils/validations/helpers/customValidators";

const RegistrationSchema = z
  .object({
    email: z.string().email().trim(),
    password: z.string().trim().min(8).refine(isValidPassword.validator, {
      message: isValidPassword.message,
    }),
    confirm_password: z.string().trim(),
  })
  .refine(
    (data) =>
      confirmPasswordValidation.validator(data.password, data.confirm_password),
    {
      message: confirmPasswordValidation.message,
      path: ["confirm_password"],
    }
  );

export type RegistrationFormT = z.infer<typeof RegistrationSchema>;

const useRegistrationForm = () =>
  useForm<RegistrationFormT>({
    resolver: zodResolver(RegistrationSchema),
    defaultValues: {
      email: "",
      password: "",
      confirm_password: "",
    },
  });

export default useRegistrationForm;
