Vue.component('page2', {
    template: 
    	'        <div id="child-templateB">'+
		'			<p>TestB, from parent variable (msg): {{msg}}</p>'+
		'        </div>',
		props: ['msg'],
})