import Vue from 'vue'
import Vuex from 'vuex'
Vue.use( Vuex )
import dialog from './modules/dialog.js'
export default new Vuex.Store({
 	modules:{
 		dialog
 	}
})