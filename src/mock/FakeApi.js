const products = [
  {
    id:"0-1",
    sku:"",
    name:"Mome",
    price:"",
    descriptions:"",
    weight:"",
    height:"",
    principalImg:"",
    secondaryImg:"",
    thirdImg:"",
    category:"",
    stock:"",
    thumbnail:"", 
    type:"" //Fija o intercambiable.
  }
]





export const data = new Promise((resolve, reject) => {
  let condition = true;
  setTimeout(() => {
    if (condition) {
      resolve(products);
    } else {
      reject("Salió mal.");
    }
  }, 2000);
});


// export const newData = (() => fetch("https://jsonplaceholder.typicode.com/todos/1"),{

//   method:"POST",
//     body: JSON.stringify({
//     title:"FOO",
//     userId:1,    
//   })
// })

// export const deleteDta = (dataId) => fetch(`https://jsonplaceholder.typicode.com/posts/${dataId}`,{
//   method:"DELETE",
// })

// //Desafío de clase
// //Usar el use effect para entrar en el ciclo  o en la etapa de monatje
// const [pokemons, setPokemons] = useState([]);
// useEffect(() => {
//   console.log('Ya se montó el componente');
//   axios(`${API_URL}pokemon?limit=10`)
//   .then((response) => {
//   console.log(response.data)
//   setPokemons(response.data.results);
// })
// .catch((err) => console.log(err));
// }, []);

// return (
//   <div>
//     <ul>
//       {pokemons.map((pokemon) => (
//         <li key={pokemon.name}>{pokemon.name} </li>
//       ))}
//     </ul>
//   </div>
// );