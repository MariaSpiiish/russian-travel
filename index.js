const linkRu = document.getElementById('linkRu');
const linkEn = document.getElementById('linkEn');
console.log(location.href.split('?')[1])

if( location.href.split('?')[1] ==  'lng=en') {
    linkEn.classList.add('header__lang-link_active');
} else {
    linkRu.classList.add('header__lang-link_active');
}

// linkRu.addEventListener('click', () => {
//     linkRu.classList.add('header__lang-link_active');
//     linkEn.classList.remove('header__lang-link_active');
// })

// linkEn.addEventListener('click', () => {
//     linkEn.classList.add('header__lang-link_active');
//     linkRu.classList.remove('header__lang-link_active');
// })