export interface ParseJson {
    [key: string]: any;
}
export interface KeyJson {
    [key: string]: string;
}
declare const _default: {
    parseJson: (json: string) => ParseJson | null;
    getJsonKey: ({ key, json }: KeyJson) => any;
};
export default _default;
