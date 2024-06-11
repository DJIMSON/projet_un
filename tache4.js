function calculerSomme(n) {
    let somme = 0;
    for (let i = 1; i <= n; i++) {
        somme += i;
    }
    return somme;
}

const nombre = 15; // Remplacez par le nombre de votre choix
const resultat = calculerSomme(nombre);
console.log(`La somme des nombres de 1 à ${nombre} est : ${resultat}`);
