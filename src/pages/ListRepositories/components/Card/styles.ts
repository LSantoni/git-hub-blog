import styled from "styled-components";

export const CardContainer = styled.div`
  background: ${props => props.theme["base-post"]};
  border-radius: 10px;
  max-width: 26rem;
  padding: 2rem;

  header {
    display: flex;
    align-content: space-between;
    margin-bottom: 1.25rem;

    p {
      font-size: 1.25rem;
      font-weight: 700;
      color: ${props => props.theme["base-title"]};
      max-width: 17.68rem;
    }

    span {
      font-size: 0.875rem;
      color: ${props => props.theme["base-span"]};
    }
  }

  #card-text {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
  }
`;