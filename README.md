# react-docker

React環境を立ち上げることができます。

## 事前準備

mac+DockerCompose+vscode+gitでの環境を構築してること。

## 開発環境構築方法(React)

### docker構成フォルダ構築

ルートフォルダを作成する。

```bash
git clone https://github.com/naritomo08/react-docker.git
cd react-docker
```

### 環境変数ファイル作成

```bash
vi env.development.local

以下の内容で作成する。
REACT_APP_BURL = "http://localhost:8000"
```

### コンテナ立ち上げ

```bash
docker-compose build
docker-compose up -d
```

### サイト確認

以下のURLにアクセスし、Reactトップ画面が出てくること。

```bash
http://localhost:3000/
```

以下のファイルを編集し、トップ画面内容が変わることも確認してください。

```bash
react-docker/src/App.js
```

## 開発環境操作

### 開発環境コンテナ起動/設定再読み込み

```bash
docker-compose up -d
```

### 開発環境コンテナ停止

```bash
docker-compose stop
```

### 開発環境コンテナ破棄

```bash
docker-compose down
```

### Reactコンテナログイン

```bash
docker-compose exec react-app bash
```
