import { getAllStation } from '../../lib/allStation';
import { CreateArt } from '../../components/CreateArt';
import { FooterArt } from '../../components/FooterArt';

export const Artwork = ({ station, lines }) => {
  return (
    <Swipe onSwipeRight={onSwipeRight}>
      <div className="container_artpage">
        <CreateArt
          station={station}
          color="circle_art_green"
          letter="a"
          lines={lines}
        />
        <FooterArt lines={lines} station={station} color="circle_art_green" />
      </div>
    </Swipe>
  );
};

export const getStaticProps = ({ params }) => {
  const allStation = getAllStation();
  const lineA = allStation.filter(
    (station) => station.line === 'A' && station.artworks !== false,
  );

  return {
    props: {
      lines: lineA,
      station: lineA.find((station) => station.station === params.art),
    },
  };
};

export const getStaticPaths = () => {
  const allStation = getAllStation();
  const lineA = allStation.filter(
    (station) => station.line === 'A' && station.artworks !== false,
  );

  return {
    paths: lineA.map((station) => ({
      params: { art: station.station },
    })),
    fallback: false,
  };
};

export default Artwork;
