// import i18next from '../node_modules/i18next/dist/esm/i18next.bundled.js';
// import translationEN from "./locales/en/translation.json";
// import translationRU from "./locales/ru/translation.json";
// const resources = {
//  en: {
//    translation: translationEN,
//  },
//  ru: {
//    translation: translationRU,
//  },
// };

// i18next.init({
//   lng: 'ru', // if you're using a language detector, do not define the lng option
//   debug: true,
//   resources
// });
// // initialized and ready to go!
// // i18next is already initialized, because the translation resources where passed via init function

const linkRu = document.getElementById('linkRu');
const linkEn = document.getElementById('linkEn');

if( location.href.split('?')[1] ==  'lng=en') {
    linkEn.classList.add('header__lang-link_active');
} else {
    linkRu.classList.add('header__lang-link_active');
}