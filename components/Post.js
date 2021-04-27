import React from 'react';
import PropTypes from 'prop-types';
import slug from 'speakingurl';
import Link from 'next/link';

export default class Post extends React.Component {
  render() {
    const {
      post,
      currentPost,
    } = this.props;
    return (
      <div
        className={`show ${currentPost === post.displayNumber ? 'show--active' : ''}
      `}
      >
        <Link
          shallow
          scroll={false}
          href="/post/[number]/[slug]"
          as={`/post/${post.displayNumber}/${slug(post.title)}`}
        >
          <a className="show__link">
            <div className="show__container">
              <p className="show__displayNumber">
                Post {post.displayNumber}
              </p>
              <span className="show__seperator"> | </span>
              <p className="show__modifiedDate">{post.displayDate}</p>
            </div>
            <h3 className="show__title">{post.title}</h3>
          </a>
        </Link>
      </div>
    );
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  currentPost: PropTypes.string.isRequired,
};
