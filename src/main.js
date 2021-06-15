// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default';
import smoothscroll from 'smoothscroll-polyfill';
import './icons';
import VueGTag from 'vue-gtag';

export default function (Vue, { head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);

  if (isClient) {
    smoothscroll.polyfill();
  }

  Vue.use(VueGTag, {
    config: { id: 'G-P4G1YY4XT6' },
  });

  head.link.push({
    rel: `preconnect`,
    href: `https://fonts.gstatic.com`,
  });

  head.link.push({
    rel: `stylesheet`,
    href: `https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap`,
  });
}
