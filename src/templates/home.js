import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import App from '../components/App';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

const Home = ({ pageContext }) => {
  const { title, lang, description } = pageContext.mockData.headData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title || 'Gatsby Simplefolio'}</title>
        <html lang={lang || 'en'} />
        <meta name="description" content={description || 'Gatsby Simplefolio'} />
      </Helmet>
      <App data={pageContext.mockData} />
    </>
  );
};

Home.propTypes = {
  pageContext: PropTypes.shape({
    mockData: PropTypes.object,
  }),
};

export default Home;
