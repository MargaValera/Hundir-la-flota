import { hundir } from './hundir'

export const comprobar = (array, dato) => {
  let hundido = true
  for (const fila of array) {
    if (fila.includes(dato)) {
      hundido = false
    }
  }
  if (hundido) {
    hundir(dato, array)
  }
}
