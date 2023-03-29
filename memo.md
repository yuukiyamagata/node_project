# require
1. コアモジュール、ビルトインモジュール
2. オリジナルファイル
3. npmパッケージ

# npm init
1. package name プロジェクトの名前(大文字とスペースは使えない)
2. version
3. description アプリケーションを一般公開する時に付与できる説明情報
4. entry point アプリケーション全体を立ち上げるためのファイルのこと
5. test command
6. get repository
7. keywords 一般公開した時の検索キーワード
8. author 作成者
9. license ISC


```js
const fs = require('fs');
const os = require('os');
const notes = require("./notes");

const user = os.userInfo();
const result = notes.addNote();
console.log(result);
const message = `Hello! ${user.username}!\n`;


fs.appendFile('greeting.txt', message, (error) => {
  if(error) console.log(error);
})

```

```js

process.argv

戻り値 配列形式
 1. nodeのありかのパス
 2. 実行中のファイル
 3. node app.js の引数
```


# some
指定された関数で実装されているテストに、配列の中の少なくとも 1 つの要素が 合格するかどうかを判定します。配列の中で指定された関数が true を返す要素を見つけた場合は true を返し、そうでない場合は false を返します。それ以外の場合は false を返します。配列は変更しません。

# every
every() メソッドは、列内のすべての要素が指定された関数で実装されたテストに合格するかどうかをテストします。これは論理値を返します。

# findIndex
findIndex() メソッドは、配列内の指定されたテスト関数に合格する最初の要素の位置を返します。テスト関数に合格する要素がない場合を含め、それ以外の場合は -1 を返します。

# indexOf
indexOf() メソッドは引数に与えられた内容と同じ内容を持つ最初の配列要素の添字を返します。存在しない場合は -1 を返します。

# filter
filter() メソッドは、この配列の中から、提供された関数で実装されたテストに合格した要素のみを抽出したシャローコピーを作成します。

# find
find() メソッドは、提供されたテスト関数を満たす配列内の最初の要素を返します。 テスト関数を満たす値がない場合は、 undefined を返します


# parseInt
parseInt() 関数は、文字列の引数を解析し、指定された基数 (数学的記数法の底) の整数値を返します。