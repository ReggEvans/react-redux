import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
	renderList() {
		return this.props.books.map((book, i) => {
			return (
				<li onClick={() => this.props.selectBook(book)} key={i} className="list-group-item">
					{book.title}
				</li>
			);
		});
	}

	render() {
		return <ul className="list-group col-sm-4">{this.renderList()}</ul>;
	}
}

function mapStateToProps(state) {
	// Whatever gets returned from here will show up as props from inside of BookList
	return {
		books: state.books,
	};
}

// Anything returned from this function wil end up as props on the BookList container
function mapDispatchToProps(dispatch) {
	// Whenever selectBook is called, the result should be passed to all reducers
	return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
