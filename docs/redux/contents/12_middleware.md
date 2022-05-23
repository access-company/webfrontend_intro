# 12. middleware

- *Up: [目次](../index.md)*
- *Back: [11. 基本演習2 - counterアプリ(非同期処理)](./11_exercise_02_counter_app_async.md)*
- *Next: [13. web開発とredux](./13_web_app_development.md)*

## 概要

reduxのmiddlewareについて説明する。

## 定義

`middleware`は、`dispatch`を受け取って別の`dispatch`を返す関数である。

## 役割

`middleware`は`store.dispatch`に仕事を追加する。

本来の`store.dispatch`は、`action`を1回実行した時点で完了し、そのままreduxライフサイクルが進む。

`store`に`middleware`を追加すると`store.dispatch`の性質が変化する。

外部サービスと通信したり、複数の`action`を連鎖的に実行したり、実行を遅らせたりすることができる。

![](./redux_lifecycle_middleware.png)
