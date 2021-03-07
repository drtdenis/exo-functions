//Ecrivez une fonction biggest qui retourne le plus grand élément d'une liste de nombre.
//biggest([99, 100, 101, 1])  returns 101

function biggest (tabNb){
  return Math.max(...tabNb)
}
console.log(biggest([99,100,101,1,1000]))