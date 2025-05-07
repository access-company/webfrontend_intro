# はじめに

Google 拡張機能を作成する問題案です。
TypeScript の問題が早く終了する受講者がいる場合の暇つぶし用として作成しました。

## TODO

- `reduce`, `map` など、利用頻度が高いものを問題としたものをつくりたい

## 目次

- [Q1. 型定義をする](#q1-型定義をする)
- [Q2. インターフェースの継承を使ってみる](#q2-インターフェースの継承を使ってみる)
- [Q3. 三項演算子を使ってリファクタリングしてみる](#q3-三項演算子を使ってリファクタリングしてみる)
- [Q4. 登録日を表示してみる](#q4-登録日を表示してみる)
- [Q5. 削除ボタン機能を作成してみる](#q5-削除ボタン機能を作成してみる)
- [Q6. forEach()を使ってブックマーク一覧を表示してみる](#q6-foreachを使ってブックマーク一覧を表示してみる)
- [Q7. 新しいブックマークの作成](#q7-新しいブックマークの作成)
- [Q8. ブックマークの更新](#q8-ブックマークの更新)
- [Q9. 自由に改造してみよう](#q9-自由に改造してみよう)

## Q1. 型定義をする

`interface`を用いて型定義の作成をしてください。

```ts
// ブックマークの基本情報
interface BookmarkRecord {
  id: string;
  createdAt: Date;
}

// ブックマークのリソース情報
// TODO title, urlを定義する
interface BookmarkResource {}

// オプショナルなプロパティ
// TODO categoryを定義する
interface BookmarkOptionalInfo {}
```

## Q2. インターフェースの継承を使ってみる

`extends` あるいは `type` を用いて、Bookmark 全体の型定義をしてみてください。

```ts
// TODO Bookmarkの型定義をする
interface Bookmark =
// あるいは type = Bookmark =
```

## Q3. 三項演算子を使ってリファクタリングしてみる

下記のコードは、if else を多く用いているため、かなり煩雑です。
三項演算子を使って修正してください。

```ts
// localStorage からデータを読み込む関数
const loadBookmarks = (): Bookmark[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  if (data) {
    return JSON.parse(data, (key, value) => {
      if (key === 'createdAt') {
        return new Date(value);
      }
      return value;
    });
  } else {
    return [];
  }
};
```

## Q4. 登録日を表示してみる

`renderCategory()` 関数を参考にして、`renderRegistrationDate()` 関数を作成してください。

```ts
const renderRegistrationDate = (createdAt: Date, title: HTMLElement) => {};
```

## Q5. 削除ボタン機能を作成してみる

「削除」と書かれたボタンを登録日の右側に作成したいです。
`addEventListener` を用いて、削除ボタンの機能を作成してください。

```ts
const renderDeleteButton = (bookmarkId: string, parent: HTMLElement) => {
  const deleteButton = createElement<HTMLButtonElement>('button', {
    textContent: '削除',
  });
  deleteButton.style.marginLeft = '10px';
  deleteButton.addEventListener('click', () => {});
  parent.appendChild(deleteButton);
};
```

## Q6. forEach()を使ってブックマーク一覧を表示してみる

ブックマーク一覧を表示したいです。今まで作った関数を使って、表示してみてください。

```ts
// ブックマークを一覧表示する関数
const renderBookmarks = (bookmarks: Bookmark[]): void => {
  bookmarkList.innerHTML = '';
  const fragment = document.createDocumentFragment();
  // TODO forEachを使ってブックマークリストの要素を表示してみよう
  bookmarks.forEach((bookmark) => {
    // タイトルとURLのリンクを作成
    const listItem = createElement<HTMLLIElement>('li');
    const link = createElement<HTMLAnchorElement>('a', {
      href: bookmark.url,
      target: '_blank',
      textContent: bookmark.title,
    });

    listItem.appendChild(link);
    // TODO カテゴリがあったらカテゴリを表示してみよう

    // TODO 登録日時の表示

    // TODO 削除ボタンの作成

    fragment.appendChild(listItem);
  });

  bookmarkList.appendChild(fragment);
};
```

## Q7. 新しいブックマークの作成をしてみる

id にランダムな UUID、createdAt には Date 関数を用いて、新しいブックマークを作成してください

<details><summary>ランダムなUUIDを作成するヒント</summary>

[Crypto](https://developer.mozilla.org/ja/docs/Web/API/Crypto)を使ってみましょう

</details>

```ts
// 新しいブックマークの作成
const newBookmark: Bookmark = {};
```

## Q8. ブックマークの更新をしてみる

スプレッド演算子と、Q7 で作成した newBookmark を用いて、ブックマークをアップデートしてください

```ts
const updatedBookmarks = [];
```

## Q9. 自由に改造してみよう

ブックマークリスト拡張機能が作成できたら、自由に改造してみよう。
例：フィルタリング機能をつけてみる、カテゴリごとに色で分けてみるなど
