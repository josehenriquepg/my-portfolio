import * as C from './styles';

import {NavData} from '../../data/navData';

export const NavBar = () => {
  return (
    <C.Container>
      <C.Logo />
      <C.LinksContainer>
        {NavData.map((item, index) => {
          return (
            <C.Menu key={index}>
              <C.MenuItems to={item.path}>
                {item.icon}
                <C.Links>{item.title}</C.Links>
              </C.MenuItems>
            </C.Menu>
          )
        })}
      </C.LinksContainer>
    </C.Container>
  );
}