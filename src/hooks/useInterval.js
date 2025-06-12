/**
 * ⏰ useInterval 커스텀 훅
 * - setInterval을 React 함수형 컴포넌트에서 안전하게 사용하기 위한 훅
 * - 컴포넌트 리렌더링 시에도 콜백 함수의 최신 상태를 유지
 * - delay가 null이면 interval을 정지
 */
import { useEffect, useRef } from "react";

export function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
