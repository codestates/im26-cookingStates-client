import React from 'react';
import medalBeer from '../../Images/medal-beer.png';
import medalVegan from '../../Images/medal-vegan.png';
import medalMaster from '../../Images/master-medal.png';

function MedalList(props) {
  return (
    <div className="medalList">
      <div className="medalList-title">획득한 요리 칭호</div>
      <div className="medalList-box">
        <div className="medalList-item">
          <img className="icon-medal" src={medalBeer} alt="medalIcon" />
          <div className="icon-medal-desc">우리집 심야식당</div>
        </div>
        <div className="medalList-item">
          <img className="icon-medal" src={medalVegan} alt="medalIcon" />
          <div className="icon-medal-desc">지구야 사랑해</div>
        </div>
        <div className="medalList-item">
          <img className="icon-medal" src={medalMaster} alt="medalIcon" />
          <div className="icon-medal-desc">마스터쉐프</div>
        </div>
      </div>
    </div>
  );
}

export default MedalList;
