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

const contenitoreOggetti = document.getElementById('objects-container');
const colors = ['red', 'blue', 'green'];
const selezioneTipi = document.getElementsByClassName('type-select')[0];

const typeList = [];

oggetti.forEach((element) => {

  const {nome, tipo} = element;

    contenitoreOggetti.innerHTML += `
    <div>
      <i class="fas fa-${nome}"></i>
      ${nome}
    </div>
`

});

const arrayTipiAnimali = oggetti.filter((element) => {

  return element.tipo === 'animali';

});


const arrayTipiAutomobili = oggetti.filter((element) => {

  return element.tipo === 'automobili';

});

const arrayTipiTecnologia = oggetti.filter((element) => {

  return element.tipo === 'tecnologia';

});

//----------------------------MILESTONE 3------------------------------------

oggetti.forEach((element) => {
  if(!typeList.includes(element.tipo)) {
    typeList.push(element.tipo);
  }
})

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
