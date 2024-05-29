import './hundirFlota.css'
import { pintarTablero } from '../pages/pintarTablero'

export let TABLERO = [
  [null, '3', '3', '3', null, null],
  [null, '5', null, null, null, null],
  ['2', '5', null, '4', null, null],
  ['2', '5', null, '4', null, null],
  [null, null, null, '4', null, '1'],
  ['5', '5', null, '4', null, null]
]

export const setTablero = (newValue) => {
  TABLERO = newValue
}

export const tableroHTML = document.createElement('div')
tableroHTML.classList.add('tablero')
document.body.append(tableroHTML)

export let OPORTUNIDADES = 5

export const setOportunidades = (value) => {
  OPORTUNIDADES = value
}

export const oportunidadesHTML = document.createElement('h2')
oportunidadesHTML.classList.add('oportunidades')
oportunidadesHTML.textContent = `Intentos: ${OPORTUNIDADES}`
document.body.append(oportunidadesHTML)

pintarTablero(TABLERO)
