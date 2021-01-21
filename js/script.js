const oggetti = [
  {
    'nome': 'cat',
    'prefisso': 'fas',
    'tipo': 'animali',
    'famiglia': 'fa'
  },

  {
    'nome': 'hippo',
    'prefisso': 'fas',
    'tipo': 'animali',
    'famiglia': 'fa'
  },

  {
    'nome': 'horse',
    'prefisso': 'fas',
    'tipo': 'animali',
    'famiglia': 'fa'
  },

  {
    'nome': 'car',
    'prefisso': 'fas',
    'tipo': 'automobili',
    'famiglia': 'fa'
  },

  {
    'nome': 'truck-pickup',
    'prefisso': 'fas',
    'tipo': 'automobili',
    'famiglia': 'fa'
  },

  {
    'nome': 'laptop',
    'prefisso': 'fas',
    'tipo': 'tecnologia',
    'famiglia': 'fa'
  },

  {
    'nome': 'mobile',
    'prefisso': 'fas',
    'tipo': 'tecnologia',
    'famiglia': 'fa'
  }
];

// div che contiene gli oggetti
const contenitoreOggetti = document.getElementById('objects-container');
const colors = ['red', 'blue', 'green'];

//menu a tendina
const selezioneTipi = document.getElementsByClassName('type-select')[0];

// costante che contiene le chiavi per il menu a tendina
const typeList = [];


oggetti.forEach((element,index) => {

  const {nome, prefisso, famiglia, tipo} = element;

  if(!typeList.includes(tipo)) {
    typeList.push(tipo);
  }

  const indexType = typeList.indexOf(tipo);
  element.colors = colors[indexType];




    contenitoreOggetti.innerHTML += `
    <div>
      <i class="${prefisso} ${famiglia}-${nome}" style="color:${element.colors}"></i>
      ${nome}
    </div>
`
});

console.log(oggetti);





//---------------------------MILESTONE 2------------------------------------



//----------------------------MILESTONE 3------------------------------------


typeList.forEach((element) => {
  selezioneTipi.innerHTML += `
    <option value="${element}">${element}</option>
  `
});

const selector = $('.type-select');

selector.change(function() {
  let valore = $(this).val();
  // alert(valore);
  contenitoreOggetti.innerHTML = `

`
  oggetti.forEach((element) => {
    const {nome, tipo} = element;
    if(valore === 'animali'){
      contenitoreOggetti.innerHTML += `
        <div>
          <i class="fas fa-${nome}"></i>
          ${nome}
        </div>
      `

    }
  });


})
