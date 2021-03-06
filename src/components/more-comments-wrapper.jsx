import React from 'react';

import { preventDefault } from '../utils';
import { Throbber } from './throbber';
import ErrorBoundary from './error-boundary';

const MoreCommentsWrapper = (props) => (
  <div className="comment more-comments-wrapper">
    <ErrorBoundary>
      <span className="more-comments-throbber">{props.isLoading ? <Throbber /> : false}</span>
      <a
        className="more-comments-link"
        href={props.entryUrl}
        onClick={preventDefault(() => props.showMoreComments())}
      >
        {getText(props)}
      </a>
    </ErrorBoundary>
  </div>
);

function getText({ omittedComments, omittedCommentLikes }) {
  const ommitedLikes =
    omittedCommentLikes > 0
      ? ` with ${omittedCommentLikes} like${plural(omittedCommentLikes)}`
      : '';
  return `${omittedComments} more comment${plural(omittedComments)}${ommitedLikes}`;
}

function plural(count) {
  return count > 1 ? 's' : '';
}

export default MoreCommentsWrapper;
