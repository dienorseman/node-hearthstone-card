const axios = require('axios');

const { log } = require('console');


class Searches {
    history = [ ];
    constructor() {
        // todo: read DB if exists
    }

    addHistory( card = {} ) {
        this.history.unshift( card );
    }


    async searchCard( card = '' ) {
        try {
            // HTTP request
            const instance = axios.create( {
                baseURL: `https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/${card}`,
                headers: {
                    'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
                    'X-RapidAPI-Host': 'omgvamp-hearthstone-v1.p.rapidapi.com'
                }
            } );
            const response = await instance.get();
            return response.data.map( card => ({
                name: card.name,
                type: card.type,    
                playerClass: card.playerClass,
                rarity: card.rarity,
                cardSet: card.cardSet,
                text: card.text,
                flavor: card.flavor,
                artist: card.artist,
                cost: card.cost,
                attack: card.attack,
                health: card.health,
                spellSchool: card.spellSchool,
                durability: card.durability,
                playerClass: card.playerClass,      
            }));
        } catch ( error ) {
            if ( error.response.status === 404 ) {
                log()
                log( 'Card not found' );
            }
        }   
    }
}


module.exports = Searches;