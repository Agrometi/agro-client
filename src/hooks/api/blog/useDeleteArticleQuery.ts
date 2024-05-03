import { logger } from "@/utils";
import { blogStore } from "@/store";
import { useAppUIContext } from "@/Providers";
import { DeleteArticleArgsT } from "@/interface/API/blog.api.types";

export default function useDeleteArticleQuery() {
  const status = blogStore.use.deleteArticleStatus();
  const deleteArticle = blogStore.use.deleteArticle();

  const { activateDialog } = useAppUIContext();

  const onDelete = async (args: DeleteArticleArgsT) => {
    try {
      if (!args.articleId) return;
      await deleteArticle(args);
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
