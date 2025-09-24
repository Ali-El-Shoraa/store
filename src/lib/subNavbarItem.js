import {
  BookOpen,
  Dumbbell,
  Info,
  Laptop,
  LayoutGrid,
  MapPin,
  Phone,
  Tablet,
} from "lucide-react";

export const subNavbarItem = [
  {
    id: 1,
    title: "Tablets & iPad",
    link: "#",
    icon: <Tablet className="h-4 w-4" />,
  },
  {
    id: 2,
    title: "Computer",
    link: "#",
    icon: <Laptop className="h-4 w-4" />,
  },
  {
    id: 3,
    title: "Sport",
    link: "#",
    icon: <Dumbbell className="h-4 w-4" />,
  },
  {
    id: 4,
    title: "Categories",
    link: "#",
    icon: <LayoutGrid className="h-4 w-4" />,
    children: [
      // {
      //   id: 41,
      //   title: "Shop By Brand",
      //   link: "#",
      //   icon: <LayoutGrid className="h-4 w-4" />,
      // },
      {
        id: 42,
        title: "FAQ",
        link: "/faq",
        icon: <Info className="h-4 w-4" />,
      },
    ],
  },
  {
    id: 5,
    title: "Blog",
    link: "/blog",
    icon: <BookOpen className="h-4 w-4" />,
  },
  {
    id: 6,
    title: "About Us",
    link: "/about-us",
    icon: <Info className="h-4 w-4" />,
  },
  {
    id: 7,
    title: "Contact",
    link: "/contact",
    icon: <Phone className="h-4 w-4" />,
  },
  {
    id: 8,
    title: "Find a store",
    link: "/find-a-store",
    icon: <MapPin className="h-4 w-4" />,
  },
];
