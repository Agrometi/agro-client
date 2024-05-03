import styled from "styled-components";
import { quillReadOnly } from "@/styles/utils";

export const AboutUs = styled.div`
  min-height: 80svh;

  .about-us__body {
    margin: 0 auto;
    width: min(128rem, 100%);
    padding: 4rem 1rem;
  }

  ${quillReadOnly}
`;
