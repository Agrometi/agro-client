import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { PATHS } from "@/config/paths.ts";
import { shoppingCartStore } from "@/store/index.ts";
import useWindowDimension from "@/hooks/utils/useWindowDimension.ts";

import {
  COMPANY_ADDRESS,
  COMPANY_EMAIL,
  COMPANY_PHONE,
} from "@/config/config.ts";

import {
  PhoneIcon,
  EmailIcon,
  ViberIcon,
  WhatsUpIcon,
  LocationIcon,
  ShoppingCartIcon,
  BurgerIcon,
} from "@/components/Layouts/Icons";
import * as Styled from "./navigation.styled.ts";

type NavigationT = {};

const Navigation: React.FC<NavigationT> = () => {
  const [activeBurgerNav, setActiveBurgerNav] = useState(false);

  const productsCount = shoppingCartStore.use.products().length;

  const { width } = useWindowDimension();

  useEffect(() => {
    if (width > 640 && activeBurgerNav) setActiveBurgerNav(false);
  }, [width]);

  const COMPANY_PHONE_INDEXED = COMPANY_PHONE.replace(/-/g, "")
    .split(" ")
    .join("");

  const COMPANY_PHONE_SHORT = COMPANY_PHONE_INDEXED.replace("+995", "");

  return (
    <>
      <Styled.NavSocials className="socials-wrapper">
        <ul className="socials-list">
          <li title="ლოკაცია">
            <div>
              <span className="icon">
                <LocationIcon />
              </span>
              <span className="title">{COMPANY_ADDRESS}</span>
            </div>
          </li>

          <li>
            <a
              href={`mailto:${COMPANY_EMAIL}`}
              title="ელ-ფოსტის გაგზავნა Agrometi-სთვის"
              aria-label="მიწერეთ ელ-ფოსტა Agrometi-ს"
            >
              <span className="icon">
                <EmailIcon />
              </span>
              <span className="title">{COMPANY_EMAIL}</span>
            </a>
          </li>

          <li>
            <a
              target="_blank"
              referrerPolicy="no-referrer"
              title="დაურეკეთ Agrometi-ს viber-ის საშუალებით"
              aria-label="დაურეკეთ Agrometi-ს viber-ის საშუალებით"
              href={`viber://chat?number=${COMPANY_PHONE_SHORT}`}
            >
              <span className="icon">
                <ViberIcon />
              </span>
            </a>
          </li>

          <li>
            <a
              target="_blank"
              referrerPolicy="no-referrer"
              title="დაურეკეთ Agrometi-ს WhatsApp-ის საშუალებით"
              aria-label="დაურეკეთ Agrometi-ს WhatsApp-ის საშუალებით"
              href={`https://wa.me/${COMPANY_PHONE_SHORT}`}
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
              <img
                src="/assets/logo-small.webp"
                alt="Agrometi logo"
                title="go to main page"
                width={35}
                height={35}
              />
            </Link>
          </div>

          <div className="nav-row__center">
            <button
              className="burger-btn"
              onClick={() => setActiveBurgerNav((prev) => !prev)}
            >
              <BurgerIcon />
            </button>

            <ul
              className={`routes-list ${
                activeBurgerNav ? "active scroll-block" : ""
              }`}
            >
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
                  to={PATHS.blog_page}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  ბლოგი
                </NavLink>
              </li>

              <li className="routes-list__item">
                <NavLink
                  to={PATHS.our_projects_page}
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  განხორციელებული პროექტები
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

            <Link
              to={PATHS.shopping_cart_page}
              className="cart-btn"
              title="ნახეთ სავაჭრო კალათა"
              aria-label="ნახეთ სავაჭრო კალათა"
            >
              {productsCount > 0 && <span>{productsCount}</span>}
              <ShoppingCartIcon />
            </Link>
          </div>

          <div
            className="nav-row__right"
            aria-label="Agrometi მობ.ნომერი"
            title="Agrometi მობ.ნომერი"
          >
            <PhoneIcon />
            <span>{COMPANY_PHONE}</span>
          </div>
        </div>
      </Styled.Navigation>
    </>
  );
};

export default Navigation;
