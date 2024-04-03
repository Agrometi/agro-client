import { useEffect } from "react";

import { useSearchParams } from "@/hooks/utils";

import { FilterIcon } from "@/components/Layouts/Icons";
import * as Styled from "./styles/ordersFilter.styled";

type OrdersFilterT = {};

const orderFilters = [
  {
    value: "all",
    title: "ყველა შეკვეთა",
  },
  {
    value: "success",
    title: "წარმატებული შეკვეთები",
  },
  {
    value: "pending",
    title: "მომლოდინე შეკვეთები",
  },
  {
    value: "rejected",
    title: "უარყოფილი შეკვეთები",
  },
];

const OrdersFilter: React.FC<OrdersFilterT> = () => {
  const { getParam, setParam } = useSearchParams();

  const activeFilter = getParam("filter") || "";

  const onFilterChange = (e: React.MouseEvent<HTMLSpanElement>) => {
    const dataValue = e.currentTarget.dataset.value || "";

    if (!dataValue) return;

    setParam("filter", dataValue);
  };

  useEffect(() => {
    if (!activeFilter) setParam("filter", orderFilters[0].value);
  }, []);

  return (
    <Styled.OrdersFilter>
      <FilterIcon />

      {orderFilters.map((filter) => (
        <span
          key={filter.value}
          data-value={filter.value}
          onClick={onFilterChange}
          className={filter.value === activeFilter ? "active" : ""}
        >
          {filter.title}
        </span>
      ))}
    </Styled.OrdersFilter>
  );
};

export default OrdersFilter;
