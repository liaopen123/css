# css
[TOC]

## css规则的构成:
**选择器**+**一条或者多条声明**:
![](https://gitee.com/droidman/image_bed/raw/master/20200602132406.png)


## 创建css的三种方式
### 外部样式表
```xml
<head>
<link rel="stylesheet" type="text/css" href="mystyle.css" />
</head>
```
### 内部样式表
```xml
<head>
<style type="text/css">
  hr {color: sienna;}
  p {margin-left: 20px;}
  body {background-image: url("images/back40.gif");}
</style>
</head>
```
### 内联样式表
直接在标签里面写`style`:
```xml
<p style="color: sienna; margin-left: 20px">
This is a paragraph
</p>
```



## 选择器

### 标签选择器(不需要在前面加任何符号):
```css
div{
    font:"xxxx";
}

```

### 类选择器(`需要加.`来就行区分)
```css
.title{
    color:yellow;
}
```
结合元素选择器:

类选择器可以结合`元素选择器`一起来使用:如果只希望段落显示未红色。
>其他标签下 相同的class名的则不会生效。
>//代表只有p标签下class 为`flower`的标签才会生效。
>p.flower {background-image: url(/i/eg_bg_03.gif);

多类选择器:一个元素 有多个类名的时候,会进行匹配 顺序无关
```css
.import.warning{
    background-color: yellow;
}

<p class="import">important</p>
<p class="warning">warning</p>
<p class="import warning">两个类名都有 只有这个会起作用</p>
```

### id选择器(`需要通过#`进行区分)
#### 问:id选择器与类选择器的区别：

    * id选择器只能用一次 类选择器可以写多次
    * id选择器不能够结合使用 就是id名不能有空格 但是类名可以
    * id能包含更多含义
```css
#btn{
    color:yellow;
}
```
### 属性选择器
是指对带有指定属性的HTML元素设置样式。
####几种形式的含义：
```xml
*[title] {color:red;}  //所有包含title属性的标签
a[title]{color:red;}  //所有包含title属性的a标签
a[href][title] {color:red;}  //同时包含href和title的a标签

```


| [[*attribute*\]](https://www.w3school.com.cn/cssref/selector_attribute.asp) | 用于选取带有指定属性的元素。                                 |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [[*attribute*=*value*\]](https://www.w3school.com.cn/cssref/selector_attribute_value.asp) | 用于选取带有指定属性和值的元素。                             |
| [[*attribute*~=*value*\]](https://www.w3school.com.cn/cssref/selector_attribute_value_contain.asp) | 用于选取属性值中包含指定词汇的元素。                         |
| [[*attribute*\|=*value*\]](https://www.w3school.com.cn/cssref/selector_attribute_value_start.asp) | 用于选取带有以指定值开头的属性值的元素，该值必须是整个单词。 |
| [[*attribute*^=*value*\]](https://www.w3school.com.cn/cssref/selector_attr_begin.asp) | 匹配属性值以指定值开头的每个元素。                           |
| [[*attribute*$=*value*\]](https://www.w3school.com.cn/cssref/selector_attr_end.asp) | 匹配属性值以指定值结尾的每个元素。                           |
| [[*attribute**=*value*\]](https://www.w3school.com.cn/cssref/selector_attr_contain.asp) | 匹配属性值中包含指定值的每个元素。                           |


### 后代选择器(包含选择器)
#### 上下文选择元素
如果您希望只对 h1 元素中的 em 元素应用样式，可以这样写：
```xml
h1 em {color:red}
```
### 子元素选择器
如果您希望选择只作为 h1 元素子元素的 strong 元素
```css
h1 > strong {color:red;}
```
### 相邻兄弟选择器
如果要增加紧接在 h1 元素后出现的段落的上边距，可以这样写：
```css
h1 + p {margin-top:50px;}
```



## css背景
主要通过`background-color`为元素设置背景。
主要属性:
| 属性                                                         | 描述                                         |
| ------------------------------------------------------------ | -------------------------------------------- |
| [background](https://www.w3school.com.cn/cssref/pr_background.asp) | 简写属性，作用是将背景属性设置在一个声明中。 |
| [background-attachment](https://www.w3school.com.cn/cssref/pr_background-attachment.asp) | 背景图像是否固定或者随着页面的其余部分滚动。 |
| [background-color](https://www.w3school.com.cn/cssref/pr_background-color.asp) | 设置元素的背景颜色。                         |
| [background-image](https://www.w3school.com.cn/cssref/pr_background-image.asp) | 把图像设置为背景。                           |
| [background-position](https://www.w3school.com.cn/cssref/pr_background-position.asp) | 设置背景图像的起始位置。                     |
| [background-repeat](https://www.w3school.com.cn/cssref/pr_background-repeat.asp) | 设置背景图像是否及如何重复。                 |

### `background-color`
背景颜色具体的色值  可以用color:yellow这种代名词，也可以用#f00色值。
### `background-image`
背景图片，通过` background-image: url(../assets/bg.jpg);`去设置 可以是本地图片 也可以是网络图片。
### `background-position`
图片的位置,3种描述形式
    * 关键词 `center` `bottom` `top` `left` `right`
    * 百分比 30% 50% 
    * 具体值  15px  20px
```css
    background-position: 30% 50%;
```
### `background-repeat`
重复情况:no-repeat,repeat-x,repeat-y等情况。


## css文本
可以修改文本的`颜色`,`文字间距`，`对齐方式`,`装饰文本`,`缩进等等`。
| 属性                                                         | 描述                                                        |
| ------------------------------------------------------------ | ----------------------------------------------------------- |
| [color](https://www.w3school.com.cn/cssref/pr_text_color.asp) | 设置文本颜色                                                |
| [direction](https://www.w3school.com.cn/cssref/pr_text_direction.asp) | 设置文本方向。                                              |
| [line-height](https://www.w3school.com.cn/cssref/pr_dim_line-height.asp) | 设置行高。                                                  |
| [letter-spacing](https://www.w3school.com.cn/cssref/pr_text_letter-spacing.asp) | 设置字符间距。                                              |
| [text-align](https://www.w3school.com.cn/cssref/pr_text_text-align.asp) | 对齐元素中的文本。                                          |
| [text-decoration](https://www.w3school.com.cn/cssref/pr_text_text-decoration.asp) | 向文本添加修饰。                                            |
| [text-indent](https://www.w3school.com.cn/cssref/pr_text_text-indent.asp) | 缩进元素中文本的首行。 用于段落                             |
| text-shadow                                                  | 设置文本阴影。CSS2 包含该属性，但是 CSS2.1 没有保留该属性。 |
| [text-transform](https://www.w3school.com.cn/cssref/pr_text_text-transform.asp) | 控制元素中的字母。   全部大写 全部小写 首字母大写           |
| unicode-bidi                                                 | 设置文本方向。                                              |
| [white-space](https://www.w3school.com.cn/cssref/pr_text_white-space.asp) | 设置元素中空白的处理方式。                                  |
| [word-spacing](https://www.w3school.com.cn/cssref/pr_text_word-spacing.asp) | 设置字间距。                                                |

## css 文字
| 属性                                                         | 描述                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [font](https://www.w3school.com.cn/cssref/pr_font_font.asp)  | 简写属性。作用是把所有针对字体的属性设置在一个声明中。       |
| [font-family](https://www.w3school.com.cn/cssref/pr_font_font-family.asp) | 设置字体系列。                                               |
| [font-size](https://www.w3school.com.cn/cssref/pr_font_font-size.asp) | 设置字体的尺寸。                                             |
| [font-size-adjust](https://www.w3school.com.cn/cssref/pr_font_font-size-adjust.asp) | 当首选字体不可用时，对替换字体进行智能缩放。（CSS2.1 已删除该属性。） |
| [font-stretch](https://www.w3school.com.cn/cssref/pr_font_font-stretch.asp) | 对字体进行水平拉伸。（CSS2.1 已删除该属性。）                |
| [font-style](https://www.w3school.com.cn/cssref/pr_font_font-style.asp) | 设置字体风格。                                               |
| [font-variant](https://www.w3school.com.cn/cssref/pr_font_font-variant.asp) | 以小型大写字体或者正常字体显示文本。                         |
| [font-weight](https://www.w3school.com.cn/cssref/pr_font_weight.asp) | 设置字体的粗细。                                             |

## css链接
一共有4种状态
>link 一般状态
>
>visited 用户已经访问链接
>
>hover 鼠标放到链接上方的时候
>
>active 被点击时候的样子
```css
a:link{
    color: greenyellow;
}
a:visited{
    color: red;
}
a:hover{
    color:gold;
}
a:active{
    color: cadetblue;
}
```
## css 列表
### list-style-type 属性  主要给列表前的点的样式
有4个值`circle-空心圆`,`square-方形`，`upper-roman-罗马数字`,`lower-alpha-小写字母`
更多的值 可以参考:[CSS list-style-type 属性](https://www.w3school.com.cn/cssref/pr_list-style-type.asp)

### list-style-image 属性
把图片设置为列表项前面的标记
```css
ul li {list-style-image : url(xxx.gif)}
```

### list-style-position 属性
是把标志出现在列表项内容之外(outside)还是内容内部(inside).
```css
.ul6inner{
    list-style-type: circle;
    list-style-position: inside;
}
```
## css 表格
### 边框
```css
table, th, td
  {
  border: 1px solid blue;
  }
```
### 折叠边框:
border-collapse 属性设置是否将表格边框折叠为单一边框
### 宽高
表格宽度和高度
通过 width 和 height 属性定义表格的宽度和高度。

下面的例子将表格宽度设置为 100%，同时将 th 元素的高度设置为 50px：

### 表格文本对齐 内边距 表格颜色
通过对`th`标签进行改变
