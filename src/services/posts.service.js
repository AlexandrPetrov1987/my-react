import {axiosService} from "./axios.service";

import {urls} from "../configs";

const postsService = {
    getPostCurrent: (id) => axiosService.get(`${urls.posts}/${id}`),
   getAllPosts: () => axiosService.get(urls.posts)
 }

export {
    postsService
}