'use client';
import ClipLoader from 'react-spinners/ClipLoader';

const cssOverride = {
  display: 'block',
  margin: '100px auto',
};

const Spinner = () => {
  return (
    <ClipLoader
      color="#3b82f6"
      cssOverride={cssOverride}
      size={150}
      aria-label="Loading Spinner"
    ></ClipLoader>
  );
};

export default Spinner;
