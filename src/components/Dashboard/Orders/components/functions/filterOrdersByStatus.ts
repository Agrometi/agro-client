import { GroupedOrdersListedOrderT } from "@/interface/db/order.types";

export default function filterOrdersByStatus(
  order: GroupedOrdersListedOrderT
): boolean {
  const searchParams = new URLSearchParams(window.location.search);
  const currentFilter = searchParams.get("filter") || "";

  return currentFilter === "all"
    ? true
    : order.status.toLowerCase() === currentFilter;
}
