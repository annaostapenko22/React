import React from 'react';
import ArticleItem from './articles-items/ArticleItem';
const Articles = ({ publication, items }) => {
  return (
    <article>
      <ArticleItem publication={publication} items={items} />
    </article>
  );
};

export default Articles;
