import { LuHome, LuUser, LuFileCode2, LuMonitorSmartphone } from "react-icons/lu";

export const NavData = [
  {
    title: 'Início',
    path: '/',
    icon: <LuHome />
  },
  {
    title: 'Sobre Mim',
    path: '/about',
    icon: <LuUser />
  },
  {
    title: 'Estudos & Carreira',
    path: '/sumary',
    icon: <LuFileCode2 />
  },
  {
    title: 'Meus Projetos',
    path: '/projects',
    icon: <LuMonitorSmartphone />
  }
]