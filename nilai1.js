var nilai = prompt("Masukan niali yang anda mau !") ;
if (nilai != null){
    if (nilai >= 80 ){
        alert('Nilai anda ' + nilai + ' adalah A');

    }else if (nilai >= 65 && nilai <=80) {
        alert('Nilai anda ' + nilai + ' adalah C');
    } else {
        alert('Nilainya jelek');
    }
}