import { Controller } from "react-hook-form";

import { shoppingCartStore } from "@/store";
import { useSearchParams } from "@/hooks/utils";
import { useOrderQuery } from "@/hooks/api/orders";

import {
  Button,
  Modal,
  TextField,
  ErrorMessage,
  StandSpinner,
} from "@/components/Layouts";
import * as Styled from "./styles/shoppingCartAside.styled";

type ShoppingCartAsideT = {};

const ShoppingCartAside: React.FC<ShoppingCartAsideT> = () => {
  const { getParam, setParam, removeParam } = useSearchParams();

  const products = shoppingCartStore.use.products();

  const priceSum = products.reduce(
    (acc, product) => (acc += product.price * product.size.selectedCount),
    0
  );

  const { form, onSubmitOrder, status } = useOrderQuery();

  const isOrdering = getParam("order") !== null;

  const onStartOrdering = () => setParam("order", "1");

  const onCancelOrdering = () => removeParam("order");

  return (
    <>
      <Styled.ShoppingCartAside>
        <p>
          <span>ჯამური ფასი:</span>
          &nbsp;
          <span>{priceSum}₾</span>
        </p>

        <Button
          show="secondary"
          onClick={onStartOrdering}
          disabled={products.length <= 0}
        >
          {isOrdering ? "პროცესშია" : "შეძენა"}
        </Button>
      </Styled.ShoppingCartAside>

      <Modal onClose={onCancelOrdering} open={isOrdering}>
        <Styled.OrderForm>
          <Controller
            control={form.control}
            name="fullname"
            render={({ field, fieldState: { error } }) => (
              <TextField
                fieldProps={field}
                hasError={error ? true : false}
                message={error?.message || ""}
                label="სრული სახელი"
                placeholder="სახელი გვარი"
              />
            )}
          />

          <Controller
            control={form.control}
            name="phone_number"
            render={({ field, fieldState: { error } }) => (
              <div className="phone-num__box">
                <label>ტელ. ნომერი</label>

                <span className="phone-prefix">+995</span>

                <TextField
                  type="number"
                  message={""}
                  hasError={false}
                  fieldProps={field}
                  placeholder="*********"
                />

                {error?.message && <ErrorMessage message={error.message} />}
              </div>
            )}
          />

          <Controller
            control={form.control}
            name="address"
            render={({ field, fieldState: { error } }) => (
              <TextField
                fieldProps={field}
                label="მისამართი"
                hasError={error ? true : false}
                message={error?.message || ""}
              />
            )}
          />

          <Controller
            name="id_number"
            control={form.control}
            render={({ field, fieldState: { error } }) => (
              <TextField
                type="number"
                fieldProps={field}
                label="პირადი ნომერი"
                placeholder="*************"
                hasError={error ? true : false}
                message={error?.message || ""}
              />
            )}
          />

          {status.error && <ErrorMessage message={status.message} />}

          <Button
            type="button"
            show="secondary"
            onClick={onSubmitOrder}
            title="შეკვეთის დადასტურება"
          >
            შეკვეთის დადასტურება
          </Button>
        </Styled.OrderForm>
      </Modal>

      {status.loading && <StandSpinner />}
    </>
  );
};

export default ShoppingCartAside;
