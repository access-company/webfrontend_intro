---
title: '第11章　値の同一性を理解する'
---

React は、`props`と`state`が変化した時に描画を更新する仕組みを持っています。
`props`と`state`の値の変化を正しく理解するには、**値の同一性** についての理解が欠かせません。

React 内部では、値の比較に `Object.is(value1, value2)`（[参照: MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Object/is)） という JavaScript API を使います。

後々、React コンポーネントの実装や Hooks API を扱う上で値の同一性を意識する場面がでてきます。値の同一性は、React を理解する上でも重要なポイントです。

それでは、それぞれの型において、値の比較を行った際の挙動の違いを見ていきます。
実際に、Node コマンドまたは、ブラウザの DevTools の Console で実際に動かしてみると理解が深まることでしょう。

# Primitive Type の値の比較

## string

```javascript
> Object.is('foo', 'foo')
true

> Object.is('foo', 'bar')
false
```

## number

```javascript
> Object.is(0, 0)
true

> Object.is(0, 1)
false
```

## boolean

```javascript
> Object.is(false, false)
true

> Object.is(false, true)
false
```

## null

```javascript
> Object.is(null, null)
true
```

## undefined

```javascript
> Object.is(undefined, undefined)
true
```

# 値の比較に注意が必要な型

Primitive Type とは異なって、
Object、Array、Function は、それぞれの単純な比較で同値にならない特性をもっています。

それぞれの型の動作を確認していきます。

## Object

```javascript
> Object.is({a: 1}, {a: 1})
false
```

```javascript
> const o0 = {a: 1}
> const o1 = {a: 1}
> Object.is(o0, o1)
false

> Object.is(o0, {...o0})
false

> const o2 = o0
> Object.is(o0, o2)
true
```

## Array

```javascript
> Object.is([], [])
false

> Object.is([0, 1], [0, 1])
false
```

```javascript
> const a0 = []
> const a1 = []
> Object.is(a0, a1)
false

> const a2 = a0
> Object.is(a0, a2)
true
```

## Function

```javascript
> Object.is(() => {}, () => {})
false
```

```javascript
> const f0 = () => {}
> const f1 = () => {}
> Object.is(f0, f1)
false

> const f2 = f0
> Object.is(f0, f2)
true
```

# Object.is()を使って比較する場面

- useState、useReducerによる状態の更新の検知
- useEffect、useMemo、useCallbackの依存配列内の値の変化の検知
  - useEffectは「第12章　副作用を実行する」で扱います。
  - useMemoとuseCallbackは「第14章　描画パフォーマンスの最適化」で扱います。
- memoのpropsの比較
  - React.memoは「第14章　描画パフォーマンスの最適化」で扱います。
