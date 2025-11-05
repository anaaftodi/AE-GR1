function testVariables(param){
   
    if(param===true){
        var x=5;
        let y=6;
        const z=7;
    }

    console.log(x);
    console.log(y);
    console.log(z);
}

testVariables(true);