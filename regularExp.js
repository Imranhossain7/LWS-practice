function regExp (text){
    let mod = text.replace(/imran|shakil/ig,"shakil");
   console.log(mod);

   let match = text.match(/shakil/i);
   console.log(match);

   let find = text.search(/a/i);
   console.log(find);
}

regExp("My name is Imran and in uni i'm Imran but at home i'm Shakil");