function bubbleSort(tab){
    let n = tab.length
    for(let i =0; i<n; i++){
        for(let j = 0; j<n-i-1; j++){
            if(tab[j] > tab[j+1]){
                let temp = tab[j]
                tab[j] = tab[j+1]
                tab[j+1] = temp;

            }
      }
     
    }
  
   return tab;
}
console.log(bubbleSort([5,3,8,0,1]))
function recherchebinaire(tab, valeur){
    let debut = 0;
    let fin = tab.length-1;
    while(debut<=fin){
        let milieu = Math.floor((debut+fin)/2)
        if(tab[milieu]===valeur){
            return milieu
        } else if(tab[milieu]<valeur){
            debut = milieu+1
        } else{
            fin = milieu-1
        }
    }

    return -1
}
table = [1,2,5,7,9]
console.log(recherchebinaire(table, 5))
 function compteAvant(n){
    if(n===0){
        console.log("cas de base")
        return 0
    }
  return n +  compteAvant(n-1)
 }
 console.log(compteAvant(5))
console.log("conflit entre main et reda")