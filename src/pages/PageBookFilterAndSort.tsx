import { ChangeEvent, useState } from 'react';
import books from '../data/books.json';

export const PageBookFilterAndSort = () => {
	const [filterValue, setFilterValue] = useState('');
	const [sortOption, setSortOption] = useState('');

	const filteredBooks = () => {
		if (sortOption === 'author') {
			return books.filter((book) => book.author === filterValue);
		} else if (sortOption === 'genre') {
			return books.filter((book) => book.genre.includes(filterValue));
		} else {
			return books;
		}
	};

	// const sortedBooks = () => {
	// 	if (sortOption === 'author') {
	// 		return books.sort((a, b) => a.author.localeCompare(b.author));
	// 	} else if (sortOption === 'genre') {
	// 		return books.sort((a, b) => a.genre[0].localeCompare(b.genre[0]));
	// 	} else {
	// 		return books;
	// 	}
	// };

	const authorsList = [...new Set(books.map((book) => book.author))];
	const genresList = [...new Set(books.flatMap((book) => book.genre))];

	const handleSortOptionChange = (event :ChangeEvent<HTMLSelectElement>) => {
		setSortOption(event.target.value);
		setFilterValue('');
	};

	return (
		<div className="page pageBookFilterAndSort">
			<h1>Book Filter and Sort</h1>
			<form>
				<label htmlFor="sortOption">Sortieren nach:</label>
				<select
					id="sortOption"
					value={sortOption}
					onChange={(e) => handleSortOptionChange(e)}
				>
					<option value="" disabled>
						Bitte auswählen
					</option>
					<option value="author">Autoren</option>
					<option value="genre">Genre</option>
				</select>
			</form>

			{sortOption === 'author' && (
				<div>
					{authorsList
						.sort((a, b) => a.localeCompare(b))
						.map((author) => (
							<button onClick={() => setFilterValue(author)}>
								{author}
							</button>
						))}
				</div>
			)}

			{sortOption === 'genre' && (
				<div>
					{genresList
						.sort((a, b) => a.localeCompare(b))
						.map((genre) => (
							<button onClick={() => setFilterValue(genre)}>
								{genre}
							</button>
						))}
				</div>
			)}

			<div className="Book">
				{filteredBooks().map((book) => (
					<figure key={book.id}>
						<figcaption>{book.title}</figcaption>
						<img src={book.img} alt={book.title} />
						<p>{book.author}</p>
					</figure>
				))}
			</div>
		</div>
	);
};