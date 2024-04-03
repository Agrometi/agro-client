import { useNavigate } from "react-router-dom";

import { PATHS } from "@/config/paths";

import { Button } from "@/components/Layouts";
import * as Styled from "./shoppingCart.styled";

const ShoppingCartSuccess: React.FC = () => {
  const navigate = useNavigate();

  const onGoBack = () => navigate(PATHS.home_page);

  return (
    <Styled.ShoppingCartSuccess>
      <figure>
        <img src="/assets/success.webp" width={100} />
      </figure>

      <p>თქვენი შეკვეთა</p>
      <p>წარმატებით გაიგზავნა</p>

      <Button show="secondary" onClick={onGoBack}>
        მთავარ გვერდზე დაბრუნება
      </Button>
    </Styled.ShoppingCartSuccess>
  );
};

export default ShoppingCartSuccess;
