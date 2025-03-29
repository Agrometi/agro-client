import * as Styled from "./styles/aboutUsHeader.styled";

type AboutUsHeaderT = {};

const AboutUsHeader: React.FC<AboutUsHeaderT> = () => {
  return (
    <Styled.AboutUsHeader>
      <figure className="header-bg">
        <img
          width="100%"
          height="100%"
          alt="ნიადაგის ამსახველი ფოტო"
          src="/assets/ground.webp"
        />
      </figure>

      <div className="shopping__header-body">
        <figure>
          <img
            src="/assets/logo-geo.webp"
            alt="agrometi"
            width={300}
            height={82}
          />
        </figure>
      </div>
    </Styled.AboutUsHeader>
  );
};

export default AboutUsHeader;
