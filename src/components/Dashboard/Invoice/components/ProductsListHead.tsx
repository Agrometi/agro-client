import { View, Text } from "@react-pdf/renderer";

import styles from "./invoiceStyles.ts";

const ProductsListHead: React.FC = () => {
  return (
    <View
      style={{
        ...styles.productsListHead,
        ...styles.productsListTr,
        margin: 0,
        padding: "10px 40px",
      }}
    >
      <Text
        style={{
          ...styles.productsListTd,
          ...styles.bold,
          width: "100%",
        }}
      >
        პროდუქტი
      </Text>
      <Text
        style={{
          ...styles.productsListTd,
          ...styles.bold,
          width: "100px",
        }}
      >
        ზომა
      </Text>
      <Text
        style={{
          ...styles.productsListTd,
          ...styles.bold,
          width: "160px",
        }}
      >
        რაოდენობა
      </Text>
      <Text
        style={{
          ...styles.productsListTd,
          ...styles.bold,
          width: "100px",
        }}
      >
        ფასი
      </Text>
      <Text
        style={{
          ...styles.productsListTd,
          ...styles.bold,
          width: "100px",
        }}
      >
        ჯამი
      </Text>
    </View>
  );
};

export default ProductsListHead;
