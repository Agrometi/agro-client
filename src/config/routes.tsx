import * as Pages from "@/pages";
import { PATHS } from "@/config/paths";
import { RouteT } from "@/interface/config.types";
import { Navigate } from "react-router-dom";

const Routes: Array<RouteT> = [
  // ========== HOME ==========
  {
    path: PATHS.root_page,
    title: "root-page",
    element: <Navigate to={PATHS.home_page} />,
    children: [],
  },

  {
    path: PATHS.home_page,
    title: "home-page",
    element: <Pages.HomePage />,
    children: [],
  },

  // ========== PRODUCTS ==========
  {
    path: PATHS.product_page,
    title: "product-page",
    element: <Pages.ProductDetailsPage />,
    children: [],
  },

  // ========== COMBOS ==========
  {
    path: PATHS.combo_page,
    title: "combo-page",
    element: <Pages.ComboDetailsPage />,
    children: [],
  },

  // ========== SHOP -  ALL PRODUCTS AND ALL COMBOS ROOT ==========
  {
    path: PATHS.shopping_page,
    title: "shopping-page",
    element: <Pages.ShoppingPage />,
    children: [
      {
        path: PATHS.all_products_page,
        title: "all-products-page",
        element: <Pages.AllProductsPage />,
        children: [],
      },
      {
        path: PATHS.all_combos_page,
        title: "all-combos-page",
        element: <Pages.AllCombosPage />,
        children: [],
      },
    ],
  },

  // ========== SHOPPING_CART ==========
  {
    path: PATHS.shopping_cart_page,
    title: "shopping-cart-page",
    element: <Pages.ShoppingCartPage />,
    children: [],
  },

  {
    path: PATHS.shopping_cart_success_page,
    title: "shopping-cart-success-page",
    element: <Pages.ShoppingCartSuccessPage />,
    children: [],
  },

  // ========== ABOUT_US ==========
  {
    path: PATHS.about_us_page,
    title: "about-us-page",
    element: <Pages.AboutUsPage />,
    children: [],
  },

  {
    path: PATHS.privacy_policy__page,
    title: "privacy-policy-page",
    element: <Pages.PrivacyPolicyPage />,
    children: [],
  },

  // ========== DASHBOARD ==========
  {
    path: PATHS.auth_page,
    title: "auth-page",
    element: <Pages.AuthPage />,
    children: [],
  },

  {
    path: PATHS.dashboard_page,
    title: "dashboard-page",
    element: <Pages.DashboardPage />,
    children: [
      // ========== CATEGORIES ==========
      {
        path: PATHS.dashboard_categories_page,
        title: "dashboard-categories-page",
        element: <Pages.DashboardCategoriesPage />,
        children: [
          {
            path: PATHS.dashboard_your_categories_page,
            title: "dashboard-your-categories-page",
            element: <Pages.DashboardYourCategoriesPage />,
            children: [],
          },
          {
            path: PATHS.dashboard_create_category_page,
            title: "dashboard-create-category-page",
            element: <Pages.DashboardCreateCategoryPage />,
            children: [],
          },
        ],
      },

      // ========== COMBOS ==========
      {
        path: PATHS.dashboard_combos_page,
        title: "dashboard-combos-page",
        element: <Pages.DashboardCombosPage />,
        children: [
          // ALL COMBOS
          {
            path: PATHS.dashboard_your_combos_page,
            title: "dashboard-your-combos-page",
            element: <Pages.DashboardYourCombosPage />,
            children: [],
          },
          {
            // CREATE COMBO
            path: PATHS.dashboard_create_combo_page,
            title: "dashboard-create-combo-page",
            element: <Pages.DashboardCreateComboPage />,
            children: [],
          },
          // ACTIVE COMBO
          {
            path: PATHS.dashboard_combo_details_page,
            title: "dashboard-combo-details-page",
            element: <Pages.DashboardComboDetailsPage />,
            children: [],
          },
        ],
      },

      // ========== PRODUCTS ==========
      {
        path: PATHS.dashboard_products_page,
        title: "dashboard-product-page",
        element: <Pages.DashboardProductsPage />,
        children: [
          // ALL PRODUCT
          {
            path: PATHS.dashboard_your_products_page,
            title: "dashboard-your-products-page",
            element: <Pages.DashboardYourProductsPage />,
            children: [],
          },
          {
            // ADD PRODUCT
            path: PATHS.dashboard_add_product_page,
            title: "dashboard-add-product-page",
            element: <Pages.DashboardAddProductPage />,
            children: [],
          },
          // ACTIVE PRODUCT
          {
            path: PATHS.dashboard_product_details_page,
            title: "dashboard-combo-details-page",
            element: <Pages.DashboardProductDetailsPage />,
            children: [],
          },
        ],
      },

      // ========== ORDERS ==========
      {
        path: PATHS.dashboard_orders_page,
        title: "dashboard-orders-page",
        element: <Pages.DashboardOrdersPage />,
        children: [],
      },

      {
        path: PATHS.dashboard_generate_invoice_page,
        title: "dashboard-generate-invoice-page",
        element: <Pages.GenerateInvoicePage />,
        children: [],
      },
    ],
  },

  // AUTH
  // {
  //   path: PATHS.auth_page,
  //   title: "auth-page",
  //   element: <Pages.AuthPage />,
  //   children: [
  //     {
  //       path: PATHS.login_page,
  //       title: "auth-login-page",
  //       element: <Pages.LoginPage />,
  //       children: [],
  //     },
  //     {
  //       path: PATHS.register_page,
  //       title: "auth-register-page",
  //       element: <Pages.RegisterPage />,
  //       children: [],
  //     },
  //     {
  //       path: PATHS.forgot_password_page,
  //       title: "auth-forgot-password-page",
  //       element: <Pages.ForgotPasswordPage />,
  //       children: [],
  //     },
  //     {
  //       path: PATHS.confirm_email_page,
  //       title: "auth-confirm-email-page",
  //       element: <Pages.ConfirmEmailPage />,
  //       children: [],
  //     },
  //     {
  //       path: PATHS.update_password_page,
  //       title: "auth-update-password-page",
  //       element: <Pages.UpdatePasswordPage />,
  //       children: [],
  //     },
  //   ],
  // },

  // 404
  {
    path: PATHS.unknown_page,
    title: "unknown-page",
    element: <Pages.UnknownPage />,
    children: [],
  },
];

export default Routes;
