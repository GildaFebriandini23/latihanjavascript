function Bil(){
    var a = prompt("Masukan Bilangan") ;
    if (a !=null){
        if (a % 2 == 0 ){
            alert(a + 'adalah bilangan genap');
            var a = confirm('lagi ?');
            if (a) Bil();
        }else{
            alert(a + 'adalah bilangan ganjil');
            var a = confirm('lagi ?');
            if (a) Bil();
        }
    } else{
        var tanya = confirm('Lagi');
    }

    if (tanya){
        Bil();
    }
}