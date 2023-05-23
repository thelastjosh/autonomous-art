import ScaleLoader from "react-spinners/ScaleLoader"
import LoadingFrame from 'react-loading-iframe';

const LoadingIframe = () => {
  return <div style={{ "width": "100%", "height": "700px", "border-radius": "5px", "position": "relative" }}>
    <LoadingFrame skeleton={<ScaleLoader color="#333" className="text-center mt-20" />
    } className="airtable-embed" src="https://airtable.com/embed/shrvSk01p3E1wwH77" frameborder="0" onmousewheel="" width="100%" height="100%"></LoadingFrame>
  </div>
}

export default LoadingIframe;
