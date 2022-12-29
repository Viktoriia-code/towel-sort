module.exports = function towelSort (matrix) {
  if (matrix==undefined){return []};
  if (matrix.length===0){return []};
  var resultMatrix = [];
  for (let i=0;i<matrix.length;i++){
    for (let j=0;j<matrix[i].length;j++){
      if (i%2==0){
        resultMatrix.push(matrix[i][j]);
      } else {
        resultMatrix.push(matrix[i][matrix[i].length-j-1]);
      }
    }
  }
  return resultMatrix;
}
