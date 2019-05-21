var public = require('./public.js')


//全局基类url地址
var baseUrl = "http://douban.fm/"

/**
 * 网络请求的参数
 */
var requestParameters = {
  baseUrl:"",
  url:"",
  log:true,
  success: (response)=> {},
  failure: (error)=> {},
}

/**
 * 封装网络请求方法
 */
function ybnetworkRequest(parameters) {

  //判断基类url
  var baseUrlStr = public.isEmpty(parameters.baseUrl)?baseUrl:parameters.baseUrl
  //拼接url
  var requestUrl = baseUrlStr + (public.isEmpty(parameters.url)?"":parameters.url)

  const { net } = require('electron')
    const request = net.request(requestUrl)
    //请求开始
  	request.on('response', (response) => {
      if (parameters.log) {
        console.log("\n")
        console.log(`STATUS: ${response.statusCode}`)
        console.log("\n")
        console.log(`HEADERS: ${JSON.stringify(response.headers)}`)
        console.log("\n")
      }
      //响应成功回调
    	response.on('data', (chunk) => {
        if (parameters.log) {
          console.log("\n")
          console.log(`BODY: ${chunk}`)
          console.log("\n")
        }
        if (parameters.success) {
          parameters.success(chunk)
        }
      })
      //响应结束
    	response.on('end', () => {
        if (parameters.log) {
          console.log('No more data in response.')
          console.log("\n")
        }
      })
      //响应失败
      response.on('error', (error) => {
        console.log(`失败：${error}`)
        if (parameters.failure) {
          parameters.failure(error)
        }
      })
    })
    //请求结束
  	request.end()
}

module.exports.ybnetworkRequest = ybnetworkRequest
