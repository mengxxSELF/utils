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
        getJsonKey: ({ key, json }: import("./json").KeyJson) => any;
    };
    once: typeof once;
};
export default _default;