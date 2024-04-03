type GroupedOrdersT = {
  _id: GroupedOrdersIdT;
  dateRange: GroupedOrdersIdT;
  totalOrders: number;
  orders: Array<GroupedOrdersListedOrderT>;
};

type GroupedOrdersListedOrderT = {
  _id: string;
  customerName: string;
  customerAddress: string;
  status: OrderStatusT;
  createdAt: string;
  products: Array<GroupedOrdersListedOrderCommonProductT>;
};

type GroupedOrdersListedOrderCommonProductT = {
  _id: string;
  size: string;
  quantity: number;
} & (
  | { productType: "PRODUCT"; product: GroupedOrdersListedOrderProductT }
  | {
      productType: "COMBO";
      combo: GroupedOrdersListedOrderProductT;
    }
);

type GroupedOrdersListedOrderProductT = {
  _id: string;
  title: string;
  price: number;
  assets: Array<string>;
};

type GroupedOrdersIdT = { month: number; year: number };

type OrderT = {
  _id: string;
  invoiceNumber: string;
  customerName: string;
  customerAddress: string;
  customerPhone: string;
  customerId: string;
  status: OrderStatusT;
  totalPrice: number;
  products: Array<GroupedOrdersListedOrderCommonProductT>;
  createdAt: string;
};

type OrderStatusT = "PENDING" | "REJECTED" | "SUCCESS";

export type {
  OrderT,
  OrderStatusT,
  GroupedOrdersT,
  GroupedOrdersListedOrderT,
  GroupedOrdersListedOrderCommonProductT,
};
