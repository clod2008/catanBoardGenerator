import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/jquery/dist/jquery.min';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';


import './styles.css';

import siteBrand from './assets/img/catansun_catan_6802.png';
import { navBar } from './js/components/navBar';
import { crearDeck } from './js/crearDeck';
import { deck } from './js/deck';
import { printTerrenos } from './js/components/board';
// import { deck2 } from './js/deck2';
// import { homeCarousel } from './js/components/homeSlider';
// import { cardDeckHome01 } from './js/components/cardDeck';
// import { footer } from './js/components/footer';
// import { gMap } from './js/components/map';
// import { brandData } from './js/brandData';

crearDeck(deck)
console.log(deck)
console.log(deck[0].url)


navBar(siteBrand);
// homeCarousel();
// cardDeckHome01();
// gMap();
// google.maps.event.addDomListener(window, 'load', init);
// footer(siteBrand);

const navHi = document.getElementById('navBarHome01')
// console.log(navHi)
const marginTo = navHi.clientHeight

printTerrenos(deck)










