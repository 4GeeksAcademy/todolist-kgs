import React, { useState } from "react";

const Home = () => {
  // Estados declarados
  const [tarea, setTarea] = useState("");
  const [list, setList] = useState([]);

  // Evento al presionar enter en el input
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setList([...list, tarea]);
      setTarea("");
    }
  };

  // eliminar una tarea de la lista
  const handleDelete = (index) => {
    setList(list.filter((_, currentIndex) => index !== currentIndex));
  };

  return (
    <div className="container mt-4" >
      <h1 className="text-center mt-4">todos</h1>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          onChange={(e) => setTarea(e.target.value)}
          value={tarea}
          onKeyPress={handleKeyPress}
          placeholder="What do you need to do?"
        />
      </div>
      <ul className="list-group">
        {list.map((item, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
            {item}
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={() => handleDelete(index)}
            ></button>
          </li>
        ))}
      </ul>
      <div className="mt-3">{list.length} item left</div>
    </div>
  );
};

export default Home;
