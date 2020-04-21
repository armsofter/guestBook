const Models = require('../models/index')
const PostsModel = Models.post
const postsPerPage = require(__dirname + '/../config/config.json')['postsPerPage']

class Posts {

  async createPost (post, userId) {
    return PostsModel.create({postText: post.postText, userId})
  }

  async deletePost (post, user) {
    if (post.postId) {
      const postObj = await PostsModel.findOne({where: {id: post.postId}})
        if (postObj.userId === user.id) {
        return PostsModel.destroy({
          where: {
            id: post.postId
          }
        })
      } else {
        return {error: 'you dont have permissions to delete this post'}
      }
    } else {
      return {error: 'postId not specified'}
    }
  }

  async count () {
    const count = await PostsModel.count()
    return {count, pages: Math.ceil(count / postsPerPage)}
  }

  async postPagination (page) {
    return PostsModel.findAll({
      offset: ((page - 1) * postsPerPage),
      limit: postsPerPage
    })
  }

  async getUserPosts (userId) {
    return PostsModel.findAll({
      where: {
        userId: userId
      }
    })
  }

}

module.exports = Posts