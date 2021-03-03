/*const names = ['Alice', 'Bob', 'Charlie', 'Craig', 'Eve']

//console.log('Start of program.')
for (let i = 0; i < names.length; ++i) {
  console.log(
    `Hello ${names[i]}, welcome to the Javascript class, you are user number ${
      i + 1
    }!`
  )
}
//console.log('End of program.')*/




// Déclaration de showStars.
// nbBase est un entier correspondant au nombre d'étoile de la base de notre pyramide
// reverse est un boolean. Si reverse === true alors afficher la pyramide à l'envers
// showStars ne retourne aucune valeur
/*const showStars = (nbBase, reverse) => {
  if (!reverse) {
    for (let i = 1; i <= nbBase; ++i) {
      console.log('*'.repeat(i))
    }
  } else {
    for (let i = nbBase; i >= 1; --i) {
      console.log('*'.repeat(i))
    }
  }
}
*/
// Appel de la fonction showStars avec l'argument 5 et true
showStars(5, true)

// Appel de la fonction showStars avec l'argument 10 et false
showStars(10, false)

const nbBase = 15
// Appel de la fonction showStars avec l'argument nbBase qui est égal a 15 et true
showStars(nbBase, true)