import listStation from '../../data/listStation.json';
import { FilterStation, FilterAuthor, FilterArtworkType } from './FilterModels';

// Creates a filtering structure
export class FilterMapBuilder {
  constructor() {
    // Create a copy
    this.parsedData = JSON.parse(JSON.stringify(listStation));

    // TODO: Change these properties scope to createFilterMap method
    this._authorsMap = new Map();
    this._stationsMap = new Map();
    this._artworkTypesMap = new Map();

    this.authors = [];
    this.stations = [];
    this.artworkTypes = [];
  }

  // Filter map creation
  createFilterMap() {
    for (let i = 0; i < this.parsedData.length; i++) {
      const currentStation = this.parsedData[i].station;

      // If no artwork is present, process station and continue
      if (!this.parsedData[i].artworks) {
        this.processStations(null, null, currentStation);
        continue;
      }

      for (let j = 0; j < this.parsedData[i].artworks.length; j++) {
        const currentAuthor = this.parsedData[i].artworks[j].author;
        const currentArtworkType = this.parsedData[i].artworks[j].type;

        this.processAuthor(currentAuthor, currentArtworkType, currentStation);
        this.processStations(currentAuthor, currentArtworkType, currentStation);
        this.processArtworkType(
          currentAuthor,
          currentArtworkType,
          currentStation,
        );
      }
    }

    // Convert maps into arrays (maps are not needed anymore)
    this.authors = Array.from(this._authorsMap.values());
    this.stations = Array.from(this._stationsMap.values());
    this.artworkTypes = Array.from(this._artworkTypesMap.values());
  }

  // Helper method
  processAuthor(currentAuthor, currentArtworkType, currentStation) {
    let authorFromMap = this._authorsMap.get(currentAuthor);
    if (authorFromMap) {
      authorFromMap.artworkTypes.add(currentArtworkType);
      authorFromMap.stations.add(currentStation);
    } else {
      let author = new FilterAuthor(currentAuthor);
      author.artworkTypes.add(currentArtworkType);
      author.stations.add(currentStation);
      this._authorsMap.set(currentAuthor, author);
    }
  }

  // Helper method
  processArtworkType(currentAuthor, currentArtworkType, currentStation) {
    let artworkTypeFromMap = this._artworkTypesMap.get(currentArtworkType);
    if (artworkTypeFromMap) {
      artworkTypeFromMap.authors.add(currentAuthor);
      artworkTypeFromMap.stations.add(currentStation);
    } else {
      let artworkType = new FilterArtworkType(currentArtworkType);
      artworkType.authors.add(currentAuthor);
      artworkType.stations.add(currentStation);
      this._artworkTypesMap.set(currentArtworkType, artworkType);
    }
  }

  // Helper method
  processStations(currentAuthor, currentArtworkType, currentStation) {
    let stationFromMap = this._stationsMap.get(currentStation);
    if (stationFromMap) {
      if (currentArtworkType && currentAuthor) {
        stationFromMap.artworkTypes.add(currentArtworkType);
        stationFromMap.authors.add(currentAuthor);
      }
    } else {
      let station = new FilterStation(currentStation);
      if (currentArtworkType && currentAuthor) {
        station.authors.add(currentAuthor);
        station.artworkTypes.add(currentArtworkType);
      }
      this._stationsMap.set(currentStation, station);
    }
  }
}
