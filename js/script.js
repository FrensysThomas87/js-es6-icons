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







oggetti.forEach((element) => {

  const {nome, prefisso, famiglia, tipo} = element;

  // pusho tutti gli elementi 'tipo' nell'array typelist, prendendoli da 'oggetti'
  if(!typeList.includes(tipo)) {
    typeList.push(tipo);
  }



  // prendo la posizione di ogni elemento 'tipo' all'interno dell'array 'typeList' che contiene i tre tipi
  const indexType = typeList.indexOf(tipo);

  //qui vado a creare la nuova proprietà 'colors' all'interno di 'oggetti' abbinando ogni colore ad un tipo
  element.colors = colors[indexType];



    const listHtml = `<div><i class="${prefisso} ${famiglia}-${nome}" style="color:${element.colors}">${nome}</i></div>`;
    contenitoreOggetti.innerHTML += listHtml;
});

console.log(oggetti);


//----------------------------MILESTONE 3------------------------------------

// qui inserisco tutti gli elementi 'tipo' all'interno del menu a tendina
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

  });


})
