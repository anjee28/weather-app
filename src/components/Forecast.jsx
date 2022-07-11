import React from 'react';

function Forecast(props) {
	let day = dayFunc(props.dt.getDay());

	let date = `${props.dt.getHours().toString()}`;

	function dayFunc(dt) {
		switch (dt) {
			case 0:
				return 'Sunday';
			case 1:
				return 'Monday';
			case 2:
				return 'Tuesday';
			case 3:
				return 'Wednesday';
			case 4:
				return 'Thursday';
			case 5:
				return 'Friday';
			case 6:
				return 'Saturday';
		}
	}
	const zero = () => {
		if (date < 10) {
			return '0';
		}
	};

	return (
		<div className="card">
			<h2>
				{Math.round(props.data.main.temp)}{' '}
				<span className="font-bold text-4xl">&#176;c</span>
			</h2>
			<h4 className="capitalize">{props.data.weather[0].description}</h4>
			<h4>speed: {props.data.wind.speed}</h4>
			<h4>degree: {props.data.wind.deg}</h4>
			<h4>gust: {props.data.wind.gust}</h4>
			<h4>
				{zero()}
				{date} : 00
			</h4>
			<h4>{day}</h4>
		</div>
	);
}

export default Forecast;
