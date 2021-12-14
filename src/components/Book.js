import PropTypes from 'prop-types';
import { React, PureComponent } from 'react';

class Book extends PureComponent {
  render() {
    const { title, author } = this.props;
    return (
      <div>
        <div>
          <span>{title}</span>
          <span>{author}</span>
        </div>
        <button type="button">Remove</button>
      </div>
    );
  }
}

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
