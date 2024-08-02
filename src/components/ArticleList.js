import React from 'react'
import Article from './Article'

function ArticleList({posts}) {
  return (
    <main>
        {posts.map((post) => (
            <Article 
            key={post.id} {...posts}
            />
        ))}
    </main>
  )
}

export default ArticleList
