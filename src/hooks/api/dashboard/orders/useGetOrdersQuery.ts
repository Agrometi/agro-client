import { useEffect } from "react";

import { orderStore } from "@/store";

export default function useGetOrdersQuery() {
  const status = orderStore.use.readAllStatus();
  const data = orderStore.use.orders();
  const get = orderStore.use.getOrders();
  const cleanUp = orderStore.use.cleanUpOrders();

  useEffect(() => {
    get();

    return () => {
      cleanUp();
    };
  }, []);

  return { data, status };
}
