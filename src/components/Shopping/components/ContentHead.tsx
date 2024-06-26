import { memo } from "react";
import { NavLink } from "react-router-dom";

import { PATHS } from "@/config/paths";
import { useFilterContext } from "@/Providers";

import * as Styled from "./styles/contentHead.styled";
import { Dropdown, TextField } from "@/components/Layouts";
import { SortIcon, ArrowUp, ArrowDown } from "@/components/Layouts/Icons";

type ContentHeadT = {
  boxType: "grid" | "flex";
};

const sort = [
  {
    label: (
      <>
        დამატების თარიღი <ArrowUp />
      </>
    ),
    value: "createdAt",
  },
  {
    label: (
      <>
        დამატების თარიღი <ArrowDown />
      </>
    ),
    value: "-createdAt",
  },
  {
    label: (
      <>
        ფასი <ArrowUp />
      </>
    ),
    value: "price",
  },
  {
    label: (
      <>
        ფასი <ArrowDown />
      </>
    ),
    value: "-price",
  },
];

const ContentHead: React.FC<ContentHeadT> = memo(({ boxType }) => {
  const { currentSort, onSort, search, onSearch } = useFilterContext();

  return (
    <Styled.ContentHead
      className={boxType === "grid" ? "grid-box" : "flex-box"}
    >
      <ul className="all-products__content-header--nav">
        <li>
          <NavLink
            to={PATHS.all_products_page}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            პროდუქტები
          </NavLink>
        </li>

        <li>
          <NavLink
            to={PATHS.all_combos_page}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            ნაკრებები
          </NavLink>
        </li>
      </ul>

      <div className="all-products__content-header--actions">
        <Dropdown
          Button={
            <span className="sort-btn__content" title="ფილტრი">
              <SortIcon />
              {currentSort && (
                <span>
                  {sort.find((s) => s.value === currentSort)?.label || ""}
                </span>
              )}
            </span>
          }
          onSelect={onSort}
          data={sort.map((sortable) => ({
            ...sortable,
            active: sortable.value === currentSort,
          }))}
          buttonClass={`sort-btn ${currentSort ? "active" : ""}`}
          dropdownMinWidth={200}
        />

        <div className="search-box">
          <div>
            <TextField
              hasError={false}
              message=""
              placeholder="ძებნა"
              fieldProps={{
                name: "search",
                value: search,
                onChange: (e) =>
                  onSearch(e as React.ChangeEvent<HTMLInputElement>),
              }}
            />
          </div>
        </div>
      </div>
    </Styled.ContentHead>
  );
});

export default ContentHead;
