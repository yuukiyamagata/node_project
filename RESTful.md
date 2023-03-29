# RESTful
Representational State Transfer
1. ブラウザはサーバーと通信をする
2. ユーザーはブラウザを通じてサーバーにアクセスする(HTTPリクエスト)
HTTPリクエストの種類
1. GET - 取得 - read 
2. POST - 送信 - create
3. PUT - 編集 - update
4. DELETE - 削除 - delete

CRUD operation
インターネット経由でデータを操作するための仕組み
CRUDが可能なwebサービスのことをRESTfulという

# GETリクエスト - パス情報の動的取得
reqのparamsとqueryで取得
例
```js
app.get('/courses/:name', (req, res) => {
  res.send(`Hello!, ${req.params.name}!`);
  // req.paramsにパスに続けた文字列を続ける
})
```

# POST
- req.bodyオブジェクトにValueが含まれている
- ブラウザから送られてくるオブジェクトにはmiddlewareに設定が必要

# httpリクエスト
特定のパスに対して、命令することまたはデータの送信

# body-parser
formを扱うmiddleware

# validation - 入力審査
ブラウザから送信される情報を無条件に全て受け入れてはいけない

# joi
Validation専用のmodule
一般的な書き方
```js
  if(!req.body.name || req.body.length < 3){
    res.send("入力必須であり、3文字以上である必要があります");
    // あるいはres.status(400) スタータス番号を返してブラウザに判定させる
  }

```

Joi
1. スキーマ定義
2. 