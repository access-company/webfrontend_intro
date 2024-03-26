# Chrome 開発者ツールの主な使い方

Web ブラウザの Google Chrome で「表示 → 開発/管理 → デベロッパーツール」(F12、`command + option + i`)を押すと開発者ツールが表示されます。

そこで、開発者にとって非常に有用なそのツールのなかで、特に利用頻度の高い機能と簡単な用途について説明します。

※説明画像は、すべて Twitter を開いたときのものとなります。

## Elements

- 開発者ツールを開くと、デフォルトで Elements タブが選択されます。HTML、CSS のコードを表示し、編集できます。
- HTML を編集
  - 左端の「Select an element」ボタン（矢印アイコン、`command + shift + c`）をクリックし、Web ページ上の要素を選択すると、Elements タブでその要素がハイライトされ、その要素の HTML コードが表示されます。
    そこで、右クリックで「Edit as HTML」を選択すると、HTML コードを編集できます。
- CSS を編集
  - 左端の「Select an element」ボタン（矢印アイコン）をクリックし、Web ページ上の要素を選択すると、その HTML タグの Style が開発者ツールの右ペインに表示されます。
    そこで、各プロパティの値を編集できます。さらに、新たにプロパティを追加できます。

<img width="1661" alt="elements" src="https://user-images.githubusercontent.com/70614554/235631908-fa454bd6-873f-4ec8-ac49-bea59897d20c.png" />

## Console

- JavaScript の実行やデバッグ、エラーメッセージの確認ができます。
- 開発コードの `console.log()` などのコンソールコマンドの結果が表示されます。
- JavaScript のコードを入力して Enter キーを押すと、そのコードがリアルタイムで実行されます。
- 多くの開発者が、Console を開きながら開発を進めています。

<img width="1666" alt="console" src="https://user-images.githubusercontent.com/70614554/235632222-d1767246-de48-4f3f-a967-5c557177969b.png" />

## Sources

- Web ページに関連するファイルがツリー構造で表示されます。
- JavaScript のデバッグを行います。
  - `command + p` でデバッグ対象のファイルを選択します。
  - デバッグを行うためのブレークポイントを設定するには、コードの行番号をクリックして、青いマーカーが表示されるまで待ちます。ブレークポイントが設定されると、コードがその行で一時停止し、変数の値やコールスタック(処理の流れ)を確認できます。
  - デバッグ中に、上部のツールバーにある実行コントロールボタン（再生、一時停止、ステップオーバー、ステップイン、ステップアウトなど）を使って、コードの実行をコントロールできます。

### 実行コントロールボタンについて

- pause script execution - F8：スクリプト一時停止。
- resume script execution - F8 : スクリプトを再生。
- step over next function call - F10 : 関数等の呼び出しをスキップする動作。ステップオーバー。
- step into next function call - F11 : 関数呼び出しの内部へ移動してさらにステップ実行を続ける動作。ステップイン。
- step out next function call - F11：ステップイン後の呼び出し元に戻るまで一気に実行する動作。ステップアウト。
- step - F9 : 次の処理を実行し、カーソルを進める。ステップ実行。

なお、デバッグするためには sourcemap を設定します。sourcemap を設定するとコンパイル前のファイルが扱えますが、通常は開発環境の場合のみ設定されています。

<img width="1664" alt="sources" src="https://user-images.githubusercontent.com/70614554/235632292-cbc16642-d574-4b4d-b5b2-3cdddede715e.png" />

## Network

- Web ページに関連するリソースや通信の情報を確認、分析、デバッグできます。
- Web ページに関連するリソース（HTML、CSS、JavaScript、画像、フォントなど）が順々に読み込まれる状態をリスト形式で表示されます。
- Fetch した結果が表示されます。
  - `Fetch/XHR` タブを選択すると Fetch した結果が表示されます。
    例えば WebAPI を Request した結果の Response を確認することができます。その他に URL、応答ステータスコード、応答ヘッダー、リソースのプレビュー、応答時間なども確認できます。

<img width="1665" alt="network" src="https://user-images.githubusercontent.com/70614554/235632371-99f8ddb0-9623-460d-8ed5-2b77dd8eb003.png" />

## Application

- Web ページに関連する Local Storage や Cookie、Cache、そしてマニフェストなどの情報を確認、編集、デバッグできます。
- 特に Local Storage の値を確認、編集することが多いです。それは Web アプリケーションを実行する上で、それらの値を参照するためです。

<img width="1663" alt="application" src="https://user-images.githubusercontent.com/70614554/235632464-a65233f9-a353-404b-a171-6b3a5f678af0.png" />

## Lighthouse

- Web ページの品質を評価します。パフォーマンス、アクセシビリティ、ベストプラクティス、SEO、プログレッシブウェブアプリ（PWA）など、さまざまなカテゴリで Web ページを分析し、改善点が表示されます。
- 分析対象の項目を選択した後、「Analyze page load」ボタンをクリックするとページを分析し、レポートが生成されます。
  レポートには各カテゴリのスコアが表示されて、具体的な改善点と推奨される対策が提案されます。

<img width="1666" alt="ligthhouse" src="https://user-images.githubusercontent.com/70614554/235632507-de2acb93-6898-4312-aaf3-8b1640ba1df4.png" />

## Redux

- 利用するには Chrome 拡張機能「[Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=ja)」を install します。
- Redux を使った JavaScript アプリケーションの状態管理をデバッグできます。
- 左ペインで Action を選択すると、アプリケーションで dispatch された Action のリストが表示されます。Action が dispatch された時点のアプリケーションの状態や、状態の変化を順番に追ってデバッグできます。
- 右ペインの Action タブで、左ペインで選択した Action の type や payload の情報を確認できます。
- 右ペインの State タブで、左ペインで選択した Action 時の Store の State を確認できます。
- 右ペインの Diff タブで、左ペインで選択した Action によって状態がどのように変更されたかを確認できます。変更前後の state を比較して、reducer が正しく機能しているかを確認できます。

<img width="1660" alt="redux" src="https://user-images.githubusercontent.com/70614554/235632558-121696b1-25f2-4875-ab75-6aafb1b7a3ed.png" />

## Components

- 利用するには Chrome 拡張機能「[React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=ja)」を install します。
- React のコンポーネントの階層構造をツリー上で視覚的に確認できます。
- コンポーネントツリー内の特定のコンポーネントを選択すると、そのコンポーネントの state や props を確認できます。
- 左ペインの右上の「設定」アイコンをクリックして、「Highlight updates when components render.」をチェックすると、画面表示や UI 操作によってレンダリングされた Component を確認できます。

<img width="1668" alt="components" src="https://user-images.githubusercontent.com/70614554/235632603-972d5f8b-75e7-4770-b0fa-871c1057973b.png" />

以上となります。
簡単ではありますが、Chrome 開発者ツールで利用頻度の高い機能とその説明でした。
