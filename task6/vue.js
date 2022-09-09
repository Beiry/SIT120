var vm = new Vue({
    el: "#app",
    data() { 
        return {
        t: true,
        f: false,
        x: 12,
        message: "Hello World!",
        testItem: "",
        items: [{ message: 'A' }, { message: 'B' }, { message: 'C' }]
    }}
})

var bc = new Vue({ el: '#components-demo' })
Vue.component('button-counter', {
    data: function () {
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})