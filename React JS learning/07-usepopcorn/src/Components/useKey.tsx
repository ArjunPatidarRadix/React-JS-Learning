import { useEffect } from "react";

export function useKey(key: string, action: Function) {
  useEffect(() => {
    function callBack(e: KeyboardEvent) {
      if (e.code.toLowerCase() === key.toLowerCase()) {
        action();
      }
    }
    document.addEventListener("keydown", callBack);

    return () => {
      document.removeEventListener("keydown", callBack);
    };
  }, [action, key]);
}
