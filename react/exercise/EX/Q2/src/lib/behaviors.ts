// ゲームの振る舞いに関するメソッド群

import { DIGITS, RADIX } from '../constants';

export const MatchTypeWeight: { [type in MatchType]: number } = {
  default: -1,
  unused: 0,
  used: 1,
  matched: 2,
};

// 答えを生成するメソッド
export const generateAnswer = (): Array<string> => {
  // DIGITS 桁の空配列を作り、Array.prototype.map と Math.random で 0 ~ RADIX-1 の値を入れ込む
  return [...new Array(DIGITS)].map(() => `${Math.floor(Math.random() * RADIX)}`);
};

// 入力と答えを比較してマッチの結果を返すメソッド
export const compare = (input: Array<string>, answer: Array<string>): Array<MatchResult> => {
  if (input.length !== answer.length) {
    console.error('input.length is not matched to answer.length');
    console.error(`input.length: ${input.length}, answer.length: ${answer.length}`);
  }

  // answer 配列に含まれている各数字の index 値を mapping
  // ex) answer = [2, 4, 7, 2, 0]
  // indexMap = [
  //   [4], <- 0 が配列の4番目にある
  //   [], <- 1 は含まれていない
  //   [0, 3], <- 2 は配列の 0 番目と 3 番目にある
  //   [],
  //   [1], <- 4 が配列の1番目にある
  //   [],
  //   [],
  //   [2], <- 7 が配列の3番目にある
  //   [],
  //   []
  // ]
  const indexMap = ([...new Array(RADIX)] as FiniteArray<typeof RADIX, Array<string>>).map(
    (): Array<string> => []
  );

  answer.forEach((value, index) => {
    console.info(`value: ${value}, index: ${index}`);
    const answerValue = Number.parseInt(value);
    indexMap[answerValue].push(`${index}`);
  });

  // 重みの高い MatchType を優先して input と上記を比較して MatchType の配列を生成して返す
  // "matched": input の "value"(=v とする) に対応する indexMap の v番目に格納された配列の中に
  //            input の index が含まれていたら input(value,index) について "matched"
  const result = input.map((value, index): MatchResult => {
    const inputValue = Number.parseInt(value);
    if (indexMap[inputValue].includes(`${index}`)) {
      // 要素を取り除き、要素数を対応させる
      // indexMap に格納される index の値は小さい順で入っているので、ヒットしたら先頭を取り除けばよい
      indexMap[inputValue].shift();
      return { value: `${value}`, type: 'matched' };
    }
    return { value: `${value}`, type: 'unused' };
  });

  // "used": input の "value"(=v とする) に対応する indexMap の v番目に格納された配列の中に
  //         なんらかの要素が残っていれば "used"
  input.forEach((value, index) => {
    const inputValue = Number.parseInt(value);
    if (indexMap[inputValue].length !== 0 && result[index].type !== 'matched') {
      // 要素を取り除き、要素数を対応させる
      indexMap[inputValue].shift();
      result[index] = { value: `${value}`, type: 'used' };
    }
  });

  return result;
};

// すべての桁が 'matched' になったか確認する関数
export const isFullMatched = (result?: Array<MatchResult>): boolean => {
  if (!result || !result.length) {
    return false;
  }
  return result.every(({ type }) => type === 'matched');
};

// 数字別の MatchType 状況を反映させるために state を作り替える関数
export const updateButtonState = (
  result: Array<MatchResult>,
  buttons: Array<MatchType>
): Array<MatchType> => {
  return result.reduce((state, { type: nextType, value }): Array<MatchType> => {
    if (nextType && value) {
      const index = Number.parseInt(value, RADIX);
      const prevType = state[index] || 'default';
      // 重み付け
      const weightPrevType = MatchTypeWeight[prevType];
      const weightNextType = MatchTypeWeight[nextType || 'default'];
      // より weight が大きい MatchType を採用する
      if (weightPrevType < weightNextType) {
        state[index] = nextType;
      }
    }
    return state;
  }, Array.from(buttons));
};
