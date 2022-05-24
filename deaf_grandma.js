function deafGrandma() {
    let goodbyes = 0;
    let lowerReg= /[a-z]/
    let response = window.prompt("HEY KID!");
    
    while(goodbyes!=2){
    
        if(response == "GOODBYE!"){
            goodbyes++;
            if(goodbyes===1){
                response=window.prompt("LEAVING SO SOON?");
            }    
        }
        else if(response===""){
            response=window.prompt("WHAT?!")
        }
        else if(lowerReg.test(response)){
            response=window.prompt("SPEAK UP, KID!");
        }
        else{
            response=window.prompt("NO, NOT SINCE 1946!");
        }
    }
    window.alert("LATER SKATER!")
    

}

deafGrandma();