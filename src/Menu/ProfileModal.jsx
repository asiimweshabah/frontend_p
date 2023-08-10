import React from "react";
import { Modal } from "react-bootstrap";
import "./Sidenav.css";
import { MdAccountCircle } from "react-icons/md";

const ProfileModal = ({ show, onHide, userEmail, handleLogout }) => {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header className="Modal_Title text-center">
        <Modal.Title className="text-center">
          <h3 className="text-center justify-content-center text-white">
            User's Profile
          </h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="justify-content-center text-center">
          <MdAccountCircle
            style={{
              fontSize: "90px",
              color: "#c590e6",
              borderRadius: "#ffff",
            }}
            className="profile_Logout"
          />

          <div className="profile-content">
            <p>{userEmail}</p>
            <div>
              <button
                className="btn btn-danger w-100 mb-4"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ProfileModal;
