import React from 'react'
import { IPost } from '../models/IPost'
import { postAPI } from '../services/PostService'
import PostItem from './PostItem'

const PostContainer = () => {
    const LIMIT_POSTS = 100
    const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(LIMIT_POSTS)
    const [createPost, {}] = postAPI.useCreatePostMutation()
    const [updatePost, {}] = postAPI.useUpdatePostMutation()
    const [deletePost, {}] = postAPI.useDeletePostMutation()

    const onCreatePost = async () => {
        const title = prompt()
        await createPost({title, body: title} as IPost)
    }

    const onDeletePost = (post: IPost) => deletePost(post)

    const onUpdatePost = (post: IPost) => updatePost(post)

  return (
    <div>
        <div className='post__list'>
            <button onClick={onCreatePost}>Add new post</button>
            {isLoading && <h1>Идет загрузка...</h1>}
            {error && <h1>Произошла ошибка при загрузке</h1>}
            {posts?.map(post =>
                <PostItem
                    remove={onDeletePost}
                    update={onUpdatePost}
                    post={post}
                    key={post.id}
                />
            )}
        </div>
    </div>
  )
}

export default PostContainer