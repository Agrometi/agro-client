import { View, Text } from "@react-pdf/renderer";

import styles from "./invoiceStyles.ts";

type ProductsListItemT = {
  product: {
    id: string;
    title: string;
    size: string;
    quantity: number;
    price: number;
    thumbnail: string;
    description: string;
  };
};

const ProductsListItem: React.FC<ProductsListItemT> = ({ product }) => {
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
          {product.size}
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
          {product.price}
        </Text>

        <Text
          style={{
            ...styles.productsListTd,
            width: "100px",
          }}
        >
          {product.quantity * product.price}
        </Text>
      </View>

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
    </View>
  );
};

export default ProductsListItem;
