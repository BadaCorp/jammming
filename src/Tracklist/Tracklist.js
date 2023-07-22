import Track from '../Track/Track';
import styles from './Tracklist.module.css';

const Tracklist = ({ tracks }) => {
	const RenderTracks = tracks.map((track) => (
		<div className={styles.TrackList} key={track.id}>
			<Track track={track} />
		</div>
	));

	return <>{RenderTracks}</>;
};

export default Tracklist;
