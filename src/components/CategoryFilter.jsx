import React from 'react';
import PropTypes from 'prop-types';
import '../style/CategoryFilter.css';

class CategoryFilter extends React.Component {
  render() {
    const { categoryList } = this.props;

    return (
      <div className="categories">
        {
          categoryList.map((category, index) => (
            <label
              data-testid="category"
              htmlFor={ category.id }
              key={ index }
            >
              <input
                type="radio"
                id={ category.id }
                value={ category.id }
                name="categories"
              />
              { category.name }
            </label>
          ))
        }
      </div>
    );
  }
}

CategoryFilter.propTypes = {
  categoryList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  })),
};

CategoryFilter.defaultProps = {
  categoryList: [],
};

export default CategoryFilter;
