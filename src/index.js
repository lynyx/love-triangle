/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let counter = 0;
  for (let i = 0; i < preferences.length; i++) {
    const firstSpichonee = preferences[i] - 1;
    const secondSpichonee = preferences[firstSpichonee] - 1;
    const thirdSpichonee = preferences[secondSpichonee] - 1;

    if (firstSpichonee === i || firstSpichonee === secondSpichonee || thirdSpichonee === secondSpichonee) continue;

    if (thirdSpichonee === i) {
      counter++;
    }
  }

  return counter / 3;
};
