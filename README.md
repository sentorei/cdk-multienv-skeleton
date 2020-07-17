## 概要
- 複数の環境へのデプロイを共通のテンプレートを利用して実施するためのサンプルプロジェクト

## 初期設定
- `EnvironmentDefinition.envAccount`に開発/本番アカウントの情報を定義
```
        dev: { account: 'your-account-id', region: 'ap-northeast-1' },
        prod: { account: 'your-account-id', region: 'ap-northeast-1' },
```

## デプロイ
- `context`で `dev` or `prod` を与えることでそれぞれのアカウントにスタックがデプロイされる
- `cdk deploy -c dev`      deploy this stack to your default AWS account/region
- `cdk deploy -c prod`     deploy this stack to your default AWS account/region
