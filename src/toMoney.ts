enum SpiltType {
  DEFAULT = ',',
  OTHER = '-',
}

export default function ({ money, splitType = SpiltType.DEFAULT }: { money: string | number; splitType: SpiltType }) {
  const str = money.toString()

  return str.replace(/(?!^)(?=(\d{3})+$)/g, splitType)
}
