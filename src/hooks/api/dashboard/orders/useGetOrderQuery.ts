import { useEffect } from "react";

import { orderStore } from "@/store";
import { useSearchParams } from "@/hooks/utils";

export default function useGetOrderQuery() {
  const { getParam } = useSearchParams();

  const status = orderStore.use.readStatus();
  const get = orderStore.use.getOrder();
  const data = orderStore.use.order();
  const cleanUp = orderStore.use.cleanUpOrder();

  const orderId = getParam("review-order");

  useEffect(() => {
    if (!orderId) return;

    get(orderId);

    return () => {
      cleanUp();
    };
  }, [orderId]);

  return { status, data };
}
