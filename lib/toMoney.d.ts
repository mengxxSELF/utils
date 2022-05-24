declare enum SpiltType {
    DEFAULT = ",",
    OTHER = "-"
}
export default function ({ money, splitType }: {
    money: string | number;
    splitType: SpiltType;
}): string;
export {};
