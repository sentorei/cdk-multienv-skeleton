import { Stack } from "@aws-cdk/core"
import { appendFile } from "fs"

export class EnvironmentDefinition {
    /**
     * 環境定義クラス
     */

    private targetEnv: string;

    // アカウント情報を定義
    private envAccount: { [key: string]: any } = {
        dev: { account: 'your-account-id', region: 'ap-northeast-1' },
        prod: { account: 'your-account-id', region: 'ap-northeast-1' },
    }

    constructor(targetEnv: string) {
        // 対象環境が定義されていない場合は明示的にエラーとする
        if (targetEnv === 'undefined') throw new Error('Environment variable TARGET_ENV is not defined.')
        this.targetEnv = targetEnv
    }

    public getTargetEnvIdentifier(): string {
        /**
         * アカウント識別文字列を取得
         */
        return this.targetEnv
    }

    public getEnvAccount(): { account: string, region: string } {
        /**
         * デプロイするアカウントの情報を取得
         */
        return this.envAccount[this.targetEnv]
    }

}