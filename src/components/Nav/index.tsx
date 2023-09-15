import * as C from './styles';

import * as data from '../../data/links.json';
const linksString = JSON.stringify(data);
const links = JSON.parse(linksString).links;

type Link = {
    title: string;
    path: string;
};

const Links: React.FC<{ links: Link[] }> = ({ links }) => {
  return (
    <C.LinksContainer>
      {links.map((link: Link) => {
        return (
          <C.Menu key={link.path}>
            <C.MenuItems to={link.path}>
              <C.Links>{link.title}</C.Links>
            </C.MenuItems>
          </C.Menu>
        )
      })}
    </C.LinksContainer>
  )
};

export const Nav = () => {
  return (
    <C.Container>
      <C.Logo />
      <Links links={links} />
    </C.Container>
  );
}