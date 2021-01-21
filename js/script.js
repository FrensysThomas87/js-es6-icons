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


oggetti.forEach((element) => {

  const {nome, tipo} = element;

    contenitoreOggetti.innerHTML += `
    <div>
      <i class="fas fa-${nome}"></i>
      ${nome}
    </div>
`

});




console.log(oggetti);
