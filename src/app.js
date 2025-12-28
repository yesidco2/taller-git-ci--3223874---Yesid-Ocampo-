module.exports = {suma}; 

function suma(a,b){
    return a + b;
}

console.log(`App lista ${suma(5,7)}`);

function agregarItem(texto) {
    const lista = document.getElementById('lista');
    const li = document.createElement('li');
    li.textContent = texto;
    lista.appendChild(li);
}

document.getElementById('btn-agregar').addEventListener('click', () => {
    const texto = prompt('Ingrese un item');
    if (texto) agregarItem(texto);
});
