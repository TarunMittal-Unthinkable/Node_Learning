const path=require('path');
console.log(path.dirname('/home/unthinkable-lap-0252/Desktop/Node_learning/Node_Learning/pathModule/path.js'));
console.log(path.extname('/home/unthinkable-lap-0252/Desktop/Node_learning/Node_Learning/pathModule/path.js'));
console.log(path.basename('/home/unthinkable-lap-0252/Desktop/Node_learning/Node_Learning/pathModule/path.js'));
console.log(path.parse('/home/unthinkable-lap-0252/Desktop/Node_learning/Node_Learning/pathModule/path.js'));
const myPath=path.parse('/home/unthinkable-lap-0252/Desktop/Node_learning/Node_Learning/pathModule/path.js');
console.log(myPath.name);