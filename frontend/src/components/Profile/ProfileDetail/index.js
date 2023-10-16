import React from 'react';
import PropTypes from 'prop-types';
import './ProfileDetail.css';  // Linking the CSS file to the component.

function ProfileDetail(props) {
    const { name, position, avatarURL } = props;

    return (
        <div className="card profile-card">
            <img src={avatarURL} alt={name} className="card-img-top profile-avatar" />
            <div className="card-body">
                <h2 className="card-title profile-name">{name}</h2>
                <p className="card-text profile-position">{position}</p>
            </div>
        </div>
    );
}

ProfileDetail.propTypes = {
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    avatarURL: PropTypes.string.isRequired
};

export default ProfileDetail;
