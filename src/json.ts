export interface ParseJson {
  [key: string]: any
}

const parseJson = (json: string): ParseJson | null => {
  try {
    return JSON.parse(json)
  } catch (error) {
    return null
  }
}

// 获取json串中某个key的value
export interface KeyJson {
  [key: string]: string
}

const getJsonKey = ({ key, json }: KeyJson) => {
  const data = parseJson(json)

  return data ? data[key] : null
}

export default { parseJson, getJsonKey }
