import Parser from './index'

describe('helper/formulaParser', () => {
  describe('calc', () => {
    it('should calculate the formula stuck', () => {
      expect(Parser.calc('1 + 2'.split(/\s/))).toBe(3)
      expect(Parser.calc('1 + 2 * 5 - 3'.split(/\s/))).toBe(8)
      expect(Parser.calc('( 3 + 4 ) * ( 1 - 2 )'.split(/\s/))).toBe(-7)
      expect(Parser.calc('( ( 30 + 14 * 2 + 8 - 6 ) / ( 1 - 9 ) * 5 ) + 7 + 0.5'.split(/\s/))).toBe(-30)
    })
  })
});