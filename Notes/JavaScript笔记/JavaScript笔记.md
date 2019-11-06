# JavaScript学习

## 一、初识

为什么起名叫JavaScript？原因是当时Java语言非常红火，所以网景公司希望借Java的名气来推广，但事实上JavaScript除了**语法上有点像Java，其他部分基本上没啥关系**。

## 二、基础语法

侧重与C语言的区别

1. 变量名是大小写英文、数字、==\$ 和 \_ 的==组合，且不能用数字开头。申明一个变量用var语句，比如：

    ```javascript
    var a;              // 申明了变量a，此时a的值为undefined
    var $b = 1;         // 申明了变量$b，同时给$b赋值，此时$b的值为1
    var s_007 = '007';  // s_007是一个字符串
    var Answer = true;  // Answer是一个布尔值true
    var t = null;       // t的值是null
    ```

    变量名也可以用中文，但是，不建议。

    var是动态语言，可以根据所赋的值改变类型

    ```javascript
    var a = 123; // a的值是整数123
    a = 'ABC'; // a变为字符串
    ```

    与之对应的是静态语言。如果赋值的时候**类型不匹配，就会报错**。例如Java是静态语言，赋值语句如下：

    ```javascript
    int a = 123; // a是整数类型变量，类型用int申明
    a = "ABC"; // 错误：不能把字符串赋给整型变量
    ```

    和静态语言相比，动态语言更灵活，就是这个原因。

2. 数据只有**Number**类型

    ```javascript
    123;        // 整数123
    0.456;      // 浮点数0.456
    1.2345e3;   // 科学计数法表示1.2345x1000，等同于1234.5
    -99;        // 负数
    NaN;        // NaN表示Not a Number，当无法计算结果时用NaN表示
    Infinity;   // Infinity表示无限大，当数值超过了JavaScript的Number所能表示的最大值时，就表示为Infinity
    ```

3. 等于有两种

    第一种 是\=\=比较，它会**自动转换数据类型**再比较，很多时候，会得到非常诡异的结果；
    第二种 是\=\=\=比较，它不会自动转换数据类型，如果**数据类型不一致，返回false**，如果一致，再比较。
    由于JavaScript这个设计缺陷，==不要使用\=\=比较，始终坚持使用\=\=\=比较。==
    另一个例外是**NaN这个特殊的Number与所有其他值都不相等，包括它自己**：

    ```javascript
    NaN === NaN; // false
    ```

    唯一能判断NaN的方法是通过 ==isNaN()函数==：

    ```javascript
    isNaN(NaN); // true
    ```

    最后要注意浮点数的相等比较：

    ```javascript
    1 / 3 === (1 - 2 / 3); // false
    ```

    要比较两个浮点数是否相等，只能计算它们之差的绝对值，看是否小于某个阈值：

    ```javascript
    Math.abs(1 / 3 - (1 - 2 / 3)) < 0.0000001; // true
    ```

4. 数组可以包括任意数据类型。
   例如：

    ```javascript
    [1, 2, 3.14, 'Hello', null, true];
    ```

5. 对象
    JavaScript的对象是一组由==键-值==组成的无序集合，例如：

    ```javascript
    var person = {
        name: 'Bob',
        age: 20,
        tags: ['js', 'web', 'mobile'],
        city: 'Beijing',
        hasCar: true,
        zipcode: null
    };
    ```

    **==键==都是字符串类型，==值==可以是任意数据类型**。上述person对象一共定义了6个键值对，其中每个键又称为对象的属性，例如，person的name属性为'Bob'，zipcode属性为null。
    要获取一个对象的属性，我们用对象变量.属性名的方式：

    ```javascript
    person.name; // 'Bob'
    person.zipcode; // null
    ```

6. 显示

    要显示变量的内容，可以用console.log(x)，打开Chrome的控制台就可以看到结果。

    ```javascript
    //打印变量x
    var x = 100;
    console.log(x);
    ```
    
    使用console.log()代替alert()的好处是可以避免弹出烦人的对话框。

7. 字符串

    +号链接多个字符串：

    ```javascript
    var name = '小明';
    var age = 20;
    var message = '你好, ' + name + ', 你今年' + age + '岁了!';
    alert(message);
    //输出 你好小明，你今年20岁了！
    ```

    如果有很多变量需要连接，用+号就比较麻烦。ES6新增了一种模板字符串，表示方法和上面的多行字符串一样，但是它会自动替换字符串中的变量：

    ```javascript
    var name = '小明';
    var age = 20;
    var message = `你好, ${name}, 你今年${age}岁了!`;
    alert(message);
    //输出 你好小明，你今年20岁了！
    ```

    字符串是**不可变**的，如果对字符串的某个索引赋值，==不会有任何错误，但是，也没有任何效果==：

    ```javascript
    var s = 'Test';
    s[0] = 'X';
    alert(s); // s仍然为'Test'
    ```

    JavaScript特殊方法：

    * toUpperCase()
    * toLowerCase()
    * indexof()

    ```javascript
    var s = 'hello, world';
    s.indexOf('world'); // 返回7
    s.indexOf('World'); // 没有找到指定的子串，返回-1
    ```

    * substring()

    ```javascript
    var s = 'hello, world'
    s.substring(0, 5); // 从索引0开始到5（不包括5），返回'hello'
    s.substring(7); // 从索引7开始到结束，返回'world'
    ```

8. Map
    Map实现一个对照表，无论这个表有多大，查找速度都不会变慢。用JavaScript写一个Map如下：

    ```javascript
    var m = new Map([['Michael', 95], ['Bob', 75], ['Tracy', 85]]);
    m.get('Michael'); // 95
    ```

    初始化Map需要一个二维数组，或者直接初始化一个空Map。Map具有以下方法：

    ```javascript
    var m = new Map(); // 空Map
    m.set('Adam', 67); // 添加新的key-value
    m.set('Bob', 59);
    m.has('Adam'); // 是否存在key 'Adam': true
    m.get('Adam'); // 67
    m.delete('Adam'); // 删除key 'Adam'
    m.get('Adam'); // undefined
    ```
    由于一个key只能对应一个value，所以，多次对一个key放入value，后面的值会把前面的值冲掉：

    ```javascript
    var m = new Map();
    m.set('Adam', 67);
    m.set('Adam', 88);
    m.get('Adam'); // 88
    ```

9. Set
    要创建一个Set，需要提供一个Array作为输入，或者直接创建一个空Set：

    ```javascript
    var s1 = new Set(); // 空Set
    var s2 = new Set([1, 2, 3]); // 含1, 2, 3
    ```

    重复元素在Set中自动被过滤：

    ```javascript
    var s = new Set([1, 2, 3, 3, '3']);
    s; // Set {1, 2, 3, "3"}
    ```

    ==注意数字3和字符串'3'是不同的元素。==

    通过add(key)方法可以添加元素到Set中，可以重复添加，但不会有效果：

    ```javascript
    s.add(4);
    s; // Set {1, 2, 3, 4}
    s.add(4);
    s; // 仍然是 Set {1, 2, 3, 4}
    ```

    通过delete(key)方法可以删除元素：

    ```javascript
    var s = new Set([1, 2, 3]);
    s; // Set {1, 2, 3}
    s.delete(3);
    s; // Set {1, 2}
    ```
