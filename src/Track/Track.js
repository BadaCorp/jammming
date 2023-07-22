import styles from './Track.module.css';

const Track = ({ track }) => {
	return (
		<div className={styles.Track}>
			<div className={styles.Track_information}>
				<h3>{track.name}</h3>
				<p>
					{track.artist} | {track.album}
				</p>
			</div>
		</div>
	);
};

export default Track;
