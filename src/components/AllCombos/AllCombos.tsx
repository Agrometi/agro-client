import { DYNAMIC_ROUTES } from "@/config/paths";
import { useGetCombosQuery } from "@/hooks/api/combos";

import {
  ComboCard,
  ErrorMessage,
  StandSpinner,
  InfiniteScroll,
} from "@/components/Layouts";
import * as Styled from "./allCombos.styled";

const AllCombos: React.FC = () => {
  const { data, status, hasMore, total, getPaginatedCombosQuery } =
    useGetCombosQuery(true, true);

  return (
    <Styled.AllCombos>
      <InfiniteScroll
        total={total}
        hasMore={hasMore}
        onNext={getPaginatedCombosQuery}
        showLastMessage={status.status === "SUCCESS"}
      >
        {data.map((combo) => (
          <ComboCard
            combo={combo}
            key={combo._id}
            showActions={false}
            redirectPath={DYNAMIC_ROUTES.combo_page(combo._id)}
          />
        ))}
      </InfiniteScroll>

      {status.loading && <StandSpinner />}

      {status.error && <ErrorMessage message={status.message} align="center" />}
    </Styled.AllCombos>
  );
};

export default AllCombos;
