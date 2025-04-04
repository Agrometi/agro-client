const PATHS = {
  home_page: "/",

  // ================================ //
  // ========== PRODUCT ↓ ========== //
  // ============================== //

  // ========== ALL PRODUCTS & COMBOS WRAPPER ==========
  shopping_page: "/shop",

  // ========== PRODUCT ==========
  all_products_page: "/shop/products",
  product_page: "/shop/products/:productId",

  // ========== COMBO ==========
  all_combos_page: "/shop/combos",
  combo_page: "/shop/combos/:comboId",

  // ============================= //
  // ========== BLOG ↓ ========== //
  // =========================== //
  blog_page: "/blog",

  // ===================================== //
  // ========== OUR_PROJECTS ↓ ========== //
  // =================================== //
  our_projects_page: "/projects",

  // ===================================== //
  // ========== ARTICLE ↓ ========== //
  // =================================== //
  article_page: "/articles/:articleId",

  // ================================= //
  // ========== ABOUT_US ↓ ========== //
  // =============================== //

  about_us_page: "/about-us",
  privacy_policy__page: "/privacy-policy",

  // ====================================== //
  // ========== SHOPPING_CART ↓ ========== //
  // ==================================== //

  shopping_cart_page: "/cart",
  shopping_cart_success_page: "/cart/success",

  // ================================== //
  // ========== DASHBOARD ↓ ========== //
  // ================================ //

  dashboard_page: "/dashboard",

  // ========== CATEGORIES ==========
  dashboard_categories_page: "/dashboard/categories",
  dashboard_your_categories_page: "/dashboard/categories/all",
  dashboard_create_category_page: "/dashboard/categories/create",

  // ========== COMBOS ==========
  dashboard_combos_page: "/dashboard/combos",
  dashboard_your_combos_page: "/dashboard/combos/all",
  dashboard_create_combo_page: "/dashboard/combos/create",
  dashboard_combo_details_page: "/dashboard/combos/all/:comboId",

  // ========== BLOG ==========
  dashboard_blog_page: "/dashboard/blog",
  dashboard_blog_articles_page: "/dashboard/blog/articles",
  dashboard_create_article_page: "/dashboard/blog/create",
  dashboard_article_page: "/dashboard/blog/:articleId",

  // ========== ORDERS ==========
  dashboard_orders_page: "/dashboard/orders",
  dashboard_generate_invoice_page: "/dashboard/orders/invoice",

  // ========== PRODUCTS ==========
  dashboard_products_page: "/dashboard/products",
  dashboard_your_products_page: "/dashboard/products/all",
  dashboard_add_product_page: "/dashboard/products/create",
  dashboard_product_details_page: "/dashboard/products/all/:productId",

  // ========== AUTH ==========
  dashboard_about_us_page: "/dashboard/about-us",
  dashboard_edit_about_us_page: "/dashboard/about-us/edit",

  // ========== AUTH ==========
  auth_page: "/dashboard/auth",

  // ================================ //
  // ========== UNKNOWN ↓ ========== //
  // ============================== //

  unknown_page: "*",
};

const DYNAMIC_ROUTES = {
  product_page: (productId: string) =>
    PATHS.product_page.replace(":productId", productId),
  combo_page: (comboId: string) =>
    PATHS.combo_page.replace(":comboId", comboId),
  dashboard_combo_details_page: (comboId: string) =>
    PATHS.dashboard_combo_details_page.replace(":comboId", comboId),
  dashboard_product_details_page: (productId: string) =>
    PATHS.dashboard_product_details_page.replace(":productId", productId),
  article_page: (articleId: string) =>
    PATHS.article_page.replace(":articleId", articleId),
  dashboard_article_page: (articleId: string) =>
    PATHS.dashboard_article_page.replace(":articleId", articleId),
};

const PRIVATE_ROUTES: Array<string> = [];

const getNativeLocation = (currentLocation: string) => {
  let originalPath = "";

  for (const key in PATHS) {
    const pattern = PATHS[key as keyof typeof PATHS];
    const regex = new RegExp("^" + pattern.replace(/:[^/]+/g, "([^/]+)") + "$");

    if (regex.test(currentLocation)) {
      originalPath = PATHS[key as keyof typeof PATHS];

      break;
    }
  }

  return originalPath;
};

export { PATHS, DYNAMIC_ROUTES, PRIVATE_ROUTES, getNativeLocation };
