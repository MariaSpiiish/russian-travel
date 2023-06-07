const linkRu = document.getElementById('linkRu');
const linkEn = document.getElementById('linkEn');

if( location.href.split('?')[1] ==  'lng=en') {
    linkEn.classList.add('header__lang-link_active');
} else {
    linkRu.classList.add('header__lang-link_active');
}