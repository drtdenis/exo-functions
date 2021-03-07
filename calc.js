/*const add = (nb1, nb2) => {
  return nb1 + nb2
}
const calc = (nb1, nb2, opé) =>{
  switch (opé ){
    case '+':
}
}
console.log (add(11, 14))*/


/*const sub = (nb1, nb2) => {
  return nb1 - nb2
}
const calc = (nb1, nb2, opé) =>{
  switch (opé ){
    case '-':
}
}
console.log (sub(26, 14))*/


/*const mul = (nb1, nb2) => {
  return nb1 * nb2
}
const calc = (nb1, nb2, opé) =>{
  switch (opé ){
    case '*':
}
}
console.log (mul(11, 11))*/


/*const div = (nb1, nb2) => {
  return nb1 / nb2
}
const calc = (nb1, nb2, opé) =>{
  switch (opé ){
    case '/':
}
}
console.log (div(24, 3))*/


//ne fonctionne pas

const add = (nb1, nb2) => {
  return nb1 + nb2
}
const sub = (nb1, nb2)=>{
  return nb1 - nb2
}
const mul = (nb1, nb2) =>{
  return nb1 * nb2
}
const div = (nb1, nb2) =>{
  return nb1 / nb2
}
const calc = (opé,nb1, nb2, ) =>{
  switch (opé ){
    case '+':
      return add(nb1,nb2)
      break;
      case '-':
      return sub(nb1,nb2)
      break;
      case '*':
      return mul(nb1,nb2)
      break;
      case '/':
      return div(nb1,nb2)
      break;
}
}
console.log (calc('+' , 11, 14));
console.log (calc('-' , 26, 14));
console.log (calc('*' , 11, 11));
console.log (calc('/' , 24, 3));