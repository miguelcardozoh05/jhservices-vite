import PropTypes from 'prop-types';

const ToggleButton = ({ isActive, label, onClick }) => {
  return (
    <button
      className={`px-6 py-2 rounded-full transition ${isActive ? 'bg-orange-600 text-white' : 'bg-gray-300 text-gray-800'}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

ToggleButton.propTypes = {
  isActive: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ToggleButton;
