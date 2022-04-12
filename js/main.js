var bar = new ProgressBar.Line('#container',{
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 400,
  color: '#FFEA82',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'}});


var mult = 1;

function get_int(name, def = 0) {
  if (localStorage.getItem(name)) {
    if (localStorage.getItem(name) == 'NaN') {
      set_int(name, def)
    }
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
  set_int('points', get_int('points') + get_int('level', 1), '.money-holder')
  set_int('xp', get_int('xp') + get_int('level', 1), '')
  calc_level()
})

function fusionar(item) {
  if (compras[item]['nivel'] >= arts[item]['fusion']) {
    compras[item]['nivel'] = compras[item]['nivel'] - arts[item]['fusion']
    let comprado = arts[arts[item]['update']]
    swal({
      text: 'Has fusionado a ' + comprado['nombre'],
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
      text: 'Te ha tocado: ' + comprado['nombre'],
      icon: comprado['image'],
    })
    if (compras[comprado['key']]) {
      compras[comprado['key']]['nivel'] = compras[comprado['key']]['nivel'] + 1
    } else {
      compras[comprado['key']] = comprado
    }

    set_int('xp', get_int('xp') + cajas[item]['xp'])
    calc_level()
    const jsConfetti = new JSConfetti()
    jsConfetti.addConfetti()
    localStorage.setItem('compras', JSON.stringify(compras))
    print_box()
    print_ej()
  }
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
      get_int('points') + ((value['dps'] * value['nivel']) / 10) * get_int('mult', 1),
      '.money-holder',
    )
  })
  $('.dps-holder').html('SPS: ' + dps)
  
  $('.lvl-holder').html('NIVEL: ' + get_int('level'))
}, 100)

setInterval(() => {
  let dps = 0
  Object.entries(compras).forEach(([key, value]) => {
    dps += value['dps'] * value['nivel']
  })
  set_int('xp', get_int('xp') + (dps/100))
  calc_level()
  
}, 1000);
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
    let boton_fusion = ""

    if (value['nivel'] >= arts[key]['fusion']) {
      boton_fusion = `<button class="point-btn sml" onclick="fusionar('${key}')">Fusionar ${arts[key]['fusion']}</button>`
    }
    if (value['nivel'] > 0) {
      $('#ejercito').append(`

      <div class="personaje">
      <h1> ${value['nombre']} (SPS: ${lvl * value['dps']}) </h1> 
      ${boton_fusion}
      <button class="point-btn sml" onclick="toggle('#${key}_ejercito')">Alternar Ejercito</button>
      <div class="ej" id="${key}_ejercito">
      ${images}
      </div>
        
      </div>

`)
    }
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


function toggle(params) {
  $(params).toggle()
}


function calc_level() {
  let level = get_int('level', 1);
  let xp = level * 100
  let xp_earned = get_int('xp', 0);
  if(xp_earned >= xp){
    set_int('level', level + 1, '')
    set_int('xp', get_int('xp') - xp, '')
    xp_earned = 0;
    xp = (level + 1) * 100
    const jsConfetti = new JSConfetti()
    jsConfetti.addConfetti()
    calc_level()
    return
}

  bar.animate(xp_earned/xp);  // Value from 0.0 to 1.0

}

calc_level()


print_box()
print_ej()



function evento(params) {
  var item = eventos[Math.floor(Math.random()*eventos.length)];
  console.log(item)
  set_int('mult', get_int('mult', 1) * item['mult'])
  swal({
    title: item['titulo'],
    text: item['cuerpo'],
    icon: item['imagen'],
  })
  setTimeout(() => {
    evento()
  }, item['delay'] + getRandomArbitrary(10000, 300000));
  return
}


setTimeout(() => {
  evento()
}, getRandomArbitrary(10000, 300000));
