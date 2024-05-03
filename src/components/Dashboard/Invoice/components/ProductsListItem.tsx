import { View, Text } from "@react-pdf/renderer";

import styles from "./invoiceStyles.ts";

type ProductsListItemT = {
  product: {
    id: string;
    title: string;
    size: string;
    sizeUnit: string;
    quantity: number;
    price: number;
    priceSum: number;
    thumbnail: string;
    description: string;
  };
};

const ProductsListItem: React.FC<ProductsListItemT> = ({ product }) => {
  const productPriceString = `${
    product.sizeUnit ? `1${product.sizeUnit} -` : ""
  } ${product.price}₾`;

  return (
    <View style={{ ...styles.productsListTr }}>
      <View
        style={{ ...styles.productsListHead, ...styles.productsDetailsBox }}
      >
        <Text
          style={{
            ...styles.productsListTd,
            width: "100%",
          }}
        >
          {product.title}
        </Text>

        <Text
          style={{
            ...styles.productsListTd,
            width: "100px",
          }}
        >
          {product.size ? (
            <>
              {product.size}
              {product.sizeUnit}
            </>
          ) : (
            <>&mdash;</>
          )}
        </Text>

        <Text
          style={{
            ...styles.productsListTd,
            width: "160px",
          }}
        >
          {product.quantity}
        </Text>

        <Text
          style={{
            ...styles.productsListTd,
            width: "100px",
          }}
        >
          {productPriceString}
        </Text>

        <Text
          style={{
            ...styles.productsListTd,
            width: "100px",
          }}
        >
          {product.priceSum}₾
        </Text>
      </View>

      {product.description && (
        <View style={{ ...styles.productDescriptionBox }}>
          <Text
            style={{
              ...styles.productsListTd,
              textAlign: "left",
            }}
          >
            {product.description}
          </Text>
        </View>
      )}
    </View>
  );
};

export default ProductsListItem;
