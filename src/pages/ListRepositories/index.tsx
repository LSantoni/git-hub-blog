import { Card } from "./components/Card";
import { CardContainer } from "./components/Card/styles";
import { ListHeader, ListRepositoriesContainer, ListSearch } from "./styles";

export function ListRepositories() {
  return (
    <ListRepositoriesContainer>
      <ListHeader>

      </ListHeader>
      <ListSearch>

      </ListSearch>
      <div>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </ListRepositoriesContainer>
  )
}