require.config({ paths: { 'vs': '/js/vs' } });

require(["vs/editor/editor.main"], function () {

    monaco.languages.register({ id: 'tkKutuphane' });

    monaco.editor.defineTheme('ozelTema', {
        base: 'vs',
        inherit: false,
        rules: [{ background: 'EDF9FA' }],
        colors: {
            'editor.foreground': '#000000',
            'editor.background': '#EDF9FA',
            'editorCursor.foreground': '#8B0000',
            'editor.lineHighlightBackground': '#0000FF20',
            'editorLineNumber.foreground': '#008800',
            'editor.selectionBackground': '#88000030',
            'editor.inactiveSelectionBackground': '#88000015'
        }
    });

    monaco.editor.setTheme('ozelTema');


   
    monaco.languages.registerCompletionItemProvider('tkKutuphane', {
        triggerCharacters: ["."],

        provideCompletionItems: () => {
            return [
               
                {
                    //Akıllı kod tamamlamada gösterilecek metin
                    label: 'Buton',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: {
                        //Eklenecek kod arabirimi
                        value: [
                            'tk.buton("Buton Metni", "merhaba")'
                        ].join('\n')
                    },
                     //Ek bilgi alanı, kullanıcı "i" butonuna tıklayınca gösterilir
                    documentation: `tk.buton("Buton Metni", "merhaba")
Sayfaya bir buton ekler ve buna tıklandığında mesaj penceresinde mesaj verir.
İlk parametre buton üzerindeki metin ifadesi, ikinci parametre mesaj metnidir.
-------------------------------------------
`
                },


                {
                    //Akıllı kod tamamlamada gösterilecek metin
                    label: 'Resim Ekle',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: {
                         //Eklenecek kod arabirimi
                        value: [
                            'tk.resimEkle("images/duck.png")'
                        ].join('\n')
                    },
                     //Ek bilgi alanı, kullanıcı "i" butonuna tıklayınca gösterilir
                    documentation: `tk.resimEkle("images/duck.png")
Sayfaya bir resim ekler. Yol tanımı parametre alanında belirtilmelidir.
------------------------------------------------------------------------`
                },



                {
                    //Akıllı kod tamamlamada gösterilecek metin
                    label: 'Video Ekle',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: {
                        //Eklenecek kod arabirimi
                        value: [
                            'tk.videoEkle("kelebek.mp4")'
                        ].join('\n')
                    },
                    //Ek bilgi alanı, kullanıcı "i" butonuna tıklayınca gösterilir
                    documentation: `tk.videoEkle("kelebek.mp4")
Sayfaya bir video ekler. Yol tanımı parametre alanında belirtilmelidir.
------------------------------------------------------------------------
`
                },

                {
                    //Akıllı kod tamamlamada gösterilecek metin
                    label: 'Ses Ekle',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: {
                        //Eklenecek kod arabirimi
                        value: [
                            'tk.sesEkle("bach.mp3")'
                        ].join('\n')
                    },
                    //Ek bilgi alanı, kullanıcı "i" butonuna tıklayınca gösterilir
                    documentation: `tk.sesEkle("bach.mp3")
Sayfaya  ses veya müzik ekler. Yol tanımı parametre alanında belirtilmelidir.
------------------------------------------------------------------------
`
                },

                {
                    //Akıllı kod tamamlamada gösterilecek metin
                    label: 'Değer Kontrolü',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: {
                        //Eklenecek kod arabirimi
                        value: [
                            'tk.değerKontrolü(10, 100)'
                        ].join('\n')
                    },
                    //Ek bilgi alanı, kullanıcı "i" butonuna tıklayınca gösterilir
                    documentation: `tk.değerKontrolü(10, 100)
Sayfaya bir range kontrolü ekler. Min ve Max Değerler parametre alanında belirtilmelidir.
-------------------------------------------------------
`
                },


                {
                    label: 'İşlem Ölçer',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: {
                        value: [
                            'tk.işlemÖlçer(100, 10)'
                        ].join('\n')
                    },
                    documentation: `tk.işlemÖlçer(100, 10)
İşlemlerin ilerleme durumunu gösteren bir kontrol ekler. İlk Parametre max. değeri ikincisi başlangıç değerini belirler.
------------------------------------------------------------------------
`
                },

               
                {     //Akıllı kod tamamlamada gösterilecek metin
                    label: 'Editör',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: {
                      //Eklenecek kod arabirimi
                        value: [
                            'tk.editör()'
                        ].join('\n')
                    },
                    //Ek bilgi alanı, kullanıcı "i" butonuna tıklayınca gösterilir
                    documentation: `tk.editör()
HTML Etiketleri yazarak elementler oluşturabileceğiniz bir alan sunar.
-------------------------------------------
`
                },

                {   //Akıllı kod tamamlamada gösterilecek metin
                    label: 'Sıralı liste',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: {
                        //Eklenecek kod arabirimi
                        value: [
                            'tk.sıralıListe("elma", "portakal")'
                        ].join('\n')
                    },
                     //Ek bilgi alanı, kullanıcı "i" butonuna tıklayınca gösterilir
                    documentation: `tk.sıralıListe("elma", "portakal")
parametreleri sıralı bir listede gösterir.
------------------------------------------------------------------------
`
                },
                {
                    label: 'Sırasız liste',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: {
                        value: [
                            'tk.sıralıListe("elma", "portakal")'
                        ].join('\n')
                    },
                    documentation: `tk.sıralıListe("elma", "portakal")
parametreleri sırasız bir listede gösterir.
------------------------------------------------------------------------
`
                },

                {//Akıllı kod tamamlamada gösterilecek metin
                    label: 'Buton Sayfaya Yazdır',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: {
                        //Eklenecek kod arabirimi
                        value: [
                            'tk.butonSayfayaYazdır("id")'
                        ].join('\n')
                    },
                    //Ek bilgi alanı, kullanıcı "i" butonuna tıklayınca gösterilir
                    documentation: `tk.butonSayfayaYazdır("id")
Herhangi id li bir metin kutusunun değerini yazdırır. Öncelikle bir
metin kutusu eklenip id verilmeli
------------------------------------------------------------------------
`
                },


                {
                     //Akıllı kod tamamlamada gösterilecek metin
                    label: 'Metin Kutusu',
                    kind: monaco.languages.CompletionItemKind.Snippet,
                    insertText: {
                        //Eklenecek kod arabirimi
                        value: [
                            'tk.metinKutusu("değer", "id")'
                        ].join('\n')
                    },
                      //Ek bilgi alanı, kullanıcı "i" butonuna tıklayınca gösterilir
                    documentation: `tk.metinKutusu("değer", "id") Sayfaya bir metin kutusu ekler. Metin kutusunda gözükmesini istedğiniz "placeholder" değerini ilk parametre olarak girin, metin kutusunun id sini ikinci parametre olarak girmeniz gerekir. Eğer metin kutusunu buton tıklaması gibi olay tanımlarında kullancaksanız mutlaka bir id veriniz.
--------------------------------------------------
 `
                }
            ]
        }
    });

    var editor = monaco.editor.create(document.getElementById("container"), {
        theme: 'ozelTema',
        //        theme:   vs-dark,
        value: getCode(),
        language: 'tkKutuphane'
    });

    function getCode() {
        return [


        ].join('\n');;
    }



    function saveI() {
        getVal = editor.getValue()
        // get the value of the data


        document.getElementById("icerik").innerText = "";
        var c = document.getElementById("Canvas");
        var ctx = c.getContext("2d");
        //canvas içeriğini silmek için
        ctx.clearRect(0, 0, Canvas.width, Canvas.height);


        var cal = eval(getVal);
        // alert(getVal)
    }



    document.getElementById('but').onclick = saveI;




});

