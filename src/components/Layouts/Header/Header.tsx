import styled from "styled-components";

type HeaderT = {
  text?: string;
};

const StyledHeader = styled.h1`
  position: fixed;
  pointer-events: none;
  opacity: 0;
  top: 0;
  left: 0;
  transform: translateY(-400px);
  z-index: -99;
`;

const Header: React.FC<HeaderT> = ({ text }) => {
  return (
    <StyledHeader>
      {text ||
        "ენერგოეფექტური სათბურები,ოპტიმიზირებული მაღალი ხარისხის მოსავლისთვის"}
    </StyledHeader>
  );
};

export default Header;
