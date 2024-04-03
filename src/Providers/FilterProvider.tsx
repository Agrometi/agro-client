import { createContext, useState, useEffect } from "react";

import { useSearchParams } from "@/hooks/utils";
import { useGetProductsFilterQuery } from "@/hooks/api/products";

import { LoadingStatusT } from "@/interface/store/common.types";
import { ProductsFilterT } from "@/interface/db/product.types";

type FilterProviderT = {
  children: React.ReactNode;
  filterableKeys: Array<string>;
};

type FilterContextT = {
  currentSort: string | null;
  onSort: (item: { label: string; value: string }) => void;
  search: string;
  currentSearch: string | null;
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  priceRange: Array<number>;
  onPriceRangeChange: (params: [number, number]) => void;
  category: { title: string; value: string };
  onClearCategory: () => void;
  onSelectCategory: (params: { title: string; value: string }) => void;
  size: { title: string; value: string };
  sizeStatus: LoadingStatusT;
  onClearSize: () => void;
  onSelectSize: (params: { title: string; value: string }) => void;
  filter: ProductsFilterT;
};

export const FilterContext = createContext<FilterContextT>({
  currentSort: null,
  onSort: () => {},
  search: "",
  currentSearch: null,
  onSearch: () => {},
  priceRange: [],
  onPriceRangeChange: () => {},
  category: { title: "", value: "" },
  onClearCategory: () => {},
  onSelectCategory: () => {},
  size: { title: "", value: "" },
  sizeStatus: { error: false, message: "", loading: false, status: "IDLE" },
  onClearSize: () => {},
  onSelectSize: () => {},
  filter: {
    sizes: [],
    categories: [],
    maxPrice: NaN,
    minPrice: NaN,
  },
});

const FilterProvider: React.FC<FilterProviderT> = ({
  children,
  filterableKeys,
}) => {
  const { getParam, removeParam, setParam } = useSearchParams();

  const [isMounted, setIsMounted] = useState(false);

  // ========== URL PARAMS ==========
  const currentSort = getParam("sort");
  const currentSearch = getParam("search");
  const currentMinPrice = getParam("price[gte]");
  const currentMaxPrice = getParam("price[lte]");
  const currentCategory = getParam("category");
  const currentSize = getParam("size");

  // ========== FILTER STATE ==========
  const [search, setSearch] = useState("");
  const [priceRange, setPriceRange] = useState<Array<number>>([0, 0]);
  const [size, setSize] = useState<{ title: string; value: string }>({
    title: "",
    value: "",
  });
  const [category, setCategory] = useState<{ title: string; value: string }>({
    title: "",
    value: "",
  });

  // ========== CONTROL FILTER ==========

  // --> SORT
  const onSort = (item: { label: string; value: string }) => {
    item.value === currentSort
      ? removeParam("sort")
      : setParam("sort", item.value);
  };

  // --> SEARCH
  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value);

  useEffect(() => {
    if (!isMounted || !filterableKeys.includes("search")) return;

    const timeoutId = setTimeout(() => {
      if (search) setParam("search", search);
      else removeParam("search");
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [search, isMounted, filterableKeys]);

  useEffect(() => {
    if (!filterableKeys.includes("search")) return;

    if (!search && currentSearch) setSearch(currentSearch);
    setIsMounted(true);
  }, [filterableKeys]);

  // --> PRICE RANGE
  const onPriceRangeChange = (value: [number, number]) => setPriceRange(value);

  useEffect(() => {
    if (!filterableKeys.includes("priceRange")) return;

    const timeoutId = setTimeout(() => {
      setParam("price[gte]", priceRange[0].toString());
      setParam("price[lte]", priceRange[1].toString());
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [priceRange, filterableKeys]);

  // --> CATEGORY & SIZE
  const { filter, status, sizeStatus } = useGetProductsFilterQuery();

  const onClearSize = () => {
    removeParam("size");
    setSize(() => ({ title: "", value: "" }));
  };

  const onClearCategory = () => {
    removeParam("category");
    setCategory((prev) => ({ ...prev, title: "", value: "" }));

    if (currentSize) onClearSize();
  };

  const onSelectCategory = (category: { title: string; value: string }) => {
    const isRemoving = category.value === currentCategory;

    if (isRemoving) onClearCategory();
    else {
      setCategory((prev) => ({
        ...prev,
        title: category.title,
        value: category.value,
      }));
      setParam("category", category.value);
    }
  };

  const onSelectSize = (size: { title: string; value: string }) => {
    const isRemoving = size.value === currentSize;

    if (isRemoving) onClearSize();
    else {
      setSize((prev) => ({
        ...prev,
        title: size.title,
        value: size.value,
      }));

      setParam("size", size.value);
    }
  };

  useEffect(() => {
    if (status.status !== "SUCCESS") return;

    if (currentMinPrice && currentMaxPrice)
      setPriceRange([+currentMinPrice, +currentMaxPrice]);
    else setPriceRange([filter.minPrice, filter.maxPrice]);

    if (currentCategory) {
      const candidateCategory = filter.categories.find(
        (category) => category._id === currentCategory
      );

      if (!candidateCategory) return;

      setCategory(() => ({
        title: candidateCategory.title,
        value: candidateCategory._id,
      }));

      const candidateSize = filter.sizes.find((size) => size === currentSize);

      if (!candidateSize) return;

      setSize(() => ({
        title: candidateSize,
        value: candidateSize,
      }));
    }
  }, [status.status, filterableKeys]);

  return (
    <FilterContext.Provider
      value={{
        filter,
        currentSort,
        onSort,
        currentSearch,
        search,
        onSearch,
        priceRange,
        onPriceRangeChange,
        category,
        onClearCategory,
        onSelectCategory,
        size,
        onSelectSize,
        onClearSize,
        sizeStatus,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterProvider;
