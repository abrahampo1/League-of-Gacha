function get_int(name, def = 0) {
  if (localStorage.getItem(name)) {
    return parseFloat(localStorage.getItem(name))
  } else {
    localStorage.setItem(name, def)
    return def
  }
}

function set_int(name, value, holder = '') {
  $(holder).html(parseFloat(value).toFixed(0))
  if (localStorage.setItem(name, value)) {
    return true
  } else {
    return false
  }
}
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min
}
var points = parseInt(get_int('points'))

$('.point-btn').on('click', function (params) {
  set_int('points', get_int('points') + 1, '.money-holder')
})

function comprar(item) {
  let coste = cajas[item]['costo']
  if (coste <= get_int('points')) {
    set_int('points', get_int('points') - coste, '.money-holder')
    let probs = 0
    cajas[item]['items'].forEach((element) => {
      probs += element['prob']
    })
    let rand = getRandomArbitrary(0, probs)
    probs = 0
    let comprado
    cajas[item]['items'].forEach((element) => {
      console.log(rand)
      probs += element['prob']
      if (rand < probs && comprado == undefined) {
        comprado = element['articulo']
      }
    })
    swal({
      text: 'Te ha tocado: una ' + comprado['nombre'],
      icon: comprado['image'],
    })
    if (compras[comprado['key']]) {
      compras[comprado['key']]['nivel'] = compras[comprado['key']]['nivel'] + 1
    } else {
      compras[comprado['key']] = comprado
    }
    const jsConfetti = new JSConfetti()
    jsConfetti.addConfetti()
    localStorage.setItem('compras', JSON.stringify(compras))
    print_box()
    print_ej()
  }
}
const arts = {
  Scroom: {
    costo: 100,
    dps: 1,
    mult: 1,
    nivel: 1,
    nombre: 'seta ⭐',
    key: 'Scroom',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fterrados.es%2Fwp-content%2Fuploads%2F2013%2F12%2Fboletus_edulis.png&f=1&nofb=1',
  },
  Sus: {
    dps: 2,
    mult: 1,
    nivel: 1,
    nombre: 'Cosa sospechosa ⭐',
    key: 'Sus',
    image:
      'https://acegif.com/wp-content/uploads/2020/11/am0ngsusxh-36.gif',
  },
  Furias: {
    costo: 1000,
    dps: 20,
    mult: 1,
    nivel: 1,
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Frogue-lineage%2Fimages%2Fe%2Fed%2FHaselden.png%2Frevision%2Flatest%3Fcb%3D20191107065431&f=1&nofb=1',
    nombre: 'chupada a furias ⭐⭐',
    key: 'Furias',
  },
  Darius: {
    dps: 100,
    nivel: 1,
    mult: 1,
    nombre: 'abuela darius en top ⭐⭐⭐⭐',
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.models-resource.com%2Fresources%2Fbig_icons%2F7%2F6694.png&f=1&nofb=1',
    key: 'Darius',
  },
  Darius2: {
    dps: 500,
    nivel: 1,
    mult: 1,
    nombre: 'abuela darius en top con fantasmal e ignite (tu que miedo) ⭐⭐⭐⭐⭐⭐',
    image:
      'https://c.tenor.com/JlqocrEEmlMAAAAd/darius-league-of-legends.gif',
    key: 'Darius2',
  },
  Payaso: {
    dps: 200,
    nivel: 1,
    mult: 1,
    nombre: 'copia exacta de ti mismo ⭐⭐⭐',
    image:
      'https://dbdzm869oupei.cloudfront.net/img/sticker/preview/495.png',
    key: 'Payaso',
  },
}

const cajas = {
  noob: {
    nombre: 'Cajita de carton',
    costo: 100,
    items: [
      { articulo: arts['Scroom'], prob: 90 },
      { articulo: arts['Furias'], prob: 10 },
      { articulo: arts['Sus'], prob: 40 },
    ],
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbasicos.empack.mx%2Fwp-content%2Fuploads%2F2019%2F10%2FCAJA-RM-35-CON-JUEGO-DE-DIVISIONES.png&f=1&nofb=1',
  },
  hextech: {
    nombre: 'Cofre Hextech',
    costo: 3000,
    items: [
      { articulo: arts['Sus'], prob: 10 },
      { articulo: arts['Furias'], prob: 70 },
      { articulo: arts['Darius'], prob: 20 },
      { articulo: arts['Darius2'], prob: 5 },
    ],
    image:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.masarmadura.com%2Fwp-content%2Fuploads%2F2020%2F12%2Fcajitalol-01.png&f=1&nofb=1',
  },
  payaso: {
    nombre: 'Caja payaso',
    costo: 50000,
    items: [
      { articulo: arts['Sus'], prob: 20 },
      { articulo: arts['Payaso'], prob: 70 },
    ],
    image:
      'http://assets.stickpng.com/images/5c38c7ff4d5036028cf54110.png',
  },
}
if (localStorage.getItem('compras')) {
  var compras = localStorage.getItem('compras')
  compras = JSON.parse(compras)
} else {
  var compras = {}
}

setInterval(() => {
  let dps = 0
  Object.entries(compras).forEach(([key, value]) => {
    dps += value['dps'] * value['nivel']
    set_int(
      'points',
      get_int('points') + (value['dps'] * value['nivel']) / 10,
      '.money-holder',
    )
  })
  $('.dps-holder').html('SPS: ' + dps)
}, 100)

function print_ej(params) {
  $('#ejercito').html('')
  Object.entries(compras).forEach(([key, value]) => {
    let coste = value['costo']
    let lvl = value['nivel']
    let images = ''
    if (value['image']) {
      for (let index = 0; index < lvl; index++) {
        images += '<img src="' + value['image'] + '">'
      }
    }
    $('#ejercito').append(`

          <div class="personaje">
          <h1> ${value['nombre']} (SPS: ${lvl * value['dps']}) </h1>
          <div class="ej">
          ${images}
          </div>
            
          </div>
    
    `)
  })
}

function print_box(params) {
  $('#shop').html('')
  Object.entries(cajas).forEach(([key, value]) => {
    $('#shop').append(`
    <div class="shop-btn" onclick="comprar('${key}')">
          <div class="shop-data">
          
          <div class="costo">
            ${value['costo']}
            <img
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Frogue-lineage%2Fimages%2F7%2F7d%2FSilver_Screenshot-0.png%2Frevision%2Flatest%3Fcb%3D20190613225622&f=1&nofb=1"
              alt=""
            />
          </div>
          ${value['nombre']} 
          
          </div>
          <div class="shop-icon">
            <img src="${value['image']}">
          </div>
        </div>
    
    `)
  })
}

print_box()
print_ej()
