export interface GetToken {
    payload: any;
    key: string;
    jwtSetting?: any;
}
declare function getToken({ payload, key, jwtSetting }: GetToken): string;
declare function getJWTPayload({ token, key }: {
    token: string;
    key: string;
}): string | object | null;
declare const _default: {
    getToken: typeof getToken;
    getJWTPayload: typeof getJWTPayload;
};
export default _default;
