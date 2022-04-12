const arts = {
    Scroom: {
      dps: 1,
      mult: 1,
      nivel: 1,
      fusion: 10,
      update: 'MetaScroom',
      nombre: 'seta ⭐',
      key: 'Scroom',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fterrados.es%2Fwp-content%2Fuploads%2F2013%2F12%2Fboletus_edulis.png&f=1&nofb=1',
    },
    MetaScroom: {
      dps: 11,
      mult: 1,
      nivel: 1,
      fusion: 10,
      update: 'setas',
      nombre: 'seta metalica ⭐',
      key: 'MetaScroom',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Frogue-lineage%2Fimages%2Ff%2Ffd%2FCapture.JPG%2Frevision%2Flatest%3Fcb%3D20190720224034&f=1&nofb=1',
    },
    Sus: {
      dps: 2,
      mult: 1,
      fusion: 10,
      update: 'Sus2',
      nivel: 1,
      nombre: 'Cosa sospechosa ⭐',
      key: 'Sus',
      image: 'https://acegif.com/wp-content/uploads/2020/11/am0ngsusxh-36.gif',
    },
    Sus2: {
      dps: 22,
      mult: 1,
      fusion: 20,
      update: '',
      nivel: 1,
      nombre: 'SUS ⭐⭐',
      key: 'Sus2',
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia1.tenor.com%2Fimages%2Fa736455eede608798c4215193087ad73%2Ftenor.gif%3Fitemid%3D18888018&f=1&nofb=1',
    },
    Sus3: {
        dps: 300,
        mult: 1,
        fusion: 20,
        update: '',
        nivel: 1,
        nombre: 'WHEN THE IMPOSTER IS SUS ⭐⭐⭐',
        key: 'Sus3',
        image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.imgflip.com%2F4w752h.jpg&f=1&nofb=1',
      },
    Furias: {
      costo: 1000,
      dps: 20,
      mult: 1,
      nivel: 1,
      update: 'goku2',
      fusion: 10,
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Frogue-lineage%2Fimages%2Fe%2Fed%2FHaselden.png%2Frevision%2Flatest%3Fcb%3D20191107065431&f=1&nofb=1',
      nombre: 'chupada a furias ⭐⭐',
      key: 'Furias',
    },
    Darius: {
      dps: 50,
      update: 'Darius2',
      nivel: 1,
      fusion: 5,
      mult: 1,
      nombre: 'abuela darius en top ⭐⭐⭐⭐',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.models-resource.com%2Fresources%2Fbig_icons%2F7%2F6694.png&f=1&nofb=1',
      key: 'Darius',
    },
    Darius2: {
      update: '',
      dps: 500,
      fusion: 10,
      nivel: 1,
      mult: 1,
      nombre:
        'abuela darius en top con fantasmal e ignite (tu que miedo) ⭐⭐⭐⭐⭐⭐',
      image: 'https://c.tenor.com/JlqocrEEmlMAAAAd/darius-league-of-legends.gif',
      key: 'Darius2',
    },
    Payaso: {
      update: 'payaso2',
      dps: 100,
      fusion: 10,
      nivel: 1,
      mult: 1,
      nombre: 'copia exacta de ti mismo ⭐⭐⭐',
      image: 'https://dbdzm869oupei.cloudfront.net/img/sticker/preview/495.png',
      key: 'Payaso',
    },
    Teemo: {
      update: 'cancer',
      dps: 90,
      nivel: 1,
      fusion: 10,
      mult: 1,
      nombre: 'rata qla conche su mare webon ⭐⭐⭐',
      image:
        'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Forig06.deviantart.net%2Fcc84%2Ff%2F2012%2F218%2Fb%2Ff%2Fteemo_render__default_skin__by_aurablade-d59zqef.png&f=1&nofb=1',
      key: 'Teemo',
    },
    Yummi: {
      update: 'yummi2',
      dps: 50,
      fusion: 15,
      nivel: 1,
      mult: 1,
      nombre: 'main top ⭐⭐⭐⭐',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fleagueoflegends%2Fimages%2Fd%2Fd5%2FYuumi_Render.png%2Frevision%2Flatest%3Fcb%3D20190502165317&f=1&nofb=1',
      key: 'Yummi',
    },
    Chad: {
      update: 'GigaChad',
      dps: 200,
      fusion: 10,
      nivel: 1,
      mult: 1,
      nombre: 'representacion de ti en tus pensamientos ⭐⭐⭐⭐⭐',
      image: 'https://i.kym-cdn.com/photos/images/facebook/002/220/732/0b1.png',
      key: 'Chad',
    },
    GigaChad: {
      update: '',
      dps: 2200,
      fusion: 10,
      nivel: 1,
      mult: 1,
      nombre: 'ojala fueras tu así ⭐⭐⭐⭐⭐⭐',
      image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2F736x%2F3a%2F1c%2Fd9%2F3a1cd955b2e0f3923192b64154156089.jpg&f=1&nofb=1',
      key: 'GigaChad',
    },
    Furry: {
      update: 'genshin2',
      dps: 100,
      nivel: 1,
      fusion: 9,
      mult: 1,
      nombre: 'supuesta jugadora de genshin impact ⭐⭐⭐⭐⭐',
      image: 'https://i.redd.it/6g02zowzahx71.jpg',
      key: 'Furry',
    },
    Energuia: {
      update: 'Energuia2',
      dps: 600,
      fusion: 10,
      nivel: 1,
      mult: 1,
      nombre: 'neko kawaii ⭐⭐⭐⭐⭐⭐',
      image: 'img/neko.png',
      key: 'Energuia',
    },
    Energuia2: {
        update: '',
        dps: 6500,
        fusion: 10,
        nivel: 1,
        mult: 1,
        nombre: 'la gente me juzga por beber bebidas energeticas sabe? cuando yo me aparto de las modas y no me drogo o fumo, solo me follo a niñas de 12 años ⭐⭐⭐⭐⭐⭐⭐⭐⭐',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgrJpkQhMZLoPMbOq0J3DALrQwSHcSra8h0rbdGzVrla42j1Ser1k5vrfxSy_NJoRJQ-4&usqp=CAU',
        key: 'Energuia2',
      },
      yummi2: {
        update: '',
        dps: 1000,
        fusion: 10,
        nivel: 1,
        mult: 1,
        nombre: 'bro?',
        image: 'https://lolhentaiporn.com/wp-content/uploads/2020/02/3262278-League_of_Legends-Yuumi-animated-camotli.gif',
        key: 'yummi2',
      },
    discord: {
      update: 'discord_senior',
      dps: 150,
      nivel: 1,
      fusion: 10,
      mult: 1,
      nombre: 'moderadora de discord uwu ⭐⭐⭐⭐⭐',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F4eHoLq_2vOA%2Fmaxresdefault.jpg&f=1&nofb=1',
      key: 'discord',
    },
    discord_senior: {
        update: '',
        dps: 1600,
        nivel: 1,
        fusion: 10,
        mult: 1,
        nombre: 'Moderador de discord senior ⭐⭐⭐⭐⭐⭐',
        image:
          'https://i.kym-cdn.com/entries/icons/facebook/000/035/767/cover4.jpg',
        key: 'discord_senior',
      },
    goku2: {
      update: '',
      dps: 250,
      nivel: 1,
      fusion: 10,
      mult: 1,
      nombre: 'golpeador de mujeres ⭐⭐⭐⭐⭐',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngkit.com%2Fpng%2Ffull%2F393-3930198_dragon-ball-clipart-super-saiyan-goku-ssj-db.png&f=1&nofb=1',
      key: 'goku2',
    },
    n: {
      update: '',
      dps: -100,
      nivel: 1,
      fusion: 10,
      mult: 1,
      nombre: 'N̵̪͍͓̞̠͔̿̓̆͗̍̇̍͒͛̀̂̉̈́ͅÍ̵̱͙̊̃̏͐̉͊͋̇̚̚͝͝͝Ǵ̶̰̖̯͖͗͑͑̏̔̾̕̚G̴̨̛̙̘̜̯͓̣̰̘̲͐̃̊̌̃A̵̼͔͔͈̺͋́̓̏̎́̀̆͌̕',
      image:
        'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.redd.it%2Fkz29pseqp7d41.jpg&f=1&nofb=1',
      key: 'n',
    },
    nft: {
      update: '',
      dps: 999999,
      nivel: 1,
      fusion: 10,
      mult: 1,
      nombre: 'Captura de pantalla',
      image:
        'https://libres.io/wp-content/uploads/2021/12/download-3.png',
      key: 'nft',
    },
    genshin2: {
      update: '',
      dps: 1000,
      nivel: 1,
      fusion: 10,
      mult: 1,
      nombre: 'Diabetes grado 2 ⭐⭐⭐⭐⭐⭐⭐⭐⭐',
      image:
        'https://imagenes.elpais.com/resizer/fjYH-qJ1BjwgKHoEVG2z394qNe4=/1960x1470/cloudfront-eu-central-1.images.arcpublishing.com/prisa/N37WKWJULVG4XDD2IP2WZVCECA.jpg',
      key: 'genshin2',
    },
    cancer: {
      update: '',
      dps: 1000,
      nivel: 1,
      fusion: 10,
      mult: 1,
      nombre: 'Literalmente Cancer ⭐⭐⭐⭐⭐',
      image:
        'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fenacademic.com%2Fpictures%2Fenwiki%2F83%2FSymptoms_of_cancer_metastasis.png&f=1&nofb=1',
      key: 'cancer',
    },
    payaso2: {
        update: '',
        dps: 1100,
        nivel: 1,
        fusion: 10,
        mult: 1,
        nombre: 'POV eres el payaso ⭐⭐⭐⭐⭐',
        image:
          'https://i.pinimg.com/474x/9c/01/84/9c0184a25fd73c0a31f984a821a8cba4--the-circus-circus-theme.jpg',
        key: 'payaso2',
      },
      setas: {
        update: '',
        dps: 250,
        nivel: 1,
        fusion: 10,
        mult: 1,
        nombre: 'Setas de las buenas ⭐⭐⭐',
        image:
          'https://i.pinimg.com/474x/9c/01/84/9c0184a25fd73c0a31f984a821a8cba4--the-circus-circus-theme.jpg',
        key: 'setas',
      },
      mk: {
        update: 'pekka',
        dps: 700,
        nivel: 1,
        fusion: 10,
        mult: 1,
        nombre: 'Megamaricón ⭐⭐⭐⭐⭐',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fclashroyale%2Fimages%2F0%2F0b%2FMegaKnightCard.png%2Frevision%2Flatest%3Fcb%3D20170613040618&f=1&nofb=1',
        key: 'mk',
      },
      risa: {
        update: 'jijijijant',
        dps: 200,
        nivel: 1,
        fusion: 10,
        mult: 1,
        nombre: 'jijijija ⭐⭐⭐⭐',
        image:
          'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipartmag.com%2Fimages%2Flaughing-smiley-gif-clipart-47.gif&f=1&nofb=1',
        key: 'risa',
      },
      eb: {
        update: 'eb2',
        dps: 500,
        nivel: 1,
        fusion: 5,
        mult: 1,
        nombre: 'Barbies de elite ⭐⭐⭐⭐⭐',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fclashroyale%2Fimages%2Fe%2Fe8%2FEliteBarbariansCard.png%2Frevision%2Flatest%3Fcb%3D20171212204714&f=1&nofb=1',
        key: 'eb',
      },
      eb2: {
        update: '',
        dps: 5500,
        nivel: 1,
        fusion: 10,
        mult: 1,
        nombre: 'Barbies de elite al 14 ⭐⭐⭐⭐⭐⭐⭐',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fclashroyale%2Fimages%2Fe%2Fe8%2FEliteBarbariansCard.png%2Frevision%2Flatest%3Fcb%3D20171212204714&f=1&nofb=1',
        key: 'eb2',
      },
      larry: {
        update: 'elarry',
        dps: 1,
        nivel: 1,
        fusion: 6,
        mult: 1,
        nombre: 'larry ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐',
        image:
          'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fvignette3.wikia.nocookie.net%2Fclashroyale%2Fimages%2Ff%2Ff0%2FSkeletonsCard.png%2Frevision%2Flatest%3Fcb%3D20160702201245&f=1&nofb=1',
        key: 'larry',
      },
      elarry: {
        update: '',
        dps: -6,
        nivel: 1,
        fusion: 100,
        mult: 1,
        nombre: 'ejercito de larrys ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fclash-royale-esp%2Fimages%2F8%2F82%2FEj%25C3%25A9rcito_de_esqueletos.png%2Frevision%2Flatest%3Fcb%3D20170517150503%26path-prefix%3Des&f=1&nofb=1',
        key: 'elarry',
      },
      jijijijant: {
        update: '',
        dps: 2300,
        nivel: 1,
        fusion: 100,
        mult: 1,
        nombre: 'a veces la vida no es jijijija :(',
        image:
          'https://c.tenor.com/WIFUFWF2bicAAAAd/reverse-troll-smile.gif',
        key: 'jijijijant',
      },
      pekka: {
        update: '',
        dps: 7500,
        nivel: 1,
        fusion: 100,
        mult: 1,
        nombre:'Mami panqueques ⭐⭐⭐⭐⭐⭐⭐',
        image:
          'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fclash-royale-esp%2Fimages%2Fc%2Fc8%2FPEKKA_level_5.png%2Frevision%2Flatest%3Fcb%3D20160605074710%26path-prefix%3Des&f=1&nofb=1',
        key: 'pekka',
      },
  }
  