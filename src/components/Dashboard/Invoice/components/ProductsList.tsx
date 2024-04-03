import { View } from "@react-pdf/renderer";

import styles from "./invoiceStyles.ts";
import ProductsListHead from "./ProductsListHead.tsx";
import ProductsListItem from "./ProductsListItem.tsx";

type ProductsListT = {
  products: Array<{
    id: string;
    title: string;
    size: string;
    quantity: number;
    price: number;
    thumbnail: string;
    description: string;
  }>;
};

const ProductsList: React.FC<ProductsListT> = ({ products }) => {
  return (
    <View style={styles.productsListWrapper}>
      <ProductsListHead />

      {products.map((product) => (
        <ProductsListItem key={product.id} product={product} />
      ))}
    </View>
  );
};

export default ProductsList;
