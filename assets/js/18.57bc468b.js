(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{298:function(t,a,s){"use strict";s.r(a);var r=s(11),v=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"java-基础语法特性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#java-基础语法特性"}},[t._v("#")]),t._v(" Java 基础语法特性")]),t._v(" "),s("blockquote",[s("p",[s("strong",[t._v("📦 本文以及示例源码已归档在 "),s("a",{attrs:{href:"https://github.com/dunwu/javacore/",target:"_blank",rel:"noopener noreferrer"}},[t._v("javacore"),s("OutboundLink")],1)])])]),t._v(" "),s("h2",{attrs:{id:"注释"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注释"}},[t._v("#")]),t._v(" 注释")]),t._v(" "),s("p",[t._v("空白行，或者注释的内容，都会被 Java 编译器忽略掉。")]),t._v(" "),s("p",[t._v("Java 支持多种注释方式，下面的示例展示了各种注释的使用方式：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HelloWorld")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n     * JavaDoc 注释\n     */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 单行注释")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 多行注释：\n           1. 注意点a\n           2. 注意点b\n         */")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"基本数据类型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本数据类型"}},[t._v("#")]),t._v(" 基本数据类型")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://dunwu.test.upcdn.net/cs/java/javacore/xmind/Java%E5%9F%BA%E6%9C%AC%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.svg!zp",alt:"img"}})]),t._v(" "),s("blockquote",[s("p",[t._v("👉 扩展阅读："),s("a",{attrs:{href:"https://github.com/dunwu/javacore/blob/master/docs/basics/%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3Java%E5%9F%BA%E6%9C%AC%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入理解 Java 基本数据类型"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#变量"}},[t._v("#")]),t._v(" 变量")]),t._v(" "),s("p",[t._v("Java 支持的变量类型有：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("局部变量")]),t._v(" - 类方法中的变量。")]),t._v(" "),s("li",[s("code",[t._v("实例变量（也叫成员变量）")]),t._v(" - 类方法外的变量，不过没有 "),s("code",[t._v("static")]),t._v(" 修饰。")]),t._v(" "),s("li",[s("code",[t._v("类变量（也叫静态变量）")]),t._v(" - 类方法外的变量，用 "),s("code",[t._v("static")]),t._v(" 修饰。")])]),t._v(" "),s("p",[t._v("特性对比：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("局部变量")]),t._v(" "),s("th",[t._v("实例变量（也叫成员变量）")]),t._v(" "),s("th",[t._v("类变量（也叫静态变量）")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("局部变量声明在方法、构造方法或者语句块中。")]),t._v(" "),s("td",[t._v("实例变量声明在方法、构造方法和语句块之外。")]),t._v(" "),s("td",[t._v("类变量声明在方法、构造方法和语句块之外。并且以 static 修饰。")])]),t._v(" "),s("tr",[s("td",[t._v("局部变量在方法、构造方法、或者语句块被执行的时候创建，当它们执行完成后，变量将会被销毁。")]),t._v(" "),s("td",[t._v("实例变量在对象创建的时候创建，在对象被销毁的时候销毁。")]),t._v(" "),s("td",[t._v("类变量在第一次被访问时创建，在程序结束时销毁。")])]),t._v(" "),s("tr",[s("td",[t._v("局部变量没有默认值，所以必须经过初始化，才可以使用。")]),t._v(" "),s("td",[t._v("实例变量具有默认值。数值型变量的默认值是 0，布尔型变量的默认值是 false，引用类型变量的默认值是 null。变量的值可以在声明时指定，也可以在构造方法中指定。")]),t._v(" "),s("td",[t._v("类变量具有默认值。数值型变量的默认值是 0，布尔型变量的默认值是 false，引用类型变量的默认值是 null。变量的值可以在声明时指定，也可以在构造方法中指定。此外，静态变量还可以在静态语句块中初始化。")])]),t._v(" "),s("tr",[s("td",[t._v("对于局部变量，如果是基本类型，会把值直接存储在栈；如果是引用类型，会把其对象存储在堆，而把这个对象的引用（指针）存储在栈。")]),t._v(" "),s("td",[t._v("实例变量存储在堆。")]),t._v(" "),s("td",[t._v("类变量存储在静态存储区。")])]),t._v(" "),s("tr",[s("td",[t._v("访问修饰符不能用于局部变量。")]),t._v(" "),s("td",[t._v("访问修饰符可以用于实例变量。")]),t._v(" "),s("td",[t._v("访问修饰符可以用于类变量。")])]),t._v(" "),s("tr",[s("td",[t._v("局部变量只在声明它的方法、构造方法或者语句块中可见。")]),t._v(" "),s("td",[t._v("实例变量对于类中的方法、构造方法或者语句块是可见的。一般情况下应该把实例变量设为私有。通过使用访问修饰符可以使实例变量对子类可见。")]),t._v(" "),s("td",[t._v("与实例变量具有相似的可见性。但为了对类的使用者可见，大多数静态变量声明为 public 类型。")])]),t._v(" "),s("tr",[s("td"),t._v(" "),s("td",[t._v("实例变量可以直接通过变量名访问。但在静态方法以及其他类中，就应该使用完全限定名：ObejectReference.VariableName。")]),t._v(" "),s("td",[t._v("静态变量可以通过：ClassName.VariableName 的方式访问。")])]),t._v(" "),s("tr",[s("td"),t._v(" "),s("td"),t._v(" "),s("td",[t._v("无论一个类创建了多少个对象，类只拥有类变量的一份拷贝。")])]),t._v(" "),s("tr",[s("td"),t._v(" "),s("td"),t._v(" "),s("td",[t._v("类变量除了被声明为常量外很少使用。")])])])]),t._v(" "),s("p",[s("strong",[t._v("变量修饰符")])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("访问级别修饰符")]),t._v(" "),s("ul",[s("li",[t._v("如果变量是实例变量或类变量，可以添加访问级别修饰符（public/protected/private）")])])]),t._v(" "),s("li",[s("strong",[t._v("静态修饰符")]),t._v(" "),s("ul",[s("li",[t._v("如果变量是类变量，需要添加 static 修饰")])])]),t._v(" "),s("li",[s("strong",[t._v("final")]),t._v(" "),s("ul",[s("li",[t._v("如果变量使用 "),s("code",[t._v("fianl")]),t._v(" 修饰符，就表示这是一个常量，不能被修改。")])])])]),t._v(" "),s("h2",{attrs:{id:"数组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数组"}},[t._v("#")]),t._v(" 数组")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://dunwu.test.upcdn.net/cs/java/javacore/xmind/Java%E6%95%B0%E7%BB%84.svg!zp",alt:"img"}})]),t._v(" "),s("blockquote",[s("p",[t._v("👉 扩展阅读："),s("a",{attrs:{href:"https://github.com/dunwu/javacore/blob/master/docs/basics/Java%E6%95%B0%E7%BB%84.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入理解 Java 数组"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"枚举"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#枚举"}},[t._v("#")]),t._v(" 枚举")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://dunwu.test.upcdn.net/cs/java/javacore/xmind/Java%E6%9E%9A%E4%B8%BE.svg!zp",alt:"img"}})]),t._v(" "),s("blockquote",[s("p",[t._v("👉 扩展阅读："),s("a",{attrs:{href:"https://github.com/dunwu/javacore/blob/master/docs/basics/Java%E6%9E%9A%E4%B8%BE.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入理解 Java 数组"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"操作符"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#操作符"}},[t._v("#")]),t._v(" 操作符")]),t._v(" "),s("p",[t._v("Java 中支持的操作符类型如下：")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://dunwu.test.upcdn.net/cs/java/javacore/xmind/Java%E6%93%8D%E4%BD%9C%E7%AC%A6.svg!zp",alt:"img"}})]),t._v(" "),s("blockquote",[s("p",[t._v("👉 扩展阅读："),s("a",{attrs:{href:"http://www.runoob.com/java/java-operators.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java 操作符"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方法"}},[t._v("#")]),t._v(" 方法")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://dunwu.test.upcdn.net/cs/java/javacore/xmind/Java%E6%96%B9%E6%B3%95.svg!zp",alt:"img"}})]),t._v(" "),s("blockquote",[s("p",[t._v("👉 扩展阅读："),s("a",{attrs:{href:"https://github.com/dunwu/javacore/blob/master/docs/basics/Java%E6%96%B9%E6%B3%95.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入理解 Java 方法"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"控制语句"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#控制语句"}},[t._v("#")]),t._v(" 控制语句")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://dunwu.test.upcdn.net/cs/java/javacore/xmind/Java%E6%8E%A7%E5%88%B6%E8%AF%AD%E5%8F%A5.svg!zp",alt:"img"}})]),t._v(" "),s("blockquote",[s("p",[t._v("👉 扩展阅读："),s("a",{attrs:{href:"https://github.com/dunwu/javacore/blob/master/docs/basics/Java%E6%8E%A7%E5%88%B6%E8%AF%AD%E5%8F%A5.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("Java 控制语句"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"异常"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#异常"}},[t._v("#")]),t._v(" 异常")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://dunwu.test.upcdn.net/cs/java/javacore/xmind/Java%E5%BC%82%E5%B8%B8%E6%A1%86%E6%9E%B6.svg!zp",alt:"img"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"http://dunwu.test.upcdn.net/cs/java/javacore/xmind/Java%E5%BC%82%E5%B8%B8.svg!zp",alt:"img"}})]),t._v(" "),s("blockquote",[s("p",[t._v("👉 扩展阅读："),s("a",{attrs:{href:"https://github.com/dunwu/javacore/blob/master/docs/basics/Java%E5%BC%82%E5%B8%B8.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入理解 Java 异常"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"泛型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#泛型"}},[t._v("#")]),t._v(" 泛型")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://dunwu.test.upcdn.net/cs/java/javacore/xmind/Java%E6%B3%9B%E5%9E%8B.svg!zp",alt:"img"}})]),t._v(" "),s("blockquote",[s("p",[t._v("👉 扩展阅读："),s("a",{attrs:{href:"https://github.com/dunwu/javacore/blob/master/docs/basics/Java%E6%B3%9B%E5%9E%8B.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入理解 Java 泛型"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"反射"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#反射"}},[t._v("#")]),t._v(" 反射")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://dunwu.test.upcdn.net/cs/java/javacore/xmind/Java%E5%8F%8D%E5%B0%84.svg!zp",alt:"img"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"http://dunwu.test.upcdn.net/cs/java/javacore/xmind/Java%E4%BB%A3%E7%90%86.svg!zp",alt:"img"}})]),t._v(" "),s("blockquote",[s("p",[t._v("👉 扩展阅读："),s("a",{attrs:{href:"https://github.com/dunwu/javacore/blob/master/docs/basics/Java%E5%8F%8D%E5%B0%84.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入理解 Java 反射和动态代理"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"注解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注解"}},[t._v("#")]),t._v(" 注解")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://dunwu.test.upcdn.net/cs/java/javacore/xmind/%E6%B3%A8%E8%A7%A3%E7%AE%80%E4%BB%8B.svg!zp",alt:"img"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"http://dunwu.test.upcdn.net/cs/java/javacore/xmind/%E5%85%83%E6%B3%A8%E8%A7%A3.svg!zp",alt:"img"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"http://dunwu.test.upcdn.net/cs/java/javacore/xmind/%E5%86%85%E7%BD%AE%E6%B3%A8%E8%A7%A3.svg!zp",alt:"img"}})]),t._v(" "),s("p",[s("img",{attrs:{src:"http://dunwu.test.upcdn.net/cs/java/javacore/xmind/%E8%87%AA%E5%AE%9A%E4%B9%89%E6%B3%A8%E8%A7%A3.svg!zp",alt:"img"}})]),t._v(" "),s("blockquote",[s("p",[t._v("👉 扩展阅读："),s("a",{attrs:{href:"https://github.com/dunwu/javacore/blob/master/docs/basics/Java%E6%B3%A8%E8%A7%A3.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入理解 Java 注解"),s("OutboundLink")],1)])]),t._v(" "),s("h2",{attrs:{id:"序列化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#序列化"}},[t._v("#")]),t._v(" 序列化")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://dunwu.test.upcdn.net/cs/java/javacore/xmind/Java%E5%BA%8F%E5%88%97%E5%8C%96.svg!zp",alt:"img"}})]),t._v(" "),s("blockquote",[s("p",[t._v("👉 扩展阅读："),s("a",{attrs:{href:"https://github.com/dunwu/javacore/blob/master/docs/io/Java%E5%BA%8F%E5%88%97%E5%8C%96.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入理解 Java 序列化"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=v.exports}}]);