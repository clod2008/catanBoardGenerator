
import '../../css/board.css'

export const printTerrenos = (deck)=> { //deck.map(function(x)
    const div01 = document.createElement('div')
    div01.classList.add('container', 'board')
    div01.innerHTML=
        `
        <div class="row d-flex justify-content-center">
            <div class="land">
                <img src="${deck[0].url}">
            </div>
        </div>
        <div class="row r2 d-flex justify-content-center">
            <div class="land">
                <img src="${deck[1].url}">
            </div>
            <div class="land">
                <img src="${deck[2].url}">
            </div>
        </div>
        <div class="row r3 d-flex justify-content-center">
            <div class="land">
                <img src="${deck[3].url}">
            </div>
            <div class="land">
                <img src="${deck[4].url}">
            </div>
            <div class="land">
                <img src="${deck[5].url}">
            </div>
        </div>
        <div class="row r2 d-flex justify-content-center">
            <div class="land">
                <img src="${deck[6].url}">
            </div>
            <div class="land">
                <img src="${deck[7].url}">
            </div>
        </div>
        <div class="row r3 d-flex justify-content-center">
            <div class="land">
                <img src="${deck[8].url}">
            </div>
            <div class="land">
                <img src="${deck[9].url}">
            </div>
            <div class="land">
                <img src="${deck[10].url}">
        </div>
        <div class="row r2 d-flex justify-content-center">
            <div class="land">
                <img src="${deck[11].url}">
            </div>
            <div class="land">
                <img src="${deck[12].url}">
            </div>
        </div>
        <div class="row r3 d-flex justify-content-center">
            <div class="land">
                <img src="${deck[13].url}">
            </div>
            <div class="land">
                <img src="${deck[14].url}">
            </div>
            <div class="land">
                <img src="${deck[15].url}">
            </div>
        </div>
        <div class="row r2 d-flex justify-content-center">
            <div class="land">
                <img src="${deck[16].url}">
            </div>
            <div class="land">
                <img src="${deck[17].url}">
            </div>
        </div>
        </div>
        <div class="row r2 d-flex justify-content-center">
            <div class="land">
                <img src="${deck[18].url}">
            </div>
        </div>
        
        
        
        `;
    document.body.append( div01 )
    
};