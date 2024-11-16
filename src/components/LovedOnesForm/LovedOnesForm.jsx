import './LovedOnesForm.css';
import { useState } from 'react';
import PropTypes from 'prop-types';
import heartImage from '../../assets/img/heart-img.png';

function LovedOnesForm({ onAddLovedOne }) {
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [lifespan, setLifespan] = useState(80);
  const [relationship, setRelationship] = useState('');
  const [customRelationship, setCustomRelationship] = useState('');
  const [frequency, setFrequency] = useState(1);
  const [duration, setDuration] = useState(8);
  const [frequencyType, setFrequencyType] = useState('week');

  const handleSubmit = (e) => {
    e.preventDefault();

    const yearsLeft = lifespan - (new Date().getFullYear() - new Date(birthDate).getFullYear());

    let occurrencesPerYear;
    if (frequencyType === 'week') {
      occurrencesPerYear = 52 * frequency;
    } else if (frequencyType === 'month') {
      occurrencesPerYear = 12 * frequency;
    } else if (frequencyType === 'year') {
      occurrencesPerYear = frequency;
    }

    const totalHours = yearsLeft * occurrencesPerYear * duration;
    const totalDays = totalHours / 24;

    onAddLovedOne({
      name,
      relationship: relationship === 'Otro' ? customRelationship : relationship,
      yearsLeft,
      totalHours,
      totalDays,
    });

    setName('');
    setBirthDate('');
    setLifespan(80);
    setRelationship('');
    setCustomRelationship('');
    setFrequency(1);
    setDuration(8);
    setFrequencyType('week');
  };

  return (
    <form className="loved-one-form card p-4 mb-4 shadow-sm" onSubmit={handleSubmit}>
      <img src={heartImage} alt="Heart" className="heart-image" />
      <h2 className="text-center mb-4" style={{ color: '#FF69B4' }}>Añade a tu ser querido</h2>
      <div className="form-group">
        <label>Nombre</label>
        <input
          type="text"
          className="form-control"
          placeholder="Nombre del ser querido (e.g. Manuel)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Parentesco</label>
        <select
          className="form-control"
          value={relationship}
          onChange={(e) => setRelationship(e.target.value)}
          required
        >
          <option value="">Selecciona el parentesco</option>
          <option value="Padre">Padre</option>
          <option value="Madre">Madre</option>
          <option value="Hermano/a">Hermano/a</option>
          <option value="Tío/a">Tío/a</option>
          <option value="Abuelo/a">Abuelo/a</option>
          <option value="Primo/a">Primo/a</option>
          <option value="Amigo/a">Amig@</option>
          <option value="Otro">Otro</option>
        </select>
        {relationship === 'Otro' && (
          <div className="form-group mt-2">
            <label>Especificar parentesco</label>
            <input
              type="text"
              className="form-control"
              placeholder="Especifica el parentesco (e.g. Compañero de trabajo)"
              value={customRelationship}
              onChange={(e) => setCustomRelationship(e.target.value)}
              required
            />
          </div>
        )}
      </div>
      <div className="form-group">
        <label>Fecha de nacimiento</label>
        <input
          type="date"
          className="form-control"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Expectativa de vida (años)</label>
        <input
          type="number"
          className="form-control"
          placeholder="Expectativa de vida en años (e.g. 80)"
          value={lifespan}
          onChange={(e) => setLifespan(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Frecuencia de la visita</label>
        <input
          type="number"
          className="form-control"
          placeholder="Número de visitas (e.g. 1)"
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Tipo de frecuencia</label>
        <select
          className="form-control"
          value={frequencyType}
          onChange={(e) => setFrequencyType(e.target.value)}
        >
          <option value="week">Semanal</option>
          <option value="month">Mensual</option>
          <option value="year">Anual</option>
        </select>
      </div>
      <div className="form-group">
        <label>Horas por visita</label>
        <input
          type="number"
          className="form-control"
          placeholder="Horas dedicadas por visita (e.g. 8)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-pink w-100 mt-3">Añadir ser querido</button>
    </form>
  );
}

LovedOnesForm.propTypes = {
  onAddLovedOne: PropTypes.func.isRequired,
};

export default LovedOnesForm;
