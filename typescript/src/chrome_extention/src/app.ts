// // 問題

// // TODO: Q1. 型定義をする
// // ブックマークの基本情報
// interface BookmarkRecord {
//   id: string
//   createdAt: Date
// }

// interface BookmarkResource {}

// interface BookmarkOptionalInfo {}

// // TODO: Q2. インターフェースの継承を使ってみる
// interface Bookmark extends

// // ストレージキー
// const STORAGE_KEY = 'bookmark_list'

// // DOM要素の取得
// const bookmarkForm = document.getElementById('bookmark-form') as HTMLFormElement
// const titleInput = document.getElementById('title') as HTMLInputElement
// const urlInput = document.getElementById('url') as HTMLInputElement
// const categoryInput = document.getElementById('category') as HTMLInputElement
// const bookmarkList = document.getElementById(
//   'bookmark-list'
// ) as HTMLUListElement

// // DOM要素の作成
// const createElement = <T extends HTMLElement>(
//   tag: string,
//   options: Partial<T> = {}
// ): T => {
//   const element = document.createElement(tag) as T
//   Object.assign(element, options)
//   return element
// }

// // TODO: Q3. オプショナルチェーンを使って、リファクタリングしてみる
// // localStorage からデータを読み込む関数
// const loadBookmarks = (): Bookmark[] => {
//   const data = localStorage.getItem(STORAGE_KEY)
//   if (data) {
//     return JSON.parse(data, (key, value) => {
//       if (key === 'createdAt') {
//         return new Date(value)
//       }
//       return value
//     })
//   } else {
//     return []
//   }
// }

// // ブックマークを保存する
// const saveBookmarks = (bookmarks: Bookmark[]): void =>
//   localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarks))

// // カテゴリーの描画
// const renderCategory = (category: string, parent: HTMLElement) => {
//   const span = createElement<HTMLSpanElement>('span', {
//     textContent: ` [${category}]`,
//   })
//   parent.appendChild(span)
// }

// // TODO: Q4. 登録日を表示してみる
// const renderRegistrationDate = (createdAt: Date, parent: HTMLElement) => {}

// // TODO: Q5. 削除ボタンを作成してみる
// const renderDeleteButton = (bookmarkId: string, parent: HTMLElement) => {
//   const deleteBtn = createElement<HTMLButtonElement>('button', {
//     textContent: '削除',
//   })
//   deleteBtn.style.marginLeft = '10px'
//   deleteBtn.addEventListener('click', () => {})
//   parent.appendChild(deleteBtn)
// }

// // TODO: Q6. forEachを使って、ブックマークを表示してみる
// // ブックマークを一覧表示する
// const renderBookmarks = (bookmarks: Bookmark[]): void => {
//   bookmarkList.innerHTML = ''
//   // TODO forEachを使ってブックマークリストの要素を表示してみよう
//   bookmarks.forEach((bookmark) => {
//     // タイトルとURLのリンクを作成
//     const title = document.createElement('li')
//     const link = document.createElement('a')
//     link.href = bookmark.url
//     link.target = '_blank'
//     link.textContent = bookmark.title
//     title.appendChild(link)

//     // TODO カテゴリがあったらカテゴリを表示してみよう

//     // TODO 登録日時の表示

//     // TODO 削除ボタンの作成

//     bookmarkList.appendChild(title)
//   })
// }

// // 入力フォームのクリア
// const clearInputForm = () =>
//   [titleInput, urlInput, categoryInput].forEach((input) => (input.value = ''))

// // フォーム送信時の処理
// bookmarkForm.addEventListener('submit', (event) => {
//   event.preventDefault()

//   const title = titleInput.value.trim()
//   const url = urlInput.value.trim()
//   const category = categoryInput.value.trim()

//   if (!title || !url) return

//   // TODO: Q7. 新しいブックマークの作成をしてみる
//   const newBookmark: Bookmark = {}

//   // TODO: Q8. ブックマークの更新をしてみる
//   const updatedBookmarks = []
//   saveBookmarks(updatedBookmarks)
//   renderBookmarks(updatedBookmarks)
//   clearInputForm()
// })

// // 初期化
// const bookmarks = loadBookmarks()
// document.addEventListener('DOMContentLoaded', () => renderBookmarks(bookmarks))
