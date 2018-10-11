import React from 'react';
import ReactLoading from 'react-loading';
// react loading is an npm package that provides animated loading functionality
const Loading = ({ type, color }) => (
    <ReactLoading type={'bubbles'} color={'white'} height={'15%'} width={'15%'} />
);
 
export default Loading;