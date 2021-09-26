# 一、Jquery的基本使用

版本：

1x: 兼容IE678等低版本浏览器，官网不更新

2x以上不兼容IE678

## 1.1 jQuery的入口函数

```
$(function () {
	//此处是页面DOM加载完毕的入口
});
```

```
$(document).ready(function(){
	//此处是页面DOM加载完毕的入口
});
```

1. 等着DOM结构渲染完毕即可执行内部代码，不必等到所有外部资源加载完毕，jQuery帮我们完成了封装
2. 相当于JS中的DOMContentLoaded
3. 不同于原生JS中的load事件是等页面文档、外部的js文件、css文件、图片加载完毕才执行内部代码

## 1.2 jQuery 的顶级对象

1. $是jQuery 的别称，在代码可以使用jQuery 代替$
2. $是jQuery 的顶级对象，相当于原生JS中的window。把元素利用$封装jQuery 对象，就可以调用jQuery 的方法

## 1.3 jQuery 对象和DOM对象的区别

1. 用原生js获取来的对象就是DOM对象
2. jQuery 方法获取的元素就是jQuery 对象
3. jQuery 对象本质是：利用$对DOM对象包装后产生的对象(伪数组形式存储)

## 1.4 jQuery 对象和DOM对象相互转换

因为原生JS比jQuery 更大，原生的一些属性和方法jQuery 没有给我们封装，要使用这些属性和方法需要把jQuery 对象转换为DOM对象才能使用

1. DOM对象转换为jQuery 对象   

```
$(DOM对象);
$('div');
```

2. jQuery 对象转换为DOM对象

```
$('div')[index]   index 是索引号
```

```
$('div').get(index)   index 是索引号
```

# 二、jQuery选择器

## 1. 隐式迭代（重要）

遍历内部DOM元素（伪数组形式存储）的过程叫做隐式迭代

简单理解：给匹配到的所有元素进行循环遍历，执行相应的方法，而不用我们在进行循环，简化我们的操作，方便我们调用

```
<div></div>
<div></div>
<div></div>
<div></div>
<script>
	//这里给四个div都设置了背景颜色
	//隐式迭代就是把匹配的所有元素内部进行遍历循环，给每一个元素添加css这个方法
	$('div').css("background","pink");
</script>
```

## 2. 筛选器

筛选器就是在已经选出来的集合里面添加一定的条件筛选出来元素

## 3. 排他思想

```
$(function() {
	//1. 隐式迭代   给所有的按钮都绑定了点击事件
	$('button').click(function() {
		//2. 当前的元素变化背景颜色
		$(this).css("background", "pink");
		//3. 其余的兄弟去掉背景颜色  隐式迭代
		$(this).siblings("button").css("background", "");
	})
}) 
```

## 4. 链式编程

链式编程是为了节省代码量，看起来更加优雅

```
$(this).css('color','red').sibling().css('color','');
```

等价于

```
$(this).css('color','red');
$(this).sibling().css('color','');
```

所以上面的排他思想代码可以写成这样

```
$(function() {
	//1. 隐式迭代   给所有的按钮都绑定了点击事件
	$('button').click(function() {
		$(this).css('color','red').sibling().css('color','');
	})
}) 
```

# 三、jQuery 样式操作

## 1. 操作css方法

jQuery 可以使用css方法来修改简单元素样式；也可以操作类，修改多个样式

1. 参数只写属性名，返回的是带单位的属性值

```
$(this).css('color');
```

2. 参数是属性名，属性值，逗号分隔，是设置一组样式，属性必须加引号，值如果是数字可以不用单位和引号

```
$(this).css('color','red');
```

3. 参数可以是对象形式，方便设置多种样式。属性名和属性值用冒号隔开，属性可以不用加引号

```
$(this).css({
	color: 'red',
	height: 400,
	width: 400,
	backgroundColor: 'red'   //如果是复合属性则必须采取驼峰命名法，如果值不是数字，则需要加引号
})
```

## 2. 设置类样式方法

作用等同于以前的classList，可以操作类样式，注意操作类里面的参数不要加点

1. 添加类

```
$('div').addClass('nav');
```

2. 移除类

```
$('div').removeClass('nav');
```

3. 切换类 （就是点击一下移除类   在点击一下添加类）

```
$('div').toggleClass('nav');
```

## 3. 原生JS类操作与className区别

原生JD中className会覆盖原先元素里面的类名

jQuery里面类操作只是对指定类进行操作，不影响原先的类名    addClass相当于在原先的类名后面追加一个

# 四、jQuery 效果

## 1. 显示隐藏效果

### 显示

1. 语法

```
show([speed, [easing],[fn]])
```

2. 显示参数

- 参数都可以省略，无动画直接显示
- speed：三种预定速度之一的字符串（"show", "normal", "fast"）或表示动画时长的毫秒数值（如：100）
- easing：（Optional）用来指定切换效果，默认是"swing"，可用参数"liner"
- fn：回调函数，在动画完成时执行的函数，每个元素执行依次

### 隐藏

```
hide([speed,[easing],[fn]])
```

概述

隐藏显示的元素

这个就是 'hide( speed, [callback] )' 的无动画版。如果选择的元素是隐藏的，这个方法将不会改变任何东西。

参数

- 参数都可以省略，无动画直接隐藏

- **speed**:三种预定速度之一的字符串("slow","normal", or "fast")或表示动画时长的毫秒数值(如：1000)

- **easing**:(Optional) 用来指定切换效果，默认是"swing"，可用参数"linear"

- **fn:**在动画完成时执行的函数，每个元素执行一次。

###  切换效果 

```
toggle([speed],[easing],[fn])
```

概述

用于绑定两个或多个事件处理器函数，以响应被选元素的轮流的 click 事件。

如果元素是可见的，切换为隐藏的；如果元素是隐藏的，切换为可见的。

参数

- 参数都可以省略，无动画直接隐藏、显示

- speed: 隐藏/显示 效果的速度。默认是 "0"毫秒。可能的值：slow，normal，fast。"
- easing:(Optional) 用来指定切换效果，默认是"swing"，可用参数"linear"
- fn:在动画完成时执行的函数，每个元素执行一次。

## 2. 滑动效果

### 向下滑动

```
slideDown([speed],[easing],[fn])
```

概述

通过高度变化（向下增大）来动态地显示所有匹配的元素，在显示完成后可选地触发一个回调函数。

这个动画效果只调整元素的高度，可以使匹配的元素以“滑动”的方式显示出来。在jQuery 1.3中，上下的padding和margin也会有动画，效果更流畅。

参数

**speed**:三种预定速度之一的字符串("slow","normal", or "fast")或表示动画时长的毫秒数值(如：1000)

**easing**:(Optional) 用来指定切换效果，默认是"swing"，可用参数"linear"

**fn**在动画完成时执行的函数，每个元素执行一次。

### 向上滑动

```
slideUp([speed,[easing],[fn]])
```

概述

通过高度变化（向上减小）来动态地隐藏所有匹配的元素，在隐藏完成后可选地触发一个回调函数。

这个动画效果只调整元素的高度，可以使匹配的元素以“滑动”的方式隐藏起来。在jQuery 1.3中，上下的padding和margin也会有动画，效果更流畅。

参数

**speed**:三种预定速度之一的字符串("slow","normal", or "fast")或表示动画时长的毫秒数值(如：1000)

**easing**:(Optional) 用来指定切换效果，默认是"swing"，可用参数"linear"

**fn**:在动画完成时执行的函数，每个元素执行一次。

### 切换效果

```
slideToggle([speed],[easing],[fn])
```

概述

通过高度变化来切换所有匹配元素的可见性，并在切换完成后可选地触发一个回调函数。

这个动画效果只调整元素的高度，可以使匹配的元素以“滑动”的方式隐藏或显示。在jQuery 1.3中，上下的padding和margin也会有动画，效果更流畅。

参数

**speed**:三种预定速度之一的字符串("slow","normal", or "fast")或表示动画时长的毫秒数值(如：1000)

**easing**:(Optional) 用来指定切换效果，默认是"swing"，可用参数"linear"

**fn**:在动画完成时执行的函数，每个元素执行一次。

## 3. 动画队列及其停止排队方法

```
stop([clearQueue],[jumpToEnd])
```

概述

用于停止动画或效果

stop()必须写到动画或者效果的前面，**相当于停止上一次的动画**

如果队列中有等待执行的动画(并且clearQueue没有设为true)，他们将被马上执行

参数

**clearQueue**:如果设置成true，则清空队列。可以立即结束动画。

**jumpToEnd**:如果设置成true，则完成队列。可以立即完成动画。

## 4. 淡入淡出效果

### 淡入   透明度加深

```
fadeIn([speed],[easing],[fn])
```

概述

通过不透明度的变化来实现所有匹配元素的淡入效果，并在动画完成后可选地触发一个回调函数。

这个动画只调整元素的不透明度，也就是说所有匹配的元素的高度和宽度不会发生变化。

参数

**speed**:三种预定速度之一的字符串("slow","normal", or "fast")或表示动画时长的毫秒数值(如：1000)

**easing**:(Optional) 用来指定切换效果，默认是"swing"，可用参数"linear"

**fn**:在动画完成时执行的函数，每个元素执行一次。

### 淡出  透明度变浅

```
fadeOut([speed],[easing],[fn])
```

概述

通过不透明度的变化来实现所有匹配元素的淡出效果，并在动画完成后可选地触发一个回调函数。

这个动画只调整元素的不透明度，也就是说所有匹配的元素的高度和宽度不会发生变化。

参数

**speed**:三种预定速度之一的字符串("slow","normal", or "fast")或表示动画时长的毫秒数值(如：1000)

**easing**:(Optional) 用来指定切换效果，默认是"swing"，可用参数"linear"

**fn**:在动画完成时执行的函数，每个元素执行一次。

### 修改透明度

```
fadeTo([[speed],opacity,[easing],[fn]])
```



概述

把所有匹配元素的不透明度以渐进方式调整到指定的不透明度，并在动画完成后可选地触发一个回调函数。

这个动画只调整元素的不透明度，也就是说所有匹配的元素的高度和宽度不会发生变化。

参数

**speed**:三种预定速度之一的字符串("slow","normal", or "fast")或表示动画时长的毫秒数值(如：1000)

**opacity**:一个0至1之间表示透明度的数字。

**easing**:(Optional) 用来指定切换效果，默认是"swing"，可用参数"linear"

**fn**:在动画完成时执行的函数，每个元素执行一次。

### 切换效果

```
fadeToggle([speed,[easing],[fn]])
```

概述

通过不透明度的变化来开关所有匹配元素的淡入和淡出效果，并在动画完成后可选地触发一个回调函数。

这个动画只调整元素的不透明度，也就是说所有匹配的元素的高度和宽度不会发生变化。

参数

**speed**:三种预定速度之一的字符串("slow","normal", or "fast")或表示动画时长的毫秒数值(如：1000)

**easing**:(Optional) 用来指定切换效果，默认是"swing"，可用参数"linear"

**fn**:在动画完成时执行的函数，每个元素执行一次。

## 5. 动画效果

```
animate(params,[speed],[easing],[fn])
```

概述

用于创建自定义动画的函数。

参数

**params**:想要更改的样式属性，以**对象**形式传递，必须写。属性名可以不用带引号，如果是复合属性则需要采用驼峰命名法，其余参数都可以省略

**speed**:三种预定速度之一的字符串("slow","normal", or "fast")或表示动画时长的毫秒数值(如：1000)

**easing**:要使用的擦除效果的名称(需要插件支持).默认jQuery提供"linear" 和 "swing".

**fn**:在动画完成时执行的函数，每个元素执行一次。

# 五、jQuery 属性操作

## 1. 设置或获取元素固有属性值 prop()

所谓元素固有属性就是元素自身自带的属性，比如<a>元素里面的href

1. 获取属性语法

```
prop("属性")
```

2. 设置属性语法

```
prop("属性","属性值")
```

## 2. 设置或获取元素自定义属性值 attr()

用户自己给元素添加的属性，我们称为自定义属性。比如div添加index='1'

1. 获取属性语法

```
attr("属性")   //类似原生getAttribute
```

2. 设置属性语法

```
attr("属性","属性值")   //类似原生 setAttribute
```

## 3. 数据缓存 data()

data()方法可以在指定的元素上存取数据，并不会修改DOM元素结构。一旦页面刷新，之前存放的数据就会被移除

1. 附加数据语法

```
data("name","value")  //向被选元素附加数据
```

2. 获取数据语法

```
data("name")    //向被选元素获取数据
```

同时，还可以获取HTML5自定义属性data-index，得到的是数字型

例子：

```
$("span").data("unmae","andy");
console.log($("span").data("uame")); 
//这个方法获取data-index h5自定义属性 第一个不用写data-   而且返回的是数字型
console.log($("div").data("index")); 
```

# 六、jQuery 内容文本值

主要针对元素的内容还有表单的值操作

## 1.普通元素内容html() (相当于原生innerHTML)

```
html()  // 获取元素的内容
```

```
html("内容")  //修改元素的内容
```

## 2. 普通元素文本内容text() (相当于原生innerText)

```
text()  // 获取元素的内容
```

```
text("内容")  //修改元素的内容
```

## 3. 表单的值val() (相当于原生value)

```
val()  // 获取元素的内容
```

```
val("内容")  //修改元素的内容
```

# 七、jQuery 元素操作

主要是遍历、创建、添加、删除元素操作

## 1. 遍历元素

jQuery 隐式迭代是对同一类元素做了同样的操作。如果想要给同一类元素做不同操作，就需要用到遍历

语法1

```
$("div").each(function(index, domEle) {

})
```

1. each()方法遍历匹配的每一个元素。主要是DOM处理
2. 里面的回调函数有2个参数：index是每个元素的索引号；demEle是每个**DOM元素对象，不是jQuery对象**

3. 所以想要使用jQuery方法，需要给这个dom元素转换为jQuery对象$(domEle)

语法2

```
$.each(object,function(index, element){})
```

1. $.each()方法可用于遍历任何对象。主要用于处理数据，比如数组，对象
2. 里面的函数有两个参数：index是每个元素的索引号；element 遍历内容

## 2. 创建元素

语法：

```
$("<li></li>")
```

动态的创建一个li

### 内部添加

```
element.append("内容")
```

把内容放入匹配元素内部最后面，类似于原生appendChild

```
element.prepend("内容")
```

把内容放入匹配元素内部最前面，

### 外部添加

``` 
element.after("内容")   //把内容放入目标元素后面
```

```
element.before("内容")   //把内容放入目标元素前面
```

注意：

1. 内部添加元素，生成后，它们是父子关系
2. 外部添加元素，生成之后，它们是兄弟关系

## 3. 删除元素

```
element.remove() //删除匹配的元素（本身）
element.empty()  //删除匹配元素集合中所有的子节点
element.html("")  //清空匹配的元素内容
```

# 八、jQuery尺寸、位置操作

## 1. jQuery 尺寸

| 语法                               | 用法                                                 |
| ---------------------------------- | ---------------------------------------------------- |
| width()/height()                   | 取得匹配元素宽度和高度值 只算width/height            |
| innerWidth()/innerHeight()         | 取得匹配元素宽度和高度值 包含 padding                |
| outerWidth()/outerHeight()         | 取得匹配元素宽度和高度值 包含 padding、border        |
| outerWidth(true)/outerHeight(true) | 取得匹配元素宽度和高度值 包含 padding、borde、margin |

- 以上参数为空，则是获得相应值，返回的是数字型
- 如果参数是数字，则是修改相应值
- 参数可以不必写单位

## 2. jQuery 位置

### offset()设置或获取元素偏移

- offset()方法设置或返回被选元素相对于文档的偏移坐标，跟父级没有关系
- 该方法有2个属性left、top。offset().top 用于获取距离文档顶部的距离  offset().left 用于获取距离文档左侧的距离
- 可以设置元素的偏移：

```
offset({
	top: 10,
	left: 30
})
```

### position()获取元素偏移

position()方法用于返回被选元素相对于带有定位的父级偏移坐标，如果父级都没有定位，则以文档为准

**只能获取不能设置**

### scrollTop()/scrollLeft() 设置或获取元素被卷去的头部和左侧

# 九、事件

## 1. 事件注册

### 单个事件注册

```
//原生js方法
element.事件(function() {})
//jQuery方法
$("div").click(function() {})
```

### 绑定多个事件 on()

on() 事件处理  在匹配元素上绑定一个或多个事件的事件处理函数

语法：

```
element.on(events,[selector],fn)
```

1. events：一个或多个用空格分隔的事件类型，如"click"或"keydown"
2. selector：元素的子元素选择器
3. fn：回调函数  即绑定在元素身上的侦听函数

```
on()方法优势1：
可以绑定多个事件，多个处理事件处理程序
$("div").on({
	mouseenter: function() {},
	click: function() {},
	mouseleave: function() {}
});
如果事件处理程序相同
$("div").on("mouseover mouseout", function() {
	$(this).toggleClass("current");
});
on()方法优势2：
可以事件委派操作。事件委派的定义就是，把原来加给子元素身上的事件绑定在父元素身上，就是把事件委派给父元素
简单理解：就是给父元素绑定一个事件，触发的是子元素，通过冒泡完成这个事件
$("ul").on("click", "li", function() {xxxx});
```

**注意：现在事件委派统统使用on()方法**

on()方法优势3：

可以给动态创建的元素，click()没有办法绑定事件，on()可以给动态生成的元素绑定事件

```
var li = $("<li>hello</li>");
$("ol").append(li);
$("ol").on("click","li",function() {
	alert(1);
});
```

## 2. 事件解绑off()

off()方法可以移除通过on()方法添加的事件处理程序

``` 
$("p").off()   //解绑p元素身上所有事件处理程序
$("p").off("click")   //解绑p元素身上的点击事件
$("ul").off("click", "li")    // 解绑事件委托
```

如果想让事件就执行一次，可以使用one()

```
//one() 只触发事件一次
$("p").one("click", function() {
	alert(111);
});
```

## 3. 自动触发事件trigger()

有些事件希望自动触发，比如轮播图自动播放

```
element.click()   //第一种简写形式
element.trigger("type")   //第二种自动触发模式
element.triggerHandler("click")  //第三种自动触发模式   跟上面的区别：不会触发元素的默认行为 比如
表单获取焦点后  不会有光标的闪烁   而上面两种会触发元素默认行为

```

## 4. 事件对象

事件被触发，就会有事件对象的产生

```
element.on(event,[selector],function(event) {})
```

阻止默认行为：event.preventDefault()   或者  return false

阻止冒泡：event.stopPropagation()

# 十、jQuery 其他方法

## jQuery 对象拷贝

如果想要把某个对象拷贝（合并）给另外一个对象使用，此时可以使用$.extend()方法

语法：

```
$.extend([deep], target, object1, [objectN])
```

1. deep：如果设为true为深拷贝，默认false 浅拷贝
2. target：要拷贝的目标对象
3. object1：待拷贝到第一个对象的对象
4. objectN：待拷贝到第N个对象的对象
5. 会覆盖原来的数据
6. 浅拷贝是把被拷贝的对象复杂数据类型中的地址拷贝给目标对象，修改目标对象会影响被拷贝对象

## jQuery 对库共存

jQuery使用$作为标识符，其他的js库也会用$作为标识符，这样一起使用会引起冲突

所以jQuery提供了一个方案，多库共存

1. 把jQuery里面的$符号统一改为jQuery
2. jQuery 变量规定为新的名称：$.noConfict()   var xx = $.noConfict();

## jQuery 插件

jQuery 功能比较有限，想要更复杂的特效效果，可以借助于jQuery插件完成

jQuery 插件常用的网站 ：

1. jQuery插件库：http://www.jq22.com/
2. jQuery之家：http://www.htmleaf.com/

jQuery 插件使用步骤：

1. 引入相关文件。（jQuery文件和 插件文件）
2. 复制相关html、css、js（调用插件）

### jQuery 插件演示

#### 1.瀑布流

#### 2.图片懒加载（图片使用延迟加载在可提高网页下载速度。他也能帮助减轻服务器负载）

当我们页面滑动到可视区域，再显示图片

我们使用jQuery插件库 EasyLazyload。注意，此时的js引入文件和js调用必须到DOM元素（图片）最后面

#### 3.全屏滚动(fullpage.js)

gitHub:https://github.com/alvarotrigo/fullPage.js

中文翻译网站：http://www.dowebok.com/demo/2014/77/

# 十一、自己封装jQuery插件

给jQuery增加方法的两种方式

```
$.method = fu   静态方法
$.fn.method = fn   实例方法 
```













