# 一、concat 合并数组

 **concat()** 方法用于合并两个或多个数组。此方法**不会更改现有数组**，而是返回一个新数组。

## 示例

### 连接两个数组

以下代码将两个数组合并为一个新数组：

```
var alpha = ['a', 'b', 'c'];
var numeric = [1, 2, 3];

alpha.concat(numeric);
// result in ['a', 'b', 'c', 1, 2, 3]
```

### 连接三个数组

以下代码将三个数组合并为一个新数组：

```
var num1 = [1, 2, 3],
    num2 = [4, 5, 6],
    num3 = [7, 8, 9];

var nums = num1.concat(num2, num3);

console.log(nums);
// results in [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### 将值连接到数组

以下代码将三个值连接到数组：

```
var alpha = ['a', 'b', 'c'];

var alphaNumeric = alpha.concat(1, [2, 3]);

console.log(alphaNumeric);
// results in ['a', 'b', 'c', 1, 2, 3]
```

### 合并嵌套数组

以下代码合并数组并保留引用：

```
var num1 = [[1]];
var num2 = [2, [3]];
var num3=[5,[6]];

var nums = num1.concat(num2);

console.log(nums);
// results is [[1], 2, [3]]

var nums2=num1.concat(4,num3);

console.log(nums2)
// results is [[1], 4, 5,[6]]

// modify the first element of num1
num1[0].push(4);

console.log(nums);
// results is [[1, 4], 2, [3]]
```

# 二、copyWithin() 复制数组的一部分到另一个部分

**copyWithin()**方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度。

**会改变原数组**

### 参数

**target**

0 为基底的索引，复制序列到该位置。如果是负数，`target` 将从末尾开始计算。

如果 `target` 大于等于 `arr.length`，将会不发生拷贝。如果 `target` 在 `start` 之后，复制的序列将被修改以符合 `arr.length`。

**start**

0 为基底的索引，开始复制元素的起始位置。如果是负数，`start` 将从末尾开始计算。

如果 `start` 被忽略，`copyWithin` 将会从0开始复制。

**end**

0 为基底的索引，开始复制元素的结束位置。`copyWithin` 将会拷贝到该位置，但不包括 `end` 这个位置的元素。如果是负数， `end` 将从末尾开始计算。

如果 `end` 被忽略，`copyWithin` 方法将会一直复制至数组结尾（默认为 `arr.length`）。

### 返回

改变后的数组。



-







































