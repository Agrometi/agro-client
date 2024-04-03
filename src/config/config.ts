import { RouterHistoryT } from "@/interface/config.types";

const USER_DEFAULT_AVATAR =
  "https://firebasestorage.googleapis.com/v0/b/mimitha-e1a81.appspot.com/o/user%2Favatar.jpg?alt=media&token=a8b2b035-af5f-42e3-be29-afa789303b84";

const AGRO_THEME_KEY = "AGRO_THEME";
const AGRO_PASSPORT_KEY = "AGRO_PASSPORT";

const CATEGORIES_PER_PAGE = 42;
const PRODUCT_PER_PAGE = 25;
const COMBOS_PER_PAGE = 15;

const RouterHistory: RouterHistoryT = {
  navigate: () => {},
  location: {
    hash: "",
    key: "",
    pathname: "",
    search: "",
    state: null,
  },
};

export {
  RouterHistory,
  USER_DEFAULT_AVATAR,
  AGRO_PASSPORT_KEY,
  AGRO_THEME_KEY,
  CATEGORIES_PER_PAGE,
  PRODUCT_PER_PAGE,
  COMBOS_PER_PAGE,
};
