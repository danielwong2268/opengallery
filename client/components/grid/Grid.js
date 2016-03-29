import React from 'react';
import Tile from '../tile/Tile';
import { Route } from 'react-router';
import RaisedButton from 'material-ui/lib/raised-button';

export default class Grid extends React.Component { 
  constructor(props) {
    super(props);
  }

  componentWillMount = () => {
    let artist = this.props.loc ? this.props.loc.pathname.split('/')[2] : undefined;
    this.props.loadData(this.props.id, artist, 0);
  }

  render () {
    let {
      tile, 
      grid, 
      data, 
      toggleGallery, 
      id, 
      username, 
      loadData,
      page,
      total_photos
    } = this.props;

    return (
      <div id="grid-component">
        <div className="grid-section">
          {grid.map((mediaId, index) => (
            <Tile key={mediaId} tile={index} url={data[grid[index]].url_lg} data={data[grid[index]]} handleClick={toggleGallery}/>
          ))}
        </div>
        <div className="button-load">
          { grid.length < total_photos 
            ? <RaisedButton label="Load More Images" onMouseUp={loadData.bind(null, id, artist, page)} /> 
            : ''
          }
        </div>
      </div>
    )
  }
}