import { BadgeInterface } from "../../types/BadgeInterface";
import { Tag } from './styles';

const Badge = ({text}: BadgeInterface) => {
  return (
    <Tag>{text}</Tag>
  );
}

export default Badge;