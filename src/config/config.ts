import { RouterHistoryT } from "@/interface/config.types";

const USER_DEFAULT_AVATAR =
  "https://firebasestorage.googleapis.com/v0/b/mimitha-e1a81.appspot.com/o/user%2Favatar.jpg?alt=media&token=a8b2b035-af5f-42e3-be29-afa789303b84";

const AGRO_THEME_KEY = "AGRO_THEME";
const AGRO_PASSPORT_KEY = "AGRO_PASSPORT";

const CATEGORIES_PER_PAGE = 42;
const PRODUCT_PER_PAGE = 25;
const COMBOS_PER_PAGE = 25;
const ARTICLES_PER_PAGE = 25;

const COMPANY_NAME = "შპს აგრო-ორნამენტი";
const COMPANY_ADDRESS = "ქ.ქუთაისი ჟ.შარტავას 2/10";
const COMPANY_ADDRESS_AND_ZIP = "ქ.ქუთაისი ჟ.შარტავას 10 ს/კ 238775919";
const COMPANY_PHONE = "+995 555-14-57-19";
const COMPANY_EMAIL = "agroornament@gmail.com";
const COMPANY_BANK_NUMBER = "GE42TB7162036050100002";

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
  ARTICLES_PER_PAGE,
  COMPANY_NAME,
  COMPANY_ADDRESS_AND_ZIP,
  COMPANY_ADDRESS,
  COMPANY_PHONE,
  COMPANY_EMAIL,
  COMPANY_BANK_NUMBER,
};
