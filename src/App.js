import "./App.css";
import React, { useState, useEffect, useRef } from "react";

function App() {
	const [drumSet] = useState({
		Q: {
			title: "Heater 1",
			src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
		},
		W: {
			title: "Heater 2",
			src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
		},
		E: {
			title: "Heater 3",
			src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
		},
		A: {
			title: "Heater 4",
			src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
		},
		S: {
			title: "Clap",
			src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
		},
		D: {
			title: "Open-HH",
			src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
		},
		Z: {
			title: "Kick-n'-Hat",
			src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
		},
		X: {
			title: "Kick",
			src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
		},
		C: {
			title: "Closed-HH",
			src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
		}
	});
	const refs = [];
	const displayRef = useRef();

	useEffect(() => {
		Object.entries(drumSet).map(([key, drumObj]) => {
			refs[key].parentElement.addEventListener("click", () => {
				playAudio(key, drumObj.title);
			});

			document.addEventListener("keydown", e => {
				switch (e.key.toUpperCase()) {
					case key:
						playAudio(key, drumObj.title);
					default:
						break;
				}
			});
		});
	});

	const drumsHTML = Object.entries(drumSet).map(([key, { src, title }]) => {
		return (
			<figure className="drum-pad" id={title}>
				<audio src={src} autoPlay={false} playsInline={true} className="clip" id={key} ref={ref => (refs[key] = ref)}></audio> {key}
			</figure>
		);
	});

	function playAudio(key, title) {
		displayRef.current.textContent = title;
		refs[key].style.borderColor = "12px solid orangered";
		refs[key].style.color = "1px solid orangered";
		refs[key].play();
	}

	return (
		<div className="App" id="drum-machine">
			<h1>Drum MACHINE</h1>
			<div id="display" ref={displayRef}></div>
			{/* {drumsHTML} */}
			<div className="drum">{drumsHTML}</div>
		</div>
	);
}

export default App;
