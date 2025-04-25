// 問題の答え

// TODO: Q1. 型定義をする
// ブックマークの基本情報
interface BookmarkRecord {
  id: string;
  createdAt: Date;
}

interface BookmarkResource {
  title: string;
  url: string;
}

interface BookmarkOptionalInfo {
  category?: string;
}

// TODO: Q2. インターフェースの継承を使ってみる
interface Bookmark
  extends BookmarkRecord,
    BookmarkResource,
    BookmarkOptionalInfo {}

// ストレージキー
const STORAGE_KEY = 'bookmark_list';

// DOM要素の作成
const createElement = <T extends HTMLElement>(
  tag: string,
  options: Partial<T> = {}
): T => {
  const element = document.createElement(tag) as T;
  Object.assign(element, options);
  return element;
};

// DOM要素の取得
const bookmarkForm = document.getElementById(
  'bookmark-form'
) as HTMLFormElement;
const titleInput = document.getElementById('title') as HTMLInputElement;
const urlInput = document.getElementById('url') as HTMLInputElement;
const categoryInput = document.getElementById('category') as HTMLInputElement;
const bookmarkList = document.getElementById(
  'bookmark-list'
) as HTMLUListElement;

// TODO: Q3. オプショナルチェーンを使って、リファクタリングしてみる
// localStorage からデータを読み込む関数
const loadBookmarks = (): Bookmark[] =>
  JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]', (key, value) =>
    key === 'createdAt' ? new Date(value) : value
  );

// ブックマークを保存する
const saveBookmarks = (bookmarks: Bookmark[]): void =>
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bookmarks));

// カテゴリーの描画
const renderCategory = (category: string, parent: HTMLElement) => {
  const span = createElement<HTMLSpanElement>('span', {
    textContent: ` [${category}]`,
  });
  parent.appendChild(span);
};

// TODO: Q4. 登録日を表示してみる
const renderRegistrationDate = (createdAt: Date, parent: HTMLElement) => {
  const small = createElement<HTMLElement>('small', {
    textContent: ` (${createdAt.toLocaleString()})`,
  });
  parent.appendChild(small);
};

// TODO: Q5. 削除ボタンを作成してみる
const renderDeleteButton = (bookmarkId: string, parent: HTMLElement) => {
  const deleteButton = createElement<HTMLButtonElement>('button', {
    textContent: '削除',
  });
  deleteButton.style.marginLeft = '10px';
  deleteButton.addEventListener('click', () => {
    const updatedBookmarks = bookmarks.filter(
      (bookmark) => bookmark.id !== bookmarkId
    );
    saveBookmarks(updatedBookmarks);
    renderBookmarks(updatedBookmarks);
  });
  parent.appendChild(deleteButton);
};

// TODO: Q6. forEachを使って、ブックマークを表示してみる
// ブックマークを一覧表示する
const renderBookmarks = (bookmarks: Bookmark[]): void => {
  bookmarkList.innerHTML = '';
  bookmarks.forEach((bookmark) => {
    const listItem = createElement<HTMLLIElement>('li');
    const link = createElement<HTMLAnchorElement>('a', {
      href: bookmark.url,
      target: '_blank',
      textContent: bookmark.title,
    });

    listItem.appendChild(link);
    bookmark.category && renderCategory(bookmark.category, listItem);
    renderRegistrationDate(bookmark.createdAt, listItem);
    renderDeleteButton(bookmark.id, listItem);

    bookmarkList.appendChild(listItem);
  });
};

// 入力フォームのクリア
const clearInputForm = () => {
  [titleInput, urlInput, categoryInput].forEach((input) => (input.value = ''));
};

// フォーム送信時の処理
bookmarkForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const title = titleInput.value.trim();
  const url = urlInput.value.trim();
  const category = categoryInput.value.trim();

  if (!title || !url) return;

  // TODO: Q7. 新しいブックマークの作成をしてみる
  const newBookmark: Bookmark = {
    id: crypto.randomUUID(),
    title,
    url,
    category: category || undefined,
    createdAt: new Date(),
  };

  // TODO: Q8. ブックマークの更新をしてみる
  const updatedBookmarks = [...bookmarks, newBookmark];
  saveBookmarks(updatedBookmarks);
  renderBookmarks(updatedBookmarks);
  clearInputForm();
});

// 初期化
const bookmarks = loadBookmarks();
document.addEventListener('DOMContentLoaded', () => renderBookmarks(bookmarks));
