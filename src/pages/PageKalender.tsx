import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import deLocale from '@fullcalendar/core/locales/de';
import meals from '../data/meals.json';

export const PageKalender = () => {

	};
	return (
		<div className="page pageKalender">
			<h1>Mein Kalender</h1>
			<FullCalendar
				plugins={[dayGridPlugin]}
				initialView="dayGridMonth"
				firstDay={1}
				locale={deLocale}
			/>
		</div>
	);
};
