var app = new Vue({
    el:'#app',
    data: {
        x:0,
        y:0
    },
    methods:{
        updateXY:function(event){
            console.log(event);
            this.x = event.offsetX;
            this.y = event.offsetY;
        }
    }
})