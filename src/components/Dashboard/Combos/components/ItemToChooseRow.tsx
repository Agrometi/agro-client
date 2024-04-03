import { memo } from "react";

import { useFilterContext } from "@/Providers/useProviders";
import { useGetProductsQuery } from "@/hooks/api/products";

import {
  Button,
  Spinner,
  ErrorMessage,
  InfiniteScroll,
} from "@/components/Layouts";
import ItemToChooseCard from "./ItemToChooseCard";
import { SearchIcon } from "@/components/Layouts/Icons";
import * as Styled from "./styles/itemsToChooseRow.styled";

const ItemToChooseRow: React.FC = memo(() => {
  const { data, hasMore, total, getPaginatedProductsQuery, status } =
    useGetProductsQuery(true, true);

  const { search, onSearch } = useFilterContext();

  return (
    <Styled.ItemsToChooseRow>
      <div className="search-field">
        <input
          type="text"
          value={search}
          placeholder="ძებნა ..."
          onChange={onSearch}
        />

        <Button show="secondary">
          ძებნა
          <SearchIcon />
        </Button>
      </div>

      {status.status === "SUCCESS" && (
        <InfiniteScroll
          height="76vh"
          total={total}
          hasMore={hasMore}
          onNext={getPaginatedProductsQuery}
        >
          {data.map((product) => (
            <ItemToChooseCard key={product._id} product={product} />
          ))}
        </InfiniteScroll>
      )}

      {status.status === "PENDING" && <Spinner />}

      {status.status === "FAIL" && (
        <ErrorMessage message={status.message} align="center" />
      )}
    </Styled.ItemsToChooseRow>
  );
});

export default ItemToChooseRow;
