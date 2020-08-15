import React from "react";
import AppCard from "./AppCard";
import CardInfo from "../../data/CardInfo";
import "./myApps.css";

const MyApps = (props) => {
	const appCards = CardInfo.map((card) => {
		return (
			<AppCard
				uniqueClass={card.uniqueClassName}
				title={card.title}
				image={card.image}
				dataURL={card.dataURL}
				icon1={card.icon1}
				icon2={card.icon2}
				icon3={card.icon3}
				icon4={card.icon4}
				icon5={card.icon5}
				descriptionP1={card.descriptionP1}
				descriptionP2={card.descriptionP2}
				key={card.key}
				buttonText={card.buttonText}
			/>
		);
	});
	return <div className='apps'>{appCards}</div>;
};

export default MyApps;
