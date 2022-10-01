import logoImg from  "../../assets/logo.svg";

import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBuilding, faUserGroup, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "./components/Card";
import { ListHeader, ListRepositoriesContainer, ListSearch } from "./styles";


export function ListRepositories() {
  return (
    <ListRepositoriesContainer>
      <ListHeader>
        <img src={logoImg} alt="" />
        <div>
          <header>
            <span>Cameron Williamson</span>
            <a href="">
              GitHub
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </header>
          <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
          <footer>
            <div>
              <FontAwesomeIcon icon={faGithub} />
              <span>cameronwll</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faBuilding} />
              <span>Rocketseat</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faUserGroup} />
              <span>32 seguidores</span>
            </div>
          </footer>
        </div>
      </ListHeader>
      <ListSearch>

      </ListSearch>
      {/* <div>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div> */}
    </ListRepositoriesContainer>
  )
}