/**
 * 🎮 메인 Tetris 컴포넌트
 * - 게임 상태 관리 (시작 페이지 ↔ 게임 화면)
 * - StartPage와 Game 컴포넌트 간의 라우팅 역할
 */
import React, { useState } from "react";

import StartPage from "../StartPage";
import Game from "../Game";

const Tetris = () => {
	const [runing, setRuning] = useState(false);
	return runing ? (
		<Game stopClick={() => setRuning(false)} />
	) : (
		<StartPage startClick={() => setRuning(true)} />
	);
};

export default Tetris;
