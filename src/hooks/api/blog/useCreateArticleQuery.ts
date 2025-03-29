import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ArticleSchemaT,
  useArticleForm,
} from "@/utils/validations/article/articleSchema";
import { logger } from "@/utils";
import { blogStore } from "@/store";
import { PATHS } from "@/config/paths";

export default function useCreateArticleQuery(articleId?: string) {
  const navigate = useNavigate();

  const form = useArticleForm();

  const [isUpdating, setIsUpdating] = useState(false);

  const onStartUpdate = (values: ArticleSchemaT) => {
    form.reset(values);
    setIsUpdating(true);
  };

  const status = blogStore.use.createArticleStatus();
  const createArticle = blogStore.use.createArticle();
  const updateArticle = blogStore.use.updateArticle();

  const onCreate = form.handleSubmit(async (values) => {
    const body = attachAltAttributeToImages(values.body, values.title);

    try {
      if (!isUpdating) await createArticle({ ...values, body });
      else {
        if (!articleId) return;

        await updateArticle({
          body,
          articleId,
          title: values.title,
          category: values.category,
        });
      }

      form.reset({ title: "", body: "", category: "" });
      navigate(PATHS.dashboard_blog_articles_page);
    } catch (error) {
      logger(error);
    }
  });

  return { form, onCreate, onStartUpdate, status };
}

function attachAltAttributeToImages(body: string, alt: string): string {
  const parsedDOM = new DOMParser().parseFromString(body, "text/html");

  const images = parsedDOM.querySelectorAll("img");
  images.forEach((img) => img.setAttribute("alt", alt));

  return parsedDOM.body.innerHTML;
}
