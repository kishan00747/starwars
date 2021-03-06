import React from 'react';
import './Lightsaber.css'

const Lightsaber = () => {

	return (
		<div id="lightsaber" className="dib ml3 mr5">
					<span id="light"></span>
					<span id="generator">
						<span id="guard">
							<span></span>
							<span></span>
							<span></span>
							<span></span>
							<span></span>
						</span>
						<span id="handlestart">
							<span></span>
							<span></span>
						</span>
						<span id="handle">
							<span></span>
							<span></span>
							<span></span><span></span>
							<span></span><span></span>
							<span></span><span></span>
							<span></span><span></span>
							<span></span><span></span>
							<span></span><span></span>
							<span></span><span></span>
							<span></span><span></span>
							<span className="long"></span>
							<span className="long"></span>
							<span className="box"></span>
						</span>
						<span className="wings">
							<span className="wing wing1"></span>
							<span className="wing wing2"></span>
							<span className="wing wing3"></span>
						</span>

						<span className="light"></span>
					</span>
		</div>

	);

}

export default Lightsaber;