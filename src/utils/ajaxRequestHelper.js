import { ApiTree } from '@apicase/services'
import fetch from "@apicase/adapter-fetch"

export const ApiPost = new ApiTree(fetch, [
  {
    url: 'https://jsonplaceholder.typicode.com',
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors',
    children: [
      {
        url: 'posts',
        name: 'getListPost',
        method: 'GET'
      },
      {
        url: 'posts',
        name: 'updateListPost',
        method: 'POST'
      },
      {
        url: 'posts/:id',
        name: 'DeletePost',
        method: 'DELETE'
      },
      {
        url: 'comments',
        name: 'getListComment',
        method: 'GET'
      },
      {
        url: 'comments',
        name: 'updateComment',
        method: 'POST'
      },
      {
        url: 'comments/:id',
        name: 'deleteComment',
        method: 'DELETE'
      },
      {
        url: 'albums',
        name: 'getAlbumsList',
        method: 'GET'
      },
      {
        url: 'photos',
        name: 'getListPhotos',
        method: 'GET'
      },
      {
        url: 'todos',
        name: 'getListTodos',
        method: 'GET'
      },
      {
        url: 'users',
        name: 'getListusers',
        method: 'GET'
      },
      {
        url: 'users/:id',
        name: 'getUser',
        method: 'GET'
      }
    ]
  }
])