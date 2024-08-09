import { createFeature, createFeatureSelector, createSelector } from "@ngrx/store";
import { PostsState } from "./posts.state";
import { state } from "@angular/animations";

const getPostsState = createFeatureSelector<PostsState>('posts');
export const getPosts = createSelector(getPostsState,(state)=>{
    return state.posts
})

// export const getPostsById = createSelector(getPostsState,state=>{
//     return state.posts[0];
// })
export const getPostsById =(postId:string)=> createSelector(
    getPostsState,
    (state:PostsState)=>{
        return state.posts.find(post=>post.id===postId)
    }
)