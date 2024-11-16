import './LovedOnesForm.css';
import  { useState } from 'react';
import PropTypes from 'prop-types';
import heartImage from '../../assets/img/heart-img.png';

function LovedOnesForm({ onAddLovedOne }) {
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [lifespan, setLifespan] = useState(80);
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
      yearsLeft,
      totalHours,
      totalDays,
    });

    setName('');
    setBirthDate('');
    setLifespan('');
    setFrequency(1);
    setDuration(8);
    setFrequencyType('week');
  };

  return (
    <form className="loved-one-form card p-4 mb-4 shadow-sm" onSubmit={handleSubmit}>
      <img src={heartImage}  alt="Heart" className="heart-image" />
      <h2 className="text-center mb-4" style={{ color: '#FF69B4' }}>Añade a tu ser querido</h2>
      <div className="form-group">
        <label>Nombre</label>
        <input type="text" className="form-control" placeholder="Nombre ser querido" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>Fecha de nacimiento</label>
        <input type="date" className="form-control" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>Expectativa de vida (años)</label>
        <input type="number" className="form-control" value={lifespan} onChange={(e) => setLifespan(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Frecuencia de la visita</label>
        <input type="number" className="form-control" value={frequency} onChange={(e) => setFrequency(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Tipo de frecuencia</label>
        <select className="form-control" value={frequencyType} onChange={(e) => setFrequencyType(e.target.value)}>
          <option value="week">Por semana</option>
          <option value="month">Por mes</option>
          <option value="year">Por año</option>
        </select>
      </div>
      <div className="form-group">
        <label>Horas por visita</label>
        <input type="number" className="form-control" value={duration} onChange={(e) => setDuration(e.target.value)} />
      </div>
      <button type="submit" className="btn btn-pink w-100 mt-3">Añadir ser querido</button>
    </form>
  );
}

LovedOnesForm.propTypes = {
  onAddLovedOne: PropTypes.func.isRequired,
};

export default LovedOnesForm;
