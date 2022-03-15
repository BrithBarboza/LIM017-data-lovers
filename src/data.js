import data from './data/ghibli/ghibli.js'

/* export function sortData (data, sortBy, sortOrder){
return "mam";
} */
/* export function computeStats ( data ){
return "Rayus";
}  */
//};

//-----------Lógica de filtro para directores--------------------------------
  export const filterDataDirector = (nameDirector) => {
    const resultDirector = data.films.filter(y => y.director === nameDirector);
    return resultDirector;
  };
  /* console.log(filterDataDirector('Hayao Miyazaki')); */

//-----------Lógica de filtro para productores--------------------------------
  export const filterDataProducer = (filterProducer) => {
    const resultProducer = data.films.filter(y => y.producer === filterProducer);
    return resultProducer;
  };
  /* console.log(filterDataProducer("Isao Takahata")); */

    //-------------Usando Sort(), según el score-------------
    let compareNumeric = (a, b) => {
      if (a.release_date > b.release_date){
        return 1;
      }
      else if (a.release_date === '100'){
  return 1;
      }
      else if (b.release_date==='100'){
        return 1;
      }
      else{return -1;}
        
    };
    export const ordenAscendente= ()=>{
      const resultSor= data.films.sort(compareNumeric);
      return resultSor;
    }
   /*  console.log(ordenAscendente()); */

    
//-----------Obtener new array People--------------------------------
  const NewArrayPeople= [];

for(let i=0; i<data.films.length; i++){
  /* NewArrayPeople.push(data.films[i].people);
  console.log(data.films[i].people); */
  for(let j=0; j<data.films[i].people.length; j++){
   /*  console.log([i]);
    if(j===23){
      console.log('x');
      console.log(data.films[j]);
    } */
   // console.log(data.films[j]);//Para conocer al elemento
    NewArrayPeople.push(data.films[i].people[j]);
  }

}
/* console.log(NewArrayPeople); */

const NewArrayPeople2= [];
data.films.forEach((pelicula)=>{
  pelicula.people.forEach((personajes)=>{
    NewArrayPeople2.push(personajes);
  })
});
/* console.log(NewArrayPeople2); */
