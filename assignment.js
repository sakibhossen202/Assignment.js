/*assignment No.1 :
converter => Feet to mile
1 mile = 5280 foot*/




function feetToMile(feet){
    
    var mile = feet/5250;
    return mile;
}


var result = feetToMile(7859);
result = result.toFixed(2);     //in order to get 2 value after decimal point
console.log("Calculated Value is : " ,result ,"miles");



// assignment 2 || calculating required wood amount

function woodCalculator(chair, table, bed){
    var chairCount = chair * 1 ;
    var tableCount = table * 3 ;
    var bedCount = bed * 5 ;
    var total = chairCount + tableCount + bedCount;
    return total;
}
var total = woodCalculator(2 , 3 , 4);
console.log("Total required Wood is : " , total ,"cubic"  );



// Assignment-3 || BrickCalculator Making
function brickCalculator(floor){
    var brick1 = 0 ;
    var brick2 = 0 ;
    var brick3= 0;

    for(i=1;i<=floor;i++){
        if(i>=1 && i<=10){
            var brick = i*15*1000;
        }
        else if(i>=11 && i<=20){
            var brick2= (i-10)*12*1000;
        }
        else if(i>20){
            var bricks = (i-20)*10*1000;
        }total = brick1 + brick2 + brick3;
    }
    return total;
}
var resultBrick = brickCalculator(12);
console.log(resultBrick) 





// Assignment 4 || calcuting who is tiny among all friends

function tinyFriend(friends)
{
    
      var firstFriend = friends[1].length;
      for(i = 0; i < friends.length; i++)
      {
          var currentFriend = friends[i].length;

          if(currentFriend < firstFriend)
          {
             firstFriend = currentFriend  ;
             
          }
          
      }return firstFriend;
    
}

 var youngerFriend = tinyFriend(["sakib" , "akib" , "Don" , "habibullah" , "naimul","kaderullahKhan"]);
 console.log("The Younger Friend is: ",youngerFriend);





    
    
    

