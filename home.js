var ybnetwork = require('./commons/ybnetwork.js')

function homeRequest() {
  console.log('home.js请求首页数据。。。')
  
  //首页数据请求
  ybnetwork.ybnetworkRequest({
    success:function (response) {

    },
    failure:function (error) {

    }
  });

  //打印根目录文件
  //logRootFile()
}

/**
 * 打印根目录
 */
function logRootFile(param) {
  console.log(param)
  //打印根目录所有文件，可利用node.js的所有接口
  //https://electronjs.org/docs/tutorial/application-architecture
  const fs = require('fs')
  const root = fs.readdirSync('/')
  console.log(root)
}



module.exports.homeRequest = homeRequest;