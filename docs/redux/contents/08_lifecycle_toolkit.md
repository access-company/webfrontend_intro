# 8. redux toolkit

- *Up: [目次](../index.md)*
- *Back: [7. reduxライフサイクル - store](./07_lifecycle_store.md)*
- *Next: [9. reduxライフサイクルの実例](./09_lifecycle_example.md)*

## 概要

redux toolkit は reduxにあるルールを導入するためのライブラリである。

## 目的

毎回実装するコード（ボイラープレート）を減らす。

## 方法

reducerはactionを受け付けるインターフェースなので
actionとreducerをまとめて定義することができる。
これをsliceという。

## sliceの構成

1. sliceを定義する

- `name`: sliceの名前
- `initialState`: storeの初期状態
- `reducers`: actionとreducerの定義
  - key: actionの名前
  - value: 純関数(reducer)

src/slices/authors/index.ts:
```ts
export interface AuthorsState {
  value: Author[];
}

const initialState: AuthorsState = {
  value: [],
};

export const authorsSlice = createSlice({
  name: 'authors',
  initialState,
  reducers: {
    fetchAuthorsSync: (state, action) => {
      state.value = action.payload;
    }
  },
});
```

2. actionとreducerをexportする
```ts
const { actions, reducer } = authorsSlice;

export const { fetchAuthorsSync } = actions;

export default reducer;
```

3. store(global state)の定義にreducerを登録する

src/app/store.js:
```ts
import { configureStore } from '@reduxjs/toolkit';

import authorsReducer from '../slices/authors';

export const store = configureStore({
  reducer: {
    authors: authorsReducer,
  },
});
```
