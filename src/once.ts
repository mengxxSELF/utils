export default function (func: any) {
  let res: any

  return function (...args: any) {
    if (res) return res

    res = func(...args)
    
    return res
  }
}
