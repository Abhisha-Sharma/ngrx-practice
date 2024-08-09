import { Action, createReducer, on, State } from '@ngrx/store';
import { initialState, PostsState } from './posts.state';
import { addPost, deletePost, updatePost } from './posts.action';

const _postsReducer = createReducer(
  initialState,
  on(addPost, (state,action) => {
    let post = {...action.post};
    post.id = (state.posts.length +1).toString();
    return{
        ...state,
        posts:[...state.posts,post]

    }
    
  }),on(updatePost,(state , action)=>{
    console.log('updating posts:',action.post);
    
    const updatePost = state.posts.map((post)=>{
        return post.id === action.post.id ? {...action.post}:post
    })
    console.log('updated posts array:',updatePost);
    
    return{
        ...state,
        posts:updatePost
    }
  }),
  on(deletePost,(state,action)=>{
    const deletePost = state.posts.filter(post =>post.id !== action.id );
    return{
      ...State,
      posts:deletePost,

    }
  })

);
export function postsReducer(
  state: PostsState | undefined,
  action: Action<string>
) {
  return _postsReducer(state, action);
}
