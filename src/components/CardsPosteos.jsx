/*export default function Posteos() {
  return (
    <div>posteos</div>
  )
}*/
// import datosPosteos from "datosPosteos.json"

const CardsPosteos = () => {
    const posts = [
        {
          "id": 12,
          "titulo": "Spiderman",
          "texto": "Joven héroe con poderes arácnidos que combate el crimen balanceándose por Nueva York.",
          "user_id": 7,
          "usuario": "stan_lee"
        },
        {
          "id": 14,
          "titulo": "X-MEN",
          "texto": "Equipo de mutantes con habilidades únicas que luchan por la coexistencia pacífica entre humanos y mutantes.",
          "user_id": 7,
          "usuario": "stan_lee"
        },
        {
          "id": 16,
          "titulo": "Capitán América",
          "texto": "Soldado mejorado con un escudo indestructible que lidera a los Vengadores en la defensa del mundo.",
          "user_id": 7,
          "usuario": "stan_lee"
        },
        {
          "id": 17,
          "titulo": "Thanos",
          "texto": "Titán obsesionado con el poder y las Gemas del Infinito, busca la aniquilación para equilibrar el universo.",
          "user_id": 7,
          "usuario": "stan_lee"
        },
          {
          "id": 18,
          "titulo": "Ant-Man",
          "texto": "Héroe capaz de encogerse y controlar insectos con un traje especial para combatir el mal.",
          "user_id": 7,
          "usuario": "stan_lee"
        },
      ];

    //const alertModificar = alert("Modificar "(post.id))  
  
    return (
      <div>
        <h2>Posteos</h2>
        <section class="contenedorTarjetas">
          
          {
            posts.map((post, id) => (
              <div class="tarjeta">
              <h4>{post.titulo}</h4>
              <button onClick = {() => alert("Leer id N°"+post.id)}>Leer</button>   
              <button onClick = {() => alert("Modificar id N°"+(post.id))} >Modificar</button>
              <p key={id}>{post.texto}</p>
              </div>
            ))
          }
          
        </section>
      </div>
    );
  };
  export default CardsPosteos;