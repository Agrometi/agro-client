import { Link, NavLink } from "react-router-dom";

import { PATHS } from "@/config/paths.ts";
import { shoppingCartStore } from "@/store/index.ts";

import {
  PhoneIcon,
  EmailIcon,
  ViberIcon,
  WhatsUpIcon,
  LocationIcon,
  ShoppingCartIcon,
  // SearchIcon,
} from "@/components/Layouts/Icons";
// import { TextField } from "@/components/Layouts";
import * as Styled from "./navigation.styled.ts";

type NavigationT = {};

const Navigation: React.FC<NavigationT> = () => {
  const productsCount = shoppingCartStore.use.products().length;

  return (
    <>
      <Styled.NavSocials className="socials-wrapper">
        <ul className="socials-list">
          <li>
            <div>
              <span className="icon">
                <LocationIcon />
              </span>
              <span className="title">ქ. ქუთაისი შარტავას 2/10</span>
            </div>
          </li>

          <li>
            <a href="mailto:agroornament@gmail.com">
              <span className="icon">
                <EmailIcon />
              </span>
              <span className="title">agroornament@gmail.com</span>
            </a>
          </li>

          <li>
            <a
              href="viber://chat?number=555145719"
              referrerPolicy="no-referrer"
              target="_blank"
            >
              <span className="icon">
                <ViberIcon />
              </span>
            </a>
          </li>

          <li>
            <a
              href="https://wa.me/555145719"
              referrerPolicy="no-referrer"
              target="_blank"
            >
              <span className="icon">
                <WhatsUpIcon />
              </span>
            </a>
          </li>
        </ul>
      </Styled.NavSocials>

      <Styled.Navigation>
        <div className="nav-row">
          <div className="nav-row__left">
            <Link to={PATHS.home_page} className="logo-link">
              <img src="/assets/logo-small.webp" alt="" width="35" />
            </Link>
          </div>

          <div className="nav-row__center">
            <ul className="routes-list">
              <li className="routes-list__item">
                <NavLink
                  to={PATHS.home_page}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  მთავარი
                </NavLink>
              </li>

              <li className="routes-list__item">
                <NavLink
                  to={PATHS.shopping_page}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  პროდუქტები
                </NavLink>
              </li>

              <li className="routes-list__item">
                <NavLink
                  to={PATHS.about_us_page}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  ჩვენს შესახებ
                </NavLink>
              </li>
            </ul>

            {/* <div className="search-field">
              <SearchIcon />
              <TextField
                fieldProps={{
                  name: "",
                  onChange: () => {},
                  value: "",
                }}
                message=""
                hasError={false}
              />
            </div> */}

            <Link to={PATHS.shopping_cart_page} className="cart-btn">
              {productsCount > 0 && <span>{productsCount}</span>}
              <ShoppingCartIcon />
            </Link>
          </div>

          <div className="nav-row__right">
            <PhoneIcon />
            <span>+995 555 14 57 19</span>
          </div>
        </div>
      </Styled.Navigation>
    </>
  );
};

export default Navigation;
