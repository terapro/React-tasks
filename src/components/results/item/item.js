import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {ItemPoster} from 'src/components/results/item-poster/item-poster.js';
import {ItemInfo} from 'src/components/results/item-info/item-info.js'

export class Item extends Component {
  constructor(props) {
    super(props);
    this.posterCallback = () => {
      this.props.onPosterClick(this.props.info);
    }
  }
  render() {
    const {info} = this.props;
    return (
      <div className='item'>
        <ItemPoster posterLink={info['poster_path']} posterClick={this.posterCallback} />
        <ItemInfo filmTitle={info['title']} releaseDate={info['release_date']} genre={info['genres']} />
      </div>
    );
  }
}

Item.propTypes = {
  info: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    tagline: PropTypes.string,
    vote_average: PropTypes.number,
    vote_count: PropTypes.number,
    release_date: PropTypes.string,
    poster_path: PropTypes.string,
    overview: PropTypes.string,
    budget: PropTypes.number,
    revenue: PropTypes.number,
    genres: PropTypes.arrayOf(PropTypes.string),
    runtime: PropTypes.number
  }).isRequired,
    posterClick: PropTypes.func
};

Item.defaultProps = {
    onPosterClick: f=>f
};