var kaupunki = "Helsinki";

$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + kaupunki + "&units=metric&lang=fi&APPID=68b458b95034287ab835315a63eba438", function(data) {
    console.log(data);
    var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var lampotila = Math.floor(data.main.temp) + " °C";
    console.log(lampotila);
    var saatila = data.weather[0].main;
    var teksti = "Koodi kolme!";

    if(saatila==="Thunderstorm") {
        saatila = "Ukkostaa <br> Oluettaa <br>  ---->> " + teksti.bold();
    }
    if(saatila==="Drizzle") {
        saatila = "Tihuttaa <br> ---->> " + teksti.bold();
    }
    if(saatila==="Rain") {
        saatila = "Sateista <br> ---->> " + teksti.bold();
    }
    if(saatila==="Snow") {
        saatila = "Lumisadetta <br> Miten olisi yksi kylmä tuopponen?<br>  ---->> " + teksti.bold();
    }
    if(saatila==="Mist") {
        saatila = "Huurteinen päivä <br> Vai halutaan sitä vähän huurteista?  <br>  ---->> " + teksti.bold();
    }
    if(saatila==="Smoke") {
        saatila = "Savua SOSSOSSOS <br> Pelastakaa Boothill! <br>  ---->> " + teksti.bold();
    }
    if(saatila==="Haze") {
        saatila = "Usvaista <br> Missä olet Boothill? <br>  ---->> Kai se on pakko jäädä koululle..";
    }
    if(saatila==="Dust") {
        saatila = "hiekkaa ja pölyä pöllyää <br> Oliko se nyt Heinix vai Heineken? <br>  ---->> " + teksti.bold();
    }
    if(saatila==="Fog") {
        saatila = "Sumuista <br> Näen Bootin logon! <br>  ---->> " + teksti.bold();
    }
    if(saatila==="Sand") {
        saatila = "Hiekkamyrsky iskee! <br> Boothill, kaikkien janoisten sankari! <br>  ---->> " + teksti.bold();
    }
    if(saatila==="Ash") {
        saatila = "Tuhkaa <br> Maailmanloppu! <br>  ---->> " + teksti.bold();
    }
    if(saatila==="Squall") {
        saatila = "Kovia tuulenpuuskia <br> Ehkä pitänee tehdä tänään kouluhommat sisällä <br>  ---->> " + teksti.bold();
    }
    if(saatila==="Tornado") {
        saatila = "Tornadot iskevät <br> Äkkiä boottiin! <br>  ---->> " + teksti.bold();
    }
    if(saatila==="Clear") {
        saatila = "Poutaista  <br> Hmmmmmmm, sisälle vai pussikaljat <br> ---->> " + teksti.bold();
    }
    if(saatila==="Clouds") {
        saatila = "Pilvistä <br> Pelataan varman päälle <br> ---->> " + teksti.bold();
    }


    console.log(saatila);
    console.log(lampotila);
    $('.icon').attr('src', icon);
    $('.saatiedot').append(saatila);
    $('.lampotila').append(lampotila);
});