import jwt from 'jsonwebtoken'

interface Setting {
  expiresIn: string
}

const Setting: Setting = {
  // 默认设定一个小时有效期
  expiresIn: '1h',
}

export interface GetToken {
  payload: any
  key: string
  jwtSetting?: any
}

function getToken({ payload, key, jwtSetting }: GetToken): string {
  return jwt.sign(payload, key, { ...Setting, ...jwtSetting })
}

function getJWTPayload({ token, key }: { token: string; key: string }): string | object | null {
  try {
    return jwt.verify(token, key)
  } catch (error) {
    return null
  }
}

export default { getToken, getJWTPayload }
