import { ChangeEvent, useState } from 'react';
import books from '../data/books.json';

export const PageBooksorter = () => {
	const [sortOption, setSortOption] = useState('');

	const handleSortOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
		setSortOption(event.target.value);
	};

	const sortedBooks = () => {
		if (sortOption === 'author') {
			return books.sort((a, b) => a.author.localeCompare(b.author));
		} else if (sortOption === 'release') {
			return books.sort((a, b) => a.release - b.release);
		} else {
			return books;
		}
	};

	return (
		<div className="page pageBooksorter">
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
					<option value="release">Erscheinungsjahr</option>
				</select>
			</form>
			<div className="Book">
				{sortedBooks().map((book) => (
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
