

function Calcy(){

  let firstCal =  document.getElementById("doremon").value;
  let secondCal = eval(firstCal);
  document.getElementById("doremon").value=secondCal;
}

function addBtn(num){
    

   let AddBtn = document.getElementById("doremon").value;
   document.getElementById("doremon").value=AddBtn+num;

}

function Remove(){
      
    let Removebtn =document.getElementById('doremon').value= "";
   

}

function Delete(){

    let del = document.getElementById("doremon").value;
    let slc = del.slice(0 , -1);

    document.getElementById("doremon").value=slc;
}
