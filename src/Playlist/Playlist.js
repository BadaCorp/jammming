import React from 'react';
import styles from './Playlist.module.css';

const Playlist = () => {
	return (
		<div className={styles.Playlist}>
			<button className={styles.Playlist_save}>SAVE TO SPOTIFY</button>
		</div>
	);
};

export default Playlist;
