// Import: Dependencies
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.div`
  align-items: center;
  /* background: #11bac1; */
  background: #008ba3;
  cursor: pointer;
  display: flex;
  height: 140px;
  max-height: 140px;
  min-height: 140px;
  justify-content: center;
  margin: 0 10px 10px 0;
  transition: all 100ms linear;
  width: 140px;
  max-width: 140px;
  min-width: 140px;

  @media screen and (max-width: 352px) {
    height: 120px;
    max-height: 120px;
    min-height: 120px;
    width: 120px;
    max-width: 120px;
    min-width: 120px;
  }

  &:nth-last-child() {
    margin-bottom: 0;
  }

  &:hover {
    /* background: #0fa4a9; */
    background: #00687a;
    box-shadow: 0 5px 8px -9px rgba(0, 0, 0, 0.75);
    transform: translateY(-4px);
    transition: all 100ms linear;
  }
`;

// Element: Wrapper
export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 8px;
  transition: all 100ms linear;
  width: 100%;

  & img {
    padding: 8px;
    width: 55%;
  }

  & h3 {
    color: #f1f1f1;
    font-size: 1rem;
    font-weight: 400;
    text-align: center;

    @media screen and (max-width: 352px) {
      font-size: 1rem;
    }
  }

  &:hover {
    filter: brightness(110%);
    transition: all 100ms linear;
  }
`;
