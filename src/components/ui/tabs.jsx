import PropTypes from 'prop-types';

export const Tabs = ({ children, className, ...props }) => {
  return (
    <div className={`tabs ${className}`} {...props}>
      {children}
    </div>
  );
};

Tabs.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export const TabsList = ({ children, className, ...props }) => {
  return (
    <div className={`tabs-list ${className}`} {...props}>
      {children}
    </div>
  );
};

TabsList.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export const TabsTrigger = ({ value, onClick, children, className, ...props }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(value);
    }
  };

  return (
    <button
      className={`tabs-trigger ${className}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
};

TabsTrigger.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default { Tabs, TabsList, TabsTrigger };
