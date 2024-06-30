import {
  general,
  info,
  posts,
  images,
  vehicle,
  options,
  complectations,
  notifications,
  colors,
} from "@bycar-in-ua/common/dist/translations/index.js";

export default {
  ua: {
    ...general.ua,
    info: info.ua,
    menuItems: {
      Dashboard: "Дашборд",
      Posts: posts.ua.title,
      PostCategories: posts.ua.category,
      Vehicles: "Автомобілі",
      Brands: "Бренди",
      Library: "Бібліотека",
      Images: images.ua.title,
      // Users: users.ua.title,
    },
    vehicle: vehicle.ua,
    options: options.ua,
    complectations: complectations.ua,
    images: images.ua,
    colors: colors.ua,
    notifications: notifications.ua,
    posts: posts.ua,
    // users: users.ua,
  },
  ru: {
    ...general.ru,
    info: info.ru,
    menuItems: {
      Dashboard: "Дашборд",
      Posts: posts.ru.title,
      PostCategories: posts.ru.category,
      Vehicles: "Автомобили",
      Brands: "Бренды",
      Library: "Библиотека",
      Images: images.ru.title,
      // Users: users.ru.title,
    },
    vehicle: vehicle.ru,
    options: options.ru,
    complectations: complectations.ru,
    images: images.ru,
    colors: colors.ru,
    notifications: notifications.ru,
    posts: posts.ru,
    // users: users.ru,
  },
};