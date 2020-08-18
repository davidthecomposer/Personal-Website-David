import React from "react";

import dialogues from "../audio/concert-music/Chamber/dialogues.wav";
import cinqSouvenirs from "../audio/concert-music/Chamber/enterrement-catholique.mp3";
import neonGames from "../audio/concert-music/Chamber/neon-games-sample.mp3";
import starCrossed from "../audio/concert-music/Chamber/Star-Crossed.mp3";
import etchings from "../audio/concert-music/Chamber/etchings.mp3";
import threePiecesForClarinet from "../audio/concert-music/Solo/3-Pieces-for-Clarinet.wav";
import copernicusEtudes from "../audio/concert-music/Solo/copernicus-etudes.mp3";
import threeSongsBaudelaire from "../audio/concert-music/VocalChoral/3-Songs-on-a-Poem-by-Baudelaire.wav";
import aftermath from "../audio/concert-music/VocalChoral/Aftermath.wav";
import oComeEmanuel from "../audio/concert-music/VocalChoral/O-Come-O-Come-Emanuel.wav";

import cinqSouvenirsScore from "../scores/Chamber/Cinq-Souvenirs.pdf";
import dialoguesScore from "../scores/Chamber/Dialogues.pdf";
import neonGamesScore from "../scores/Chamber/Neon-Games.pdf";
import pierrotScore from "../scores/Chamber/Pierrot-Miniatures.pdf";
import starCrossedScore from "../scores/Chamber/Star-Crossed.pdf";
import etchingsScore from "../scores/Chamber/Etchings.pdf";

import terminalLightScore from "../scores/Orchestral/Terminal-Light-StonyBrook.pdf";
import terminalNightScore from "../scores/Orchestral/Terminal-Night-StonyBrook.pdf";
import threePiecesClarScore from "../scores/Solo/Clarinet.pdf";
import copernicusScore from "../scores/Solo/Copernicus-Etudes.pdf";
import kingsPrayerScore from "../scores/VocalChoral/A-King's-Prayer.pdf";
import comeYeSaintsScore from "../scores/VocalChoral/Come-Come-Ye-Saints.pdf";
import crystalGazerScore from "../scores/VocalChoral/Crystal-Gazer.pdf";
import habitScore from "../scores/VocalChoral/Habit.pdf";
import iWonder2018Score from "../scores/VocalChoral/I-Wonder-as-I-Wander-2018.pdf";
import baudelaireScore from "../scores/VocalChoral/3-Songs-Baudelaire.pdf";
import oComeEmanuelScore from "../scores/VocalChoral/O-Come-O-Come-Emanuel.pdf";
import silentNightScore from "../scores/VocalChoral/Silent-Night.pdf";
import thereWillComeScore from "../scores/VocalChoral/There-Will-come-soft-Rains.pdf";

const chamberMusic = [
	{
		title: "Dialogues",
		instrumentation: "Violin | Clarinet | Piano",
		year: "2016",
		movements: "5",
		duration: "6'",
		scoreFile: (
			<a href={dialoguesScore} target='_blank' rel='noopener noreferrer'>
				<i className='far fa-file-pdf'></i>
			</a>
		),
		audioFile: dialogues,
		placeHolder: "",
		audioPlaceHolder: "",
	},
	{
		title: "Star-Crossed",
		instrumentation: "Oboe | Violin | Cello | Piano",
		year: "2014",
		movements: "1",
		duration: "6'",
		scoreFile: (
			<a href={starCrossedScore} target='_blank' rel='noopener noreferrer'>
				<i className='far fa-file-pdf'></i>
			</a>
		),
		audioFile: starCrossed,
		placeHolder: "",
		audioPlaceHolder: "",
	},
	{
		title: "Neon Games",
		instrumentation: "Flute | Alto Sax | Piano",
		year: "2012",
		movements: "1",
		duration: "9'",
		scoreFile: (
			<a href={neonGamesScore} target='_blank' rel='noopener noreferrer'>
				<i className='far fa-file-pdf'></i>
			</a>
		),
		audioFile: neonGames,
		placeHolder: "",
		audioPlaceHolder: "",
	},
	{
		title: "Etchings",
		instrumentation: "Woodwind Quintet | Percussion",
		year: "2013",
		movements: "2012",
		duration: "7",
		scoreFile: (
			<a href={etchingsScore} target='_blank' rel='noopener noreferrer'>
				<i className='far fa-file-pdf'></i>
			</a>
		),
		audioFile: etchings,
		placeHolder: "",
		audioPlaceHolder: "",
	},
	{
		title: "Pierrot Miniatures",
		instrumentation: "Pierrot Ensemble",
		year: "2010",
		movements: "2009",
		duration: "5",
		scoreFile: (
			<a href={pierrotScore} target='_blank' rel='noopener noreferrer'>
				<i className='far fa-file-pdf'></i>
			</a>
		),
		audioFile: "",
		placeHolder: "",
		audioPlaceHolder: "Coming Soon",
	},
	{
		title: "Cinq Souvenirs de La France",
		instrumentation: "String Quartet",
		year: "2008",
		movements: "5",
		duration: "24'",
		scoreFile: (
			<a href={cinqSouvenirsScore} target='_blank' rel='noopener noreferrer'>
				<i className='far fa-file-pdf'></i>
			</a>
		),
		audioFile: cinqSouvenirs,
		placeHolder: "",
		audioPlaceHolder: "",
	},
];

const orchestralMusic = [
	{
		title: "Cycle - 1. Metamorphosis in Air",
		instrumentation: "3333 | 4331 | 3Perc + Timp | Piano | Harp | Strings",
		year: "2021",
		movements: "1",
		duration: "14'",
		scoreFile: "",

		audioFile: "",
		placeHolder: "Coming Soon",
		audioPlaceHolder: "Coming Soon",
	},
	{
		title: "Terminal Night",
		instrumentation: "3333 | 4331 | 3Perc + Timp | Piano | Harp | Strings",
		year: "2010",
		movements: "1",
		duration: "9'",
		scoreFile: (
			<a href={terminalNightScore} target='_blank' rel='noopener noreferrer'>
				<i className='far fa-file-pdf'></i>
			</a>
		),
		audioFile: "",
		placeHolder: "",
		audioPlaceHolder: "Coming Soon",
	},
	{
		title: "Terminal Light",
		instrumentation: "3333 | 4331 | 3Perc + Timp | Piano | Harp | Strings",
		year: "2010",
		movements: "5",
		duration: "6'",
		scoreFile: (
			<a href={terminalLightScore} target='_blank' rel='noopener noreferrer'>
				<i className='far fa-file-pdf'></i>
			</a>
		),
		audioFile: "",
		placeHolder: "",
		audioPlaceHolder: "Coming Soon",
	},
];

const choraleVocalMusic = [
	{
		title: "Meru",
		instrumentation: "Chamber Opera",
		year: "2020/2021",
		movements: "2",
		duration: "90'",
		scoreFile: "",
		audioFile: "",
		placeHolder: "Coming Soon",
		audioPlaceHolder: "Coming Soon",
	},
	{
		title: "Un-Named Song Cycle",
		instrumentation: "Mezzo Soprano and Piano",
		year: "2020",
		movements: "6",
		duration: "14-20'",
		scoreFile: "",

		audioFile: "",
		placeHolder: "Coming Soon",
		audioPlaceHolder: "Coming Soon",
	},
	{
		title: "Habit",
		instrumentation: "High Voice and Piano",
		year: "2014",
		movements: "6",
		duration: `20'30"`,
		scoreFile: (
			<a href={habitScore} target='_blank' rel='noopener noreferrer'>
				<i className='far fa-file-pdf'></i>
			</a>
		),
		audioFile: aftermath,
		placeHolder: "",
		audioPlaceHolder: "",
	},
	{
		title: "I Wonder as I Wander",
		instrumentation: "High Voice and Piano",
		year: "2018",
		movements: "1",
		duration: "4'",
		scoreFile: (
			<a href={iWonder2018Score} target='_blank' rel='noopener noreferrer'>
				<i className='far fa-file-pdf'></i>
			</a>
		),
		audioFile: "",
		placeHolder: "",
		audioPlaceHolder: "Coming Soon",
	},
	{
		title: "Silent Night",
		instrumentation: "High Voice and Piano",
		year: "2016",
		movements: "1",
		duration: `4'30"`,
		scoreFile: (
			<a href={silentNightScore} target='_blank' rel='noopener noreferrer'>
				<i className='far fa-file-pdf'></i>
			</a>
		),
		audioFile: "",
		placeHolder: "",
		audioPlaceHolder: "Coming Soon",
	},
	{
		title: "Come, Come Ye Saints",
		instrumentation: "High Voice and Piano",
		year: "2018",
		movements: "1",
		duration: "5'",
		scoreFile: (
			<a href={comeYeSaintsScore} target='_blank' rel='noopener noreferrer'>
				<i className='far fa-file-pdf'></i>
			</a>
		),
		audioFile: "",
		placeHolder: "",
		audioPlaceHolder: "Coming Soon",
	},
	{
		title: "There Will Come Soft Rains",
		instrumentation: "SSSSAAAATTTTBBBB Choir",
		year: "2012",
		movements: "1",
		duration: "4'",
		scoreFile: (
			<a href={thereWillComeScore} target='_blank' rel='noopener noreferrer'>
				<i className='far fa-file-pdf'></i>
			</a>
		),
		audioFile: "",
		placeHolder: "",
		audioPlaceHolder: "Coming Soon",
	},
	{
		title: "A King's Prayer",
		instrumentation: "SSAATTBB Choir",
		year: "2010",
		movements: "1",
		duration: "4'",
		scoreFile: (
			<a href={kingsPrayerScore} target='_blank' rel='noopener noreferrer'>
				<i className='far fa-file-pdf'></i>
			</a>
		),
		audioFile: "",
		placeHolder: "",
		audioPlaceHolder: "Coming Soon",
	},
	{
		title: "3 Christmas Carols",
		instrumentation: "Tenor and Piano",
		year: "2008",
		movements: "3",
		duration: "13'",
		scoreFile: (
			<a href={oComeEmanuelScore} target='_blank' rel='noopener noreferrer'>
				<i className='far fa-file-pdf'></i>
			</a>
		),
		audioFile: oComeEmanuel,
		placeHolder: "",
		audioPlaceHolder: "",
	},
	{
		title: "Crystal Gazer",
		instrumentation: "High Voice and Piano",
		year: "2008",
		movements: "1",
		duration: "4'",
		scoreFile: (
			<a href={crystalGazerScore} target='_blank' rel='noopener noreferrer'>
				<i className='far fa-file-pdf'></i>
			</a>
		),
		audioFile: "",
		placeHolder: "",
		audioPlaceHolder: "Coming Soon",
	},
	{
		title: "3 Songs on a Poem by Baudelaire",
		instrumentation: "High Voice and Piano",
		year: "2008",
		movements: "3",
		duration: `4'30"`,
		scoreFile: (
			<a href={baudelaireScore} target='_blank' rel='noopener noreferrer'>
				<i className='far fa-file-pdf'></i>
			</a>
		),
		audioFile: threeSongsBaudelaire,
		placeHolder: "",
		audioPlaceHolder: "",
	},
];

const soloMusic = [
	{
		title: "Copernicus Etudes",
		instrumentation: "Solo Piano",
		year: "2010-2020",
		movements: "9",
		duration: "30'",
		scoreFile: (
			<a href={copernicusScore} target='_blank' rel='noopener noreferrer'>
				<i className='far fa-file-pdf'></i>
			</a>
		),
		audioFile: copernicusEtudes,
		placeHolder: "",
		audioPlaceHolder: "",
	},
	{
		title: "Three Pieces for Clarinet and Piano",
		instrumentation: "Solo Piano",
		year: "2008",
		movements: "3",
		duration: "7'",
		scoreFile: (
			<a href={threePiecesClarScore} target='_blank' rel='noopener noreferrer'>
				<i className='far fa-file-pdf'></i>
			</a>
		),
		audioFile: threePiecesForClarinet,
		placeHolder: "",
		audioPlaceHolder: "",
	},
];

export { chamberMusic, choraleVocalMusic, orchestralMusic, soloMusic };
