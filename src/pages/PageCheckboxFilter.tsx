import meals from '../data/meals.json';
import { ChangeEvent, useState } from 'react';

export const PageCheckboxFilter = () => {
	const [filterValue, setFilterValue] = useState('');
	const [sortOption, setSortOption] = useState('');
	const [selectedTag, setSelectedTag] = useState('');

	const filteredMeals = () => {
		let filtered = meals;

		if (sortOption === 'saison') {
			filtered = filtered.filter((meal) =>
				meal.saison.includes(filterValue)
			);
		} else if (sortOption === 'kategory') {
			filtered = filtered.filter((meal) => meal.kategory === filterValue);
		}

		if (selectedTag !== '') {
			filtered = filtered.filter((meal) =>
				meal.tags.includes(selectedTag)
			);
		}

		return filtered;
	};

	const saisonList = ['Frühling', 'Sommer', 'Herbst', 'Winter'];
	const kategoryList = ['Frühstück', 'Mittag', 'Gebäck'];

	const handleSortOptionChange = (
		event: React.MouseEvent<HTMLButtonElement>
	) => {
		setSortOption((event.target as HTMLButtonElement).value);
		setFilterValue('');
		setSelectedTag('');
	};

	const handleSaisonChange = (saison: string) => {
		setFilterValue(saison);
		setSelectedTag('');
	};

	const handleKategoryChange = (kategory: string) => {
		setFilterValue(kategory);
		setSelectedTag('');
	};

	const handleTagChange = (tag: string) => {
		setSelectedTag(tag);
	};

	return (
		<div className="page pageCheckboxFilter">
			<h2>Sortieren nach</h2>
			<div>
				<button
					id="btn"
					type="button"
					value="saison"
					onClick={(e) => handleSortOptionChange(e)}
					className={sortOption === 'saison' ? 'active' : ''}
				>
					Jahreszeit
				</button>
				<button
					id="btn"
					type="button"
					value="kategory"
					onClick={(e) => handleSortOptionChange(e)}
					className={sortOption === 'kategory' ? 'active' : ''}
				>
					Mahlzeit
				</button>
			</div>

			{sortOption === 'saison' && (
				<div>
					{saisonList.map((saison) => (
						<button
							id="btn"
							key={saison}
							onClick={() => handleSaisonChange(saison)}
						>
							{saison}
						</button>
					))}
				</div>
			)}

			{sortOption === 'kategory' && (
				<div>
					{kategoryList.map((kategory) => (
						<button
							id="btn"
							key={kategory}
							onClick={() => handleKategoryChange(kategory)}
						>
							{kategory}
						</button>
					))}
				</div>
			)}

			{filterValue !== '' && (
				<div>
					{[...new Set(meals.flatMap((meal) => meal.tags))].map(
						(tag) => (
							<button
								id="btn"
								key={tag}
								onClick={() => handleTagChange(tag)}
								className={selectedTag === tag ? 'active' : ''}
							>
								{tag}
							</button>
						)
					)}
				</div>
			)}

			<div className="meal">
				{filteredMeals().map((meal) => (
					<figure key={meal.title}>
						<figcaption>
							<p className="title">{meal.title}</p>
						</figcaption>
					</figure>
				))}
			</div>
		</div>
	);
};
