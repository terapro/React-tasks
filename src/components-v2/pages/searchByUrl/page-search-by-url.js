import React, {Component} from 'react';
import {connect} from 'react-redux';
import {PageSearch} from 'src/components-v2/pages/search/page-search';
import queryString from 'query-string';
import {startSearch} from 'src/actions';


class PageSearchByUrlUI extends Component {
  constructor(props) {
    super(props);
    const parsedData = queryString.parse(location.search);
    console.log(parsedData);
    this.props.onReceivingUrl(parsedData);

  }
  render() {
    return (
      <React.Fragment>
        <PageSearch />
      </React.Fragment>
    );

  }
}

export const PageSearchByUrl = connect (
  store=>({

  }),
  dispatch=>({
      onReceivingUrl(parsedData) {
        dispatch(startSearch(parsedData))
      }
  })

)(PageSearchByUrlUI);


/*


export const PageSearchByUrlChild = ({location}) => {

  const parsed = queryString.parse(location.search);
console.log(parsed);


*/





