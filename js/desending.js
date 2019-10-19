// console.log("TEST");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// TO ASK WHY MY DOCUMENT WRITE THAT I CREATED FOR A TEST IS NOT WORKING
// document.write("test from Francisco");
// class 1
var basicContent = /** @class */ (function () {
    function basicContent(tittle, img, address, city, zip, rating, created) {
        this.created = "";
        this.tittle = "";
        this.img = "";
        this.address = "";
        this.city = "";
        this.zip = "";
        this.rating = "";
        this.tittle = tittle;
        this.img = img;
        this.address = address;
        this.city = city;
        this.zip = zip;
        this.rating = rating;
        // Adding new Data DONT FORGET to add the obj name into every constructor, 
        // super, methodcreated and LETS that built the ARRAY
        this.created = created;
    }
    return basicContent;
}());
;
// Class 2
var Colors = /** @class */ (function (_super) {
    __extends(Colors, _super);
    function Colors(tittle, img, address, city, zip, rating, created, cuisine, phone, website) {
        var _this = _super.call(this, tittle, img, address, city, zip, rating, created) || this;
        _this.cuisine = cuisine;
        _this.phone = phone;
        _this.website = website;
        return _this;
    }
    Colors.prototype.methodCreated = function () {
        return "<div class=\"col-lg-4 col-md-6 mb-4\">\n\t                <div class=\"card h-100\">\n\t                    <a href=\"#\"><img class=\"card-img-top\" src=\"" + this.img + "\" alt=\"\"></a>\n\t                    <div class=\"card-body\">\n\t                        <h4 class=\"card-title\">\n\t                            <a class=\"colorIcon fontCardTittle\" href=\"" + this.website + "\">" + this.tittle + "</a>\n\t                        </h4>\n\t                        <h5 class=\"fontCardTittle d-flex justify-content-end\">" + this.cuisine + "</h5>\n\t                        <hr>\n\t                        <p class=\"card-text\"><i class=\"colorIcon fas fa-map-marked-alt\"></i> " + this.address + "<br>\n\t                        <span class=\"card-text\"> <tb> <tb>" + this.city + ", " + this.zip + "</span></p>\n\t\t\t\t\t\t\t<p class=\"card-text\"><i class=\"colorIcon fas fa-phone-square-alt\"></i> " + this.phone + "</p>\n\t                        <a class=\"card-text fontCardTittle\" href=\"" + this.website + "\"><i class=\"colorIcon fas fa-mouse\"></i></i> Visit us</a>\n\t                    </div>\n\t                    <div class=\"card-footer\">\n\t                        <small class=\"text-muted\">" + this.rating + " , " + this.created + "</small>\n\t                    </div>\n\t                </div>\n\t            </div>";
    };
    return Colors;
}(basicContent));
// Class 3 
var People = /** @class */ (function (_super) {
    __extends(People, _super);
    function People(tittle, img, address, city, zip, rating, created, date, time, price) {
        var _this = _super.call(this, tittle, img, address, city, zip, rating, created) || this;
        _this.date = date;
        _this.time = time;
        _this.price = price;
        return _this;
    }
    People.prototype.methodCreated = function () {
        return "<div class=\"col-lg-4 col-md-6 mb-4\">\n\t                <div class=\"card h-100\">\n\t                    <a href=\"" + this.address + "\"><img class=\"card-img-top\" src=\"" + this.img + "\" alt=\"\"></a>\n\t                    <div class=\"card-body\">\n\t                        <h4 class=\"card-title\">\n\t                            <a class=\"colorIcon fontCardTittle\" href=\"" + this.address + "\">" + this.tittle + "</a>\n\t                        </h4>\n\t                        <h5></h5>\n\t                        <p class=\"card-text\"><i class=\"colorIcon fas fa-map-marked-alt\"></i> " + this.city + "</p>\n\t\t\t\t\t\t\t<p class=\"card-text\"><i class=\"colorIcon fas fa-hourglass-start\"></i> " + this.time + "</p>\n\t                        <p class=\"card-text\"><i class=\"colorIcon fas fa-euro-sign\"></i> " + this.price + "</p>\n\t                    </div>\n\t                    <div class=\"card-footer\">\n\t                        <small class=\"text-muted\">" + this.rating + ", " + this.created + " </small>\n\t                    </div>\n\t                </div>\n\t            </div>";
    };
    ;
    return People;
}(basicContent));
;
// Class 4 
var Flavors = /** @class */ (function (_super) {
    __extends(Flavors, _super);
    function Flavors(tittle, img, address, city, zip, rating, created, event, locationEvent) {
        var _this = _super.call(this, tittle, img, address, city, zip, rating, created) || this;
        _this.event = event;
        _this.locationEvent
            = locationEvent;
        return _this;
    }
    Flavors.prototype.methodCreated = function () {
        return "<div class=\"col-lg-4 col-md-6 mb-4\">\n\t                <div class=\"card h-100\">\n\t                    <a href=\"" + this.address + "\"><img class=\"card-img-top\" src=\"" + this.img + "\" alt=\"\"></a>\n\t                    <div class=\"card-body\">\n\t                        <h4 class=\"card-title\">\n\t                            <a class=\"colorIcon fontCardTittle\" href=\"" + this.address + "\">" + this.tittle + "</a>\n\t                        </h4>\n\t                        <h5></h5>\n\t                        <p class=\"card-text\"><i class=\"colorIcon fas fa-map-marked-alt\"></i> " + this.city + "</p>\n\t\t\t\t\t\t\t<p class=\"card-text\"><i class=\"colorIcon fas fa-tasks\"></i></i> " + this.event + "</p>\n\t\t\t\t\t\t\t<p class=\"card-text\"><i class=\"colorIcon fas fa-hourglass-start\"></i> " + this.locationEvent + "</p>\n\t                    </div>\n\t                    <div class=\"card-footer\">\n\t                        <small class=\"text-muted\">" + this.rating + " , " + this.created + "</small>\n\t                    </div>\n\t                </div>\n\t            </div>";
    };
    ;
    return Flavors;
}(basicContent));
;
// The Class 1 is the basicContent "superClass",
// and does not need to be seen becuse is the one holding 
// the general information.
// For the Date Input in js check: https://www.w3schools.com/js/tryit.asp?filename=tryjs_date_current
// To sort in descending order : https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_sort3
// this Objects apear because the val.methodCreated is also locted in the class 2 (Colors)
// tittle,img,address,city,zip,rating,CREATED,cuisine,phone,website
var class2_position3 = new Colors("Restaurant Gustu", "./img/bolivia17_restauranteGuste_piatto2.png", "Ave Costanera 10", "La Paz, Bolivia", 82300, "4,7 &#9733; &#9733; &#9733; &#9733; &#9734", new Date(2019, 2, 23), "Bolivan/french fusion", "tel +591 2 2117491", "http://www.gustu.bo/es");
var class2_position4 = new Colors("Jardín de Asia", "./img/bolivia18_resturante_gustu_piatto3.png", "Av Marcelo Terceros Bánzer", "Santa Cruz de la Sierra, Bolivia", 73123, "4,6 &#9733; &#9733; &#9733; &#9733; &#9734", new Date(2019, 9, 23), "Bolivian/Japanese fusion", "tel ++591 3 3421000", "https://santacruz.jardindeasia.com/");
var class2_position5 = new Colors("La Casona", "./img/bolivia21_restaurantegustu_piatto6.png", "Av Cristobal Mendoza 1365", "Santa Cruz de la Sierra, Bolivia", 83125, "4,4 &#9733; &#9733; &#9733; &#9733; &#9734", new Date(2019, 5, 23), "Traditional Bolivian", "tel +591 3 3427864", "https://www.casadelcamba.com/");
// this Objects apear because the val.methodCreated is also locted in the class 3 (People)
// tittle,img,address,city,zip,rating,CREATED,date,time,price
var class3_position6 = new People("Salar de Uyuni", "./img/bolivia26_slar_cachilodge.png", "https://www.kachilodge.com/", "Jirira,Salar de Tunupa", 65100, "4,9 &#9733; &#9733; &#9733; &#9733; &#9733", new Date(2019, 7, 23), "All Year", "Always open", 10);
var class3_position7 = new People("El Pantanal", "./img/Bolivia28_Pantanal.png", "http://www.ambientelegal.com.br/brasil-bolivia-e-paraguai-juntos-pelo-pantanal/", "Pantanal Boliviano", 60123, "4 &#9733; &#9733; &#9733; &#9733; &#9733", new Date(2019, 9, 23), "All Year", "Always open", 7);
var class3_position8 = new People("Carnaval de Oruro", "./img/bolivia29_canavalOruro.png", "https://ich.unesco.org/en/RL/carnival-of-oruro-00003", "Oruro", 70123, "5 &#9733; &#9733; &#9733; &#9733; &#9733", new Date(2019, 1, 23), "All Year", "Only douring Canival", 9);
// this Objects apear because the val.methodCreated is also locted in the class 4 (Flavors)
// tittle,img,address,city,zip,rating,CREATED,event,locationEvent
var class4_position9 = new Flavors("El Alto", "./img/bolivia31_cholitas_luchadoras.png", "http://andean-secrets.com/", "Zona 16 de julio La Paz, Bolivia", 90724, "4 &#9733; &#9733; &#9733; &#9733; &#9734", new Date(2019, 6, 23), "Cholitas Wrestling", "Every Thursday at Cholet Havana.");
var class4_position10 = new Flavors("Sucre", "./img/bolivia30_sucre.png", "https://www.lonelyplanet.com/bolivia/the-southwest/sucre", "Capitol city also known as 'La Ciudad de los quatro nombres'", 90724, "4,5 &#9733; &#9733; &#9733; &#9733; &#9734", new Date(3019, 11, 23), "City walk", "Open: 24/7");
var class4_position11 = new Flavors("Tarija", "./img/BOLIVIA32_TARIJA.png", "https://www.lavozdetarija.com/2017/06/15/tajzara-un-lugar-magico/", "El Altiplano del Sur de Bolivia", 33724, "4,1 &#9733; &#9733; &#9733; &#9733; &#9734", new Date(2019, 8, 23), "Trekking", "Open: 24/7");
// first group HTML (colors)
var arrayforMethodCreated1 = [
    class2_position3, class2_position4, class2_position5
];
// TEST SORT OK Ascendent
arrayforMethodCreated1.sort(function (a, b) { return a.created - b.created; });
// // TEST SORT OK Desendent
// arrayforMethodCreated1.sort((a,b)=>b.created-a.created);
for (var _i = 0, arrayforMethodCreated1_1 = arrayforMethodCreated1; _i < arrayforMethodCreated1_1.length; _i++) {
    var val = arrayforMethodCreated1_1[_i];
    document.getElementById("result1").innerHTML += val.methodCreated();
}
// Second group HTML (People)
var arrayforMethodCreated2 = [
    class3_position6, class3_position7, class3_position8
];
// TEST SORT OK Ascendent
arrayforMethodCreated2.sort(function (a, b) { return a.created - b.created; });
// // TEST SORT OK Desendent
// arrayforMethodCreated2.sort((a,b)=>b.created-a.created);
for (var _a = 0, arrayforMethodCreated2_1 = arrayforMethodCreated2; _a < arrayforMethodCreated2_1.length; _a++) {
    var val = arrayforMethodCreated2_1[_a];
    document.getElementById("result3").innerHTML += val.methodCreated();
}
// third group HTML (Flavors)
var arrayforMethodCreated3 = [
    class4_position9, class4_position10, class4_position11
];
// TEST SORT OK Ascendent
arrayforMethodCreated3.sort(function (a, b) { return a.created - b.created; });
// // TEST SORT OK Desendent
// arrayforMethodCreated3.sort((a,b)=>b.created-a.created);
for (var _b = 0, arrayforMethodCreated3_1 = arrayforMethodCreated3; _b < arrayforMethodCreated3_1.length; _b++) {
    var val = arrayforMethodCreated3_1[_b];
    document.getElementById("result2").innerHTML += val.methodCreated();
}
