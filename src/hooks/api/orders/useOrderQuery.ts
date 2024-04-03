import { useNavigate } from "react-router-dom";

import { PATHS } from "@/config//paths";
import { orderStore, shoppingCartStore } from "@/store";
import { useOrderForm } from "@/utils/validations/order/OrderSchema";

export default function useOrderQuery() {
  const navigate = useNavigate();

  const form = useOrderForm();

  const create = orderStore.use.createOrder();
  const status = orderStore.use.createStatus();

  const products = shoppingCartStore.use.products();
  const cleanUpCart = shoppingCartStore.use.cleanUpCart();

  const onSubmitOrder = form.handleSubmit(async (values) => {
    await create({ ...values, products });
    form.reset();
    cleanUpCart();
    navigate(PATHS.shopping_cart_success_page);
  });

  return { form, onSubmitOrder, status };
}
