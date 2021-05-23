export const initialColorFilter = {
  RED: true,
  BLUE: true,
  GREEN: true,
}
export const colors = Object.keys(initialColorFilter)

export type Color = keyof typeof initialColorFilter
export type ColorFilter = typeof initialColorFilter
