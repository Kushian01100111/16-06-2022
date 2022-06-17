function anagrams(word, words) {
    let one  = word.split(""),
        result  = words
        ones = words,
        Obj = {};
    one.forEach(n=>{
        Obj[n] = ++Obj[n] || 1
    })

    for (let i = 0 ; i < ones.length; i++){
      let enclosed = words[i].split("")
      for(let x = 0 ; x < enclosed.length; x++){
        if(typeof ones[i] !== 'object'){
            ones[i] = {}
            ones[i][enclosed[x]] = ++ones[i][enclosed[x]] || 1 
        }else{
            ones[i][enclosed[x]] = ++ones[i][enclosed[x]] || 1 
        }
      }
    }
let entries = Object.entries(Obj),
    fl = [],
    array = 0


for(let t = 0; t < entries.length; t++ ){
    let enclosed = Object.entries(ones[t])
    for(let g = 0; g < ones.length; g++ ){
        for(let y = 0; y < enclosed.length; y++ ){
            if(entries[g][0] === enclosed[y][0] && entries[g][1] === enclosed[y][1]){
                array += 1
                if(array === entries.length){
                    array = 0
                    fl.push(result[t])
                    break
                }
            }
        }
        
    }
}


    console.log(ones)
  }

  anagrams('abba',['aabb', 'abcd', 'bbaa', 'dada'])