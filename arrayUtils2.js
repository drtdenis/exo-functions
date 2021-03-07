//Ajouter au fichier précédent une fonction sortAscend qui prend comme paramètre
// une liste de nombres et retourne une nouvelle liste 
//dont les nombres sont classés par ordre croissant.
//sortAscend([99, 100, 101, 1])  returns [1, 99, 100, 101]

const sortAscend= (tabNb) => {
  return tabNb.sort ((a,b)=>(a-b))
}
console.log(sortAscend([99,100,101,1]))
