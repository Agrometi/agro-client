import * as Styled from "./styles/sectionTitle.styled";

type SectionTitleT = {
  subTitle: string;
  title: string;
  type?: "primary" | "secondary";
};

const SectionTitle: React.FC<SectionTitleT> = ({
  subTitle,
  title,
  type = "primary",
}) => {
  return (
    <Styled.SectionTitle>
      <p className="section-title__sub">{subTitle}</p>
      <p className="section-title__main">
        {type === "primary" ? (
          <>
            <span>{title}</span>
            &nbsp;
            <span>რომელსაც ვყიდით</span>
          </>
        ) : (
          <span>{title}</span>
        )}
      </p>
    </Styled.SectionTitle>
  );
};

export default SectionTitle;
