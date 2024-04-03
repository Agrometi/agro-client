import { produce } from "immer";
import { create } from "zustand";
import { AxiosResponse } from "axios";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import { logger } from "@/utils";
import { axiosPrivateQuery } from "@/services/axios";
import { getStatus, createSelectors } from "./helpers";

import { GroupedOrdersT, OrderT } from "@/interface/db/order.types";
import { OrderStateT, OrderStoreT } from "@/interface/store/order.store.types";

const initialState: OrderStateT = {
  readAllStatus: getStatus("IDLE"),
  orders: [],

  readStatus: getStatus("IDLE"),
  order: {
    _id: "",
    invoiceNumber: "",
    customerAddress: "",
    customerId: "",
    customerName: "",
    customerPhone: "",
    products: [],
    status: "PENDING",
    totalPrice: NaN,
    createdAt: "",
  },

  createStatus: getStatus("IDLE"),
  treeTrunkStatus: getStatus("IDLE"),
};

const useProductStore = create<OrderStoreT>()(
  devtools(
    immer((set) => ({
      ...initialState,

      async createOrder(params) {
        try {
          set(() => ({ createStatus: getStatus("PENDING") }));

          const requestBody = {
            products: params.products.map((product) => ({
              quantity: product.size.selectedCount,
              productType: product.productType.toLocaleUpperCase().trim(),
              product: product.productType === "product" ? product._id : "",
              combo: product.productType === "product" ? "" : product._id,
              size: product.productType === "product" ? product.size.size : "",
            })),
            fullname: params.fullname,
            address: params.address,
            id_number: params.id_number,
            phone_number: params.phone_number,
            totalPrice: params.products.reduce(
              (acc, product) =>
                (acc += product.size.selectedCount * product.price),
              0
            ),
          };

          await axiosPrivateQuery.post("/orders", requestBody);

          set(() => ({ createStatus: getStatus("SUCCESS") }));
        } catch (error) {
          const message = logger(error);
          set(() => ({ createStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },

      async treeTrunkOrder(params) {
        try {
          set(() => ({ treeTrunkStatus: getStatus("PENDING") }));

          await axiosPrivateQuery.post(`/orders/${params.orderId}/status`, {
            status: params.status,
          });

          set((state) =>
            produce(state, (draft) => {
              const candidateOrdersGroupIndex = draft.orders.findIndex(
                (groupedOrders) =>
                  groupedOrders.orders.some(
                    (order) => order._id === params.orderId
                  )
              );
              const candidateOrderIndex = draft.orders[
                candidateOrdersGroupIndex
              ].orders.findIndex((order) => order._id === params.orderId);

              if (candidateOrdersGroupIndex >= 0)
                draft.orders[candidateOrdersGroupIndex].orders[
                  candidateOrderIndex
                ].status = params.status;

              if (draft.order && draft.order._id === params.orderId)
                draft.order.status = params.status;
            })
          );

          set(() => ({ treeTrunkStatus: getStatus("SUCCESS") }));
        } catch (error: any) {
          const message = logger(error);
          set(() => ({ treeTrunkStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },

      async getOrders() {
        try {
          set(() => ({ readAllStatus: getStatus("PENDING") }));

          const { data }: AxiosResponse<Array<GroupedOrdersT>> =
            await axiosPrivateQuery.get(`/orders`);

          set(() => ({
            orders: data,
            readAllStatus: getStatus("SUCCESS"),
          }));
        } catch (error: any) {
          const message = logger(error);
          set(() => ({ readAllStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },

      cleanUpOrders() {
        set(() => ({
          orders: initialState.orders,
          readAllStatus: initialState.readAllStatus,
        }));
      },

      async getOrder(orderId) {
        try {
          set(() => ({ readStatus: getStatus("PENDING") }));

          const { data }: AxiosResponse<OrderT> = await axiosPrivateQuery.get(
            `/orders/${orderId}`
          );

          set(() => ({
            order: data,
            readStatus: getStatus("SUCCESS"),
          }));
        } catch (error: any) {
          const message = logger(error);
          set(() => ({ readStatus: getStatus("FAIL", message) }));
          throw error;
        }
      },

      cleanUpOrder() {
        set(() => ({
          order: initialState.order,
          readStatus: initialState.readStatus,
        }));
      },
    })),
    { name: "agro_orders" }
  )
);

export default createSelectors(useProductStore);
