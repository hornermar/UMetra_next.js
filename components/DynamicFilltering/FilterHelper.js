import { FilterMapBuilder } from './FilterMapBuilder';

export class FilterHelper {
  constructor() {
    this.filterMapBuilder = new FilterMapBuilder();
    this.filterMapBuilder.createFilterMap();
  }

  getFilteredStations(selectedAuthor, selectedArtworkType) {
    let filterQuery = this.filterMapBuilder.stations;
    if (selectedAuthor)
      filterQuery = filterQuery.filter((o) => o.authors.has(selectedAuthor));
    if (selectedArtworkType)
      filterQuery = filterQuery.filter((o) =>
        o.artworkTypes.has(selectedArtworkType),
      );
    return filterQuery.map((o) => o.name).sort();
  }

  getFilteredAuthors(selectedStation, selectedArtworkType) {
    let filterQuery = this.filterMapBuilder.authors;
    if (selectedStation)
      filterQuery = filterQuery.filter((o) => o.stations.has(selectedStation));
    if (selectedArtworkType)
      filterQuery = filterQuery.filter((o) =>
        o.artworkTypes.has(selectedArtworkType),
      );
    return filterQuery.map((o) => o.name).sort();
  }

  getFilteredArtworkTypes(selectedStation, selectedAuthor) {
    let filterQuery = this.filterMapBuilder.artworkTypes;
    if (selectedStation)
      filterQuery = filterQuery.filter((o) => o.stations.has(selectedStation));
    if (selectedAuthor)
      filterQuery = filterQuery.filter((o) => o.authors.has(selectedAuthor));
    return filterQuery.map((o) => o.name).sort();
  }
}
