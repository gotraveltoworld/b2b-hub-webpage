Vue.component('index', {
    template: '<div id="events-example" data-tpl="index">' +
        '    <p>Messages: {{ messages | json }}</p>' +
        '    <button v-on:click="switchPage">page1</button>' +
        '    <button v-on:click="switchPage">page2</button>' +
        '    <br>' +
        '<component :is="child" :msg.sync=msg>' +
        '<page1></page1>' +
        '<page2></page2>' +
        '</compnent>' +
        '</div>',
    data: function() {
        return { child: 'page1' }
    },
    props: ['msg'],
    methods: {
        'switchPage': function() {
            console.log(event.target.innerText)
            this.child = event.target.innerText;
        }
    }
})
