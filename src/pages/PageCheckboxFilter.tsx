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
	const kategoryList = ["Frühstück",'Mittag'];

	const handleSortOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
		setSortOption(event.target.value);
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
			<div>
				<form>
					<label htmlFor="sortOption">Sortieren nach: </label>
					<select
						id="sortOption"
						value={sortOption}
						onChange={(e) => handleSortOptionChange(e)}
					>
						<option value="" disabled>
							Bitte auswählen
						</option>
						<option value="saison">Jahreszeit</option>
						<option value="kategory">Tageszeit</option>
					</select>
				</form>

				{sortOption === 'saison' && (
					<div>
						{saisonList.map((saison) => (
							<button
								className='btn'
								key={saison}
								onClick={() => handleSaisonChange(saison)}>
								{saison}
							</button>
						))}
					</div>
				)}

				{sortOption === 'kategory' && (
					<div>
						{kategoryList.map((kategory) => (
							<button
								className='btn'
								key={kategory}
								onClick={() => handleKategoryChange(kategory)}>
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
									className='btn'
									key={tag}
									onClick={() => handleTagChange(tag)}>
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
								{meal.ingredientList.map((ingredient) => (
									<p key={ingredient.name}>
										{ingredient.amount} {ingredient.name}
									</p>
								))}
							</figcaption>
						</figure>
					))}
				</div>
			</div>
		</div>
	);
};
