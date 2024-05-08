import { useState } from "react";

import { logger } from "@/utils";
import { productStore, comboStore } from "@/store";
import { axiosPrivateQuery } from "@/services/axios";

export default function useDeleteProductQuery() {
  const singleStatus = productStore.use.deleteStatus();
  const deleteProduct = productStore.use.delete();
  const deleteCombos = comboStore.use.deleteCombos();

  const onDeleteQuery = async (productId: string) =>
    await deleteProduct({ productId });

  const [multipleLoadingStatus, setMultipleLoadingStatus] = useState(false);

  const removeProductFromCombosAndDeleteQuery = async (productId: string) => {
    try {
      if (!productId) return;

      setMultipleLoadingStatus(true);

      await Promise.all([
        deleteProduct({ productId }),
        axiosPrivateQuery.delete(`/combos/${productId}/remove`),
      ]);
    } catch (error) {
      logger(error);
    } finally {
      setMultipleLoadingStatus(false);
    }
  };

  const deleteProductAndCombosQuery = async (
    combosIds: Array<string>,
    productId: string
  ) => {
    try {
      setMultipleLoadingStatus(true);

      await Promise.all([
        deleteProduct({ productId }),
        deleteCombos({ combosIds }),
      ]);
    } catch (error) {
      logger(error);
    } finally {
      setMultipleLoadingStatus(false);
    }
  };

  return {
    singleStatus,
    multipleLoadingStatus,
    onDeleteQuery,
    removeProductFromCombosAndDeleteQuery,
    deleteProductAndCombosQuery,
  };
}
