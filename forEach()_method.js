const fruits = ['kiwi','mango','apple','pear'];
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex);

/*
OUTPUT:
0. kiwi
1. mango
2. apple
3. pear

*/