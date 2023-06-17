import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ filterValue, onFilterInputChange }) => {
  return (
    <div className={css.filterWrapper}>
      <label className={css.filterLabel} htmlFor="idFilter">
        Find contacts by name{' '}
      </label>
      <input
        autoComplete="off"
        id="idFilter"
        className={css.input}
        name="filter"
        value={filterValue}
        onChange={e => onFilterInputChange(e)}
      />
    </div>
  );
};

Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  onFilterInputChange: PropTypes.func.isRequired,
};

Filter.defaultProps = {
  filterValue: '',
};

export default Filter;