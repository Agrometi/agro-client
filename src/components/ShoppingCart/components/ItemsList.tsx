import { shoppingCartStore } from "@/store";

import * as Styled from "./styles/itemsList.styled";
import ShoppingCartItem from "./ShoppingCartItem";

type ItemsListT = {};

const ItemsList: React.FC<ItemsListT> = () => {
  const products = shoppingCartStore.use.products();

  return (
    <Styled.ItemsLists>
      {products.length > 0 ? (
        <>
          <div className="products-list__head">
            <div />

            <div />

            <div>
              <p>პროდუქტი</p>
            </div>

            <div>
              <p>ნაკრები</p>
            </div>

            <div>
              <p>ფასი</p>
            </div>

            <div>
              <p>ზომა</p>
            </div>

            <div>რაოდენობა</div>
          </div>

          <ul className="products-list">
            {products.map((product) => (
              <ShoppingCartItem
                key={`${product._id}-${product.size.size}`}
                product={product}
              />
            ))}
          </ul>
        </>
      ) : (
        <p className="empty-cart--msg">დამატებული პროდუქტები არ მოიძებნება</p>
      )}
    </Styled.ItemsLists>
  );
};

export default ItemsList;
