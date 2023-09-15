import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    nombreContador: '',
    nombreApoderadoBanco: '',
    identificacionApoderadoBanco: '',
    nombreContadorPublico: '',
    identidadContadorPublico: '',
    identificacionContadorPublicoAutorizado: '',
    idCaso: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., sending data to backend)
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nombreContador">Nombre del Contador</label>
        <input
          type="text"
          id="nombreContador"
          name="nombreContador"
          value={formData.nombreContador}
          onChange={handleChange}
          maxLength="40"
          required
        />
      </div>

      <div>
        <label htmlFor="nombreApoderadoBanco">Nombre del Apoderado de Banco</label>
        <input
          type="text"
          id="nombreApoderadoBanco"
          name="nombreApoderadoBanco"
          value={formData.nombreApoderadoBanco}
          onChange={handleChange}
          maxLength="40"
          required
        />
      </div>

      <div>
        <label htmlFor="identificacionApoderadoBanco">Identificacion del Apoderado de Banco</label>
        <input
          type="text"
          id="identificacionApoderadoBanco"
          name="identificacionApoderadoBanco"
          value={formData.identificacionApoderadoBanco}
          onChange={handleChange}
          maxLength="15"
          required
        />
      </div>

      <div>
        <label htmlFor="nombreContadorPublico">Nombre del Contador Publico</label>
        <input
          type="text"
          id="nombreContadorPublico"
          name="nombreContadorPublico"
          value={formData.nombreContadorPublico}
          onChange={handleChange}
          maxLength="40"
          required
        />
      </div>

      <div>
        <label htmlFor="identidadContadorPublico">Identidad del Contador Publico</label>
        <input
          type="text"
          id="identidadContadorPublico"
          name="identidadContadorPublico"
          value={formData.identidadContadorPublico}
          onChange={handleChange}
          maxLength="15"
          required
        />
      </div>

      <div>
        <label htmlFor="identificacionContadorPublicoAutorizado">Identificacion del Contador Publico autorizado</label>
        <input
          type="text"
          id="identificacionContadorPublicoAutorizado"
          name="identificacionContadorPublicoAutorizado"
          value={formData.identificacionContadorPublicoAutorizado}
          onChange={handleChange}
          maxLength="15"
          required
        />
      </div>

      <div>
        <label htmlFor="idCaso">ID del Caso</label>
        <input
          type="text"
          id="idCaso"
          name="idCaso"
          value={formData.idCaso}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
