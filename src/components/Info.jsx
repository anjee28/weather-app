import React, { useState, useEffect } from 'react';

function Info(props) {
	return (
		<React.Fragment>
			<p>
				<span className="text-white text-5xl">{props.name}</span>
			</p>
			<p>
				<span className="text-white text-8xl font-black">
					{props.temp}
					<span className="text-5xl font-normal">&#176;c</span>
				</span>
			</p>
			<p className="text-white text-2xl">
				<span>Country:</span>
				<span className="ml-2">{props.country}</span>
			</p>
			<p className="text-white">
				<span>Visibility:</span>
				<span className="ml-2">{props.visibility}</span>
			</p>
		</React.Fragment>
	);
}

export default Info;
