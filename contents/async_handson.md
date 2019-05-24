# JavaScript の非同期処理 演習

## 目的

- 非同期処理の基礎を知る
  - 概念を知らないと結構難しいので、演習問題ができなくても大丈夫
  - なぜ必要なのか、どのような解決方法があるのかを知っておく

## 非同期処理はなぜ必要か？

- 一言でいえば、より良い UX を提供するため
  - ボタンをクリックしたのに、何も反応がなく不安になる
  - 反応がないどころか、10 秒固まってしまいフリーズしたと思う
- C や Java ならマルチスレッドを利用できるが、JavaScript は **基本的に** シングルスレッドである。どうするか？
  - 補足: 近年モダンブラウザでは、マルチスレッドを実現する方法が提供されている。興味がある人は、`WebWorker`, `ServiceWorker` というキーワードで調べてみると良い。

### 同期処理

```js
const onClick = () => {
  const result = execVerySlowProcess(); // ここでブロックしてしまう
  console.log('sync'); // execVerySlowProcess の処理が完了したら 'sync' が表示される
  console.log(result);
};
```

### 非同期処理

```js
const onClick = () => {
  execSlowProcessAsync(); // ここでブロックしない
  console.log('async'); // ユーザの感覚的には、クリック後、即座に 'async' が表示される
  // console.log(result); // 同期の例とは異なり、関数の実行結果は参照できないがどうする？
};
```

- ブロックすることが問題なら、ブロックさせなければいいじゃない
- 実際の処理は、バックグラウンドで行う
- ただし、非同期処理の場合、戻り値で処理の結果を受け取ることができない
  - 同期処理の例では、関数の戻り値で `result` を受け取っていたが、非同期処理ではどう実現すれば良いか？
- 本章では、これを実現するための方法として、`コールバック`, `Promise`, `async await` という 3 つの方法を紹介する。

## コールバック

```js
setTimeout(() => {
  console.log('Hello world!!'); // 1000[ms] 後に 'Hello world!!' が表示される
}, 1000);

// nodejs で HTTP リクエストし、結果を受け取る例 (実際に Webアプリではこういう書き方はしないので、あくまで参考として)
request('http://weather.livedoor.com/forecast/webservice/json/v1?city=130010', (error, response, body) => {
  console.log(error);
  console.log(response);
  console.log(body);
});
```

- 他言語でもおなじみの最もシンプルな仕組み。C 言語でも多用される。
- 非同期に処理される関数の引数に、コールバック関数を渡す
- 非同期関数の処理結果は、コールバック関数の引数で受け取る
  - タイマー例は、単なるタイマーなので結果がない、そのため引数も空
  - nodejs の HTTP リクエストの例は、GET した結果を `error`, `response`, `body` という引数で受け取っている
- 非同期処理が連鎖しなければ、シンプルで良い
- **連鎖する場合、とても辛い思いをすることになる**

### Ex7. コールバック演習

- 次のコードを拡張し、以下の要件を満たすように実装してください。
  - 1 秒後に `'Hello'` を出力
  - さらに 3 秒後に `'World'` を出力
  - さらに 2 秒後に `'!'` を出力
  - さらに 1 秒後に `'!'` を出力
- 出力先は、標準出力を利用してください。
- インデントは、適切に使用してください。

```js
setTimeout(() => {
  console.log('Hello');
}, 1000);
```

#### 実行方法

```sh
$ node exercise7.js
# Hello  (1秒後)
```

### コールバック演習まとめ

- あぁ、[インデントが深く](https://s3-ap-northeast-1.amazonaws.com/cdn.bibi-star.jp/production/imgs/images/000/037/019/original.jpg?1529479769)なっていく…
  - 通称：コールバック地獄 (callback hell)
  - ググるといっぱい情報が出てくる
- コールバック地獄となるケースは、そんなにあるのか？
  - 普通にある
  - 先の演習は、実用性のない例であるが、HTTP リクエストを組み合わせると頻出する
    - 例えば、ある URL から情報を GET して、その情報を元にさらにリクエストを投げるなど

## Promise

```js
fetch('http://weather.livedoor.com/forecast/webservice/json/v1?city=130010') // 東京の天気情報を JSON 形式で返す API
  .then(response => response.json())
  .then(json => console.log(json.description));
```

- コールバック地獄を解決する一つの手段
- `then` を使って連鎖を表現する
  - `then` に渡すコールバック関数が Promise を返すと、非同期処理を連鎖できる
  - `response.json()`も Promise を返す関数
- Promise は型なので、Promise を返すような関数を新たに作る必要がある。
  - 最近作られた非同期系の API は、Promise を返すようになっているものが多い
  - 例：[fetch 関数](https://developer.mozilla.org/ja/docs/Web/API/Fetch_API/Using_Fetch)

### Ex8. Promise 演習

- fetch で以下 URL から JSON を取得し、さらにその中に含まれる `followers_url` から JSON を取得してください。
  - https://api.github.com/users/diescake
- コールバック地獄になっている場合は、Promise を正しく利用できていない可能性があります

```js
import fetch from 'node-fetch'; // nodejs には fetch 関数は実装されていないため import して利用している

fetch('https://api.github.com/users/github')
  .then(response => response.json())
  .then(json => console.log(json));
```

#### 実行方法

```sh
$ node --experimental-modules exercise8.mjs
# { login: 'github',  id: 9919, avatar_url: 'https://avatars1.githubusercontent.com/u/9919?v=4', gravatar_id: '', …}
```

### Promise 演習まとめ

- Promise を完全に理解して、正しく使用するのは、割と難しい
  - 今回紹介していないが、エラーハンドリングも絡むとさらに複雑になる (通信にはエラーはつきもの)
  - 一歩間違えると、コールバック地獄と同じようなコードになる
- 複数の非同期処理を並列処理するなどの応用もある
  - [Promise.all](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all)
  - [Promise.race](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/race)
- コールバックを利用した非同期関数も Promise を返すようにラップすることができる
  - 余裕のある人は、`setTimeout` を Promise 化して、コールバック演習の課題を Promise で解決してみてください
  - ちなみに Promise 化した `setTimeout` 関数は `sleep` という名前がつけられることが多い印象です

## async await

```js
async function showTokyoWeather() {
  const response = await fetch('http://weather.livedoor.com/forecast/webservice/json/v1?city=130010');
  const json = await response.json();
  console.log(json.description);
}

showTokyoWeather();
```

- 手続き的に非同期処理をかける構文
- `await` で呼び出す関数は、Promise を返す必要がある
- `await` を使用する関数は、`async` をつける必要がある

### Ex9. async await 演習

- Promise 演習で作成したコードを `async await` で書き直してください。

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

#### 実行方法

```sh
$ node --experimental-modules exercise9.mjs
# { login: 'github',  id: 9919, avatar_url: 'https://avatars1.githubusercontent.com/u/9919?v=4', gravatar_id: '', …}
```

### async await 演習まとめ

- async await は非常に便利
  - 非同期処理を手続き的に記述できるため、ソースコードの見通しがよくなる
- async await は ES2017 で採用された仕様で、比較的新しいため、IE11 や古い Android 端末のブラウザなどレガシーブラウザのサポートが必要な場合は注意が必要
  - [Can I use async await ?](https://caniuse.com/#search=async%20await)
