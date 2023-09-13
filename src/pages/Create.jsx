import React from "react";
import { useState } from "react";
import { useAppContext } from "../store/Store";
import { Link, useNavigate } from "react-router-dom";
///usamos link para navegar entre paginas, pues si navegamos manualmente mediante url
///la pagina se refresca y se pierde la informacion

export const Create = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [cover, setCover] = useState("");
  const [completed, setCompleted] = useState(false);
  const [review, setReview] = useState("");

  const store = useAppContext() ///llamamos al contexto para usarlo 
  const navigate = useNavigate() ///redirige luego de x evento

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "author":
        setAuthor(value);
        break;
      case "completed":
        setCompleted(e.target.checkbox);
        break;
      case "review":
        setReview(value);
        break;

      default:
    }
  };
///filereader se usa para trabajar files y preprocesarlos sin tener que subirlos al servidor, util para vistas previas
  const handleOnChangeFile = (e) => {
    const input = e.target
    const file = input.files[0] ///el input almacena un arreglo de archivos
    const reader = new FileReader() ///api que permite manipular archivos desde el navegador 
    
    reader.readAsDataURL(file) ///mandamos a leer el archivo

    reader.onloadend = function(){ ///este evento se ejecuta apenas se cargue la imagen
      setCover(reader.result.toString())
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    const newBook = {
      id: crypto.randomUUID(),
      title,
      author,
      cover,
      completed,
      review,
    };

    //registro del libro

    store.createItem(newBook) ///accedemos al metodo de otro componente gracias al contexto
    navigate("/") ///luego de crear redirige a inicio
  }

  return (
    <div>
      <Link to="/">Home</Link>
      <form onSubmit={handleSubmit}>
        <div>
          <div>Titulo</div>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            value={title}
          />
        </div>
        <div>
          <div>Author</div>
          <input
            type="text"
            name="author"
            onChange={handleChange}
            value={author}
          />
        </div>

        <div>
          <div>Cover</div>
          <input type="file" name="cover" onChange={handleOnChangeFile} />
          <div>{!!cover ? <img src={cover} width="200" alt="preview"></img> : ''}</div>
        </div>

        <div>
          <div>Completed</div>
          <input
            type="checkbox"
            name="completed"
            onChange={handleChange}
            value={completed}
          />
        </div>
        <div>
          <div>review</div>
          <input
            type="text"
            name="review"
            onChange={handleChange}
            value={review}
          />
        </div>

        <input type="submit" value="Register book" />
      </form>
    </div>
  );
};
