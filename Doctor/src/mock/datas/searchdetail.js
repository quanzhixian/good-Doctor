let Mock = require('mockjs');
let questionList = [];
let Random = Mock.Random;

for (var i = 0; i < 20; i++) {
    questionList.push({
        id: Random.increment()
    })
}
console.log(questionList)
export {
    questionList
};