//客户端
angular.module("chat").factory("socket", function ($rootScope) {
    var socket=io.connect("http://"+window.location.host);
    return{
        //注册监听
        on:function(eventName,callback){
            socket.on(eventName,function(){
                var args=arguments;
                //刷新视图
                $rootScope.$apply(function(){
                    callback.apply(socket,args);
                });
            })
        },
        //发射事件
        emit: function (eventName,data) {
            socket.emit(eventName,data)
        },
        clear:function(){
            socket.removeAllListeners();
        }
    }
});