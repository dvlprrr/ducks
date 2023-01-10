import React from "react";

import "./MyProfile.css";

function MyProfile() {
  return (
    <>
      <div className="my-profile">
        <div className="my-profile__container">
          <div className="my-profile__header">
            <p>Мой профиль</p>
            <hr className="my-profile__rule" />
          </div>
          <div className="my-profile__info">
            <div className="my-profile__user">
              <p className="my-profile__key">Email:</p>
              <p className="my-profile__value">123</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MyProfile;
