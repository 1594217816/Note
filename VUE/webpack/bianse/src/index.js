// 1.使用ES6导入语法，导入jquery

import $ from 'jquery';

// 导入样式（在webpack中，一切皆是模块，都可以使用ES6导入语法进行导入和使用）
// 如果某个模块中，使用from接受到的成员为undefined，则没必要进行接受
// 例如 导入 css 文件和 less 文件等

// 引入css文件
import './css/index.css';

// 引入less文件
import './css/index.less';

// 引入img图片
import './123.png';

// 2.定义jquery
$(function () {
    // 3.实现奇偶变色
    $('li:odd').css('background-color', 'red');
    $('li:even').css('background-color', 'pink');
})