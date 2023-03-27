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

