import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Info from './Info';
import Spinner from './Spinner';
import Forecast from './Forecast';

function Main() {
	const [posts, setPosts] = useState({
		name: 'City',
		main: {
			temp: '0',
		},
		sys: {
			country: '',
		},
		visibility: '0',
	});
	const [forecast, setForecast] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [errorMsg, setErrorMsg] = useState('');
	let updatedValue;

	let geoId;
	let forecastData = [];

	useEffect(() => {
		console.log(forecast);
	});

	const fetchData = async () => {
		setLoading(true);
		try {
			const data = await axios
				.get(
					`http://api.openweathermap.org/data/2.5/weather?q=${updatedValue}&units=metric&APPID=c38d46369aafd7a9d0b1df3b1c16c77c`
				)
				.then((res) => {
					geoId = res.data.id;
					fetchDataForecast();
					setPosts(res.data);
					setError(false);
				});
		} catch (err) {
			console.log(err);
			setError(true);
			setErrorMsg(err.response.data.message);
		}
	};

	const fetchDataForecast = async () => {
		try {
			const data = await axios
				.get(
					`http://api.openweathermap.org/data/2.5/forecast?id=${geoId}&units=metric&appid=c38d46369aafd7a9d0b1df3b1c16c77c`
				)
				.then((res) => {
					/* console.log(res); */
					let forecastData = [];
					for (let i = 0; i < 9; i++) {
						forecastData[i] = res.data.list[i];
					}
					setForecast(forecastData);
					/* 					console.log(forecastData); */
					setError(false);
				});
		} catch (err) {
			console.log(err);
			setError(true);
			setErrorMsg(err.response.data.message);
		}
		setLoading(false);
	};

	const onSubmitHandle = (e) => {
		e.preventDefault();
		console.log(updatedValue);
		fetchData();

		updatedValue = '';
	};

	const handleOnChange = (e) => {
		updatedValue = e.target.value.replace(/ /g, '+');
	};

	return (
		<div className="flex flex-row h-screen p-8">
			<div className="flex-1">
				<div className="my-2 border-slate-400 p-2">
					{loading ? (
						<Spinner />
					) : error ? (
						<p>{errorMsg}</p>
					) : (
						<Info
							name={posts.name}
							temp={posts.main.temp}
							country={posts.sys.country}
							visibility={posts.visibility}
						/>
					)}
				</div>
				<div className="text-right border-slate-400 p-2">
					<form
						onSubmit={onSubmitHandle}
						className="flex flex-col justify-end"
					>
						<input
							className="txtBox flex-none"
							type="text"
							onChange={handleOnChange}
						/>
						<button className="btn">Search City</button>
					</form>
				</div>
			</div>
			<div className="cardContainer">
				{forecast.map((data) => (
					<Forecast
						key={data.dt}
						dt={new Date(data.dt * 1000)}
						data={data}
					/>
				))}
			</div>
		</div>
	);
}

export default Main;
