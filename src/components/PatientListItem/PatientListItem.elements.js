// Import: Dependencies
import styled from "styled-components/macro";

// Element: IconContainer
export const IconContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

// Element: Icon
export const Icon = styled.div`
  align-items: center;
  background: #1d1d20;
  border-radius: 50%;
  display: flex;
  height: 70px;
  max-height: 70px;
  min-height: 70px;
  justify-content: center;
  width: 70px;
  max-width: 70px;
  min-width: 70px;

  & svg {
    fill: #f1f1f1;
    height: 40px;
    transition: all 100ms linear;
    width: 40px;
  }
`;

// Element: Container
export const Container = styled.div`
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  color: #f1f1f1;
  cursor: pointer;
  display: flex;
  height: auto;
  justify-content: flex-start;
  padding: 0.6rem 1rem;
  transition: all 100ms linear;
  width: 100%;

  &:hover {
    background: #1d1d20;
    color: #ffffff;
    transition: all 100ms linear;

    & ${Icon} {
      background: #2a2a2e;
      border-radius: 10px;
      transition: all 150ms linear;

      & svg {
        fill: #ffffff;
        transition: all 100ms linear;
      }
    }
  }
`;

// Element: ContentWrapper
export const ContentWrapper = styled.div`
  align-self: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
  width: 100%;
`;

// Element: DetailsContainer
export const DetailsContainer = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  flex: 2;
  height: 100%;
  justify-content: space-between;
  padding: 0.4rem 1rem;
  width: 100%;
`;

// Element: NameItem
export const NameItem = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }

  & h2 {
    font-size: 1.3rem;
    font-weight: 400;
  }
`;

// Element: DetailItem
export const DetailItem = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

// Element: StatusContainer
export const StatusContainer = styled.div`
  align-items: flex-end;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.2rem;
  text-align: right;

  & p {
    border: 1px solid red;
    padding: 2px 6px;
  }
`;
