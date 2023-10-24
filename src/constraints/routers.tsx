import { ReactNode } from "react";

import {
  RectangleStackIcon,
  BoltIcon,
  FolderArrowDownIcon,
  BookOpenIcon,
  BookmarkIcon,
  CreditCardIcon,
  GlobeEuropeAfricaIcon
} from "@heroicons/react/24/outline";

type ITabs = {
  pageId: number;
  pathName: string;
  icon: ReactNode;
  name: string;
}[];

export const TABS: ITabs = [
  {
    pageId: 1,
    icon: <RectangleStackIcon />,
    name: "Dashboard",
    pathName:"/"
  },
  {
    pageId: 2,
    icon: <BoltIcon />,
    name: "Entradas",
    pathName:"/entradas"
  },
  {
    pageId: 3,
    icon: <FolderArrowDownIcon />,
    name: "Saidas",
    pathName:"/saidas"
  }
];

export const SETTINGS_TABS: ITabs = [
  {
    pageId: 1,
    icon: <BookOpenIcon />,
    name: "Carreira",
    pathName:"/carreira"
  },
  {
    pageId: 2,
    icon: <BookmarkIcon />,
    name: "Vinculação",
    pathName:"/vinculacao"
  },
  {
    pageId: 3,
    icon: <CreditCardIcon />,
    name: "Cargo",
    pathName:"/cargo"
  },

  {
    pageId: 4,
    icon: <GlobeEuropeAfricaIcon />,
    name: "Provincia",
    pathName:"/provincia"
  },
  {
    pageId: 4,
    icon: <GlobeEuropeAfricaIcon />,
    name: "Distrito",
    pathName:"/distrito"
  },
  {
    pageId: 4,
    icon: <GlobeEuropeAfricaIcon />,
    name: "Estabelecimento",
    pathName:"/estabelecimento"
  }
];
