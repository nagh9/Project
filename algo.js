function CountVowel( str){
    let Count = 0 ;
    const vowels =[ a,o,i,e,u,y,A,O,I,E,U,Y ] ;
    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            Count++;
        }
        }
        return Count 
    }
    
function Countalphabet( str , letter){
    let letter ='a...z'.split("");
    let count = 0 ;
    for ( let i=0 ,  i < letter.length , i++ )
    { if (str.charAt(i) == letter) {
        count += 1;
    }
}
return count;}
