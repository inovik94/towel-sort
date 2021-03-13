
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let array = [];
  if (matrix == 0 || matrix == undefined){
    return []
  }
  for (let i=0; i<matrix.length; i++) {
    if (i % 2 == 0) {
      matrix[i] = matrix[i].reverse();
  }
}
answer = matrix.reverse().flat();
return answer.reverse()
}
