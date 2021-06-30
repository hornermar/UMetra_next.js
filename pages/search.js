import { useState, useEffect } from 'react';
import AllStation from '../components/AllStation';
import AllAuthors from '../components/AllAuthors';
import AllTypes from '../components/AllTypes';
import { getAllStation } from '../lib/allStation';
import styles from '../styles/Search.module.css';
import listStation from '../data/listStation.json';

const Search = (lines) => {
  const justStations = AllStation();
  const justAuthors = AllAuthors();
  const justTypes = AllTypes();

  const [selectedStation, setSelectedStation] = useState(null);
  const [selectedAuthor, setSelectedAuthor] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [finalSelection, setfinalSelection] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    setfinalSelection(
      artworksIn.filter(
        (station) =>
          (selectedAuthor === station.author || selectedAuthor === null) &&
          (selectedType === station.type || selectedType === null) &&
          (station.artwork.includes(selectedStation) ||
            selectedStation === null),
      ),
    );
  };

  const handleStation = (e) => {
    setSelectedStation(e.target.value);
  };

  const handleAuthor = (e) => {
    setSelectedAuthor(e.target.value);
  };

  const handleType = (e) => {
    setSelectedType(e.target.value);
  };

  // const lineA = lines.lines.filter(
  //   (station) => station.line === 'A' && station.artworks,
  // );
  // const lineB = lines.lines.filter(
  //   (station) => station.line === 'B' && station.artworks,
  // );
  // const lineC = lines.lines.filter(
  //   (station) => station.line === 'C' && station.artworks,
  // );

  // const resultStationA = lineA.find(
  //   (station) => station.station === selectedStation,
  // );
  // const resultStationB = lineB.find(
  //   (station) => station.station === selectedStation,
  // );
  // const resultStationC = lineC.find(
  //   (station) => station.station === selectedStation,
  // );

  // const resultStation = resultStationA || resultStationB || resultStationC;

  const stationsFull = listStation.filter((item) => item.artworks !== false);

  const artworksIn = [];
  stationsFull.map((station) => {
    station.artworks.map((artwork) => artworksIn.push(artwork));
  });

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>vyhledávání</h2>
      <div className={styles.text}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label className={styles.label}>
            Stanice:
            <select className={styles.select} onChange={handleStation}>
              <option value={null}>--vybrat--</option>
              {justStations.map((station) => (
                <option key={station} value={station}>
                  {station}
                </option>
              ))}
            </select>
          </label>
          <label className={styles.label}>
            Autor:
            <select className={styles.select} onChange={handleAuthor}>
              <option value={null}>--vybrat--</option>
              {justAuthors.map((author) => (
                <option key={author} value={author}>
                  {author}
                </option>
              ))}
            </select>
          </label>
          <label className={styles.label}>
            Typ:
            <select className={styles.select} onChange={handleType}>
              <option value={null}>--vybrat--</option>
              {justTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>
          <button type="submit" className={styles.button}>
            Filtrovat
          </button>
        </form>
      </div>
      <div>
        {finalSelection !== null
          ? finalSelection.map((artwork) => (
              <div className={styles.artwork} key={artwork.id}>
                <img className={styles.img} src={artwork.image} />
                <div className={styles.artwork_text}>
                  <div>{artwork.name.toUpperCase()}</div>
                  <div>{artwork.author}</div>
                  <div>{artwork.date}</div>
                  <div>{artwork.type}</div>
                  <div>{artwork.artwork.slice(0, -1)}</div>
                </div>
              </div>
            ))
          : ''}
      </div>
    </div>
  );
};

export const getStaticProps = () => {
  const allStation = getAllStation();
  return {
    props: {
      lines: allStation,
    },
  };
};

export default Search;
