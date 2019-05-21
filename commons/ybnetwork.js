var public = require('./public.js')


//全局基类url地址
var baseUrl = "https://www.baidu.com"

/**
 * 网络请求的参数
 */
var requestParameters = {
  baseUrl:"",
  url:"",
  success: (response)=> {},
  failure: (error)=> {},
}

/**
 * 封装网络请求方法
 */
function ybnetworkRequest(r:parameters) {
  // const app = require('electron')
  // const { net } = require('electron')
  //   app.on('ready', () => {
  //       const request = net.request(baseUrl)
  //       request.on('response', (response) => {
  //         console.log(`STATUS: ${response.statusCode}`)
  //         console.log(`HEADERS: ${JSON.stringify(response.headers)}`)
  //         response.on('data', (chunk) => {
  //           console.log(`BODY: ${chunk}`)
  //         })
  //         response.on('end', () => {
  //           console.log('No more data in response.')
  //         })
  //       })
  //       request.end()
  //   })

  //判断基类url
  var baseUrlStr = public.isEmpty(parameters.baseUrl)?baseUrl:parameters.baseUrl
  //拼接url
  var requestUrl = baseUrlStr + (public.isEmpty(parameters.url)?"":parameters.url)

  const { net } = require('electron')
    const request = net.request(requestUrl)
    //请求开始
  	request.on('response', (response) => {
    	console.log(`STATUS: ${response.statusCode}`)
      console.log(`HEADERS: ${JSON.stringify(response.headers)}`)
      //响应成功回调
    	response.on('data', (chunk) => {
      	console.log(`BODY: ${chunk}`)
      })
      //响应结束
    	response.on('end', () => {
      	console.log('No more data in response.')
      })
      //响应失败
      response.on('error', (error) => {
        console.log(`失败：${error}`)
        if (public.isEmpty(parameters.failure)) {
          parameters.failure(error)
        }
      })
    })
    //请求结束
  	request.end()
}

module.exports.ybnetworkRequest = ybnetworkRequest
