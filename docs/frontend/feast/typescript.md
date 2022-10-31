---
title: TypeScript
titleTemplate: 语法
---

# TypeScript

## To Learn

https://learntypescript.dev



## 类型

### 三种基本类型

```ts
// 布尔、数值、字符串
let isDone: boolean = false
let lines: number = 42
let name: string = 'Anders'
```

### any类型

```ts
// 不知道什么类型用 "any" 类型
let notSure: any = 4
notSure = '可以重新赋值，转换为字符串类型'
notSure = false // 亦可，重新赋值为布尔类型
```

### const关键字

```ts
// 使用 const 关键字将一个字面量修饰为常量
const count = 9
count = 10 // 常量不能重新被赋值，所以这里会报错
```

### collection类型

```ts
// Typescript 中的 collection 有两种表现形式，一种是有类型的数组，另一种是泛型数组
let list1: number[] = [1, 2, 3]
let list2: Array<number> = [1, 2, 3]
```

### 枚举

```ts
enum Color { Red, Green, Blue }
let c: Color = Color.Green
```

### void

```ts
// void，表明函数没有任何返回值的特殊情况
function bigHorribleAlert(): void {
  alert('我是个烦人的弹出框！')
}
```

## 函数

> 函数是 “一等公民”（ first class citizens ），支持使用 lambda 胖箭头表达式和类型推断

### 普通函数

```ts
// 一般的函数
let f1 = function (i: number): number { return i * i }
// 根据返回值推断函数返回类型
let f2 = function (i: number) { return i * i }
// 胖箭头表达式
let f3 = (i: number): number => { return i * i }
// 根据返回值推断返回类型的胖箭头表达式
let f4 = (i: number) => { return i * i }
// 根据返回值推断返回类型的胖箭头表达式, 省略花括号的同时，可以同时省去 return 关键字
let f5 = (i: number) => i * i
```

## 接口

```ts
// 接口是结构化的，任何具备接口中声明的全部属性的对象，都与该接口兼容
interface Person {
  name: string
  age?: number  // 使用 "?" 标识，表示该属性是一个非必须属性
  move(): void  // 函数
}
```

### 实现接口的对象

```ts
// 实现 "Person" 接口的对象，当它具备 "name" 属性和 "move" 方法之后可被视为一个 "Person"
let p: Person = {
  name: 'Anders',
  move: () => {}
}
```

### 带可选属性的对象

```ts
let validPerson: Person = {
  name: 'Bobby',
  age: 42, // 可选属性
  move: () => {}
}
```

::: warning
// 由于该对象 "age" 属性的类型不是 "number" ，所以这不是一个 "Person"

```ts
let invalidPerson: Person = {
  name: 'Bobby',
  age: true
}
```

:::

### 接口描述函数

```ts
// 接口同样可以描述一个函数的类型
interface SearchFunc {
  (source: string, subString: string): boolean
}

// 参数名并不重要，参数类型才是最重要的
let mySearch: SearchFunc
mySearch = function (src: string, sub: string) {
  return src.search(sub) !== -1
}
```

## 类

```ts
// 类成员访问权限默认都是公共的 (public)
class Point {
  // 成员属性，x!: number，表示强制解析（告诉typescript编译器，这里一定有值）
  x: number
  // 构造器 - 在构造器中使用 public/private 关键字修饰的变量，会被声明为类的成员属性
  // 下面这个例子中，y 会像 x 一样被声明定义为类成员属性，而不再需要额外代码
  // 声明时，同样支持指定默认值
  constructor(x: number, public y: number = 27) {
    this.x = x
  }
  // 成员函数
  dist() {
    // sqrt 返回数的平方根
    return Math.sqrt(this.y * this.y)
  }
  // 静态成员
  static origin = new Point(0, 0)
}

let p1 = new Point(10, 20)
let p2 = new Point(25) // y 为构造器中指定的默认值：27
console.log(p2.y) // 27
console.log(p2.dist()) // 27
```

### 继承

```ts
// derived classes 派生类
// Constructors for derived classes must contain a 'super' call
class Point3D extends Point {
  constructor(x: number, y: number, public z: number) {
    super(x, y) // 必须显式调用父类的构造器
  }
  // 重写父类中的 dist() 函数
  dist() {
    let d = super.dist()
    return Math.sqrt(d * d + this.z * this.z)
  }
}
```

## 模块

```ts
// "." 符号可以作为子模块的分隔符
module Geometry {
  export class Square {
    constructor(public sideLength: number = 0) { }
    // 面积
    area() {
      return Math.pow(this.sideLength, 2)
    }
  }
}
let s1 = new Geometry.Square(5)

// 为模块创建一个本地别名
import G = Geometry
let s2 = new G.Square(10)
console.log(s2.area()) // 100
```

## 泛型

### 类

```ts
class Tuple<T1, T2> {
  constructor(public item1: T1, public item2: T2) { }
}
```

### 接口

```ts
interface Pair<T> {
  item1: T
  item2: T
}
```

### 函数

```ts
let pairToTuple = function <T>(p: Pair<T>) {
  return new Tuple(p.item1, p.item2)
}
let tuple = pairToTuple({ item1: 'hello', item2: 'world' })
```

## 引用定义文件

```ts
<reference path='jquery.d.ts' />
```
