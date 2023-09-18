import {
  BiSolidHome,
  BiHome,
  BiUser,
  BiSolidUser,
  BiShoppingBag,
  BiHeart,
  BiSolidShoppingBag,
  BiSolidHeart,
} from "react-icons/bi";

export const sideBarIcon = [
  {
    id: 0,
    icon: {
      showing: BiSolidHome,
      notShown: BiHome,
    },
    label: "home",
    name: "Trang chủ",
    path: "",
  },
  {
    id: 1,
    icon: {
      showing: BiSolidHeart,
      notShown: BiHeart,
    },
    label: "wishlist",
    name: "Danh sách yêu thích",
    path: "my-wishlist",
  },
  {
    id: 2,
    icon: {
      showing: BiSolidShoppingBag,
      notShown: BiShoppingBag,
    },
    label: "cart",
    name: "Giỏ hàng",
    path: "cart",
  },
  {
    id: 3,
    icon: {
      showing: BiSolidUser,
      notShown: BiUser,
    },
    label: "user",
    name: "Quản lý người dùng",
    path: "user-setting",
  },
];
