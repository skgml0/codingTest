// 내 풀이
function solution(sizes) {
  const maxArr = [];
  const minArr = [];
  for (i = 0; i < sizes.length; i++) {
    maxArr.push(Math.max(...sizes[i]));
    minArr.push(Math.min(...sizes[i]));
  }

  return Math.max(...maxArr) * Math.max(...minArr);
}

/**
 * function solution(sizes) {
 *   const [hor, ver] = sizes.reduce(
 *     ([h, v], [a, b]) => [
 *       Math.max(h, Math.max(a, b)),
 *       Math.max(v, Math.min(a, b)),
 *     ],
 *     [0, 0]
 *   );
 *   return hor * ver;
 * }
 */

/**
 * function solution(sizes) {
 *     const rotated = sizes.map(([w, h]) => w < h ? [h, w] : [w, h]);
 *
 *     let maxSize = [0, 0];
 *     rotated.forEach(([w, h]) => {
 *         if (w > maxSize[0]) maxSize[0] = w;
 *         if (h > maxSize[1]) maxSize[1] = h;
 *     })
 *     return maxSize[0]*maxSize[1];
 * }
 */
