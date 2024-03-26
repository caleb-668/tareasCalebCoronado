const array = [10,4,2,7]
const x = 0
function suma(array,x) {
     for (let index = 0; index < array.length; index++) {
        x += array[index]     
    }
    console.log(x);
}
suma(array,x)