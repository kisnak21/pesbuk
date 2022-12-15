/* eslint-disable linebreak-style */
/* eslint-disable react/button-has-type */
import React from 'react';
import './rightbar.scss';

function RightBar() {
  return (
    <div className="rightBar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/1655329/pexels-photo-1655329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <span>Ara Ara</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/1655329/pexels-photo-1655329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <span>Ara Ara</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/1655329/pexels-photo-1655329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <p>
                <span>Ara Ara</span>
                {' '}
                changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/1655329/pexels-photo-1655329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <div className="online" />
              <span>Ara Ara</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/1655329/pexels-photo-1655329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <div className="online" />
              <span>Ara Ara</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/1655329/pexels-photo-1655329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <div className="online" />
              <span>Ara Ara</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/1655329/pexels-photo-1655329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <div className="online" />
              <span>Ara Ara</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/1655329/pexels-photo-1655329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <div className="online" />
              <span>Ara Ara</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightBar;
