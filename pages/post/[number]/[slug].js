import { useRouter, withRouter } from 'next/router';
import ErrorPage from 'next/error';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import slug from 'speakingurl';
import PostList from '../../../components/PostList';
import PostNotes from '../../../components/PostNotes';
import Meta from '../../../components/meta';
import Page from '../../../components/Page';
import { getPosts, getPost } from '../../../lib/getPosts';

export async function getStaticPaths() {
  const posts = await getPosts('all');

  return {
    fallback: false,
    paths: [
      // Homepage
      {
        params: {
          number: 'latest',
          slug: 'latest',
        },
      },
      ...posts.map(post => ({
        params: {
          number: post.displayNumber,
          slug: slug(post.title),
        },
      })),
    ],
  };
}

export async function getStaticProps({ params }) {
  const posts = await getPosts();
  const postNumber =
    params.number === 'latest' ? posts[0].displayNumber : params.number;
  const post = await getPost(postNumber);
  const props = post.date > Date.now() ? {} : { posts, postNumber };

  return {
    revalidate: 1,
    props,
  };
}

export default function IndexPage({ postNumber, posts }) {
  const router = useRouter();
  const [currentPost, setCurrentPost] = useState(postNumber);

  useEffect(
    function() {
      const { query } = router;
      if (query.number) {
        setCurrentPost(
          query.number === 'latest' ? posts[0].displayNumber : query.number
        );
      }
    },
    // watch the router for changes, and when it does, the above code will change
    [router]
  );

  // When the page changes...

  if (!posts) {
    return <ErrorPage statusCode={404} />;
  }

  const post = posts.find(postItem => postItem.displayNumber === currentPost);
  return (
    <Page>
      <Meta post={post} />
      <div className="wrapper">
        <main className="show-wrap" id="main" tabIndex="-1">
          <PostList
            posts={posts}
            currentPost={currentPost}
          />
          <PostNotes post={post} />
        </main>
      </div>
    </Page>
  );
}

IndexPage.propTypes = {
  posts: PropTypes.array,
  postNumber: PropTypes.string,
};
