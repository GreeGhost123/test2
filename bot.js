const Eris = require("eris");
var x5bzteam = new Eris("NDYyMDI4ODQ0NTQzNTA4NDkw.DzZT3A.iStia_inktUg5zGXV01p9qnq1mA");
x5bzteam.on("ready", () => {
    console.log("Yo! Changer [ON]");
    onstart();
});
x5bz = "484341267422117890";
nick = "NiCho_Alonzo";
function onstart(){
    var v1 = nick.split('');
    var counter;
    var i=0;
var x5bz2 = ' ';
  var x5bz3 =   setInterval(function(){
     
     if (i == v1.length){
     clearInterval(x5bz3);
     onstart()
      return;
     }
     var v2 = v1[i];
    x5bz2 += v2;
    x5bzteam.editNickname(x5bz, x5bz2);
 
        i++;
   
     }, 1000);
}
x5bzteam.connect();
