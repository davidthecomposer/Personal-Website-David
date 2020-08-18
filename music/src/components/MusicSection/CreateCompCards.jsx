import React from "react";

import "./CompositionCards.css";
import {
	chamberMusic,
	choraleVocalMusic,
	orchestralMusic,
	soloMusic,
} from "../../data/ConcertMusic";
import SmallAudioPlayer from "./SmallAudioPlayer/SmallAudioPlayer";

export const ChamberMusicPieces = (props) => {
	const cards = chamberMusic.map((card, index) => {
		return (
			<div className='comp-info dialogues' key={index}>
				<h3 className='card-title'>{card.title}</h3>
				<p>
					<strong>Instrumentation:</strong> {card.instrumentation}
				</p>
				<p>
					<strong>Year:</strong> {card.year}
				</p>
				<p>
					<strong>Movements:</strong> {card.movements}
				</p>
				<p>
					<strong>Duration:</strong> {card.duration}
				</p>
				<p>
					<strong>Score Sample: </strong>
					{card.placeHolder}
					{card.scoreFile}
				</p>
				<SmallAudioPlayer
					title={card.title}
					key={index}
					audioFile={card.audioFile}
					index={index}
				/>
			</div>
		);
	});
	return <div className='pieces-container'>{cards}</div>;
};

export const OrchestralPieces = (props) => {
	const cards = orchestralMusic.map((card, index) => {
		return (
			<div className='comp-info dialogues' key={index}>
				<h3 className='card-title'>{card.title}</h3>
				<p>
					<strong>Instrumentation:</strong> {card.instrumentation}
				</p>
				<p>
					<strong>Year:</strong> {card.year}
				</p>
				<p>
					<strong>Movements:</strong> {card.movements}
				</p>
				<p>
					<strong>Duration:</strong> {card.duration}
				</p>
				<p>
					<strong>Score Sample: </strong>
					{card.placeHolder}
					{card.scoreFile}
				</p>
				<SmallAudioPlayer
					title={card.title}
					key={index}
					audioFile={card.audioFile}
					index={index}
				/>
			</div>
		);
	});
	return <div className='pieces-container'>{cards}</div>;
};

export const ChoralVocalPieces = (props) => {
	const cards = choraleVocalMusic.map((card, index) => {
		return (
			<div className='comp-info dialogues' key={index}>
				<h3 className='card-title'>{card.title}</h3>
				<p>
					<strong>Instrumentation:</strong> {card.instrumentation}
				</p>
				<p>
					<strong>Year:</strong> {card.year}
				</p>
				<p>
					<strong>Movements:</strong> {card.movements}
				</p>
				<p>
					<strong>Duration:</strong> {card.duration}
				</p>
				<p>
					<strong>Score Sample: </strong>
					{card.placeHolder}
					{card.scoreFile}
				</p>
				<SmallAudioPlayer
					title={card.title}
					key={index}
					audioFile={card.audioFile}
					index={index}
				/>
			</div>
		);
	});
	return <div className='pieces-container'>{cards}</div>;
};

export const SoloPieces = (props) => {
	const cards = soloMusic.map((card, index) => {
		return (
			<div className='comp-info dialogues' key={index}>
				<h3 className='card-title'>{card.title}</h3>
				<p>
					<strong>Instrumentation:</strong> {card.instrumentation}
				</p>
				<p>
					<strong>Year:</strong> {card.year}
				</p>
				<p>
					<strong>Movements:</strong> {card.movements}
				</p>
				<p>
					<strong>Duration:</strong> {card.duration}
				</p>
				<p>
					<strong>Score Sample: </strong>
					{card.placeHolder}
					{card.scoreFile}
				</p>
				<SmallAudioPlayer
					title={card.title}
					key={index}
					audioFile={card.audioFile}
					index={index}
				/>
			</div>
		);
	});
	return <div className='pieces-container'>{cards}</div>;
};
