function one(){
    const username = "hitesh";
    function two(){
        const website = "yt"; // this has scope only inside func two
        console.log(username); // can be accessed
    }
    // console.log(website); // no access
    two();
}
one();

if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = "yt";
        console.log(username+website);
    }
    // console.log(website); // not access
}
// console.log(username); // no access