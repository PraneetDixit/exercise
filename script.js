//Date in JS

setInterval(function(){
    const myDate = new Date();
    document.getElementById("dateCont").textContent = myDate.toLocaleTimeString();
},1000);

// github.com/PraneetDixit/exercise