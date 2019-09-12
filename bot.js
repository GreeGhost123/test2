
client = "621423685567381540";
nick = "Draw-Bot";
function onstart(){
    var v1 = nick.split('');
    var counter;
    var i=0;
var client = ' ';
  var client =   setInterval(function(){
     
     if (i == v1.length){
     clearInterval(client);
     onstart()
      return;
     }
     var v2 = v1[i];
    cleint += v2;
 
        i++;
   
     }, 1000);
}
client.on();
