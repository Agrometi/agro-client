import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const CategorySchema = z.object({
  title: z.string(),
});

export type CategorySchemaT = z.infer<typeof CategorySchema>;

const useCategoryForm = () =>
  useForm<CategorySchemaT>({
    resolver: zodResolver(CategorySchema),
    defaultValues: {
      title: "",
    },
  });

export default useCategoryForm;
