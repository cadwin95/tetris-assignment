/**
 * 🎮 메인 App 컴포넌트
 * - 전체 애플리케이션의 루트 컴포넌트
 * - Tetris 게임 컴포넌트를 렌더링
 */
import React from "react";
import "./styles.css";

import Tetris from "./components/Tetris";

export default function App() {
  return <Tetris />;
}
