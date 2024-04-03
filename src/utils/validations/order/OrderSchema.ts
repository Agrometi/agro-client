import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { isNumeric } from "@/utils/validations/helpers/customValidators";

const OrderSchema = z.object({
  fullname: z.string().min(5).max(50),
  address: z.string().min(5).max(100),
  phone_number: z
    .string()
    .max(9, "გთხოვთ შეიყვანოთ ვაიდური ტელ. ნომერი")
    .min(9, "გთხოვთ შეიყვანოთ ვაიდური ტელ. ნომერი")
    .startsWith("5")
    .refine(isNumeric.validator, "გთხოვთ შეიყვანოთ ვაიდური ტელ. ნომერი"),
  id_number: z
    .string()
    .max(11, "გთხოვთ შეიყვანოთ ვალიდური პირადი ნომერი")
    .min(11, "გთხოვთ შეიყვანოთ ვალიდური პირადი ნომერი")
    .refine(isNumeric.validator, "გთხოვთ შეიყვანოთ ვალიდური პირადი ნომერი"),
});

export type OrderSchemaT = z.infer<typeof OrderSchema>;

export const useOrderForm = () =>
  useForm<OrderSchemaT>({
    resolver: zodResolver(OrderSchema),
    defaultValues: {
      address: "",
      fullname: "",
      id_number: "",
      phone_number: "",
    },
  });
