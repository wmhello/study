// 简单的配置
require.config({

    // RequireJS 通过一个相对的路径 baseUrl来加载所有代码。baseUrl通常被设置成data-main属性指定脚本的同级目录。
    baseUrl: "./js",

    // 第三方脚本模块的别名,jquery比libs/jquery-1.11.1.min.js简洁明了；
    paths: {
        "jquery": "jquery-3.3.1.min"
    }

});

// 开始使用jQuery 模块
require(["helper"], function (helper) {
      var str = helper.trim('    AD    ');
      console.log(str);
    //你的代码
    //这里直接可以使用jquery的方法，比如：$( "#result" ).html( "Hello World!" );
});
