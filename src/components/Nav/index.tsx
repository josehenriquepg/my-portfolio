import { Container, Logo, Menu, MenuItems, MenuLinks} from './styles';

import * as data from '../../data/links.json';
const linksString = JSON.stringify(data);
const links = JSON.parse(linksString).links;

type Link = {
  title: string;
  path: string;
};

type LinksProps = {
  links: Link[];
};

const Links: React.FC<LinksProps> = ({ links }) => {
  return (
    <>
      {links.map((link: Link) => {
        return (
          <Menu key={link.path}>
            <MenuItems to={link.path}>
              <MenuLinks>{link.title}</MenuLinks>
            </MenuItems>
          </Menu>
        )
      })}
    </>
  )
};

export const Nav = () => {
  return (
    <Container>
      <Logo />
      <Links links={links} />
    </Container>
  );
}