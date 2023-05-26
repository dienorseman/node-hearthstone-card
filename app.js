const { log } = require('console');
require('dotenv').config()
const { inquirerMenu, pause, readInput, selectOption } = require('./helpers/inquire');
const Searches = require('./models/searched');
const cardClassDecoration = require('./helpers/cardClassDecoration');
const spellSchoolDecoration = require('./helpers/spellSchoolDecoration');
const { exit } = require('process');


const main = async () => {
    let option = ''
    const searches = new Searches();
    do {
        option = await inquirerMenu();
        switch ( option ) {
            case 1:
                const cardName = await readInput('Which card would you like to look for?'.bgBlack.green)

                const cards = await searches.searchCard( cardName )

                if (cards === undefined) {
                    break;
                }
                
                const card = await selectOption( cards )


                if ( card !== null ) {
                    log(`\n Card information \n`.bgGreen.black)
        
                    log(`Name: ${ card.name }`)
                    log(`Type: ${ card.type }`)
                    log(`Player class: ${ cardClassDecoration( card.playerClass ) }`)
                    log(`Rarity: ${ card.rarity }`)
                    log(`Set: ${ card.cardSet }`)
                    log(`Text: ${ card.text }`)
                    log(`Flavor: ${ card.flavor }`)
                    log(`Artist: ${ card.artist }`)
                    log(`Cost: ${ card.cost }`)

                    switch ( card.type ) {
                        case 'Minion':
                            log(`Attack: ${ card.attack }`)
                            log(`Health: ${ card.health }`)
                            log(`Race ${ card.race }`)
                        break;
                        case 'Spell':
                            log(`Spell school: ${ spellSchoolDecoration( card.spellSchool ) }`)
                        break;
                        case 'Weapon':
                            log(`Attack: ${ card.attack }`)
                            log(`Durability: ${ card.durability }`)
                        break;

                    }

                    searches.addHistory( card.name )

                }

                break;
            case 2:
                log( searches.history )
                break;
        }
        await pause();
    } while ( option != 0 )
    log('Bye!')
}

main();