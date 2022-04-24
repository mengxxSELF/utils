export default function (func: any) {
  let flag: boolean

  return function (args: any) {
    if (flag) return

    flag = true

    func(args)
  }
}
