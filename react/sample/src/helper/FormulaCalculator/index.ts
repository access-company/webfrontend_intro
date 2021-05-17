const priority: { [opeland: string]: number } = {
  '+': 2,
  '-': 2,
  '*': 3,
  '/': 3,
}

const isClosable = (formula: string): boolean => {
  const numStartBrace = formula.match(/[(]/g)?.length || 0
  const numEndBrace = formula.match(/[)]/g)?.length || 0
  return numStartBrace > numEndBrace
}
const isInteger = (value: string): boolean => /^[-]?([1-9]\d*|0)$/.test(value)
const isNumber = (value: string): boolean => /^[-]?([1-9]\d*|0)(\.\d+)?$/.test(value)
const isTypingNumber = (value: string): boolean => /^[-]?([1-9]\d*|0)?(\.\d*)?$/.test(value)

const isOpeland = (value: string): boolean => /[-+*/]/.test(value)

const getPriority = (opeland: string): number => priority[opeland] | 0

const compareOpeland = (queue: Array<string>, stuck: Array<string>, opeland: string): void => {
  const head = stuck.pop()
  if (!head) {
    return
  }
  if (getPriority(head) >= getPriority(opeland)) {
    queue.push(head)
    compareOpeland(queue, stuck, opeland)
  } else {
    stuck.push(head)
  }
}

// use Shunting-yard algorithm
const calculate = (inputQueue: Array<string>): number => {
  const parsedQueue: Array<string> = []
  const opelandStuck: Array<string> = []

  inputQueue.forEach((token: string) => {
    // For value
    if (isNumber(token)) {
      parsedQueue.push(token)
    } else if (isOpeland(token)) {
      compareOpeland(parsedQueue, opelandStuck, token)
      opelandStuck.push(token)
    } else if (token === '(') {
      opelandStuck.push(')')
    } else if (token === ')') {
      while (opelandStuck.length > 0) {
        const opeland = opelandStuck.pop()
        if (opeland) {
          if (opeland === token) {
            break
          }
          parsedQueue.push(opeland)
        }
      }
    }
  })

  const resultStuck: Array<number> = []

  while (opelandStuck.length > 0) {
    const opeland = opelandStuck.pop()
    if (opeland) {
      parsedQueue.push(opeland)
    }
  }

  parsedQueue.forEach((token: string) => {
    if (isNumber(token)) {
      if (/./.test(token)) {
        resultStuck.push(Number.parseFloat(token))
      } else {
        resultStuck.push(Number.parseInt(token, 10))
      }
    } else if (isOpeland(token)) {
      const b = resultStuck.pop()
      const a = resultStuck.pop()

      if (a === undefined || b === undefined) {
        throw new Error('Invalid formula')
      }
      switch (token) {
        case '+': {
          resultStuck.push(a + b)
          break
        }
        case '-': {
          resultStuck.push(a - b)
          break
        }
        case '*': {
          resultStuck.push(a * b)
          break
        }
        case '/': {
          resultStuck.push(a / b)
          break
        }
        default: {
          throw new Error('Invalid opeland token')
        }
      }
    }
  })

  const result: number | undefined = resultStuck.pop()

  if (result === undefined) {
    throw new Error('Calculate Failed')
  }

  return result
}

export default {
  calc: calculate,
  isClosable,
  isInteger,
  isNumber,
  isTypingNumber,
  isOpeland,
}
