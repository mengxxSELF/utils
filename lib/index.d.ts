import once from './once';
declare const _default: {
    jwt: {
        getToken: ({ payload, key, jwtSetting }: import("./jwt").GetToken) => string;
        getJWTPayload: ({ token, key }: {
            token: string;
            key: string;
        }) => string | object | null;
    };
    json: {
        parseJson: (json: string) => import("./json").ParseJson | null;
        getJsonValByKey: ({ key, json }: import("./json").KeyJson) => any;
    };
    once: typeof once;
    obj: {
        getObjValByKey: (obj: any, key: string) => any;
    };
};
export default _default;
