import { categoryStore } from "@/store";

export default function useDeleteCategoryQuery() {
  const status = categoryStore.use.deleteStatus();
  const deleteCategory = categoryStore.use.delete();

  const deleteCategoryQuery = async (categoryId: string) => {
    if (!categoryId) return;
    await deleteCategory({ categoryId });
  };

  return { deleteCategoryQuery, status };
}
