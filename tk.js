window.tk = (function () {

    var c = document.getElementById("Canvas");
    var ctx = c.getContext("2d");
    var yukaridan;
    var yandan;
    var renk;
    var genislik;
    var yukseklik;
    var ileriX;
    var ileriY;


   
    i = 0,
     length = 100;
    function sagsol (z) {      
      
        ctx.lineTo(z, ileriY);              
        ctx.stroke();
       
        
    }

    function yukariAsagi(t) {
        // ctx.clearRect(0, 0, c.width, c.height);
       
        ctx.lineTo(ileriX, t);
        ctx.stroke();
    }

    var tk = {

        git: {
            başlangıç: function (x, y) {
                // ctx.clearRect(0, 0, c.width, c.height);
                ileriX = x || 50;
                ileriY = y || 50;

                ctx.beginPath();
                ctx.moveTo(x, ileriY);

                return this;
            },
            sağ: function (z) {
                ileriX += z;
                sagsol(ileriX);

                return this;
            },

            sol: function (z) {
                ileriX -= z;
                sagsol(ileriX);
                return this;
            },


            aşağı: function (t) {
                ileriY += t;
                yukariAsagi(ileriY);
                return this;

            },

            yukarı: function (t) {
                ileriY -= t;
                yukariAsagi(ileriY);
                return this;

            },
            dön: function (aci) {
                ctx.clearRect(0, 0, c.width, c.height);
                ctx.rotate(aci * Math.PI / 180);
                return this;
            }


        },

        dikdörtgen: {
            yatayUzaklık: 100,
            dikeyUzaklık: 75,
            genişlik: 150,
            yükseklik:75,
            renk: "#FF0000",

            çiz: function () {
                ctx.beginPath();               
                ctx.fillRect(this.yatayUzaklık, this.dikeyUzaklık, this.genişlik, this.yükseklik);
                ctx.fillStyle = this.renk;
                ctx.fill();
                ctx.stroke();
            }
        },

        daire: {
            yatayUzaklık: 100,
            dikeyUzaklık: 75,
            yarıçap: 50,
            renk:"#FF0000",
            çiz: function () {
                ctx.beginPath();               
                ctx.arc(this.yatayUzaklık, this.dikeyUzaklık, this.yarıçap, 0, 2 * Math.PI);
                ctx.fillStyle = this.renk;
                ctx.fill();
                ctx.stroke();

            }
        },
        
        yıldız: {
            yatayUzaklık: 75,
            dikeyUzaklık: 100,
            uçSayısı: 5,
            outerRadius: 30,
            innerRadius: 15,
            renk: "orange",


           çiz: function () {

             
               


                var rot = Math.PI / 2 * 3;
                var x = this.yatayUzaklık;
                var y = this.dikeyUzaklık;
                var step = Math.PI / this.uçSayısı;

                ctx.strokeSyle = "#000";
                ctx.beginPath();
                ctx.moveTo(this.yatayUzaklık, this.dikeyUzaklık - this.outerRadius)
                for (i = 0; i < this.uçSayısı; i++) {
                    x = this.yatayUzaklık + Math.cos(rot) * this.outerRadius;
                    y = this.dikeyUzaklık + Math.sin(rot) * this.outerRadius;
                    ctx.lineTo(x, y)
                    rot += step

                    x = this.yatayUzaklık + Math.cos(rot) * this.innerRadius;
                    y = this.dikeyUzaklık + Math.sin(rot) * this.innerRadius;
                    ctx.lineTo(x, y)
                    rot += step
                }
                ctx.lineTo(this.yatayUzaklık, this.dikeyUzaklık - this.outerRadius)
                ctx.closePath();
                ctx.lineWidth = 5;
                ctx.strokeStyle = 'red';
                ctx.stroke();
                ctx.fillStyle = this.renk;
                ctx.fill();




            }
        },
        çokgen: {
            yatayUzaklık: 150,
            dikeyUzaklık: 100,
            kenarSayısı: 5,
            kenarUzunluğu: 100,
            renk:"skyblue",

            çiz:function () {

                ctx.beginPath();
                ctx.moveTo(this.yatayUzaklık + this.kenarUzunluğu * Math.cos(0), this.dikeyUzaklık + this.kenarUzunluğu * Math.sin(0));

                for (var i = 1; i <= this.kenarSayısı; i += 1) {
                    ctx.lineTo(this.yatayUzaklık + this.kenarUzunluğu * Math.cos(i * 2 * Math.PI / this.kenarSayısı), this.dikeyUzaklık + this.kenarUzunluğu * Math.sin(i * 2 * Math.PI / this.kenarSayısı));
                }

                ctx.strokeStyle = "#000000";

                ctx.lineWidth = 3;
                ctx.stroke();

                ctx.fillStyle = this.renk;
                ctx.fill();



            }
        },
        tekrarla: function (uzunluk, icerik) {

            
            for (var i = 0; i < uzunluk; i++) {                
               
                eval(icerik)
        
            }

      
          

        },
        eğer: function (kosul, islem) {

            if (eval(kosul)) {

                eval(islem);

            }



        },
        yaz: function (metin) {


            var para = document.createElement("P");                       
            var t = document.createTextNode(metin);           
           
            para.appendChild(t);                   

            para.style.fontSize = "30px";
            //    document.body.appendChild(para);
            document.getElementById("icerik").appendChild(para)

        },

        metinKutusu: function (metin, id) {
            
            //Text input elementi dinamik olarak oluşturuluyor
            var para = document.createElement("INPUT");
            para.setAttribute("type", "text");
            para.setAttribute("id", id);

            //metin kutusunun "placeholder" özelliği atanmamışsa 
            //"metin kutusu" ifadesi atanıyor, aksi durumda kullanıcıdan gelen parametre
            //atanıyor
            if (metin == undefined) {
                para.setAttribute("placeholder", "metin kutusu");
            }
            else {
                para.setAttribute("placeholder", metin);

            }
            
            //HTML sayfasına dinamik oluşturulan elementimiz ekleniyor
            document.getElementById("icerik").appendChild(para)

        },

        buton: function (metin,  mesaj) {          
            //Dinamik olarak buton elementi oluşturuluyor
            var butonElementi = document.createElement("INPUT");
            butonElementi.setAttribute("type", "button");
         
          //Kullanıcı parametresi olarak buton metni gönderilmemişse
            // "Gönder" metni değer olarak atanıyor
            if (metin == undefined) {
                butonElementi.setAttribute("value", "Gönder");
            }
            else {
                butonElementi.setAttribute("value", metin);

            }

            //tıklama olayına mesaj tanımlanıyor, mesaj kullanıcıdan
            //parametrik olarak alınıyor
            butonElementi.onclick = function () {alert(mesaj)}

            document.getElementById("icerik").appendChild(butonElementi)

        },
        sıralıListe: function () {  

            //Sıralı liste elementi dinamik oluşturuluyor  ve bir id veriliyor
            var liste = document.createElement("OL");
            liste.setAttribute("id", "siraliListe");
            //liste elementi sayfaya ekleniyor
            document.getElementById("icerik").appendChild(liste)

            //kullanıcının parametrik olarak gönderdiği her bir değer
            //elde edilip liste elementi olarak ekleniyor
            for (var i in arguments) {

                var y = document.createElement("LI");
                var t = document.createTextNode(arguments[i]);
                y.appendChild(t);
                document.getElementById("siraliListe").appendChild(y);


            }         
            

        },

        sırasızListe: function () {

            //Sıralı liste elementi dinamik oluşturuluyor  ve bir id veriliyor
            var liste = document.createElement("UL");
            liste.setAttribute("id", "siraliListe");
            //liste elementi sayfaya ekleniyor
            document.getElementById("icerik").appendChild(liste)

            //kullanıcının parametrik olarak gönderdiği her bir değer
            //elde edilip liste elementi olarak ekleniyor
            for (var i in arguments) {

                var y = document.createElement("LI");
                var t = document.createTextNode(arguments[i]);
                y.appendChild(t);
                document.getElementById("siraliListe").appendChild(y);


            }


        },

        editör: function () {


            //Textarea elementi ile dinamik olarak editör arabirimi oluşturulup, 
            //sayfaya ekleniyor
            var textAlani = document.createElement("TEXTAREA");          
            var t = document.createTextNode("Buraya editörde yazmak istedikleriniz.");
            textAlani.appendChild(t);
            textAlani.style.width = "800px";          
            textAlani.setAttribute("id", "editor");
            document.getElementById("icerik").appendChild(textAlani)


            //editörden girilen komutların gösterileceği DIV elementi
            //oluşturuluyor
            var editorIcerik = document.createElement("DIV");
            editorIcerik.setAttribute("id", "edIc");

            //Ediötürü çalıştıracak buton oluşturuluyor
            var buton = document.createElement("INPUT");
            buton.setAttribute("type", "button");
            buton.setAttribute("value", "Yazdır");

            //Butona tıklandığında editöre girilen değerler Div elementi üzerinde
            // gösteriliyor
            buton.onclick = function () {
                var idGetir = document.getElementById("editor").value;               

                document.getElementById("edIc").innerHTML = idGetir;


            }
            document.getElementById("icerik").appendChild(buton)
            document.getElementById("icerik").appendChild(editorIcerik)
           


        },


        butonSayfayaYazdır: function (id) {

            //Buton elementi dinamik olarak oluşturuluyor
            var butonElementi = document.createElement("INPUT");
            butonElementi.setAttribute("type", "button");           
            butonElementi.setAttribute("value", "Yazdır");

            //Butona tıklandığında daha önceden sayfaya bir id ile eklenmiş
            //metin kutusunun değeleri elde edilip yine dinamik olarak oluşturulan
            //P elementinde gösteriliyor
            butonElementi.onclick = function () {
                var idGetir = document.getElementById(id).value;
                console.log(idGetir)
                var paragraf = document.createElement("P");
                var t = document.createTextNode(idGetir);

                paragraf.appendChild(t);

                paragraf.style.fontSize = "30px";
                
                document.getElementById("icerik").appendChild(paragraf)


            }

            document.getElementById("icerik").appendChild(butonElementi)

        },

        resimEkle: function (yol) {
            //image elementi dinamik olarak oluşturuluyor
            var resim = document.createElement("img");
            //Kullanıcıdan gelen parametre src niteliğine ekleniyor
            resim.setAttribute("src", yol);
            resim.setAttribute("alt", "resim alanı"); 
            //Resim sayfaya ekleniyor
            document.getElementById("icerik").appendChild(resim)

        },
        videoEkle: function (yol) {
            //Video elementi kod ile oluşturulup sayfaya ekleniyor
            var video = document.createElement("video");
            //Kullanıcıdan gelen video yol tanımı parametrik olarak ekleniyor
            video.setAttribute("src", "medya/" + yol);           
            video.setAttribute("controls", "controls");
            document.getElementById("icerik").appendChild(video)

        },
        sesEkle: function (yol) {
            //ses elementi kod ile oluşturulup sayfaya ekleniyor
            var ses = document.createElement("audio");
             //Kullanıcıdan gelen ses dosyası yol tanımı parametrik olarak ekleniyor
            ses.setAttribute("src", "medya/" + yol);           
            ses.setAttribute("controls", "controls");
            document.getElementById("icerik").appendChild(ses)

        },

        değerKontrolü: function (min, max ) {

            //Input range elementi oluşturuluyor
            var range = document.createElement("input");
            range.setAttribute("type", "range");
            //range elementinin max ve min. değerleri set ediliyor
            range.setAttribute("min", min);
            range.setAttribute("max", max);

            //range elementi sayfaya ekleniyor
            document.getElementById("icerik").appendChild(range)

            //Değeri gösterecek span elementi oluşturulup sayfaya ekleniyor
            var span = document.createElement("span");
            span.setAttribute("id", "degerGoster");
            document.getElementById("icerik").appendChild(span)

            //range elementinde bir değişim olduğunda o anki değeri span elementine
            //yazdırılıyor
            range.oninput = function () {

                document.getElementById("degerGoster").innerHTML = this.value;

            }


        },

        işlemÖlçer: function (max, val) {
            //Progress elementi oluşturuluyor
            var islem = document.createElement("progress");           
           //Başlangıç ve alacağı max. değer set ediliyor
            islem.setAttribute("max", max);
            islem.setAttribute("value", val);
            //Progress elementi sayfaya ekleniyor
            document.getElementById("icerik").appendChild(islem)

            //Progress'in değeri her 50 milisaniye de bir, bir arttırılıyor
            setInterval(function () { document.querySelector('progress').value += 1; }, 50);

        },



        resim: {
            balık: function (yanX, ustY) {

                var yanX = yanX || 100;
                var ustY = ustY || 100;

         var   base_image = new Image();
            base_image.src = 'images/fishu.png';
            

            base_image.onload = function () {
                ctx.drawImage(base_image, yanX, ustY);
            }
            return this;
            },
       

            git: function (yan, ust) {

                
                ctx.drawImage(base_image, yan, ust);
                return this;

            },

            dön: function (aci) {
              
                ctx.translate(150, 200);
           
               
                ctx.rotate(aci * Math.PI / 180);
                ctx.translate(-150, -200);
                return this;
            },

            köpek: function (yanX, ustY) {

                var yanX = yanX || 100;
                var ustY = ustY || 100;

                var base_image = new Image();
                base_image.src = 'images/kopek.png';


                base_image.onload = function () {
                    ctx.drawImage(base_image, yanX, ustY);
                }
                return this;
            },

            kedi: function (yanX, ustY) {

                var yanX = yanX || 100;
                var ustY = ustY || 100;

                var base_image = new Image();
                base_image.src = 'images/kedi.png';


                base_image.onload = function () {
                    ctx.drawImage(base_image, yanX, ustY);
                }
                return this;
            },
            penguen: function (yanX, ustY) {

                var yanX = yanX || 100;
                var ustY = ustY || 100;

                var base_image = new Image();
                base_image.src = 'images/penguen.png';


                base_image.onload = function () {
                    ctx.drawImage(base_image, yanX, ustY);
                }
                return this;
            },
            gemi: function (yanX, ustY) {
                var yanX = yanX || 100;
                var ustY = ustY || 100;


                var base_image = new Image();
                base_image.src = 'images/gemi.png';


                base_image.onload = function () {
                    ctx.drawImage(base_image, yanX, ustY);
                }
                return this;
            },
            tramvay: function (yanX, ustY) {
                var yanX = yanX || 100;
                var ustY = ustY || 100;


                var base_image = new Image();
                base_image.src = 'images/tramvay.png';


                base_image.onload = function () {
                    ctx.drawImage(base_image, yanX, ustY);
                }
                return this;
            },
            karavan: function (yanX, ustY) {
                var yanX = yanX || 100;
                var ustY = ustY || 100;


                var base_image = new Image();
                base_image.src = 'images/karavan.png';


                base_image.onload = function () {
                    ctx.drawImage(base_image, yanX, ustY);
                }
                return this;
            },

            okulOtobüsü: function (yanX, ustY) {
                var yanX = yanX || 100;
                var ustY = ustY || 100;


                var base_image = new Image();
                base_image.src = 'images/okulotobusu.png';


                base_image.onload = function () {
                    ctx.drawImage(base_image, yanX, ustY);
                }
                return this;
            },

            elma: function (yanX, ustY) {
                var yanX = yanX || 100;
                var ustY = ustY || 100;


                var base_image = new Image();
                base_image.src = 'images/elma.png';


                base_image.onload = function () {
                    ctx.drawImage(base_image, yanX, ustY);
                }
                return this;
            },

            limon: function (yanX, ustY) {
                var yanX = yanX || 100;
                var ustY = ustY || 100;


                var base_image = new Image();
                base_image.src = 'images/limon.png';


                base_image.onload = function () {
                    ctx.drawImage(base_image, yanX, ustY);
                }
                return this;
            },

            portakal: function (yanX, ustY) {
                var yanX = yanX || 100;
                var ustY = ustY || 100;


                var base_image = new Image();
                base_image.src = 'images/portakal.png';


                base_image.onload = function () {
                    ctx.drawImage(base_image, yanX, ustY);
                }
                return this;
            }
            
        },
       

        yardım :  function () {
       
            window.open("yardim/cikYardim.html", "mywindow", "menubar=1,resizable=1,width=650,height=650");
                        return this;
                    }

        




    };





    return tk;
}());