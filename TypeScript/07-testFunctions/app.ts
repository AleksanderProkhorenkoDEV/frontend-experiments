const add = (a: number, b: number): number => {
    return a + b;
};

const subtract = (a: number, b: number): number => {
    return a - b;
};

const divide = (a: number, b: number): number | never => {
    if (b === 0) {
        throw new Error('Division by zero is undefined');
    }

    return a / b;
};

const multiply = (a: number, b: number): number => {
    return a * b;
};

/**
 * Should define Actions[] types
 */

type Action = (a: number, b: number) => number;
type typeActions = {
    name: string,
    do: Action
}

const ACTIONS: typeActions[] = [
    {
        name: 'ADD',
        do: add,
    },
    {
        name: 'SUBTRACT',
        do: subtract,
    },
    {
        name: 'DIVIDE',
        do: divide,
    },
    {
        name: 'MULTIPLY',
        do: multiply,
    },
];


function updateUserMoneyText(element: HTMLElement, actualMoney: number): void {
    element.innerHTML = actualMoney.toString();
}

function randomNumber(max: number): number {
    return Math.round(Math.random() * max);
}

type playSchema = {
    actions: typeActions[],
    userMoney: number
    totalClick: number,
    onSuccess: (a:number) => void,
    onError: (randomIndex:number, actions:typeActions[])=>void,
}

function playTheGame({ actions, totalClick, onError, onSuccess, userMoney }: playSchema): number | never {
    const randomIndex = randomNumber(actions.length);
    const A_MILLION = 1000000;
    const action = actions[randomIndex];

    if (!action) {
        onError(randomIndex, actions);
        return userMoney;
    }

    if (userMoney >= A_MILLION) {
        onSuccess(totalClick);
        return userMoney;
    }

    if (userMoney <= 0) {
        throw new Error('Money must be positive');
    }

    const newMoney = Math.round(action.do(userMoney, randomNumber(actions.length * 100)));

    return newMoney;
}

function disableClickButton($button: HTMLButtonElement, handleClick?: () => void): void {
    $button.disabled = true;
    if(handleClick) $button.removeEventListener('click', handleClick);
}

const $button = document.getElementById('button') as HTMLButtonElement;
const $userMoneyText = document.getElementById('moneyText') as HTMLElement;
let userMoney = 1000;
let totalClick = 0;

updateUserMoneyText($userMoneyText, userMoney);

$button.addEventListener('click', function handleClick() {
    totalClick++;

    const params = {
        actions: ACTIONS,
        totalClick,
        userMoney: userMoney,
        onError: function (index: number, actions: typeActions[]): void {
            console.log(index, actions);
        },
        onSuccess: function (totalClick: number): void {
            disableClickButton($button, handleClick);
            console.log('Te has convertido en millonario al hacer un total de: ', totalClick, ' clicks');
        },
    };

    userMoney = playTheGame(params);

    updateUserMoneyText($userMoneyText, userMoney);
});