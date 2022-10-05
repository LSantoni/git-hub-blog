import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faCalendarDay, faChevronLeft, faComment } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { Content, DetailContainer, EmphasisContainer, HeaderCard } from "./styles";

export function RepositoryDetail() { 
  return (
    <DetailContainer>
      <HeaderCard>
        <div>
          <button>
            <FontAwesomeIcon icon={faChevronLeft} />
            <span>VOLTAR</span>
          </button>
          <button>
            <span>VER NO GITHUB</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </button>
        </div>
        <span id="header-title">JavaScript data types and data structures</span>
        <footer>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>cameronwll</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faCalendarDay} />
            <span>Rocketseat</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faComment} />
            <span>32 seguidores</span>
          </div>
        </footer>
      </HeaderCard>
      <Content>
        <p>
          Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
        </p>
        <p>
          Dynamic typing
          JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:
        </p>
        <EmphasisContainer>
          let foo = 42;   // foo is now a number <br />
          foo = ‘bar’;    // foo is now a string <br />
          foo = true;     // foo is now a boolean
        </EmphasisContainer>
      </Content>
    </DetailContainer>
  )
}