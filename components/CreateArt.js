import Popup from 'reactjs-popup';
import React from 'react';

export const CreateArt = ({ station, color }) => {
  return (
    <>
      <h2 className="artwork_title">{station.station.toUpperCase()}</h2>
      {station.artworks &&
        station.artworks.map((artwork) => (
          <div key={artwork.id} className="container_artwork">
            <Popup
              trigger={
                <img
                  src={artwork.image}
                  alt={artwork.name}
                  width="1000"
                  height="1000"
                />
              }
              modal
              nested
            >
              {(close) => (
                <div className="modal">
                  <button className="close" onClick={close}>
                    &times;
                  </button>
                  <img
                    className="img_popup"
                    src={artwork.image}
                    alt={artwork.name}
                  />
                </div>
              )}
            </Popup>
            <div className="artwork_text">
              <p>{artwork.name.toUpperCase()}</p>
              <p>{artwork.author}</p>
              <p>{artwork.date}</p>
              <p>{artwork.type}</p>
            </div>
          </div>
        ))}
    </>
  );
};

export default CreateArt;
