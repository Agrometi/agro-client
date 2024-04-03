import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { isNumeric } from "@/utils/validations/helpers/customValidators";

const ProductSchema = z.object({
  title: z.string(),
  description: z.string(),
  price: z.string().refine(isNumeric.validator, isNumeric.message),
  category: z.object({
    title: z.string(),
    value: z.string(),
  }),
  sizes: z.array(z.object({ size: z.string().trim().min(1) })).min(1),
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
      sizes: [{ size: "" }],
      assets: [],
      assets_to_delete: [],
    },
  });

export default useProductForm;
