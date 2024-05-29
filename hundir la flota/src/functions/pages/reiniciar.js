import {
  tableroHTML,
  setOportunidades,
  OPORTUNIDADES,
  oportunidadesHTML,
  setTablero
} from '../HundirFlotar/hundirFlota'
import { pintarTablero } from './pintarTablero'
import { TABLERO } from '../HundirFlotar/hundirFlota'

export const reiniciar = () => {
  setTablero([
    [null, '3', '3', '3', null, null],
    [null, '5', null, null, null, null],
    ['2', '5', null, '4', null, null],
    ['2', '5', null, '4', null, null],
    [null, '5', null, '4', null, '1'],
    [null, '5', null, '4', null, null]
  ])
  tableroHTML.innerHTML = ''
  pintarTablero(TABLERO)
  setOportunidades(5)
  oportunidadesHTML.textContent = `Intentos: ${OPORTUNIDADES}`
}
