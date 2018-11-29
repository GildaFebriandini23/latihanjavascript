var again = true;

while(again){
    var angka = prompt('Masukkan Angka : ');
    if (angka % 2 === 0){
        alert(angka + ' Adalah angka Genap ');
    }else{
        alert(angka + ' Adalah angka Ganjil ');
    }

    again = confirm('Mau Coba Lagi ?');
}

alert('Terimakasih...');