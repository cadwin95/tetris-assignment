/**
 * 📐 Center 레이아웃 컴포넌트
 * - 전체 화면 중앙 정렬을 위한 styled-component
 * - 로딩 화면이나 모달 등에 사용
 */
import styled from "styled-components";

const Center = styled.div`
	width: 100vw;
	height: 100vh;
	border: 1px solid red;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export default Center;
