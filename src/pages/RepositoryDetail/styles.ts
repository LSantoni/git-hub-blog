import styled from "styled-components";

export const DetailContainer = styled.div`
  max-width: 54rem;
  margin: 0 auto;
  padding-bottom: 5rem;
`;

export const HeaderCard = styled.header`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background: ${props => props.theme["base-profile"]};
  border-radius: 10px;
  margin-top: -5.5rem;

  div:first-of-type {
    display: flex;
    justify-content: space-between;

    button {
      background: transparent;
      border: none;
      font-weight: 700;
      font-size: 0.75rem;
      color: ${props => props.theme.blue};
      display: flex;
      gap: 0.5rem;
    }
  }

  #header-title {
    margin: 1.25rem 0 0.5rem;
    font-size: 1.5rem;
  }

  footer {
    display: flex;

    div {
      display: flex;
      gap: 0.5rem;

      svg {
        width: 18px;
        height: 18px;
      }

      & + div{
        margin-left: 1.5rem;
      }
    }
  }
`;

export const Content = styled.section`
  padding: 2.5rem;
  font-size: 1rem;

  p + p {
    margin: 2rem 0;
  }
`;

export const EmphasisContainer = styled.div`
  background: ${props => props.theme["base-post"]};
  padding: 1rem;
  border-radius: 2px;
`;