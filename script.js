function Bil(){
    var a = prompt("Masukan Bilangan") ;
    if (a % 2 == 0 ){
        alert(a+ 'adalah bilangan genap');
    }else{
        alert(a+ 'adalah bilangan ganjil');
    }

    Bil();
}