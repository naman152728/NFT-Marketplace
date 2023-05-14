import React from 'react';
import './topFold.css';
import Button from '../../common/Button';

const TopFold = () => {
  return (
    <div className="topFold absolute-centre">

    <div className="tf-left">
      <div className="tf-heading">
        Discover collect, & sell <span className="heading-gradient">Extraordinary</span> NFTs
      </div>
      <div className="tf-description">
      The leading NFTs Marketplace on Ethereum Home to the next generation of digital creators. Discover the best NFT collections.
      </div>
      <div className="tf-left-btns">
        <Button btnType = "PRIMARY" btnText = "EXPLORE" />
        <Button btnType = "SECONDARY" btnText = "CREATE" customClass='tf-left-secondary-btn' />
      </div>
    </div>

    {/* <div className="tf-left-infoStats">
    <div className="tf-is-infoItem absolute-center">
        <div className="tf-infoItem-count"> 150K+</div>
        <div className="tf-infoItem-count"> Collections </div>
      </div>
      
      <div className="tf-left-infoStats">
    <div className="tf-is-infoItem absolute-center">
        <div className="tf-infoItem-count"> 9K+</div>
        <div className="tf-infoItem-count"> Artists </div>
      </div>
    </div>

    <div className="tf-left-infoStats">
      <div className="tf-is-infoItem absolute-center">
        <div className="tf-infoItem-count"> 456K+</div>
        <div className="tf-infoItem-count"> Community </div>
      </div>
    </div>

    </div> */}

    <div className="tf-right">
    <div className="tf-r-bg-blob">
      
    </div>
      <div className="tf-right-diamond">
        <div className="tf-r-diamond-item absolute-center">
          <img className="tf-r-diamond-img" alt = "diamond-banner" src='https://i.seadn.io/gae/n-sxE6gZMKp__--1tbkTntwuK7DlP6rJvTx-IbMH73rLB5RDVZm-36jczBctuqt4fUjpDKPr-Fo0P8zUYR92hHaNY5ia5qXn8OEgIy4?auto=format&w=256'
           />
        </div>
        <div className="tf-r-diamond-item absolute-center">
          <img className="tf-r-diamond-img" alt = "diamond-banner" src='https://i.seadn.io/gae/RZeNoR8T-rpk4Na4myVd3jhEScZR_ioPbzmturFOEKtZgytkLv92LEBAfoun5tzejPWADCGQvfdccmobMMQSNSDBSfvaaQ_RPBalskA?auto=format&w=256'
           />
        </div>
        <div className="tf-r-diamond-item absolute-center">
          <img className="tf-r-diamond-img" alt = "diamond-banner" src='https://i.seadn.io/gcs/files/389b0bb1803898cb2517b1f4d4d75635.gif?auto=format&w=256'
           />
        </div>
        <div className="tf-r-diamond-item absolute-center">
          <img className="tf-r-diamond-img" alt = "diamond-banner" src='https://i.seadn.io/gae/0_vb30NuFJ-3XKPpxjheewXlfpx_5ozIYDaN3LT-mXoiAetrMCU5ik9xe9kqraHxhTnvYgAo3m0Smf2DAxbr8zlJiY57Zy0iAfwBXw?auto=format&w=256'
           />
        </div>
      </div>
    </div>   

    </div>
  );
};

export default TopFold;
