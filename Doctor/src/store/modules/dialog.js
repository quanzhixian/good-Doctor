import Vue from 'Vue'

 let histotrData = JSON.parse(localStorage.getItem('hotDatas'))
const User = {
	namespace:true,
	state:{
		isLogin:'',
		isShow:false,
		histotrData: histotrData || []
	},
	mutations:{
		set_user_info ( state,data) {
			state.isLogin = data;
		},
		increathot (state,data) {
			if(state.histotrData.indexOf(data)==-1){
				state.histotrData.push(data)
			}
			localStorage['hotDatas']=JSON.stringify(state.histotrData)
		},
		empty (state) {
			localStorage.removeItem('hotDatas')

		},
		delitem (state,data) {
			console.log(data
				)
			state.histotrData.splice(data,1)
		}
	},
	actions:{
		sub ( {commit},data) {
			commit('set_user_info',data)
			
		},
		hot ({commit},data) {
			commit('increathot',data)
		},
		empty({commit}) {
			commit('empty');
		},
		delitem({commit},data) {
			commit('delitem',data)
		}
	}
}
export default User;