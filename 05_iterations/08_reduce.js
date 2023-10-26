// reduce

const myNums =[1, 2, 3]

// const myTotal = myNums.reduce( (acc, currVal) => {
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//     return acc + currVal;
// }, 0 )

// same above code in an smart and short way
const myTotal = myNums.reduce( (accumulator, currentValue) => accumulator + currentValue, 0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "mobile course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    }
]

const totalPrice = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(totalPrice);


