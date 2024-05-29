import {
  OPORTUNIDADES,
  oportunidadesHTML,
  setOportunidades
} from '../HundirFlotar/hundirFlota'
import { comprobar } from './comprobarHundir'
import { comprobarPerdida } from './comprobarPerder'
// import { setOportunidades } from '../HundirFlotar/hundirFlota'

export const seleccionarCasilla = (
  elemento,
  dato,
  array,
  fila,
  columna,
  funcionListener
) => {
  elemento.removeEventListener('click', funcionListener)

  if (dato) {
    const clase = `num${dato}`
    elemento.classList.add('barco', clase)
    array[fila][columna] += 'tocado'
    comprobar(array, dato)
  } else {
    elemento.classList.add('agua')
    setOportunidades(OPORTUNIDADES - 1)
    oportunidadesHTML.textContent = `Intentos: ${OPORTUNIDADES}`
    comprobarPerdida(OPORTUNIDADES)
  }
}
