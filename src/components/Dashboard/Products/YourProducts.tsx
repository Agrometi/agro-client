import { useState } from "react";

import { useGetProductsQuery } from "@/hooks/api/products";
import { useDeleteProductQuery } from "@/hooks/api/dashboard/products";

import {
  Modal,
  Button,
  ErrorMessage,
  StandSpinner,
  InfiniteScroll,
  RelativeSpinner,
} from "@/components/Layouts";
import ProductCard from "./components/ProductCard";
import * as Styled from "./styles/yourProducts.styled";

const YourProducts: React.FC = () => {
  const { data, status, hasMore, total, getPaginatedProductsQuery } =
    useGetProductsQuery(true);

  const {
    onDeleteQuery,
    multipleLoadingStatus,
    singleStatus: deleteStatus,
    deleteProductAndCombosQuery,
    removeProductFromCombosAndDeleteQuery,
  } = useDeleteProductQuery();

  const loading = status.loading || deleteStatus.loading;

  const errorMessage = status.error
    ? status.message
    : deleteStatus.error
    ? deleteStatus.message
    : "";

  const [warning, setWarning] = useState<{
    warning: boolean;
    combos: Array<{ _id: string; title: string }>;
    productTitle: string;
    productId: string;
  }>({ combos: [], productId: "", productTitle: "", warning: false });

  const onCloseWarning = () =>
    setWarning(() => ({
      combos: [],
      productId: "",
      productTitle: "",
      warning: false,
    }));

  const onDeleteProductAndCombosQuery = async () => {
    const combos = warning.combos.map((combo) => combo._id);

    await deleteProductAndCombosQuery(combos, warning.productId);

    setWarning((prev) => ({
      ...prev,
      combos: [],
      productId: "",
      productTitle: "",
      warning: false,
    }));
  };

  const onRemoveProductFromCombosAndDelete = async () => {
    await removeProductFromCombosAndDeleteQuery(warning.productId);

    setWarning((prev) => ({
      ...prev,
      combos: [],
      productId: "",
      productTitle: "",
      warning: false,
    }));
  };

  return (
    <>
      <Styled.YourProducts>
        {status.status === "SUCCESS" && (
          <InfiniteScroll
            total={total}
            hasMore={hasMore}
            onNext={getPaginatedProductsQuery}
          >
            {data.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
                setWarning={setWarning}
                onDelete={onDeleteQuery}
              />
            ))}
          </InfiniteScroll>
        )}

        {loading && <StandSpinner />}

        {errorMessage && <ErrorMessage message={errorMessage} align="center" />}
      </Styled.YourProducts>

      <Modal open={warning.warning} onClose={onCloseWarning}>
        <Styled.Warning>
          <p>
            პროდუქტი, რომლის წაშლაც გსურთ ფიგურირებს {warning.combos.length}{" "}
            ნაკრებში:
          </p>

          <ol>
            {warning.combos.map((combo) => (
              <li>{combo.title}</li>
            ))}
          </ol>

          {multipleLoadingStatus && <RelativeSpinner />}

          <Button disabled={multipleLoadingStatus} onClick={onCloseWarning}>
            ბრძანების გაუქმება
          </Button>

          <Button
            disabled={multipleLoadingStatus}
            onClick={onRemoveProductFromCombosAndDelete}
          >
            ამოშალე პროდუქტი ნაკრებებიდან და წაშალე
          </Button>

          <Button
            disabled={multipleLoadingStatus}
            onClick={onDeleteProductAndCombosQuery}
          >
            წაშალე პროდუქტი ნაკრებებთან ერთად
          </Button>
        </Styled.Warning>
      </Modal>
    </>
  );
};

export default YourProducts;
