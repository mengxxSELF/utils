import once from './once';
import toMoney from './toMoney';
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
    toMoney: typeof toMoney;
};
export default _default;
