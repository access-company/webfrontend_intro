## JavaScript の非同期処理

- 非同期処理はなぜ必要か？
- 非同期処理の実装例
- コールバック
- Promise
- async await

### 非同期処理はなぜ必要か？

- 何かがクリックされた時に、時間のかかる処理をさせると...
  - ユーザーはクリックしたのに、何も反応がなくイラつく
  - 反応がないどころか、10 秒固まってしまい、壊れたと思う
  - サービスを使わなくなる
- C や Java ならマルチスレッドで回避できるが、JavaScript はシングルスレッド。どうするか？

#### 同期処理

```js
const onClick = () => {
  const result = execVerySlowProcess(); // ここで処理をブロック
  console.log('sync'); // クリック後、しばらくしてから 'sync' が表示される
};
```

#### 非同期処理

```js
const onClick = () => {
  execSlowProcessAsync(); // ここでブロックしない
  console.log('async'); // クリック後、即座に 'async' が表示される
};
```

- ブロックすることが問題なら、ブロックさせなければいい
- 実際の処理は、バックグラウンドで行う
- ただし、戻り値で処理の結果を受け取ることができない
  - 先の例では、関数の戻り値で結果を受け取っていた
- どのように結果を受け取れば良いか？

### コールバック

```js
setTimeout(() => {
  console.log('Hello world!!'); // 1000[ms] 後に 'Hello world!!' が表示される
}, 1000);
```

- 非同期に処理される関数にコールバック関数を渡すパターン
- 結果は、コールバック関数の引数で受け取る
  - 例は、タイマーなので結果がない、そのため引数も空
- 例：タイマー、HTTP リクエスト、ファイルアクセスなど
- 非同期処理が連鎖しなければ、シンプルで良い
- _連鎖する場合、困ったことが起こる_

#### Ex7. コールバック演習

- 演習問題
  - 次のコードを拡張し、以下の要件を満たすように実装してください。
    - 1 秒後に 'Hello' を出力
    - さらに 3 秒後に 'World' を出力
    - さらに 2 秒後に '!' を出力
    - さらに 1 秒後に '!' を出力
  - 出力先は、標準出力を利用してください。
  - インデントは、適切に使用してください。
- 実行方法
  ```sh
  $ node exercise7.js
  # Hello  (1秒後)
  ```

```js
setTimeout(() => {
  console.log('Hello');
}, 1000);
```

#### コールバック演習まとめ

- インデントがどんどん深く。。
  - 通称：コールバック地獄
  - ググるといっぱい情報が出てくる
- 地獄になるケースは、そんなにあるのか？
  - ある
  - 先の例は、簡単のために用意したもの。HTTP リクエストを組み合わせると、頻出度は高い。
    - ある URL から情報を取得して、その情報を元にさらにリクエストを投げるなど

### Promise

```js
fetch('http://example.com/movies.json')
  .then(response => response.json())
  .then(myJson => console.log(myJson));
```

- コールバック地獄を解決する一つの手段
- .then を使って連鎖を表現する
  - then に渡すコールバック関数が Promise を返すと、非同期処理を連鎖できる
  - `response.json()`も Promise を返す関数
- Promise は型なので、Promise を返すような関数を新たに作る必要がある。
  - 最近作られた非同期系の API は、Promise を返すようになっているものが多い
  - 例：[fetch 関数](https://developer.mozilla.org/ja/docs/Web/API/Fetch_API/Using_Fetch)

#### Ex8. Promise 演習

- 演習問題
  - fetch で以下 URL から JSON を取得し、さらにその中に含まれる followers_url から JSON を取得してください。
    - http://tama.tok.access-company.com/user/soichiro.isobe/training/fetch/users/github.json
  - コールバック地獄になっている場合は、Promise を正しく利用できていない可能性があります
- 実行方法
  ```sh
  $ node --experimental-modules exercise8.mjs
  # { login: 'github',  id: 9919, avatar_url: 'https://avatars1.githubusercontent.com/u/9919?v=4', gravatar_id: '', …}
  ```

```js
import fetch from 'node-fetch';

fetch('https://api.github.com/users/github')
  .then(response => response.json())
  .then(myJson => console.log(myJson));
```

#### Promise 演習まとめ

- Promise を正しく使用するのは、意外と難しい
  - 今回紹介していないが、エラーハンドリングも絡むとさらに複雑になる
- 一歩間違えると、コールバック地獄と同じようなコードになる
- 複数の非同期処理を並列処理するなどの応用もある
  - Promise.all
  - Promise.race
- Promise を返さない関数も Promise 化することができる
  - 余裕のある人は、setTimeout を Promise 化して、コールバック演習の課題を Promise で解決してみてください

### async await

```js
async function fetchMovieJson() {
  const res = await fetch('http://example.com/movies.json');
  const myJson = await res.json();
  console.log(myJson);
}

fetchMovieJson();
```

- 手続き的に非同期処理をかける構文
- await で呼び出す関数は、Promise を返す必要がある
- await を使用する関数は、async をつける必要がある

#### Ex9. async await 演習

- 演習問題
  - Promise 演習で作成したコードを async await で書き直してください。
- 実行方法
  ```sh
  $ node --experimental-modules exercise9.mjs
  # { login: 'github',  id: 9919, avatar_url: 'https://avatars1.githubusercontent.com/u/9919?v=4', gravatar_id: '', …}
  ```

```js
import fetch from 'node-fetch';

async function fetchFollowers() {
  const url = 'https://api.github.com/users/github';
  const usersResponse = await fetch(url);
  const users = await usersResponse.json();
  console.log(users);
}

fetchFollowers();
```

#### async await 演習まとめ

- async await は非常に便利
- async await は最新の仕様であるため、使用できない場合も多いので注意
