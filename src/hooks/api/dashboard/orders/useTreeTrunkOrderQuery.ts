import { orderStore } from "@/store";
import { OrderStatusT } from "@/interface/db/order.types";

export default function useTreeTrunkOrderQuery() {
  const status = orderStore.use.treeTrunkStatus();
  const treeTrunk = orderStore.use.treeTrunkOrder();

  const onTreeTrunk = async (orderId: string, status: OrderStatusT) =>
    await treeTrunk({ orderId, status });

  return { onTreeTrunk, status };
}
