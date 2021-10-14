> ## এখানে  Node .js   এর বেসিক  কনসেপ্ট শিক্ষার বিষয়গুলো  

> ## Node Js Module System
<details >
 <summary>  নোড জেএস কি?</summary>
 যারা নতুন তাদের মধ্যে অনেকেই ভাবে নোড জেএস হয়তো কোন প্রোগ্রামিং ল্যাঙ্গুয়েজ বা ফ্রেমওয়ার্ক! কিন্তু এটা সম্পূর্ণ ভুল।
 
  নোড জেএস কোন প্রোগ্রামিং ল্যাঙ্গুয়েজ বা ফ্রেমওয়ার্ক নয়।

  নোড জেএস হচ্ছে একটি জাভাস্ক্রিপ্ট Run-Time Environment। 
  
  আচ্ছা বুঝলাম কিন্তু এই Run-Time Environment টা আবার কি?
  
Run-Time Environment এর কাজ হচ্ছে নির্দিষ্ট একটি প্রোগ্রামিং ল্যাঙ্গুয়েজ এর কোড গুলোকে রান করা।
</details>

<details >
 <summary>  জাভাস্ক্রিপ্ট এর গ্লোবাল কি ? </summary>
নোড জের  এর প্রত্যেকটি স্বাধীন ফাইল একেকটা   মডিউল। মডিউলে মানে ছোট একটি লাইব্রেরি বা ছোট  প্যাকেজ।   প্রত্যেকটা ফাইল এর ডাটা আলাদা আলাদা ভাবে তাদের সত্তা বজায় থাকে।  মডিউলে হলো গ্লোবাল অবজেক্ট।  
উদাহরণ: 

```javascript

var  a = 10;
function  text () {
    console.log("kamrul");
}

console.log(module);
```

```json

Module {
  id: '.',
  path: 'C:\\Users\\KAMRUL\\OneDrive\\Desktop\\node-js',
  exports: {},
  filename: 'C:\\Users\\KAMRUL\\OneDrive\\Desktop\\node-js\\global.js',
  loaded: false,
  children: [],
  paths: [
    'C:\\Users\\KAMRUL\\OneDrive\\Desktop\\node-js\\node_modules',
    'C:\\Users\\KAMRUL\\OneDrive\\Desktop\\node_modules',
    'C:\\Users\\KAMRUL\\OneDrive\\node_modules',
    'C:\\Users\\KAMRUL\\node_modules',
    'C:\\Users\\node_modules',
    'C:\\node_modules'
  ]
}

```
</details>

<details >
 <summary> মডিউলে এক্সপোর্ট করার নিয়ম  </summary>
 তিন উপায় এ মডিউল এক্সপোর্ট করা যায়।  

 ```javascript 
const add = (a,b) => a+b;

const sub = (a,b) => a-b;

const div = (a,b) => a+b;

const test = (a,b) => add(a,b)/sub(a,b);

// export system 1
module.exports = {
    add, 
    sub,
    div,
    test
}


// export system 2
module.export.add = add;
module.export.sub = sub;
module.export.div = div;
module.export.test = test;

 ```

 ভালো উপায় হলো 

 ```javascconst 
 module.exports.add = (a,b) => a+b;

 module.exports. sub = (a,b) => a-b;

 module.exports. div = (a,b) => a+b;

 module.exports. test = (a,b) => add(a,b)/sub(a,b);
 ```
 
 
 
 </details >
 <details >
 <summary> মডিউলে এক্সপোর্ট করার নিয়ম  </summary>

 অন্য ফাইল এর এক্সপোর্ট করা ডাটা গুলো ইম্পোর্ট  করার নিয়ম - 
নোড জেস এ ইম্পোর্ট করার জন্য require  মেথড ব্যবহার করা হয়।
উদাহরণ  :- 

 ```javascript
 const math = require('./math)
 
 ```
  </details >