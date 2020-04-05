(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{301:function(t,s,a){"use strict";a.r(s);var n=a(11),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"深入理解-java-基本数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#深入理解-java-基本数据类型"}},[t._v("#")]),t._v(" 深入理解 Java 基本数据类型")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("📦 本文以及示例源码已归档在 "),a("a",{attrs:{href:"https://github.com/dunwu/javacore/",target:"_blank",rel:"noopener noreferrer"}},[t._v("javacore"),a("OutboundLink")],1)])])]),t._v(" "),a("h2",{attrs:{id:"数据类型分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据类型分类"}},[t._v("#")]),t._v(" 数据类型分类")]),t._v(" "),a("p",[t._v("Java 中的数据类型有两类：")]),t._v(" "),a("ul",[a("li",[t._v("值类型（又叫内置数据类型，基本数据类型）")]),t._v(" "),a("li",[t._v("引用类型（除值类型以外，都是引用类型，包括 "),a("code",[t._v("String")]),t._v("、数组）")])]),t._v(" "),a("h3",{attrs:{id:"值类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#值类型"}},[t._v("#")]),t._v(" 值类型")]),t._v(" "),a("p",[t._v("Java 语言提供了 "),a("strong",[t._v("8")]),t._v(" 种基本类型，大致分为 "),a("strong",[t._v("4")]),t._v(" 类")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("整数型")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("byte")]),t._v(" - 8 位。")]),t._v(" "),a("li",[a("code",[t._v("short")]),t._v(" - 16 位。")]),t._v(" "),a("li",[a("code",[t._v("int")]),t._v(" - 32 位。")]),t._v(" "),a("li",[a("code",[t._v("long")]),t._v(" - 64 位，赋值时一般在数字后加上 "),a("code",[t._v("l")]),t._v(" 或 "),a("code",[t._v("L")]),t._v("。")])])]),t._v(" "),a("li",[a("strong",[t._v("浮点型")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("float")]),t._v(" - 32 位，直接赋值时必须在数字后加上 "),a("code",[t._v("f")]),t._v(" 或 "),a("code",[t._v("F")]),t._v("。")]),t._v(" "),a("li",[a("code",[t._v("double")]),t._v(" - 64 位，赋值时一般在数字后加 "),a("code",[t._v("d")]),t._v(" 或 "),a("code",[t._v("D")]),t._v(" 。")])])]),t._v(" "),a("li",[a("strong",[t._v("字符型")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("char")]),t._v(" - 16 位，存储 Unicode 码，用单引号赋值。")])])]),t._v(" "),a("li",[a("strong",[t._v("布尔型")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("boolean")]),t._v(" - 只有 true 和 false 两个取值。")])])])]),t._v(" "),a("h3",{attrs:{id:"值类型和引用类型的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#值类型和引用类型的区别"}},[t._v("#")]),t._v(" 值类型和引用类型的区别")]),t._v(" "),a("ul",[a("li",[t._v("从概念方面来说\n"),a("ul",[a("li",[t._v("基本类型：变量名指向具体的数值。")]),t._v(" "),a("li",[t._v("引用类型：变量名指向存数据对象的内存地址。")])])]),t._v(" "),a("li",[t._v("从内存方面来说\n"),a("ul",[a("li",[t._v("基本类型：变量在声明之后，Java 就会立刻分配给他内存空间。")]),t._v(" "),a("li",[t._v("引用类型：它以特殊的方式（类似 C 指针）向对象实体（具体的值），这类变量声明时不会分配内存，只是存储了一个内存地址。")])])]),t._v(" "),a("li",[t._v("从使用方面来说\n"),a("ul",[a("li",[t._v("基本类型：使用时需要赋具体值,判断时使用 "),a("code",[t._v("==")]),t._v(" 号。")]),t._v(" "),a("li",[t._v("引用类型：使用时可以赋 null，判断时使用 "),a("code",[t._v("equals")]),t._v(" 方法。")])])])]),t._v(" "),a("blockquote",[a("p",[t._v("👉 扩展阅读："),a("a",{attrs:{href:"https://juejin.im/post/59cd71835188255d3448faf6",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java基本数据类型和引用类型"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("这篇文章对于基本数据类型和引用类型的内存存储讲述比较生动。")])]),t._v(" "),a("h2",{attrs:{id:"数据转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据转换"}},[t._v("#")]),t._v(" 数据转换")]),t._v(" "),a("p",[t._v("Java 中，数据类型转换有两种方式：")]),t._v(" "),a("ul",[a("li",[t._v("自动转换")]),t._v(" "),a("li",[t._v("强制转换")])]),t._v(" "),a("h3",{attrs:{id:"自动转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动转换"}},[t._v("#")]),t._v(" 自动转换")]),t._v(" "),a("p",[t._v("一般情况下，定义了某数据类型的变量，就不能再随意转换。但是 JAVA 允许用户对基本类型做"),a("strong",[t._v("有限度")]),t._v("的类型转换。")]),t._v(" "),a("p",[t._v("如果符合以下条件，则 JAVA 将会自动做类型转换：")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("由小数据转换为大数据")])]),t._v(" "),a("p",[t._v("显而易见的是，“小”数据类型的数值表示范围小于“大”数据类型的数值表示范围，即精度小于“大”数据类型。")]),t._v(" "),a("p",[t._v("所以，如果“大”数据向“小”数据转换，会丢失数据精度。比如：long 转为 int，则超出 int 表示范围的数据将会丢失，导致结果的不确定性。")]),t._v(" "),a("p",[t._v("反之，“小”数据向“大”数据转换，则不会存在数据丢失情况。由于这个原因，这种类型转换也称为"),a("strong",[t._v("扩大转换")]),t._v("。")]),t._v(" "),a("p",[t._v("这些类型由“小”到“大”分别为：(byte，short，char) < int < long < float < double。")]),t._v(" "),a("p",[t._v("这里我们所说的“大”与“小”，并不是指占用字节的多少，而是指表示值的范围的大小。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("转换前后的数据类型要兼容")])]),t._v(" "),a("p",[t._v("由于 boolean 类型只能存放 true 或 false，这与整数或字符是不兼容的，因此不可以做类型转换。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("整型类型和浮点型进行计算后，结果会转为浮点类型")])])])]),t._v(" "),a("p",[t._v("示例：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("long")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" y "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("14.3f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"x/y = "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("输出：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("x/y = 1.9607843\n")])])]),a("p",[t._v("可见 long 虽然精度大于 float 类型，但是结果为浮点数类型。")]),t._v(" "),a("h3",{attrs:{id:"强制转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#强制转换"}},[t._v("#")]),t._v(" 强制转换")]),t._v(" "),a("p",[t._v("在不符合自动转换条件时或者根据用户的需要，可以对数据类型做强制的转换。")]),t._v(" "),a("p",[a("strong",[t._v("强制转换使用括号 "),a("code",[t._v("()")]),t._v(" 。")])]),t._v(" "),a("p",[t._v("引用类型也可以使用强制转换。")]),t._v(" "),a("p",[t._v("示例：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("float")]),t._v(" f "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("25.5f")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"x = "')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"装箱和拆箱"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#装箱和拆箱"}},[t._v("#")]),t._v(" 装箱和拆箱")]),t._v(" "),a("h3",{attrs:{id:"包装类、装箱、拆箱"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#包装类、装箱、拆箱"}},[t._v("#")]),t._v(" 包装类、装箱、拆箱")]),t._v(" "),a("p",[t._v("Java 中为每一种基本数据类型提供了相应的包装类，如下：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Byte <-> byte\nShort <-> short\nInteger <-> int\nLong <-> long\nFloat <-> float\nDouble <-> double\nCharacter <-> char\nBoolean <-> boolean\n")])])]),a("p",[a("strong",[t._v("引入包装类的目的")]),t._v("就是：提供一种机制，使得"),a("strong",[t._v("基本数据类型可以与引用类型互相转换")]),t._v("。")]),t._v(" "),a("p",[t._v("基本数据类型与包装类的转换被称为"),a("code",[t._v("装箱")]),t._v("和"),a("code",[t._v("拆箱")]),t._v("。")]),t._v(" "),a("ul",[a("li",[a("strong",[a("code",[t._v("装箱")]),t._v("（boxing）是将值类型转换为引用类型")]),t._v("。例如："),a("code",[t._v("int")]),t._v(" 转 "),a("code",[t._v("Integer")]),t._v(" "),a("ul",[a("li",[t._v("装箱过程是通过调用包装类的 "),a("code",[t._v("valueOf")]),t._v(" 方法实现的。")])])]),t._v(" "),a("li",[a("strong",[a("code",[t._v("拆箱")]),t._v("（unboxing）是将引用类型转换为值类型")]),t._v("。例如："),a("code",[t._v("Integer")]),t._v(" 转 "),a("code",[t._v("int")]),t._v(" "),a("ul",[a("li",[t._v("拆箱过程是通过调用包装类的 "),a("code",[t._v("xxxValue")]),t._v(" 方法实现的。（xxx 代表对应的基本数据类型）。")])])])]),t._v(" "),a("h3",{attrs:{id:"自动装箱、自动拆箱"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动装箱、自动拆箱"}},[t._v("#")]),t._v(" 自动装箱、自动拆箱")]),t._v(" "),a("p",[t._v("基本数据（Primitive）型的自动装箱（boxing）拆箱（unboxing）自 JDK 5 开始提供的功能。")]),t._v(" "),a("p",[t._v("自动装箱与拆箱的机制可以让我们在 Java 的变量赋值或者是方法调用等情况下使用原始类型或者对象类型更加简单直接。\n因为自动装箱会隐式地创建对象，如果在一个循环体中，会创建无用的中间对象，这样会增加 GC 压力，拉低程序的性能。所以在写循环时一定要注意代码，避免引入不必要的自动装箱操作。")]),t._v(" "),a("p",[t._v("JDK 5 之前的形式：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),t._v(" i1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 非自动装箱")]),t._v("\n")])])]),a("p",[t._v("JDK 5 之后：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),t._v(" i2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 自动装箱")]),t._v("\n")])])]),a("p",[t._v("Java 对于自动装箱和拆箱的设计，依赖于一种叫做享元模式的设计模式（有兴趣的朋友可以去了解一下源码，这里不对设计模式展开详述）。")]),t._v(" "),a("blockquote",[a("p",[t._v("👉 扩展阅读："),a("a",{attrs:{href:"https://www.cnblogs.com/dolphin0520/p/3780005.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入剖析 Java 中的装箱和拆箱"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("结合示例，一步步阐述装箱和拆箱原理。")])]),t._v(" "),a("h3",{attrs:{id:"装箱、拆箱的应用和注意点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#装箱、拆箱的应用和注意点"}},[t._v("#")]),t._v(" 装箱、拆箱的应用和注意点")]),t._v(" "),a("h4",{attrs:{id:"装箱、拆箱应用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#装箱、拆箱应用场景"}},[t._v("#")]),t._v(" 装箱、拆箱应用场景")]),t._v(" "),a("ul",[a("li",[t._v("一种最普通的场景是：调用一个"),a("strong",[t._v("含类型为 "),a("code",[t._v("Object")]),t._v(" 参数的方法")]),t._v("，该 "),a("code",[t._v("Object")]),t._v(" 可支持任意类型（因为 "),a("code",[t._v("Object")]),t._v(" 是所有类的父类），以便通用。当你需要将一个值类型（如 int）传入时，需要使用 "),a("code",[t._v("Integer")]),t._v(" 装箱。")]),t._v(" "),a("li",[t._v("另一种用法是：一个"),a("strong",[t._v("非泛型的容器")]),t._v("，同样是为了保证通用，而将元素类型定义为 "),a("code",[t._v("Object")]),t._v("。于是，要将值类型数据加入容器时，需要装箱。")]),t._v(" "),a("li",[t._v("当 "),a("code",[t._v("==")]),t._v(" 运算符的两个操作，一个操作数是包装类，另一个操作数是表达式（即包含算术运算）则比较的是数值（即会触发自动拆箱的过程）。")])]),t._v(" "),a("p",[t._v("示例：")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),t._v(" i1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 自动装箱")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),t._v(" i2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 非自动装箱")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),t._v(" i3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("valueOf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 非自动装箱")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i4 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 自动拆箱")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" i5 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" i2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("intValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 非自动拆箱")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"i1 = ["')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" i1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"]"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"i2 = ["')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" i2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"]"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"i3 = ["')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" i3 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"]"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"i4 = ["')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" i4 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"]"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"i5 = ["')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" i5 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"]"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"i1 == i2 is ["')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" i2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"]"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"i1 == i4 is ["')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" i4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"]"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 自动拆箱")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Output:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// i1 = [10]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// i2 = [10]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// i3 = [10]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// i4 = [10]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// i5 = [10]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// i1 == i2 is [false]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// i1 == i4 is [true]")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("示例说明：")]),t._v(" "),a("p",[t._v("上面的例子，虽然简单，但却隐藏了自动装箱、拆箱和非自动装箱、拆箱的应用。从例子中可以看到，明明所有变量都初始化为数值 10 了，但为何会出现 "),a("code",[t._v("i1 == i2 is [false")]),t._v(" 而 "),a("code",[t._v("i1 == i4 is [true]")]),t._v(" ？")]),t._v(" "),a("p",[t._v("原因在于：")]),t._v(" "),a("ul",[a("li",[t._v("i1、i2 都是包装类，使用 "),a("code",[t._v("==")]),t._v(" 时，Java 将它们当做两个对象，而非两个 int 值来比较，所以两个对象自然是不相等的。正确的比较操作应该使用 "),a("code",[t._v("equals")]),t._v(" 方法。")]),t._v(" "),a("li",[t._v("i1 是包装类，i4 是基础数据类型，使用 "),a("code",[t._v("==")]),t._v(" 时，Java 会将两个 i1 这个包装类对象自动拆箱为一个 "),a("code",[t._v("int")]),t._v(" 值，再代入到 "),a("code",[t._v("==")]),t._v(" 运算表达式中计算；最终，相当于两个 "),a("code",[t._v("int")]),t._v(" 进行比较，由于值相同，所以结果相等。")])])]),t._v(" "),a("h4",{attrs:{id:"装箱、拆箱应用注意点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#装箱、拆箱应用注意点"}},[t._v("#")]),t._v(" 装箱、拆箱应用注意点")]),t._v(" "),a("ol",[a("li",[t._v("装箱操作会创建对象，频繁的装箱操作会造成不必要的内存消耗，影响性能。所以"),a("strong",[t._v("应该尽量避免装箱。")])]),t._v(" "),a("li",[t._v("基础数据类型的比较操作使用 "),a("code",[t._v("==")]),t._v("，包装类的比较操作使用 "),a("code",[t._v("equals")]),t._v(" 方法。")])]),t._v(" "),a("h2",{attrs:{id:"小结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[t._v("#")]),t._v(" 小结")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://dunwu.test.upcdn.net/snap/1553754196283.png!zp",alt:"img"}})]),t._v(" "),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://book.douban.com/subject/2130190/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java编程思想"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://book.douban.com/subject/3146174/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java核心技术（卷 1）"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://juejin.im/post/59cd71835188255d3448faf6",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java基本数据类型和引用类型"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.cnblogs.com/dolphin0520/p/3780005.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入剖析 Java 中的装箱和拆箱"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);