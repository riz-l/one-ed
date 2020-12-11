// Import: Dependencies
import styled from "styled-components/macro";

// Element: Wrapper
export const Wrapper = styled.div`
  border: ${({ themeColor }) =>
    themeColor ? `1px solid ${themeColor}` : "1px solid #3a3a40"};
  align-items: center;
  display: flex;
  height: auto;
  justify-content: center;
  margin: 1rem;
  transition: all 100ms linear;
`;

// Element: EntryContainer
export const EntryContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
  position: relative;
  width: 100%;
`;

// Element: Left
export const Left = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
`;

// Element: Heading
export const Heading = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 0.4rem;
`;

// Element: Icon
export const Icon = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  background: ${({ themeColor }) => (themeColor ? themeColor : "#3a3a40")};
  border-radius: 50%;
  padding: 0.4rem;
  margin-right: 0.6rem;

  & svg {
    fill: #ffffff;
    height: 25px;
    width: 25px;
  }
`;

// Element: Detail
export const Detail = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
`;

// Element: Right
export const Right = styled.div`
  align-items: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 2rem;
  padding: 1rem;
`;

// Element: Status
export const Status = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

// Element: Arrow
export const Arrow = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  & svg {
    fill: #f1f1f1;
    height: 30px;
    transition: all 100ms linear;
    width: 30px;
  }
`;

// Element: ArrowContainer
export const ArrowContainer = styled.div`
  align-items: center;
  background: ${({ themeColor }) => (themeColor ? themeColor : "#3a3a40")};
  cursor: pointer;
  display: flex;
  height: 100%;
  justify-content: center;
  margin: auto 0;
  position: absolute;
  right: 0;
  transition: all 100ms linear;
  width: 30px;

  &:hover {
    filter: brightness(0.8);
    transition: all 100ms linear;

    & ${Arrow} {
      & svg {
        fill: #ffffff;
        transition: all 100ms linear;
      }
    }

    & ${Wrapper} {
      filter: brightness(0.8);
      transition: all 100ms linear;
    }
  }
`;
