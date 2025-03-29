import { useNavigate } from "react-router-dom";

import { logger } from "@/utils";
import { blogStore } from "@/store";
import { useAppUIContext } from "@/Providers";
import { DeleteArticleArgsT } from "@/interface/API/blog.api.types";
import { PATHS } from "@/config/paths";

export default function useDeleteArticleQuery() {
  const navigate = useNavigate();

  const status = blogStore.use.deleteArticleStatus();
  const deleteArticle = blogStore.use.deleteArticle();

  const { activateDialog } = useAppUIContext();

  const onDelete = async (args: DeleteArticleArgsT) => {
    try {
      if (!args.articleId) return;
      await deleteArticle(args);
      navigate(PATHS.dashboard_blog_articles_page);
    } catch (error) {
      logger(error);
    }
  };

  const onStartDelete = (articleId: string) => {
    activateDialog({
      target: "სტატიის",
      message: "დარწმუნებული ხართ გსურთ ამ <TARGET> წაშლა ?",
      title: "სტატიის წაშლა",
      type: "danger",
      onConfirm: () => onDelete({ articleId }),
    });
  };

  return { onStartDelete, status };
}
