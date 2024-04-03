import {
  GetComboArgsT,
  CreateComboArgsT,
  DeleteComboArgsT,
  UpdateComboArgsT,
  GetAllCombosArgsT,
} from "@/interface/API/combo.api.types";
import { ComboT } from "@/interface/db/combo.types";
import { LoadingStatusT } from "@/interface/store/common.types";
import { ProductT } from "@/interface/db/product.types";

type ComboStateT = {
  createStatus: LoadingStatusT;
  newAssets: Array<File>;
  assets_to_delete: Array<string>;
  addedExistingAssets: Array<string>;
  existingAssets: Array<string>;
  addedProducts: Array<SelectedProductT>;
  deleteStatus: LoadingStatusT;
  hasMore: boolean;
  currentPage: number;
  combos: Array<ComboT>;
  readStatus: LoadingStatusT;
  combo: ComboT;
  readSingleStatus: LoadingStatusT;
};

type ComboActionsT = {
  create: (
    data: Omit<CreateComboArgsT, "products" | "assets" | "new_assets">
  ) => Promise<void>;

  getAll: (params: GetAllCombosArgsT) => Promise<void>;

  get: (params: GetComboArgsT) => Promise<void>;

  cleanUp: () => void;

  getAllPaginated: (params: GetAllCombosArgsT) => Promise<void>;

  cleanUpAll: () => void;

  delete: (params: DeleteComboArgsT) => Promise<void>;

  update: (
    params: Omit<UpdateComboArgsT, "data"> & {
      data: Omit<CreateComboArgsT, "products" | "assets" | "new_assets">;
    }
  ) => Promise<void>;

  // ========== LOCALES ==========
  setComboDefaults: (params: ComboT) => void;

  cleanUpComboForm: () => void;

  addProduct: (product: SelectedProductT) => void;

  removeProduct: (params: { productId: string; size: string }) => void;

  decreaseAddedProductCount: (params: {
    productId: string;
    size: string;
  }) => void;

  increaseAddedProductCount: (params: {
    productId: string;
    size: string;
  }) => void;

  changeAddedProductCount: (params: {
    productId: string;
    size: string;
    count: number;
  }) => void;

  toggleExistingAsset: (asset: string) => void;

  addNewFiles: (params: Array<File>) => void;

  removeNewFile: (fileName: number) => void;
};

// ========== UTILS ==========

type SelectedProductT = Omit<ProductT, "sizes"> & {
  size: SelectedProductSizeT;
};

type SelectedProductSizeT = { size: string; selectedCount: number };

type ComboStoreT = ComboStateT & ComboActionsT;

export type {
  ComboStateT,
  ComboStoreT,
  SelectedProductSizeT,
  SelectedProductT,
};
