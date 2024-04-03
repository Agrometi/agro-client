import { DYNAMIC_ROUTES } from "@/config/paths";
import { useGetCombosQuery } from "@/hooks/api/combos";
import { useDeleteComboQuery } from "@/hooks/api/dashboard/combos";

import {
  ComboCard,
  StandSpinner,
  ErrorMessage,
  InfiniteScroll,
} from "@/components/Layouts";
import * as Styled from "./styles/yourCombos.styled";

const YourCombos: React.FC = () => {
  const { data, status, hasMore, getPaginatedCombosQuery, total } =
    useGetCombosQuery(true);

  const { deleteComboQuery, status: deleteStatus } = useDeleteComboQuery();

  const loading = status.loading || deleteStatus.loading;
  const errorMessage = status.message || deleteStatus.message;
  const hasError = status.error || deleteStatus.error;

  return (
    <Styled.YourCombos>
      {status.status === "SUCCESS" && (
        <InfiniteScroll
          hasMore={hasMore}
          onNext={getPaginatedCombosQuery}
          total={total}
        >
          {data.map((combo) => (
            <ComboCard
              combo={combo}
              key={combo._id}
              onDelete={deleteComboQuery}
              redirectPath={DYNAMIC_ROUTES.dashboard_combo_details_page(
                combo._id
              )}
            />
          ))}
        </InfiniteScroll>
      )}

      {hasError && <ErrorMessage message={errorMessage} />}

      {loading && <StandSpinner />}
    </Styled.YourCombos>
  );
};

export default YourCombos;
