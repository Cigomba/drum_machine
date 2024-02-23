import "./App.css";
import React, { useState, useEffect, useRef } from "react";

function App() {
	const drumRef = useRef(null);

	const [drumSet] = useState({
		Q: {
			title: "Heater 1",
			src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
		},
		W: {
			title: "Heater 2",
			src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
		},
		E: {
			title: "Heater 3",
			src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
		},
		A: {
			title: "Heater 4",
			src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
		},
		S: {
			title: "Clap",
			src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
		},
		D: {
			title: "Open-HH",
			src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
		},
		Z: {
			title: "Kick-n'-Hat",
			src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
		},
		X: {
			title: "Kick",
			src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
		},
		C: {
			title: "Closed-HH",
			src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
		},
	});

	useEffect(() => {
		// renders every time the component is updated
		// Array.from(drumSet).map(key => ())
		const drumSetContainer = drumRef.current;
	}, [drumSet]);

	return (
		<div
			className="App"
			id="drum-machine">
			<h1>Drum MACHINE</h1>
			<div id="display"></div>
			<div
				className="drum"
				ref={drumRef}>
				{/* {Object.entries(drumSet).map((key, drum) => {
					return Object.entries(drum).map((title, src) => (
						<figure
						<figcaption>Listen to:
						</figcaption>
							className="drum-pad"
							id={title + "-drum-pad"}>
							<audio
								src={src}
								className="clip"
								id={title}></audio>
							{key}
						</figure>
						));
					})} */}
				<div
					className="drum-pad"
					id={+"-drum-pad"}>
					<audio
						src={drumSet["Q"].src}
						className="clip"
						id></audio>
					Q
				</div>
			</div>
		</div>
	);
}

export default App;
