/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function questions() {
    var q = confirm("Ollie is well cool");
    if(q) {
        alert("man 4sure");
    } else {
        var q2 = prompt("what dafuq is he then");
        alert("Oli is " + q2);
        setTimeout(()=> {document.getElementsByName('body').innerHTML = q2 ;}, 3000);

       // console.log($('body').innerHTML);
    //alert("Oli is a G biatch");
    }

 
}