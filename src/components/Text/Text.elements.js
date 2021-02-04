// Import: Dependencies
import styled, { css } from "styled-components/macro";

// Element: StyledText
export const StyledText = styled.span`
  color: ${(props) => props.color ?? "#3a3a40;"};
  margin: ${(props) => props.margin ?? 0};
  padding: ${(props) => props.padding ?? 0};

  ${({ heading, subheading, text }) => {
    switch (true) {
      case heading:
        return css`
          font-size: 1.5em;
          font-weight: 700;
        `;
      case subheading:
        return css`
          font-size: 18px;
          font-weight: 600;
        `;
      case text:
        return css`
          font-size: 1rem;
          font-weight: 400;
        `;
      default:
        return css`
          font-size: 1rem;
          font-weight: 400;
        `;
    }
  }}
`;
