import logoIcon from './extensions/logo-icon.png';
const config = {
  translations: {
    en: {
      'app.components.LeftMenu.navbrand.title': 'HerbalAid',
      'app.components.LeftMenu.navbrand.workplace': 'Your digital herbal assistant.'
    }
  },
  auth: {
    logo: logoIcon
  },
  menu: {
    logo: logoIcon,
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
