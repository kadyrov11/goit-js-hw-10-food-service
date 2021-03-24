import menuCardData from "../menu.json"

import cardCreateFunc from '../template/menuTemplate.hbs'

const menuList = document.querySelector('.js-menu')
const menuCard = cardCreateFunc(menuCardData)

menuList.insertAdjacentHTML("beforeend", menuCard)