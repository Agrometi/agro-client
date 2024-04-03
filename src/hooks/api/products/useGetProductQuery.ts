import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { productStore } from "@/store";

export default function useGetProductQuery() {
  const { productId } = useParams();

  const get = productStore.use.get();
  const data = productStore.use.product();
  const cleanUp = productStore.use.cleanUp();
  const status = productStore.use.readSingleStatus();

  useEffect(() => {
    if (!productId) return;

    get({ productId });

    return () => {
      cleanUp();
    };
  }, [productId]);

  return { data, status };
}
