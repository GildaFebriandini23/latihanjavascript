function Bil() {
    var nilai = prompt("Masukan niali yang anda mau !");
    if (nilai != null) {
        if (nilai >= 80) {
            alert('Nilai anda ' + nilai + ' adalah A');
            var nilai = confirm('Lagi ?');
            if(nilai) {
                Bil();
            } else {
                alert('makasih');
            }

        } else if (nilai >= 65 && nilai <= 80) {
            alert('Nilai anda ' + nilai + ' adalah C');
            var nilai = confirm('Lagi gak ?');
            if(nilai) {
                Bil();
            } else {
                alert('makasih');
            }
        } else {
            alert('Nilainya jelek');
            var nilai = confirm('Lagi gak ?');
            if(nilai) {
                Bil();
            } else {
                alert('makasih');
            }
        }
    } else {
        alert('yaudah makasih !');
    }
}