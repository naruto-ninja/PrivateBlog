const getList = (author, keyword) => {
  // 先返回假数据
  return [
    {
      id: 1,
      title: '标题A',
      content: '内容A',
      createTime: '1562669760883',
      author: 'zhangsan'
    },
    {
      id: 2,
      title: '标题B',
      content: '内容B',
      createTime: '1562669776494',
      author: 'lisi'
    }
  ]
}

const getDetial = (id) => {
  return [
    {
      id: 1,
      title: '标题A',
      content: '内容A',
      createTime: '1562669760883',
      author: 'zhangsan'
    }
  ]
}

const newBlog = (blogData = {}) => {
  // blogData 是一个博客对象，包含title content属性
  return {
    id: 3,
  }
}

const updateBlog = (id, blogData = {}) => {
  console.log(id, blogData)
  // id就是要更新博客的id
  return true;
}

const delBlog = (id) => {
  return true
}

module.exports = {
  getList,
  getDetial,
  newBlog,
  updateBlog,
  delBlog
}