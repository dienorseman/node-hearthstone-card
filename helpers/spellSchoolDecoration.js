require('colors')

const spellSchoolDecoration = ( spellSchool ) => {
    switch ( spellSchool ) {
        case 'Arcane':
            return ' ' + spellSchool.bgBlue.white + ' '
        case 'Fel':
            return ' ' + spellSchool.bgYellow.green + ' '
        case 'Fire':
            return ' ' + spellSchool.bgRed.yellow + ' '
        case 'Frost':
            return ' ' + spellSchool.bgCyan.white + ' '
        case 'Holy':
            return ' ' + spellSchool.bgWhite.black + ' '
        case 'Nature':
            return ' ' + spellSchool.bgGreen.black + ' '
        case 'Shadow':
            return ' ' + spellSchool.bgMagenta.black + ' '
    }
}

module.exports = spellSchoolDecoration