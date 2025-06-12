// code your solution here
const record = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
  //...
]

// .find function that test each object to see if result is "w"
function superbowlWin(record){
    const winObj= record.find(game => game.result === "W");
    if(winObj){
        return winObj.year;
    }else{
        return undefined
    }
   
    
    // (function(item){
    //     if( item.result === "W"){
    //         return winObj.year;
    //     }
    // })
}
superbowlWin(record);