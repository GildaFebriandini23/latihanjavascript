function Bil(){
    var a = prompt("Masukan Bilangan yang anda mau !") ;
    if (a != null){
        if (a % 2 == 0 ){
            alert('bilangannya genap mbak');
            var a = confirm('mau lagi gak ?');
            if (a) Bil();
        }else{
            alert('bilangan ganjil itu');
            var a = confirm('lagi gak ?');
            if (a) Bil();
        }
    } else{
        var tanya = confirm('makasih');
    }

    if (tanya){
        Bil();
    } else {
        alert('yaudah makasih !');
    }
}