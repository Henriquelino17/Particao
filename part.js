function sol() {
    var V51 = document.getElementById("V51").value; 
    var D51 = document.getElementById("D51").value;  
    var V73 = document.getElementById("V73").value; 
    var D73 = document.getElementById("D73").value;  
    var VM_51 = V51 * 3.2*(D51-1)/(3.2 -1);
    var VM_73 = V73 * 3.2*(D73-1)/(3.2 -1);
    var SOMA_M51_M73 =  VM_51+VM_73;
    var PART_51 = (VM_51/SOMA_M51_M73)*100;
    var PART_73 = (VM_73/SOMA_M51_M73)*100;
    document.getElementById("resultado"); document.getElementById("p").innerHTML = "EP51: "+ PART_51.toFixed(2)+ " % " +"\nEP73: " + PART_73.toFixed(2)+" %";
    console.log(VM_51);
    console.log(VM_73);
    console.log(SOMA_M51_M73);
};
 

 
