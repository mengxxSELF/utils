const getObjValByKey = function (obj: any, key: string): any {
  let target = obj

  const str = key.replace(/\[(\d+)\]/g, '.$1')
  const arr = str.split('.')

  for (const item of arr) {
    if (target[item]) {
      target = target[item]
    } else {
      return null
    }
  }

  return target
}

export default { getObjValByKey }
