import PropTypes from 'prop-types';

const PriceCard = ({ title, price, features, popular = false }) => (
  <div className={`border rounded-lg p-6 ${popular ? 'border-purple-500' : 'border-gray-300'}`}>
    {popular && (
      <div className="bg-purple-500 text-white text-xs uppercase px-2 py-1 rounded-full mb-4 inline-block">
        Más Popular
      </div>
    )}
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-4xl font-bold mb-4">{price}</p>
    <ul className="mb-6">
      {features.map((feature, index) => (
        <li key={index} className="text-gray-700 mb-2">
          {feature}
        </li>
      ))}
    </ul>
    <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg">
      Comprar
    </button>
  </div>
);

PriceCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  popular: PropTypes.bool,
};

export default PriceCard;