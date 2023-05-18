import ReactLoading from 'react-loading';

import './Loading.css';

const Loading = () => {
  return (
    <div className="loading__overlay">
      <ReactLoading
        type="spinningBubbles"
        color="var(--primary-color)"
      />
      <p>Loading data...</p>
    </div>
  );
};
export default Loading;
