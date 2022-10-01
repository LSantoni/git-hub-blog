import styled from "styled-components";

export const ListRepositoriesContainer = styled.div`
  max-width: 54rem;
  margin: 0 auto;
`;

export const ListHeader = styled.header`
  display: flex;
  padding: 2rem;
  background: ${props => props.theme["base-profile"]};
  border-radius: 10px;
  margin-top: -5.5rem;
  gap: 2rem;

  img {
    width: 148px;
    height: 148px;
  }

  header {
    display: flex;
    justify-content: space-between;
    font-weight: 700;

    span {
      font-size: 1.5rem;
      color: ${props => props.theme["base-title"]};
    }

    a {
      display: flex;
      gap: 0.5rem;

      font-size: 0.75rem;
      text-decoration: none;
      color: ${props => props.theme.blue};
      align-items: center;
    }
  }

  p {
    margin-top: 0.5rem;
    margin-bottom: 1.5rem;
    line-height: 25.6px;
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

export const ListSearch = styled.div`
  
`;