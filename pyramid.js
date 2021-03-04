/*En vous inspirant de la fonction showStars vue en cours, Ecrire une fonction pyramid qui prend 3 paramètres:

le nombre d'éléments qui sera la base de la pyramide
un boolean pour vérifier si la pyramide sera générée à l'envers ou à l'endroit
une string (un caractère) qui sera le motif à afficher contrairement à l'exemple du cours qui affiche par défaut le caractère *.*/

// Déclaration de showStars.
// nbBase est un entier correspondant au nombre d'étoile de la base de notre pyramide
// reverse est un boolean. Si reverse === true alors afficher la pyramide à l'envers
// showStars retourne une string contenant la pyramide
const showStars = (nbBase, reverse, caract) => {
  let str = ''
  if (!reverse) {
    for (let i = 1; i <= nbBase; ++i) {
      str += ' '.repeat(nbBase - i) + caract.repeat(i*2) + ' '.repeat(16 - i) +'\n';
      //if (i !== nbBase) {
      //  str += '\n'
      //}
    }
  } else {
    for (let i = nbBase; i >= 1; --i) {
      str += caract.repeat(i) + ''.repeat(nbBase*2 -i *2) + caract.repeat(i) + '\n';
      //if (i !== 1) {
       // str += '\n'
      //}
    }
  }
  return str
}

// Appel de la fonction showStars avec l'argument 5 et true
// la fonction retourne une string que l'on peut afficher
let str1 = showStars(5, true,'£')
console.log(str1)

// Appel de la fonction showStars avec l'argument 10 et false
// showStars(10, false) est une expression qui est évaluée à une string,
// car showStars retourne une string
// On peut donc directement l'utiliser où une string est attendue,
// comme dans une console.log par exemple
console.log(showStars(10, false,'§'))

const nbBase = 15
// Appel de la fonction showStars avec l'argument nbBase qui est égal à 15 et l'argument true
// la fonction retourne une string que l'on peut afficher
let str2 = showStars(nbBase, true,'µ')
console.log(str2)