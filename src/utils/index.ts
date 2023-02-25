import { useEffect, useState } from "react";

const isFalsy = (value:unknown) => (value === 0 ? false : !value);
export const cleanObject = (object:object) => {
  //进行对象深拷贝，这样不会影响传进来的对象本身
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    //@ts-ignore
    const value = result[key];
    if (isFalsy(value)) {
       //@ts-ignore  //先忽略，后面在去用泛型进行规范
      delete result[key];
    }
  });
  return result;
};
//custom hook 是react 中最新也是最优秀的代码复用方案
export const useMount = (callback:()=>void) => {
  useEffect(() => {
    callback()
  }, [])
}
//创建自定义hook useDebounce 提取业务逻辑—去抖
export const useDebounce =<V> (value:V, delay?:number) => {
  //每次在value发生变化以后，设置一个定时器
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    //每次在上一个useEffect处理完以后在运行
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debouncedValue;
}

