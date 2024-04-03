import { useEffect } from "react";

import { DYNAMIC_ROUTES } from "@/config/paths";
import { useGetCombosQuery } from "@/hooks/api/combos";

import SectionTitle from "./SectionTitle";
import * as Styled from "./styles/combosWeSell.styled";
import { ComboCard } from "@/components/Layouts";

const CombosWeSell: React.FC = () => {
  const { getPaginatedCombosQuery, data, cleanUpAll } = useGetCombosQuery();

  useEffect(() => {
    getPaginatedCombosQuery({ page: 1, limit: 6 });

    return () => {
      cleanUpAll();
    };
  }, []);

  return (
    <Styled.CombosWeSell>
      <SectionTitle subTitle="კომბინაციები" title="კომბინაციები" />

      <ul className="products-list">
        {data.map((combo) => (
          <ComboCard
            combo={combo}
            key={combo._id}
            showActions={false}
            redirectPath={DYNAMIC_ROUTES.combo_page(combo._id)}
          />
        ))}
      </ul>
    </Styled.CombosWeSell>
  );
};

export default CombosWeSell;
