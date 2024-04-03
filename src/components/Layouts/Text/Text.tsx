import { v4 as uuid } from "uuid";

type TextT = {
  text: string;
  showEmptyLines?: boolean;
} & React.ComponentProps<"p">;

const Text: React.FC<TextT> = ({ text, showEmptyLines = true, ...props }) => {
  const fragments = text?.split("\n") || [];

  return (
    <>
      {fragments.length > 0 ? (
        fragments.map((fragment) =>
          fragment === "" && showEmptyLines ? (
            <br />
          ) : (
            <p key={uuid()} style={{ width: "100%" }} {...props}>
              {fragment}
            </p>
          )
        )
      ) : (
        <></>
      )}
    </>
  );
};

export default Text;
