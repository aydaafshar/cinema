import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = <T>(url: string, skip = false): T | null => {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    //early-return
    if (skip) return;
    axios.get(url).then((res) => setData(res.data));
  }, [url, skip]);
  if (skip) return null;
  return data;
};
export default useFetch;

// const sleep = (dur: number): Promise<number> => {
//   return new Promise<number>((resolve, reject) => {
//     if (dur < 0) {
//       reject("Duration should be higher than 0");
//       return;
//     }
//     setTimeout(() => resolve(dur), dur);
//   });
// };

// sleep(5000)
//   .then((dur) => {
//     console.log("Hi after  ", dur);
//   })
//   .catch((e) => console.error(e));

// async function Main() {
//   try {
//     const dur = await sleep(5000);
//     console.log("Hi after ", dur);
//   } catch (e) {
//     console.log(e);
//   }
// }
