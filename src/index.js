/**
 * 📱 메인 엔트리 포인트
 * - React 앱을 DOM에 마운트하는 시작점
 * - React 18의 createRoot API 사용
 */
import React from "react";
import { createRoot } from "react-dom/client";

import "./index.css";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);
