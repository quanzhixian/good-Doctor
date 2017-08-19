import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import indexDatas from './datas/index/index.js';
import shoppmallDatas from './datas/shoppmall/shoppmall.js'
import classifyDatas from './datas/classify/classify.js'
import hotSearchDatas from './datas/hotsearch/hotsearch.js'

import { searchdetailDatas } from './datas/searchdetail.js'

console.log(searchdetailDatas)


let mock = new MockAdapter(axios)

//模拟 过2秒之后请求的数据才出来
//mock.onGet('/businessIndex').reply(200,homeData)
mock.onGet('/api/index').reply(() => {
	return new Promise(function(resolve,reject){
		setTimeout(() => {
			resolve([200,indexDatas])
		}, 200)
	})
})

mock.onGet('/api/shoppmall').reply(() => {
	return new Promise(function(resolve,reject){
		setTimeout(() => {
			resolve([200,shoppmallDatas])
		}, 200)
	})
})

mock.onGet('/api/classify').reply(() => {
	return new Promise(function(resolve,reject){
		setTimeout(() => {
			resolve([200,classifyDatas])
		}, 200)
	})
})
mock.onGet('/api/hotSearch').reply(() => {
	return new Promise(function(resolve,reject){
		setTimeout(() => {
			resolve([200,hotSearchDatas])
		}, 200)
	})
})
// mock.onGet('/api/hotSearch').reply(() => {
// 	return new Promise(function(resolve,reject){
// 		setTimeout(() => {
// 			resolve([200,hotSearchDatas])
// 		}, 200)
// 	})
// })



// 河南黄河科技学院。
// 郑州财经学院。
// 河南财经政法大学。
// 黄河科技学院。
// 郑州科技学院。