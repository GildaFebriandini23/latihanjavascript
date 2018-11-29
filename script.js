function Bil(){
    var a = prompt("Masukan Bilangan") ;
    if (a !=null){
        if (a % 2 == 0 ){
            alert(a + 'adalah bilangan genap');
            confirm('lagi ?');
        }else{
            alert(a + 'adalah bilangan ganjil');
        }
    } else{
       var tanya = confirm('Lagi');
    }

    if (tanya){
        Bil();
    }



}