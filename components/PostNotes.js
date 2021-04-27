/* eslint-disable react/no-danger */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const PostNotes = ({ post }) => {
  useEffect(() => {
    document.querySelector('.showNotes').scrollTop = 0;
  });

  return (
    <div className="showNotes">
      <div className="show__header">
         <h2 className="show__title">{post.title}</h2>
         <p className="show__date">{post.displayDate}</p>
      </div>
      <hr className="show__divider"/>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
};

PostNotes.propTypes = {
  post: PropTypes.object.isRequired,
};

export default PostNotes;
