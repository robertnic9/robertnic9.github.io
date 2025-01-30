const Book = ({ index, img, title, author, bookId, EcontrarLibro }) => {
  return (
    <article className="book">
      <h1 className="number"># {index}</h1>
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
      <button className="find-btn" id={bookId} onClick={EcontrarLibro}>
        Encontrar
      </button>
    </article>
  );
};

export default Book;
