import { PATHS } from "@/config/paths";

import * as Styled from "./styles/combos.styled";
import Navigation from "../utils/Navigation";

type CombosT = {
  children: React.ReactNode;
};

const routes = [
  {
    title: "შენი ნაკრებები",
    path: `${PATHS.dashboard_your_combos_page}?dashboard=1`,
  },
  {
    title: "შექმენი ნაკრები",
    path: PATHS.dashboard_create_combo_page,
  },
];

const Combos: React.FC<CombosT> = ({ children }) => {
  return (
    <Styled.Combos>
      <Navigation routes={routes} />
      <div>{children}</div>
    </Styled.Combos>
  );
};

export default Combos;
