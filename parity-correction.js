const isOdd = (nb)=> {
  if ( nb%2 !==0){
    return true 
  } else {
    return false
  }

  //return nb %2 !==0 ? true : false

  //return nb %2 ===0 
}
//console.log (isOdd(1));
//console.log (isOdd(10));
  

const isEven =(nb) => {

  if ( nb%2 === 0){
    return false
  } else {
    return true
  }
}

console.log (isEven(1))
console.log (isEven(10))

