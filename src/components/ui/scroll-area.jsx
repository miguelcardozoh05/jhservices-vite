import PropTypes from 'prop-types';

export const ScrollArea = ({ children, className }) => {
  return (
    <div className={`overflow-auto ${className}`}>
      {children}
    </div>
  );
};

ScrollArea.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export const ScrollBar = ({ orientation }) => {
  return (
    <div className={`scrollbar-${orientation}`}>
      {/* Custom scrollbar implementation */}
    </div>
  );
};

ScrollBar.propTypes = {
  orientation: PropTypes.oneOf(['horizontal', 'vertical']).isRequired,
};
