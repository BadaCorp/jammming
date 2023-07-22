import Track from '../Track/Track';
import styles from './TrackList.module.css';

const TrackList = ({ tracks }) => {
	const RenderTracks = tracks.map((track) => (
		<div className={styles.TrackList} key={track.id}>
			<Track track={track} />
		</div>
	));

	return <>{RenderTracks}</>;
};

export default TrackList;
