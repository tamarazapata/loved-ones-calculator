import './LovedOnesList.css';
import PropTypes from 'prop-types';

function LovedOnesList({ lovedOnes }) {
  return (
    <div className="loved-ones-list card p-4 shadow-sm">
      <h2 className="text-center mb-4" style={{ color: '#FF69B4' }}>Lista</h2>
      <ul className="list-group">
        {lovedOnes.map((lovedOne, index) => (
          <li key={index} className="list-group-item mb-3 loved-one-item">
            <h3>{lovedOne.name}</h3>
            <p>Años restantes: {lovedOne.yearsLeft}</p>
            <p>Horas restantes: {lovedOne.totalHours.toFixed(0)}</p>
            <p>Días restantes: {lovedOne.totalDays.toFixed(0)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

LovedOnesList.propTypes = {
  lovedOnes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      yearsLeft: PropTypes.number.isRequired,
      totalHours: PropTypes.number.isRequired,
      totalDays: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default LovedOnesList;
