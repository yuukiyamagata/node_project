# ウェブサーバーのプログラミング
ブラウザ経由のアクセス


# express
npmライブラリの一つ。サーバーの立ち上げ、ブラウザの表示
などのweb関連の技術を簡易に実現するためのモジュール

# app変数
エントリーポイントに配置
エントリーポイント...立ち上げることでアプリケーション全体を起動させるファイル
例
server.jsが事実上のサーバーの役割として機能する

# HTTPリクエスト
ブラウザとサーバーの間で行われる通信のこと
GET - 取得
POST - 送信
PUT - 変更
DELETE - 削除

# routing
パスごとに挙動を規定すること


# middleware
app.use(express.static())
static
静的ファイルのパスを指定する

dynamic
動的ファイル(ブラウザの挙動によって表示が変わる)


# view engine
webサイトの見た目を管理する仕組み
ejs, pug, handlebars, hogan

# partials
htmlコードをまとめる

# helper
関数処理をまとめる


# middleware
ブラウザからユーザーからのリクエストが発生し、サーバー側でレスポンスを返す間に何らかの処理を行う仕組み

expressでの使用法
例
app.use() useはmiddlewareを登録するためのメソッド
app.use((req, res, next) => {
  req... リクエスト
  res.. レスポンス
  next...関数。middleware内の処理の終了を意味する。必須
})


req.method...HTTPリクエストの種類の取得
req.uel...リクエストされたパスの取得
