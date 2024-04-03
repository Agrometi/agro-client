import { useState, useEffect } from "react";

import { SelectedProductSizeT } from "@/interface/store/combo.store.types";

export default function useSizeChange(
  sizes: Array<string>,
  setDefaults = true
) {
  /* Set Size locally before current product will be added to store */
  const [size, setSize] = useState<SelectedProductSizeT>({
    size: "",
    selectedCount: 0,
  });

  /** Watch Size change and reset size state based on change*/
  const onSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const chosenSize = sizes.find((size) => size === e.target.value);

    if (!chosenSize) return;

    setSize((prev) => ({
      ...prev,
      size: chosenSize,
      selectedCount: 1,
    }));
  };

  /**
   * control product quantity according to specific size max count
   * size should be changed by the button or from the input itself
   */
  const onIncreaseQuantity = () => {
    setSize((prev) => ({ ...prev, selectedCount: prev.selectedCount + 1 }));
    return size.selectedCount + 1;
  };

  const onDecreaseQuantity = () => {
    const newCount = size.selectedCount === 1 ? 1 : size.selectedCount - 1;

    setSize((prev) => ({ ...prev, selectedCount: newCount }));

    return newCount;
  };

  const onQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newCount = +e.target.value > 0 ? +e.target.value : 1;
    setSize((prev) => ({ ...prev, selectedCount: newCount }));
    return newCount;
  };

  /**
   * set default size on size state
   */
  useEffect(() => {
    const isArray = sizes && Array.isArray(sizes) && sizes[0];

    if (!isArray || size.size || !setDefaults) return;

    const defaultSize = sizes[0];

    setSize({
      size: defaultSize,
      selectedCount: 1,
    });
  }, [sizes]);

  return {
    size,
    setSize,
    onSizeChange,
    onIncreaseQuantity,
    onDecreaseQuantity,
    onQuantityChange,
  };
}
