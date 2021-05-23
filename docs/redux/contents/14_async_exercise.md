# 非同期処理演習

- *Back: [middleware](./13_middleware.md)*
- *Next: [発展演習](./15_extra_exercise.md)*

代表的な非同期処理として、サーバーとの通信に依存した状態管理を実装する

## 要件

TODOがなくて暇なときのために、「暇つぶし」を1件ずつインポートできるようにしたい。

boredapi.com が提供するAPIを使いたい。

## 実装方針

非同期な`importTodo` action creatorを実装する

以下の 1-1, 1-2, 2 の3つの処理を`Promise`または`async/await`でチェーンさせる。

- 1. [Fetch APIの利用例](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#:~:text=http://example.com/movies.json)に従って、JSON APIからTODOを取得する
  - 1-1. https://www.boredapi.com/api/activity/ にGETリクエストを発行する
  - 1-2. レスポンスをJSONオブジェクトに変換する
- 2. 同期処理の`addTodo action`を`dispatch`する
  - レスポンスの形式は`{ activity: string, … }`である
  - `addTodo` action creator に`activity`を渡して、 `addTodo` actionを生成する。
