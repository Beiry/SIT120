var vm1 = new Vue({
    el: "#app",
    data() {
        return {
            t: true,
            f: false,
            x: 12,
            message: "Hello World!",
            testItem: "",
            items: [{ message: 'A' }, { message: 'B' }, { message: 'C' }]
        }
    }
});