import React, {useState} from 'react';
import meals from '../data/meals.json';

export const PageKalender = () => {
	const [popUp, setPopUp] = useState("closed");

	const currentDate = new Date();
	const year = currentDate.getFullYear();
	const month = currentDate.getMonth();

	const printCalendar = () => {		

		const firstDay = new Date(year, month , 0);
		const firstWeekday = firstDay.getDay();
		const numDays = new Date(year, month, 0).getDate();

		let calendarDays = [];

		console.log(`Erster Tag des Monats: ${firstDay}`);

		// Leerzeichen für die Tage vor dem ersten Tag des Monats
		for (let i = 0; i < firstWeekday; i++) {
			calendarDays.push(
				<div key={`empty-${i}`} className="calendar-day" />
			);
		}

		// Tage des Monats
		for (let day = 1; day <= numDays; day++) {
			calendarDays.push(
				<div key={day} className="calendar-day" onClick={()=> selectCalendarDate()}>
					{day}
				</div>
			);
		}

		console.log(`Kalender für ${month}/${year}`);

		return (
			<div className="calendar" onClick={() => selectCalendarDate()}>
				{calendarDays}
			</div>
		);
	};

	const selectCalendarDate = () => {
		popUp === "closed" ? setPopUp("open") : setPopUp("closed");
	};

	const popUpFenster = () => {
		return (
			<div className="popUp">
				<h2>Mein Kalender</h2>
				
				<p>Wähle ein Datum aus</p>
				<button onClick={() => closePopUp()}>Schließen</button>
			</div>
		);

	}

	return (
		<div className="page pageKalender">
			<h1>Mein Kalender</h1>
			<p>{month}</p>
			<div className={`popUp--${popUp}`}>
				<p>Test</p>
			</div>
			<table>
				<tr>
					<td>Montag</td>
					<td>Dienstag</td>
					<td>Mittwoch</td>
					<td>Donnerstag</td>
					<td>Freitag</td>
					<td>Samstag</td>
					<td>Sonntag</td>
				</tr>
			</table>
			{printCalendar()}
		</div>
	);
};
