import { llibres } from "./llibres";
import Book from "./book";

const EcontrarLibro = (event) => {
  const libroId = parseInt(event.target.id);
  const libroEncontrado = llibres.find((libro) => libro.id === libroId);
  if (libroEncontrado) {
    alert(`Libro encontrado: ${libroEncontrado.title}`);
  } else {
    alert("Libro no encontrado");
  }
};

const BookList = () => {
  return (
    <section className="booklist">
      {llibres.map((book, index) => (
        <Book
          key={book.id}
          {...book}
          index={index}
          EcontrarLibro={EcontrarLibro}
        />
      ))}
    </section>
  );
};

export default BookList;
