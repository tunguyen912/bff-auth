interface ILoginBody {
  body: {
    userName: string
    passWord: string
  }
}

class IPayload {
  accountId: number
  isAdmin: number
  exp?: number
  iat?: number
  token?: string
}

export {
  ILoginBody,
  IPayload,
}