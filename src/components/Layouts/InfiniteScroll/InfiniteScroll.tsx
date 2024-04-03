import styled from "styled-components";
import Infinite from "react-infinite-scroll-component";

import { Spinner } from "@/components/Layouts";

type InfiniteScrollT = {
  total: number;
  onNext: () => void;
  hasMore: boolean;
  children: React.ReactNode;
  height?: string;
  showLastMessage?: boolean;
  fallBack?: React.ReactNode;
};

const StyledLastLine = styled.div`
  width: 100%;
  flex: 1;
  grid-column: 1/-1;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
  opacity: 0.8;
  font-weight: 600;
`;

const InfiniteScroll: React.FC<InfiniteScrollT> = ({
  total,
  onNext,
  hasMore,
  children,
  height,
  fallBack,
  showLastMessage = true,
}) => {
  const Loader = fallBack ? (
    fallBack
  ) : (
    <StyledLastLine>
      <Spinner />
    </StyledLastLine>
  );

  const lastMessage = showLastMessage
    ? {
        endMessage: (
          <StyledLastLine className="last-message">
            მეტი ინფორმაცია არ მოიძებნება
          </StyledLastLine>
        ),
      }
    : {};

  return (
    <Infinite
      dataLength={total}
      next={onNext}
      hasMore={hasMore}
      loader={Loader}
      {...(height ? { height } : {})}
      {...lastMessage}
    >
      {children}
    </Infinite>
  );
};

export default InfiniteScroll;
