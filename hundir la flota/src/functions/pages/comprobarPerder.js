import { OPORTUNIDADES } from '../HundirFlotar/hundirFlota'
import { reiniciar } from './reiniciar'

export const comprobarPerdida = () => {
  if (OPORTUNIDADES === 0) {
    setTimeout(() => {
      alert('Has perdido el juego')
      reiniciar()
    }, 100)
  }
}
