require('colors')

const cardClassDecoration = ( cardClass ) => {
    switch ( cardClass ) {
        case 'Druid':
            return cardClass.green;
        case 'Hunter':
            return cardClass.brightGreen;
        case 'Mage':
            return cardClass.blue;
        case 'Paladin':
            return cardClass.brightYellow;
        case 'Priest':
            return cardClass.brightWhite;
        case 'Rogue':
            return cardClass.brightBlack;
        case 'Shaman':
            return cardClass.brightBlue;
        case 'Warlock':
            return cardClass.magenta;
        case 'Warrior':
            return cardClass.red;
        case 'Neutral':
            return cardClass.brightCyan;
        case 'Demon Hunter':
            return cardClass.brightGreen;
        case 'Death Knight':
            return cardClass.brightWhite;
        default:
            return cardClass;
    }
}

module.exports = cardClassDecoration;