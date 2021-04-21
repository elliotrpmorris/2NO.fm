/* eslint-disable react/no-danger */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const ShowNotes = ({ show, setCurrentPlaying }) => {
  useEffect(() => {
    document.querySelector('.showNotes').scrollTop = 0;
  });

  return (
    <div className="showNotes">
      <div className="show__header">
         <h2 className="show__title">{show.title}</h2>
         <p className="show__date">{show.displayDate}</p>
      </div>
      <hr className="show__divider"/>
      <div dangerouslySetInnerHTML={{ __html: show.html }} />
    </div>
  );
};

ShowNotes.propTypes = {
  show: PropTypes.object.isRequired,
  setCurrentPlaying: PropTypes.func.isRequired,
};

export default ShowNotes;
