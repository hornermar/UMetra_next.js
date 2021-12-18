export class FilterAuthor {
  constructor(name) {
    this.name = name;
    this.artworkTypes = new Set();
    this.stations = new Set();
  }
}

export class FilterArtworkType {
  constructor(name) {
    this.name = name;
    this.authors = new Set();
    this.stations = new Set();
  }
}

export class FilterStation {
  constructor(name) {
    this.name = name;
    this.authors = new Set();
    this.artworkTypes = new Set();
  }
}
