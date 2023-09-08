export interface LoginRequestData {
  /** admin 或 editor */
  username: "user" | "approver" | "admin"
  /** 密码 */
  password: string
}

export type LoginCodeResponseData = ApiResponseData<string>

export type LoginResponseData = ApiResponseData<{ token: string }>

export type UserInfoResponseData = ApiResponseData<{ username: string; roles: string[] }>
