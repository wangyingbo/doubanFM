

//基类url地址
var baseUrl = "https://github.com"




/**
 * 封装网络请求方法
 */
function ybnetworkRequest() {
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

  const { net } = require('electron')
  	const request = net.request(baseUrl)
  	request.on('response', (response) => {
    	console.log(`STATUS: ${response.statusCode}`)
    	console.log(`HEADERS: ${JSON.stringify(response.headers)}`)
    	response.on('data', (chunk) => {
      	console.log(`BODY: ${chunk}`)
    	})
    	response.on('end', () => {
      	console.log('No more data in response.')
    	})
  	})
  	request.end()
}

module.exports.ybnetworkRequest = ybnetworkRequest
