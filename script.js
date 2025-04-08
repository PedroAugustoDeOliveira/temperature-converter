function converterTemperatura(){
    const temperatura = parseFloat(document.getElementById("input-temp").value);
    const unitInput = document.getElementById("input-unit").value;
    const outInput = document.getElementById("output-unit").value;

    realizarConversão(temperatura, unitInput, outInput);
   
}

function realizarConversão(temperatura, unitInput, outInput){
  let resultado;
  if(unitInput === "celsius" && outInput === "fahrenheit"){
    resultado = (temperatura * 9/5) + 32;
  }else if (unitInput === "fahrenheit" && outInput === "celsius"){
    resultado = (temperatura - 32) * 5/9;
  }else if (unitInput === "celsius" && outInput === "kelvin"){
    resultado = temperatura + 273.15;
  }else if (unitInput === "kelvin" && outInput === "celsius"){
    resultado = temperatura - 273.15;
  }else if (unitInput === "fahrenheit" && outInput === "kelvin"){
    resultado = (temperatura - 32) * 5/9 + 273.15;
  }else if (unitInput === "kelvin" && outInput === "fahrenheit"){
    resultado = (temperatura - 273.15) * 9/5 + 32
  }

   document.getElementById("result").innerText = "Resultado: " + resultado;
}