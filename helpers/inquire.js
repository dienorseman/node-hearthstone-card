const { log, clear } = require('console')
const inquirer = require('inquirer')
require('colors')

const menuOpts = [
    {
        type: 'list',
        name: 'option',
        message: 'What do you want to do?',
        choices: [
            {
                value: 1,
                name: `${'1)'.green} Search card `,
            },
            {
                value: 2,
                name: `${'2)'.green} History`,
            },
            {
                value: 0,
                name: `${'0)'.green} ${'Exit'.red}`
            }
        ],
    },
]

const inquirerMenu = async () => {
    clear()
    log('==========================='.red)
    log('   HearthStone Card info   '.cyan)
    log('===========================\n'.red)

    const { option } = await inquirer.prompt(menuOpts)
    return option
}

const pause = async () => {
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Press ${'ENTER'.green} to continue`,
        },
    ]
    log('\n')
    await inquirer.prompt(question)
}


const readInput = async ( message ) => {
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate( value ) {
                if ( value.length === 0 ) {
                    return 'Please enter a value';
                }
                return true;
            }
        }
    ];

    const { desc } = await inquirer.prompt(question);
    return desc;
}


const selectOption = async ( cards = [] ) => {
    log()
    const taskMenu = {
        type: 'list',
        name: 'card',
        message: 'Select a card',
        choices: cards.map( ( card, i ) => {
            {
                const index = `${i + 1}`.green
                const { name, type, cardSet} = card
                return {
                    value: card,
                    name: `${index} ${name} ${'::'} ${type} ${'::'} ${cardSet}`,
                }
            }
        }),
    
    }

    taskMenu.choices.unshift({
        value: null,
        name: '0.'.green + ' Cancel'
    })

    const { card } = await inquirer.prompt( taskMenu )
    return card
}

const multiSelectTask = async ( tasks = [] ) => {
    log()
    const taskMenu = {
        type: 'checkbox',
        name: 'ids',
        message: 'Select a task',
        choices: tasks.map( ( task, i ) => {
            {
                const index = `${i + 1}`.green
                const { desc, completedAt } = task
                const status = completedAt
                ? 'Completed'.green
                : 'Pending'.red
                return {
                    value: task.id,
                    name: `${index} ${desc} ${'::'} ${status}`,
                    checked: (completedAt) ? true : false
                }
            }
        })

    }
    const { ids } = await inquirer.prompt( taskMenu )
    return ids
}

const confirm = async ( message ) => {
    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ];

    const { ok } = await inquirer.prompt(question);
    return ok;
}

module.exports = {
    inquirerMenu,
    pause,
    readInput,
    selectOption,
    multiSelectTask,
    confirm
};
