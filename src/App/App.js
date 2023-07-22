import styles from './App.module.css';
import { useState } from 'react';
import TrackList from '../TrackList/TrackList';

function App() {
	const [tracks] = useState([
		{
			id: '1',
			name: 'No Lele',
			artist: 'Wizkid',
			album: 'Superstar',
		},
		{
			id: '2',
			name: 'If',
			artist: 'Davido',
			album: 'A Good Time',
		},
		{
			id: '3',
			name: 'Last Last',
			artist: 'Burna boy',
			album: 'Love, Damini',
		},
		{
			id: '4',
			name: 'Amapiano',
			artist: 'Asake, Olamide',
			album: 'Work of Art',
		},
		{
			id: '5',
			name: 'Calm Down',
			artist: 'Rema',
			album: 'Rave & Roses',
		},
		{
			id: '6',
			name: 'Ma Lo',
			artist: 'Tiwa Savage',
			album: 'Sugarcane',
		},
	]);

	return (
		<div>
			<h1>
				Ja<span className={styles.highlight}>mmm</span>ing
			</h1>
			<div className={styles.App}>
				<TrackList tracks={tracks} />
				<div className={styles.App_playlist}></div>
			</div>
		</div>
	);
}

export default App;
