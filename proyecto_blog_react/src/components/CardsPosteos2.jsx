import datosPosteos from "./datosPosteos.json";
import "./CardsPosteos.css";

const CardsPosteos2= () => {
    const posts = datosPosteos;

    return (
        <div>
          <h2>Posteos</h2>
          <section class="contenedor">
            
            {
              posts.map((post, id) => (
                <div class="tarjeta">
                <h4>{post.titulo}</h4>
                <button onClick = {() => alert("Leer id N°"+post.id)}>Leer</button>   
                <button onClick = {() => alert("Modificar id N°"+(post.id))} >Modificar</button>
                {/*<p key={id}>{post.texto}</p>*/}
                </div>
              ))
            }
            
          </section>
        </div>
      );
    };
    export default CardsPosteos2;