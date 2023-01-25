$(document).ready(function(){

        //panggil fungsi menampilkan data global
        globalData();
        indonesiaData();

        //automatic refresh
        setInterval(function(){
            globalData();
            indonesiaData();
        }, 3000);

        //menampilkan data global
        function globalData(){
             $.ajax({
                url : 'https://coronavirus-19-api.herokuapp.com/countries',
                success : function(data){
                    try{
                   
                        var json = data;
                        var html = [];

                        if (json.length > 0) {
                            var i;
                            for(i = 0; i < json.length; i++){
                                var globalData = json[i];
                                var namaNegara = globalData.country;

                                if (namaNegara === 'World') {
                                    var kasus = globalData.cases;
                                    var meninggal = globalData.deaths;
                                    var sembuh = globalData.recovered;
                                    var kasusToday = globalData.todayCases;
                                    var meninggalToday = globalData.todayDeaths;
                                    var aktifKasus = globalData.active;

                                    $('#positif-global').html(kasus);
                                    $('#meninggal-global').html(meninggal);
                                    $('#sembuh-global').html(sembuh);
                                    $('#aktifKasus-global').html(aktifKasus);
                                    $('#meninggalToday-global').html('Total Penambahan Pasien Meninggal Hari ini : <b>'+meninggalToday+'</b> Orang');
                                    $('#kasusToday-global').html('Total Penambahan Pasien Confirm Hari ini : <b>'+kasusToday+'</b> Orang');

                                }
                            }
                        }

                    }catch{
                        alert('Gagal mengambil data');
                    }
                }
            });
        }
        //akhir data global

        //menampilkan data indonesia
        function indonesiaData(){
             $.ajax({
                url : 'https://coronavirus-19-api.herokuapp.com/countries',
                success : function(data){
                    try{
                   
                        var json = data;
                        var html = [];

                        if (json.length > 0) {
                            var i;
                            for(i = 0; i < json.length; i++){
                                var indoData = json[i];
                                var namaNegara = indoData.country;

                                if (namaNegara === 'Indonesia') {
                                    var kasus = indoData.cases;
                                    var meninggal = indoData.deaths;
                                    var sembuh = indoData.recovered;
                                    var kasusToday = indoData.todayCases;
                                    var meninggalToday = indoData.todayDeaths;
                                    var aktifKasus = indoData.active;

                                    $('#positif-indo').html(kasus);
                                    $('#meninggal-indo').html(meninggal);
                                    $('#sembuh-indo').html(sembuh);
                                    $('#aktifKasus-indo').html(aktifKasus);
                                    $('#meninggalToday-indo').html('Total Penambahan Pasien Meninggal Hari ini : <b>'+meninggalToday+'</b> Orang');
                                    $('#kasusToday-indo').html('Total Penambahan Pasien Confirm Hari ini : <b>'+kasusToday+'</b> Orang');

                                }
                            }
                        }

                    }catch{
                        alert('Gagal mengambil data');
                    }
                }
            });
        }
        //akhir menampilkan data indonesia

        /*function jatimData(){
             $.ajax({
                url : 'https://data.covid19.go.id/public/api/prov.json',
                success : function(data){

                    try{
                   
                        var json = data;
                        var html = [];

                        if (json.length > 0) {
                            var a;
                            for(a = 0; a < json.length; a++){
                                var jatimData = json;
                                var namaProvinsi = jatimData.key;

                                if (namaProvinsi === 'JAWA TIMUR') {
                                    var kasus = jatimData.jumlah_kasus;
                                    var meninggal = jatimData.jumlah_meninggal;
                                    var sembuh = jatimData.jumlah_sembuh;
                                    var aktifKasus = jatimData.jumlah_dirawat;

                                    alert(namaProvinsi);

                                    $('#positif-jatim').html(kasus);
                                    $('#meninggal-jatim').html(meninggal);
                                    $('#sembuh-jatim').html(sembuh);
                                    $('#aktifKasus-jatim').html(aktifKasus);
                                    
                                }
                            }
                        }

                    }catch{
                        alert('Gagal mengambil data');
                    }
                }
            });
        }*/

    })