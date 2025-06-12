/**
 * 🛠️ 게임 유틸리티 함수들
 * - 테트리스 게임 로직에 필요한 헬퍼 함수들
 */

/**
 * 플레이어(떨어지는 블록)를 게임 맵에 그리는 함수
 * @param {Object} player - 현재 플레이어 블록 정보
 * @param {Array} map - 게임 맵 배열
 * @returns {Array} 플레이어가 그려진 새로운 맵
 */
export const PrintPlayerInMap = (player, map) => {
  var newMap = map.map(arr => arr.slice());
  for (let y = 0; y < player.bloco.bloco.length; y++)
    for (let x = 0; x < player.bloco.bloco.length; x++)
      if (player.bloco.bloco[y][x] === 1) {
        const pixelY = player.pos[0] + y;
        const pixelX = player.pos[1] + x;
        newMap[pixelY][pixelX] = { fill: 1, color: player.bloco.color };
      }
  return newMap;
};