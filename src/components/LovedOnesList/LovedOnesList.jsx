import './LovedOnesList.css';
import PropTypes from 'prop-types';


    function LovedOnesList({ lovedOnes }) {
        const formatCamelCase = (text) => {
            return text
                .toLowerCase()
                .split(' ')
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
            };
    return (
        <div className="loved-ones-list card p-4 shadow-sm">
            <h2 className="text-center mb-4" style={{ color: '#FF69B4' }}>Lista</h2>
            <ul className="list-group">
            {lovedOnes.map((lovedOne, index) => (
                <li key={index} className="list-group-item mb-3 loved-one-item">
                    <h3>{lovedOne.name.toUpperCase()} ({formatCamelCase(lovedOne.relationship)})</h3>
                    <p><strong>Años restantes:</strong> {lovedOne.yearsLeft}</p>
                <p><strong>Horas restantes:</strong> {lovedOne.totalHours.toFixed(0)}</p>
                <p><strong>Días restantes:</strong> {lovedOne.totalDays.toFixed(0)}</p>
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
        relationship: PropTypes.string.isRequired,
        yearsLeft: PropTypes.number.isRequired,
        totalHours: PropTypes.number.isRequired,
        totalDays: PropTypes.number.isRequired,
    })
    ).isRequired,
};

export default LovedOnesList;
