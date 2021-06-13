import React, { useState } from 'react';
// import Stations from './Stations/index.js';
import allLines from '../../data/listAll.json';
// import lineB from '../../data/listB.json';
// import lineA from '../../data/listA.json';
// import lineC from '../../data/listC.json';

const SearchField = () => {
  const [searchInput, setInput] = useState('');
  const [searchCathegory, setCathegory] = useState();

  const stationsFull = allLines.filter((item) => item.artworks !== false);

  const artworksIn = [];
  stationsFull.map((station) => {
    station.artworks.map((artwork) => artworksIn.push(artwork));
  });
  console.log(artworksIn);

  const searchStation = () =>
    stationsFull.find((item) => {
      // Stations.find((item) => {
      if (item.station === searchInput) {
        return item.station;
      }
    });
  console.log(searchStation());

  const searchName = () =>
    artworksIn.find((station) => {
      if (station.name === searchInput) {
        return station.name;
      }
    });
  // console.log(searchName());

  const searchType = () =>
    artworksIn.filter((station) => {
      if (station.type === searchInput) {
        return station;
      }
    });
  console.log(searchType());

  const searchAuthor = () =>
    artworksIn.filter((station) => {
      if (station.author === searchInput) {
        return station;
      }
    });

  const choice = () => {
    if (searchCathegory === 'stanice') {
      return searchStation();
    } else if (searchCathegory === 'název') {
      return searchName();
    } else if (searchCathegory === 'typ') {
      return searchType();
    }
  };
  // console.log(listOfItems(choice()));

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="Searchfield">
        <input
          type="text"
          placeholder="Search..."
          onChange={(event) => {
            setInput(event.target.value);
          }}
        />
        {/* <label>
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setInput(e.target.value)}
          />
        </label>  */}
        <select name="kategorie" onChange={(e) => setCathegory(e.target.value)}>
          <option value="stanice">stanice</option>
          <option value="název">název</option>
          <option value="typ">typ</option>
        </select>
        {/* <button type="submit"></button> */}
      </div>
    </form>
  );
};

// export const SearchStation = ({ stationsFull }) => {
//   return (
//     <div>
//       {stationsFull.map((station) => (
//         <div>{station.station}</div>
//       ))}
//     </div>
//   );
// };

// export const getStaticProps = ({ params }) => {
//   const stationBList = getStation();
//   return {
//     props: {
//       station: stationBList.find((station) => station.station === params.art),
//     },
//   };
// };

// export const getStaticPaths = () => {
//   const stationBList = getStation();
//   return {
//     paths: stationBList.map((station) => ({
//       params: { art: station.station },
//     })),
//     fallback: false,
//   };
// };

export default SearchField;
