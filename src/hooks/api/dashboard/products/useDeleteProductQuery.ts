import { productStore } from "@/store";

export default function useDeleteProductQuery() {
  const status = productStore.use.deleteStatus();
  const deleteProduct = productStore.use.delete();

  const onDeleteQuery = async (productId: string) =>
    await deleteProduct({ productId });

  return { status, onDeleteQuery };
}
