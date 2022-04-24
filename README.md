# utils

通用基础库

### JSON 

| 方法      | 功能 |
| ----------- | ----------- |
| parseJson    | 解析json为对象       |
| getJsonKey   | 从jSON串中获取某个属性值 |

### once 

限制函数只能执行一次

### jwt 

限制函数只能执行一次


| 方法      | 功能 |
| ----------- | ----------- |
| getToken    |    输入参数 生成token      |
| getJWTPayload   | 传入token 解析参数 |


### obj

*  getObjValByKey

获取对象的某个属性值,避免当此属性不存在的时候报错

```
const obj = {
  a: [1],
  b: [{ name: 2 }],
  c: {
    time: Date.now(),
  },
  d: "ddd",
  e: { f: { g: "gg" } },
};


console.log(getObjValByKey(obj, "a[0]"));
console.log(getObjValByKey(obj, "c.time"));
console.log(getObjValByKey(obj, "d"));
console.log(getObjValByKey(obj, "d.h.gg"));
console.log(getObjValByKey(obj, "b[0].name"));

```