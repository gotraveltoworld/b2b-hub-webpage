Vue.component('page1', {
    template: 
		'        <div id="child-templateA">'+
		'            <input v-model="msg">'+
		'            <button v-on:click="notify">'+
		'                Dispatch Event from {{msg}}'+
		'            </button>'+
		'        </div>',
		props: ['msg'],
})