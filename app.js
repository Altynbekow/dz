// function countchar(Salamat,a){
    // for(let i=0;i<Salamat.length; i++){
        // if(Salamat[i]===a){
            // console.log("Salamat")
        // }
    // }
// }
// countchar("Salamat ","a")
function countChar(string, char) {
    let count = 0;

    for(let i=0; i<string.length; i++){
        if(string[i] === char){
            count++;
        }
    }

    return count;
}

console.log(countChar("Salamat ","a"));