import React from 'react';
const ArticleItem = ({ publication, items }) => {
  return (
    <>
      <h2>{publication[items].title}</h2>
      <p>{publication[items].text}</p>
    </>
  );
};

export default ArticleItem;
