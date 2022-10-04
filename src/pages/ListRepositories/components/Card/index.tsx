import { CardContainer } from "./styles";

export function Card() {
  return (
    <CardContainer>
      <header>
        <p>JavaScript data types and data structures</p>
        <span>Há 1 dia</span>
      </header>
      <p id="card-text">
        Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

        Dynamic typing
        JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
      </p>
    </CardContainer>
  )
}