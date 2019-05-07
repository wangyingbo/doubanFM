var ybnetwork = require('./commons/ybnetwork.js')

function homeRequest() {
	console.log('请求首页数据')
  ybnetwork.ybnetworkRequest();
		
}



module.exports.homeRequest = homeRequest;