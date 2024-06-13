import * as xlsx from 'xlsx';
import excelFile from '../../static/BunkerCards.xlsx';
import store from '../store';


export const SET_CARDS_OBJECT = "cards/SET_CARDS_OBJECT";
export const SET_USED_CARDS = "cards/SET_USED_CARDS";
export const SET_DISASTER_CARD = "cards/SET_DISASTER_CARD";
export const SET_PLAYERS_CARDS = "cards/SET_PLAYERS_CARDS";

const codeString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const playerCardsIds = {
    disaster: 0,
    profession: 1,
    health: 2,
    sexAge: 3,
    skills: 4,
    personality: 5,
    hobby: 6,
    fears: 7,
    actionOne: 8,
    actionTwo: 9
};
const playerCardsKeys = {
    0: 'disaster',
    1: 'profession',
    2: 'health',
    3: 'sexAge',
    4: 'skills',
    5: 'personality',
    6: 'hobby',
    7: 'fears',
    8: 'actionOne',
    9: 'actionTwo'
};

export default  function getCards() {
    return (dispatch) => {
        var result = {};
        var request = new XMLHttpRequest();
        request.open('GET', excelFile, true);
        request.responseType = "arraybuffer";
        request.onload = function () {
            var data = new Uint8Array(request.response);
            var arr = [];
            for (var i = 0; i !== data.length; ++i) arr[i] = String.fromCharCode(data[i]);
            data = arr.join("");

            const workbook = xlsx.read(data, { type: "binary" })
            workbook.SheetNames.forEach(sheetName => (result[sheetName] = xlsx.utils.sheet_to_json(workbook.Sheets[sheetName], { header: 1 })));
            dispatch({
                type: SET_CARDS_OBJECT,
                payload: result,
            })
        };
        request.send();
    };
};

export function setCardsObject(value) {
    return (dispatch) => {
        return {
            type: SET_CARDS_OBJECT,
            payload: value,
        };
    }
}

export function setPlayersCards(value) {
    return {
        type: SET_PLAYERS_CARDS,
        payload: value,
    };
}

export function swapTwoPlayersCards(key, indexOne, indexTwo) {
    return (dispatch) => {
        const playersCards = store.getState().cards.playersCards;
        let storage = playersCards[indexOne][key];
        playersCards[indexOne][key] = playersCards[indexTwo][key];
        playersCards[indexTwo][key] = storage;
        dispatch({
            type: SET_PLAYERS_CARDS,
            payload: playersCards,
        });
    }
}

export function cureFear(index) {
    return (dispatch) => {
        const playersCards = store.getState().cards.playersCards;
        playersCards[index]['fears'] = 0;
        dispatch({
            type: SET_PLAYERS_CARDS,
            payload: playersCards,
        });
    }
}

export function cureHealth(index) {
    return (dispatch) => {
        const playersCards = store.getState().cards.playersCards;
        playersCards[index]['health'] = 1;
        dispatch({
            type: SET_PLAYERS_CARDS,
            payload: playersCards,
        });
    }
}

export function swapAllPlayersCards(key) {
    const playersCards = store.getState().cards.playersCards;
    let arrayLenght = playersCards.length;
    let storageLast = playersCards[0][key];
    playersCards.forEach((player, index) => {
        if (index === (arrayLenght - 1)) {
            player[key] = storageLast;
        } else {
            player[key] = playersCards[index + 1][key];
        }
    });
    setPlayersCards(playersCards);
}

export function generatePlayersCards(value) {
    return (dispatch) => {
        let generatedArray = [];
        for (let i = 0; i < value; i++) {
            let cardsSet = {}
            Object.keys(playerCardsIds).forEach(function (key) {
                if (key === "actionOne" || key === "actionTwo") {
                    cardsSet[key] = generateCard(key);
                } else if (key === "disaster") {
                    cardsSet[key] = generateCard(key);
                } else {
                    cardsSet[key] = generateCard(key);
                }
            });
            generatedArray.push(cardsSet);
        }


        store.dispatch({
            type: SET_PLAYERS_CARDS,
            payload: generatedArray,
        })
    };
};

function generateCard(key) {
    let cardId;
    const cardsObject = store.getState().cards.cardsObject;
    const usedCards = store.getState().cards.usedCards;
    const disasterCard = store.getState().cards.disasterCard;

    if (key === "actionOne" || key === "actionTwo") {
        do {
            cardId = Math.floor(Math.random() * cardsObject['actions'].length);
        } while (usedCards["actions"].includes(cardId));
        usedCards["actions"].push(cardId);
    } else if (key === "disaster") {
        if (disasterCard) {
            cardId = disasterCard;
        } else {
            cardId = Math.floor(Math.random() * cardsObject[key].length);
            usedCards[key].push(cardId);
            store.dispatch({
                type: SET_DISASTER_CARD,
                payload: cardId,
            })
        }
    } else {
        do {
            cardId = Math.floor(Math.random() * cardsObject[key].length);
        } while (usedCards[key].includes(cardId));
        usedCards[key].push(cardId);
    }

    store.dispatch({
        type: SET_USED_CARDS,
        payload: usedCards,
    })

    return cardId;
};

export function generateOneCard(key, userIndex) {
    return (dispatch) => {
        let cardId;
        const cardsObject = store.getState().cards.cardsObject;
        const usedCards = store.getState().cards.usedCards;
        const playersCards = store.getState().cards.playersCards;

        if (key === "actionOne" || key === "actionTwo") {
            do {
                cardId = Math.floor(Math.random() * cardsObject['actions'].length);
            } while (usedCards["actions"].includes(cardId));
            usedCards["actions"].push(cardId);
        } else {
            do {
                cardId = Math.floor(Math.random() * cardsObject[key].length);
            } while (usedCards[key].includes(cardId));
            usedCards[key].push(cardId);
        }

        playersCards[userIndex][key] = cardId;

        dispatch({
            type: SET_PLAYERS_CARDS,
            payload: playersCards,
        })

        dispatch({
            type: SET_USED_CARDS,
            payload: usedCards,
        })
    }
};

export function generateOneCardForAll(key) {
    return (dispatch) => {
        let cardId;
        const cardsObject = store.getState().cards.cardsObject;
        const usedCards = store.getState().cards.usedCards;
        const playersCards = store.getState().cards.playersCards;

        playersCards.forEach((player, index) => {
            if (key === "actionOne" || key === "actionTwo") {
                do {
                    cardId = Math.floor(Math.random() * cardsObject['actions'].length);
                } while (usedCards["actions"].includes(cardId));
                usedCards["actions"].push(cardId);
            } else {
                do {
                    cardId = Math.floor(Math.random() * cardsObject[key].length);
                } while (usedCards[key].includes(cardId));
                usedCards[key].push(cardId);
            }

            playersCards[index][key] = cardId;
        })

        dispatch({
            type: SET_PLAYERS_CARDS,
            payload: playersCards,
        })

        dispatch({
            type: SET_USED_CARDS,
            payload: usedCards,
        })
    }
};

function numToChar(num) {
    return codeString.charAt(num);
};

export function codeValues(codesObject) {
    let codesArray = [];
    let codesString = '';
    Object.keys(codesObject).forEach(function (key) {
        codesArray[playerCardsIds[key]] = numToChar(codesObject[key]);
    });
    codesString = codesArray.join('');
    return codesString;
}

function charToNum(char) {
    return codeString.indexOf(char);
}

export function decodeValues(codesString) {
    let codesArray = codesString.split('');
    let codesObject = {};
    codesArray.forEach(function (val, index) {
        codesObject[playerCardsKeys[index]] = charToNum(val)
    });
    return codesObject;
};

export function getCardValue(key, index) {
    let cardsObject = store.getState().cards.cardsObject;
    let cardValue = '';
    if (key === "actionOne" || key === "actionTwo") {
        cardValue = cardsObject['actions'][index];
    } else {
        cardValue = cardsObject[key][index];
    }
    return cardValue;
};

export function getCardsValues(playerCardsArray) {
    let playerCardsValue = {}
    Object.keys(playerCardsArray).forEach(function (key) {
        playerCardsValue[key] = getCardValue(key, playerCardsArray[key]);
    });
    return playerCardsValue;
};