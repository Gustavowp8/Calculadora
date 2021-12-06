function insert(num) {
    var numero = document.getElementById('res').innerHTML;
    document.getElementById('res').innerHTML = numero + num
}

function clean() {
    document.getElementById('res').innerHTML= ``
}

function back(params) {
    var res = document.getElementById('res').innerHTML;
    document.getElementById('res').innerHTML = res.substring(0, res.length -1)
}

function calcular() {
    var res = document.getElementById('res').innerHTML;
    if (res){
        document.getElementById('res').innerHTML = eval(res);
    } else {
        alert('Nada para calcular')
        /*document.getElementById('res').innerHTML = 'Sem resultado'*/
    }
}