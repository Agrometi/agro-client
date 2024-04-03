import {
  OrderT,
  OrderStatusT,
  GroupedOrdersT,
} from "@/interface/db/order.types";
import { LoadingStatusT } from "@/interface/store/common.types";
import { OrderSchemaT } from "@/utils/validations/order/OrderSchema";
import { CartProductT } from "@/interface/store/shoppingCart.store.types";

type OrderStateT = {
  createStatus: LoadingStatusT;
  orders: Array<GroupedOrdersT>;
  readAllStatus: LoadingStatusT;
  order: OrderT;
  readStatus: LoadingStatusT;
  treeTrunkStatus: LoadingStatusT;
};

type OrderActionsT = {
  createOrder: (
    params: OrderSchemaT & { products: Array<CartProductT> }
  ) => Promise<void>;
  getOrders: () => Promise<void>;
  cleanUpOrders: () => void;
  getOrder: (orderId: string) => Promise<void>;
  cleanUpOrder: () => void;
  treeTrunkOrder: (params: {
    orderId: string;
    status: OrderStatusT;
  }) => Promise<void>;
};

type OrderStoreT = OrderStateT & OrderActionsT;

export type { OrderStateT, OrderStoreT };
