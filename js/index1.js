var app = new Vue({
    el: '#app',
    data: {
        list: [
            {
                id: 1,
                name: 'iphone7',
                price: 6188,
                count: 1
            },
            {
                id: 2,
                name: 'ipad Pro',
                price: 5888,
                count: 1
            },
            {
                id: 3,
                name: 'MacBook Pro',
                price: 21488,
                count: 1
            }
        ],
        ifall: false,
        checked: []
    },
    computed: {
        totalPrice: function () {
            var total = 0;
            for (var i = 0; i < this.list.length; i++) {
                var item = this.list[i];
                if (this.checked.indexOf(item.id) !== -1) {
                    total += item.price * item.count;
                }
            };
            return total.toString().replace(/\B(?=(\d{3})+$)/g,',');
            // replace(/\B(?=(\d{3})+$)/g,',')
            //replace的正则含义
        }
    },
    methods: {
        handleReduce: function (index) {
            if(this.list[index].count === 1) return;
            this.list[index].count--;
        },
        handleAdd: function (index) {
            this.list[index].count++;
        },
        handleRemove: function (index) {
            this.list.splice(index,1);
        },
        checkall: function () {
            if(!this.ifall) {
                this.ifall = true
                this.list.forEach(function(item){
                    app.checked.push(item.id)
                })
            }
            else {
                this.ifall = false
                this.list.forEach(function (item) {
                    app.checked.shift()
                })
            }
        }
    }
});