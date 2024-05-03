import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { isNumeric } from "@/utils/validations/helpers/customValidators";

const ProductSchema = z.object({
  title: z.string().min(1, "გთხოვთ შეიყვანოთ პროდუქტის სათაური"),
  description: z.string().min(1, "გთხოვთ შეიყვანოთ პროდუქტის აღწერა"),
  price: z.string().refine(isNumeric.validator, isNumeric.message),
  category: z.object({
    title: z.string().min(1, "გთხოვთ მიუთითოთ კკატეგორია"),
    value: z.string().min(1, "გთხოვთ მიუთითოთ კატეგორია"),
  }),
  sizeUnit: z.object({
    title: z.string().min(1, "გთხოვთ მიუთითოთ ზომის ერთეული"),
    value: z.string().min(1, "გთხოვთ მიუთითოთ ზომის ერთეული"),
  }),
  sizes: z
    .array(
      z.object({
        size: z
          .string()
          .trim()
          .min(1)
          .refine(isNumeric.validator, isNumeric.message),
      })
    )
    .min(1),
  assets: z.array(z.any()),
  assets_to_delete: z.array(z.string()),
});

export type ProductSchemaT = z.infer<typeof ProductSchema>;

const useProductForm = () =>
  useForm<ProductSchemaT>({
    resolver: zodResolver(ProductSchema),
    defaultValues: {
      title: "",
      description: "",
      price: "",
      category: { title: "", value: "" },
      sizeUnit: { title: "", value: "" },
      sizes: [{ size: "" }],
      assets: [],
      assets_to_delete: [],
    },
  });

export default useProductForm;
