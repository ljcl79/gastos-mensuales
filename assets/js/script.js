let listaNombresGastos = [];
let listaValoresGastos = [];

//Esta función se invoca al momento de que el usuario hace clic en el
//boton
function clickBoton() {
    let nombreGasto = document.getElementById('nombreGasto').value;
    let valorGasto = document.getElementById('valorGasto').value;

    console.log(nombreGasto);
    console.log(valorGasto);

    listaNombresGastos.push(nombreGasto);
    listaValoresGastos.push(valorGasto);

    console.log(listaNombresGastos);
    console.log(listaValoresGastos);
    //alert('Click de usuario');
    actualizarListaGastos();
}

function actualizarListaGastos() {
    const listaElementos = document.getElementById('listaDeGastos');
    const totalElementos = document.getElementById('totalGastos');
    let htmlLista = '';
    let totalGastos = 0;
    listaNombresGastos.forEach((elemento, posicion) => {
        const valorGasto = Number(listaValoresGastos[posicion]);

        htmlLista += `<li>${elemento} - USD ${valorGasto.toFixed(2)} 
                    <button onclick="editarGasto(${posicion});">Editar</button>
                    <button onclick="eliminarGasto(${posicion});">Eliminar</button>
                    </li>`;
        //Calculamos el total de gastos
        totalGastos += Number(valorGasto);

    });
    listaElementos.innerHTML = htmlLista;
    totalElementos.innerHTML = totalGastos.toFixed(2);
    limpiar();
}

function editarGasto(indice) {
    const cajitaNombreGasto = document.getElementById('nombreGasto');
    const cajitaValorGasto = document.getElementById('valorGasto');
    cajitaNombreGasto.value = listaNombresGastos[indice];
    cajitaValorGasto.value = listaValoresGastos[indice];
}

function limpiar() {
    document.getElementById('nombreGasto').value = '';
    document.getElementById('valorGasto').value = '';
}

function eliminarGasto(posicion) {

    listaNombresGastos.splice(posicion, 1);
    listaValoresGastos.splice(posicion, 1);
    actualizarListaGastos();
}