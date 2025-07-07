function calcular(){

    var num =Number(document.getElementById("n").value);

    var ope = document.getElementById("op").value;
    var tab = document.getElementById("tab");

    for (var i = 1; i<=10; i++){
        
        var resul;
        switch(ope){
            case "+": 
            resul = num + i;
            break;
            case "-":
                resul = num - i;
            break;
            case "*":
                resul = num * i;
            break;
            case "/":
                resul = (num / i).toFixed(2);
            break;
        }
        tab.innerHTML+= num + " " + ope + " " + i + "=" + resul + "<br>";
    }
   
}
 function apagar(){
    var apg = document.getElementById("tab");
    apg.remove();
 }


