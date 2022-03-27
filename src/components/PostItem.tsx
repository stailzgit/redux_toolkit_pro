import React, { FC } from 'react'
import { IPost } from '../models/IPost';

interface PostItemProps {
    post: IPost;
    remove: (post: IPost) => void;
    update: (post: IPost) => void;
}

const PostItem: FC<PostItemProps> = ({post, remove, update}) => {

  const onRemovePost = (event: React.MouseEvent) => {
    event.stopPropagation()
    remove(post)
  }

  const onUpdatePost = (event: React.MouseEvent) => {
    const title = prompt() || ""
    update({...post, title})
  }

  return (
    <div onClick={onUpdatePost} className='post'>
        {post.id}. {post.title}
        <button onClick={onRemovePost}>Delete</button>
    </div>
  )
}

export default PostItem