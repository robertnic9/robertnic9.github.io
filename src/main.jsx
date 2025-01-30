import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import BookList from "./booklist";

{/* Actividad 1*/}
const Welcome = () =>{
    return (
      <div> {/*Una de las reglas es que no puedes devolver dos componantes, en este caso devuelve un div */}
        <h2>Bienvendio a la biblioteca ciencia fición</h2>
      </div>
    );
};

function MensajesList (){
    return (
        <div className="mensajes">
            {mensajes.map((mensaje)=>{
                console.log(mensaje);
                const {message, id} = mensaje;
                return <Textmess mess={message} key={id} />
            })}
        </div>
    );
}

const Textmess = (props) => {
  console.log(props);
  return (
    <h6>{props.mess}</h6>
  );
};
const mensajes = [
  { message: "Que libro te gustaría leer hoy?", id: 1 },
  { message: "Otra vez has vuelto frikki", id: 2 },
  { message: "Bienvenido, tenemos nuevos libros nerd", id: 3 },
];


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Welcome />
    <MensajesList />
    <BookList />
  </StrictMode>
);
