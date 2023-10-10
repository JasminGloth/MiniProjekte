import { useState } from "react";
import books from "../data/books.json"

export const PageBookfilter = () => {
	const [filterValue, setFilterValue] = useState("");

	const filteredBooks = () => books.filter((book) => book.author === filterValue);

	const authorsList = [...new Set(books.map((book) => book.author))];
	


	return (
		<div className="page pageBookfilter">
			<h1>Bookfilter</h1>
			<div>
				{authorsList.sort((a,b)=> a > b ? 1 : -1).map(author => (
					<button onClick={() => setFilterValue(author)}>{author}</button>
				))}
			</div>
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