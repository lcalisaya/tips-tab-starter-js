// Lista de conceptos en Javascript
var tipsList = [
	"No hay que olvidar la palabra clave <span class='code'>var</span> cuando se asigna un valor a una variable por primera vez.",

	"<span class='code'>undefined</span>, <span class='code'>null</span>, <span class='code'>0</span>, <span class='code'>false</span>, <span class='code'>NaN</span>, y <span class='code'>''</span> (una string vacía) son falsas.",

	"Se declara una función de la siguiente manera:<br/> <span class='code-block'>function <em>nombreDeMiFuncion</em>() { <br>&nbsp;&nbsp;...<br> }</span>",

	"Las instrucciones <span class='code'>if</span>/<span class='code'>else</span> lucen así:<br/> <span class='code-block'>if (<em>condición</em>) { <br/>&nbsp;&nbsp;...<br/>} else { <br/>&nbsp;&nbsp;...<br/>}",

  "Se puede retornar el resultado de una función con <span class='code'>return</span>:<br><span class='code-block'>function multiplicarPorCinco(numeroDeEntrada) {<br> &nbsp;&nbsp;return numeroDeEntrada * 5; <br>}<br>console.log(multiplicarPorCinco(6));<br>// Salida: 30</span> ",

  "El operador<span class='code'>&&</span> comprueba si ambas expresiones son verdad: <br/> <span class='code-block'>true && true = true<br>true && false = false<br>false && false = false</span>",

  "El operador<span class='code'>||</span> comprueba si alguna de las expresiones es verdad: <br/> <span class='code-block'>true || true = true<br>true || false = true<br>false || false = false</span>",

  "El bucle <span class='code'>for</span> tiene tres condiciones: una condición de comienzo, una condición de fin y un iterador: <br><span class='code-block'>for (var i = 0; i < miArray.length; i++) { <br>&nbsp;&nbsp;...<br>}</span>",

  "Para interpolar una variable dentro de una string, se usa el operador <span class='code'>+</span> de esta manera: <br> <span class='code-block'>var miNombre = 'Juan';<br/> 'Hola, mi nombre es ' + miNombre; <br>// Salida: Hola, mi nombre es Juan</span>",

  "Para generar un número aleatorio, se puede usar la función preconstruida de Javascript <span class='code'>Math.random()</span>.",

  "Los arrays (vectores) almacenan una lista de datos. Se puede acceder a cualquiera de los elementos de la lista con la notación de corchetes, así: <br> <span class='code-block'>var miArray = ['peras', 'espárragos', 'bananas'];<br>miArray[1]; // espárragos</span>"
];

// Contador de conceptos, límite máximo
var tipLimit = 6;

// Generar un número aleatorio
function generateNumber(){
	return Math.floor(Math.random() * tipsList.length);
}

// Generar un concepto:
// 1. Obtener un número aleatorio con generateNumber()
// 2. Usar ese número aleatorio para obtener 1 concepto del array tipsList
// 3. Presentar el concepto en pantalla
function generateTip() {
  var tip = tipsList[generateNumber()];
  var tipElement =  document.querySelector('.js-idea');
  var tipLimitCount = document.querySelector('.idea-limit-count');

  tipElement.innerHTML = tip;
  tipLimitCount.innerHTML = tipLimit;
}

// Tip button click
// 1. Seleccionar el botón del concepto
// 2. Agregar un escuchador de eventos click
// 3. Cuando se hace click en el botón:
// 3a. Substraer 1 de la variable tipLimit
// 3b. Si tipLimit aún está por arriba o igual a 0, generar un nuevo concepto
// 3c. Sino, cambiar el texto y el estilo al botón
function onTipButtonClick() {
var tipButton = document.querySelector('.idea-button');
  tipButton.addEventListener('click', function() {
    tipLimit = tipLimit - 1;
    if (tipLimit >= 0) {
      generateTip();

      if (tipLimit === 0) {
        tipButton.innerHTML = 'Recargar la página!';
        tipButton.classList.add('disabled');
      }
    }
  });
}

// Llamar a la función del botón para que escuche el evento click
onTipButtonClick();

// Obtener el primer concepto para que esté disponible al cargar el programa.
generateTip();
