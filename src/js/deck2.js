export let deckUrl = [

  {
    id: 1,
    tipo: 'bosque',
    url: '../assets/img/250w/BOSQUE.png',
  },
  {
    id: 2,
    tipo: 'bosque',
    url: '../assets/img/250w/BOSQUE.png',
  },
  {
    id: 3,
    tipo: 'bosque',
    url: '../assets/img/250w/BOSQUE.png',
  },
  {
    id: 4,
    tipo: 'bosque',
    url: '../assets/img/250w/BOSQUE.png',
  },
  {
    id: 5,
    tipo: 'prado',
    url: '../assets/img/250w/PRADO.png',
  },
  {
    id: 6,
    tipo: 'prado',
    url: '../assets/img/250w/PRADO.png',
  },
  {
    id: 7,
    tipo: 'prado',
    url: '../assets/img/250w/PRADO.png',
  },
  {
    id: 8,
    tipo: 'prado',
    url: '../assets/img/250w/PRADO.png',
  },
  {
    id: 9,
    tipo: 'cultivo',
    url: '../assets/img/250w/CULTIVO.png',
  },
  {
    id: 10,
    tipo: 'cultivo',
    url: '../assets/img/250w/CULTIVO.png',
  },
  {
    id: 11,
    tipo: 'cultivo',
    url: '../assets/img/250w/CULTIVO.png',
  },
  {
    id: 12,
    tipo: 'cultivo',
    url: '../assets/img/250w/CULTIVO.png',
  },




]

const crearDeck2 = (deck) => {
    
    
    let currentIndex = deck.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [deck[currentIndex], deck[randomIndex]] = [
        deck[randomIndex], deck[currentIndex]];
    }
  
    console.log(deck)

    return deckUrl = deck;
  }
  
  crearDeck2(deckUrl)
  
  const imagenCarta = deckUrl[0].url
  console.log(imagenCarta)

