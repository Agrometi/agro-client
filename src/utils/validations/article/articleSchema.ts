import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const ArticleSchema = z.object({
  title: z.string().min(1, "გთხოვთ შეიყვანოთ სტატიის სათაური"),
  category: z.string().min(1, "გთხოვთ მიუთითოთ კატეგორია"),
  body: z.string().min(1, "სტატიის ველი არ შეიძლება იყოს ცარიელი"),
});

export type ArticleSchemaT = z.infer<typeof ArticleSchema>;

export const useArticleForm = () =>
  useForm<ArticleSchemaT>({
    resolver: zodResolver(ArticleSchema),
    defaultValues: {
      title: "",
      body: "",
      category: "",
    },
  });
