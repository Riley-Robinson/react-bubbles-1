import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../Utils/axiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
	const [colorList, setColorList] = useState([]);
	const [update, setUpdate] = useState(false);
	// fetch your colors data from the server when the component mounts
	// set that data to the colorList state property
	useEffect(() => {
		axiosWithAuth()
			.get("/api/colors")
			.then((res) => {
				setColorList(res.data);
			})
			.catch((err) => {
				console.log("get colors error -", err);
			});
	}, [update]);

	const updateList = () => {
		setUpdate(!update);
	};

	return (
		<>
			<ColorList
				colors={colorList}
				updateColors={setColorList}
				update={updateList}
			/>
			<Bubbles colors={colorList} />
		</>
	);
};

export default BubblePage;
