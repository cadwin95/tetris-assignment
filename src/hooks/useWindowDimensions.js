/**
 * 📱 useWindowDimensions 커스텀 훅
 * - 브라우저 창 크기를 실시간으로 추적하는 훅
 * - 반응형 디자인 구현에 사용
 * - 윈도우 리사이즈 이벤트를 자동으로 관리
 */
import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}