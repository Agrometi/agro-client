import { NavLink } from "react-router-dom";
import styled from "styled-components";

type NavigationT = {
  routes: Array<{ path: string; title: React.ReactNode }>;
};

const StyledNav = styled.nav`
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  width: 100%;

  .nav__list {
    display: flex;
    align-items: center;
    gap: 2rem;
    text-transform: capitalize;
    padding: 1.5rem 2rem;

    li a {
      font-weight: 400;

      &.active {
        font-weight: 500;
        color: ${({ theme }) => theme.colors.blue};
      }
    }

    li:last-child:has(svg) {
      margin-left: auto;
      font-size: ${({ theme }) => theme.fontSize.xl};

      a {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;

const Navigation: React.FC<NavigationT> = ({ routes }) => {
  return (
    <StyledNav>
      <ul className="nav__list">
        {routes.map((r) => (
          <li key={r.path}>
            <NavLink
              to={r.path}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {r.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </StyledNav>
  );
};

export default Navigation;
