// Esta función crea un nuevo deck


export const crearDeck = (deck) => {
    
    
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
    


      return deck;

      
    }
    

