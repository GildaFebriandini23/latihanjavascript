function Nilai() {
    var n = prompt ('Masukan jumlah user : ');
    if (n !=null){
        var hasil = 0 ;
        var mutu = "" ;
        for (var i= 1 ; i <=n ; i++){
            var u =parseInt(prompt(' Masukan nilai user ke' + i +":"));
            console.log("Perulangan Ke " + i + " = " +u);
            hasil = (hasil+u)/i ;
        }
        if (hasil >= 80){
            mutu = "A" ;
        } else if (hasil >=65 && hasil<80){
            mutu ="B" ;
        }else{
            mutu = "C" ;
        }

        alert("Nilai anda adalah "+ hasil + "\n Nilai mutunya anda adalah " + mutu);
        var t = confirm('Lagi ?');
            if (t !=true){
                alert('terimakasih');
                end;
            }
    }else{
        var tanya = confirm("Apakah anda ingin keluar ?");
    }
            if (tanya !=true){
                Nilai();
            } else{
                alert("Terimakasih");
            }


    
}