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

```javascript

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
 <summary> মডিউলে ইম্পোর্ট করার নিয়ম  </summary>

 অন্য ফাইল এর এক্সপোর্ট করা ডাটা গুলো ইম্পোর্ট  করার নিয়ম - 
নোড জেস এ ইম্পোর্ট করার জন্য require  মেথড ব্যবহার করা হয়।
উদাহরণ  :- 

 ```javascript
 const math = require('./math)
 
 ```
  </details >

   <details >
 <summary>Node js Path Module   </summary>
  ফাইল সিস্টেম কে path   বলে।   আমরা যে লোকেশন এ কাজ করি তাই path মডিউল।  filename  আমাদের ফাইল টি কোন জায়গায় আছে তা বের করা যায়।  পথ একটা মডিউল।  তাই আমাদের require  করে নিতে হবে।  সবার শেষ যে filename  বা ডিরেক্টরি name  থাকে সেটাই basename . 

  ```javascript 

const path = require("path")

console.log(path.basename(__filename)); //  file Name =  global.js

console.log(path.basename(__dirname)); // Folder Name =  node-js

// just file name use 
console.log(path.extname(__filename)); // Folder Name =  node-js

  ```

  একটি অবজেক্ট কে  real path  ফরম্যাটে   করতে হলে যা করতে  হবে...

  ```javascript 

const path = require("path")

const pathObj = {
    dir:"ser/lcoal",
    name:"testFile",
    ext:".js"
}

console.log(path.format(pathObj));   // ser/lcoal\testFile.js
  ```
   </details >

   <details >
 <summary>Node js Operating System  Module   </summary>
অপারেটিং সিস্টেম এর সবকিছু জানতে আমাদের  os  মডিউল ব্যবহার করতে হবে।  যার মাধ্যমে আমাদের অপারেটিং সিস্টেম এর সবকিছু জানতে পারবো 

```javascript 
const os = require("os")
console.log(os.arch())
console.log(os.cpus())
console.log(os.freemem())
console.log(os.networkInterfaces())
```

```javascript 
x64
[
  {
    model: 'Intel(R) Core(TM) i3-6006U CPU @ 2.00GHz',
    speed: 1992,
    times: {
      user: 3002515,
      nice: 0,
      sys: 1028734,
      idle: 9370812,
      irq: 131921
    }
  },
  {
    model: 'Intel(R) Core(TM) i3-6006U CPU @ 2.00GHz',
    speed: 1992,
    times: { user: 2897234, nice: 0, sys: 662828, idle: 9841765, irq: 18093 }
  },
  {
    model: 'Intel(R) Core(TM) i3-6006U CPU @ 2.00GHz',
    speed: 1992,
    times: { user: 3325625, nice: 0, sys: 710578, idle: 9365609, irq: 17546 }
  },
  {
    model: 'Intel(R) Core(TM) i3-6006U CPU @ 2.00GHz',
    speed: 1992,
    times: { user: 3117953, nice: 0, sys: 611093, idle: 9672765, irq: 14421 }
  }
]
3978842112
{
  'Wi-Fi': [
    {
      address: 'fe80::595f:72ba:e308:4f49',
      netmask: 'ffff:ffff:ffff:ffff::',
      family: 'IPv6',
      mac: '9c:30:5b:e3:84:05',
      internal: false,
      cidr: 'fe80::595f:72ba:e308:4f49/64',
      scopeid: 17
    },
    {
      address: '192.168.0.108',
      netmask: '255.255.255.0',
      family: 'IPv4',
      mac: '9c:30:5b:e3:84:05',
      internal: false,
      cidr: '192.168.0.108/24'
    }
  ],
  'Loopback Pseudo-Interface 1': [
    {
      address: '::1',
      netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',
      family: 'IPv6',
      mac: '00:00:00:00:00:00',
      internal: true,
      cidr: '::1/128',
      scopeid: 0
    },
    {
      address: '127.0.0.1',
      netmask: '255.0.0.0',
      family: 'IPv4',
      mac: '00:00:00:00:00:00',
      internal: true,
      cidr: '127.0.0.1/8'
    }
  ]
}
```
  </details >

   
 <details>
 <summary> Write File As Javascript Object  </summary>
জাভাস্ক্রিপ্ট এর অবজেক্ট কে  writeFile  মডিউল ব্যবহার করে nodejs   দিয়ে একটি json , css  বা যেকোনো ফাইল এ   কনভার্ট করা যায় এবং একটি নতুন ফাইল  তৈরি করা যায়।  এটার জন্য আমাদের যে  মডিউল টি ব্যবহার করা হবে সেটা হলো fs . 

এটির জন্য আমাদের শুরুতে fs  মডিউল require  করে  নিতে হবে।  এবং আমাদের কে একটি জাভাস্ক্রিপ্ট  অবজেক্ট  বানাতে হবে  . আমরা যেহেতু জেসন ফাইল বানাতে যাইতেছি  তাই আমাদের অবজেক্ট টি কে stringify  করে নিতে হবে।   তারপর আমাদের কে os  মডিউলে দিয়ে writeFile  মেথড দিয়ে ফাইল write  করতে হ তবে।  

os  এর writeFile  এ আমাদের কে যা যা করতে হবে  তা  হলো - 
- ১. শুরুতে  তৈরি করা ফাইল বা যেকোনো ফাইলের নাম দিতে হবে 
- ২. ডাটা দিতে হবে 
- ৩. কলব্যাক ফাঙ্কশন দিতে হবে 
-  ৪. কলব্যাক ফাঙ্কশন এ আমাদের কে এরর হলে কোনো মেসেজ বা এরর না হজলে আমাদের মেসেজ দিতে হবে 
  
  
  ```javascript 
const  fs = require("fs");
const  testObj = {
    name:"kamrul  hasan",
    email:"kamrul@gmail.com",
    address:{
        city:"sherpur",
        country:"BD"
    }
}

const data = JSON.stringify(testObj)

fs.writeFile('test.json',data, (error)=>{
    if (error) {
        console.log(error);
    }else{
        console.log("you are successfully Write File");
    }
})
  ```
![image ](https://i.ibb.co/TrKKhGP/write-File-nodejs1.png);
![image ](https://i.ibb.co/DGfvt03/write-File-nodejs2.png);
  

</details >

   
<details>
<summary> Read File As Javascript Object  </summary>

আমাদের  কোনো ফাইল কে read  করতে fs  মডিউলে এর  readFile  মেথড এর মাধ্যমে   করতে  পারি।  
এখানে আমি আমাদের যা যা করতে   হবে  - 
- ১.  fs  মডিউল নিতে  হবে 
- ২. readFile মেথড  নিতে হবে 
- ৩. ফাইল নাম  দিতে হবে 
- ৪. কলব্যাক ফাঙ্কশন নিতে  হবে 
- ৫. পেরামিটার হিসেবে (error ,data ) নিতে হবে 
- ৬. জেসন কে parse করতে হবে  

```javascript

const  fs = require("fs");

fs.readFile('./test.json', (error, data)=> {
    if(error){
        return console.log(error)
    }
    let obj =JSON.parse(data);
    console.log(obj);
})

```

```javascript
{
  name: 'kamrul  hasan',
  email: 'kamrul@gmail.com',
  address: { city: 'sherpur', country: 'BD' }
}
```
</details >

<details>
<summary> NodeJS Http Module  </summary>
নোড জেস   এর জন্য আমাদের  লোকাল সার্ভার বানাতে যা যা করতে হবে 
-  এইচটিটিপি   মডিউলে নিতে হ তবে 
- এইচটিটিপি এর কি  createserver  মেথড ব্যবহার করে রেসপন্স এন্ড রিকোয়েস্ট হ্যান্ডেল করতে হবে 
- সার্ভার এ listen   দিতে হ তবে 

```javascript
const http = require('http')

const server = http.createServer((req, res)=> {
    console.log(req.url)
    res.end('Node js very beatiful')
})

server.listen(3000, ()=> {
    console.log("server is Running  on PORT is 3000");
})


```

</details >



<details>
<summary> package কি </summary>
package কি সেটা জানার আগে আমাদের জানা প্রয়োজন মডিউল সম্পর্কে। মডিউল হলো একটি সিঙ্গেল জাভাস্ক্রিপ্ট ফাইল যার কিছু ফাংশনালিটি আছে। package হলো একটি ডিরেক্টরি যার মধ্যে এক বা একাধিক মডিউল থাকে, এবং একটি package.json ফাইল ও থাকে, যেখানে package এর মেটাডাটা থাকে। একটি package অনেক সাধারণ হতে পারে আবার কমপ্লেক্স ও হতে পারে। যেমন underscore package টা তে শুধু একটি জাভাস্ক্রিপ্ট ফাইল আছে, আবার express underscore package এর রুট এ একটি জাভাস্ক্রিপ্ট ফাইল থাকলেও এর সাব ডিরেক্টরি তে আরও অনেক জাভাস্ক্রিপ্ট ফাইল থাকে।
</details >

<details>
<summary> NPM  কি </summary>
npm হলো পৃথিবীর সবচেয়ে বড় সফটওয়ার রেজিস্ট্রি। যেখানে প্রায় 600,000 প্যাকেজ রয়েছে। সারা পৃথিবীর ওপেন সোর্স ডেভেলাপার রা npm ব্যবহার করে থাকে প্যাকেজ শেয়ার/ব্যবহার করার জন্য। npm এর তিনটি component থাকে।
</details >

<details>
<summary>package.json  কি </summary>
npm হলো পৃথিবীর সবচেয়ে বড় সফটওয়ার রেজিস্ট্রি। যেখানে প্রায় 600,000 প্যাকেজ রয়েছে। সারা পৃথিবীর ওপেন সোর্স ডেভেলাপার রা npm ব্যবহার করে থাকে প্যাকেজ শেয়ার/ব্যবহার করার জন্য। npm এর তিনটি component থাকে।
</details >

<details>
<summary>Depencecy কি </summary>
আমাদের প্রজেক্ট এ থার্ড পার্টি প্যাকেজ গুলো ব্যবহার করা হয় সেগুলো  packege.json   ফাইল এ লিস্ট আকারে থাকে তাকে depencecy  বলে
</details >

<details>
<summary>Dev Depencecy কি </summary>
আমাদের প্রজেক্ট  এ  ডেভেলপার এর ক্ষেত্রে  থার্ড পার্টি প্যাকেজ গুলো ব্যবহার করা হয় সেগুলো  packege.json   ফাইল এ লিস্ট আকারে থাকে তাকে Dev Depencecy  বলে
</details >

> ## Express Js 

<details>
<summary>Express Js  কি </summary>
এক্সপ্রেস.জেএস একটি নোড.জেএস ওয়েব অ্যাপ্লিকেশন সার্ভার ফ্রেমওয়ার্ক, একক পৃষ্ঠা, মাল্টি-পৃষ্ঠা এবং হাইব্রিড ওয়েব অ্যাপ্লিকেশন তৈরির জন্য ডিজাইন করা। এটি node.js. এর জন্য ডি ফ্যাক্টো স্ট্যান্ডার্ড সার্ভার ফ্রেমওয়ার্ক
</details >
 
 <details>
<summary>Express Js  Install  </summary>
ইনস্টল করতে যা যা করতে হবে। ....

- একটি ফোল্ডার তৈরি করে নিতে হবে 
- npm  init  করে packege  json  ফাইল  বানাতে  হবে 
- এক্সপ্রেস ইনস্টল করে নিতে হবে 
  
```javascript 
npm install express --save

```
</details >


 <details>
<summary>Multiple Routes in Express  </summary>
একটি   প্রজেক্ট এ একাধিক রুট তৈরি করার  সিস্টেম কে মাল্টিপল route বলে। 

এখানে একটি বিষয় খেয়াল রাখতে হবে যে  root  route  বা হোম route  শেষ এ দিতে হবে।  আর যদি notfound  পেজ এর জন্য দেওয়া হয় তাহলে root  route  এর শেষে দিতে হবে 

```javascript 
const express = require("express");

const app = express();

app.get("/about", (req, res)=> {
    res.send("Get  About route   ")
})
app.get("/contact", (req, res)=> {
    res.send("Get  Contact  route   ")
})



app.get("/", (req, res)=> {
    res.send("Root route  Get ")
})

app.get("*", (req, res)=> {
    res.send("Not found Page ")
})

const PORT = process.env.PORT || 3000
app.listen(PORT,()=> {
    console.log("server is Running PORT is ", PORT);
})
```
</details >

 <details>
<summary>What is Nodemon ?  </summary>
নোডেমন একটি টুল যা নোড অ্যাপ্লিকেশন স্বয়ংক্রিয়ভাবে পুনরায় চালু করে নোড.জেএস ভিত্তিক অ্যাপ্লিকেশনগুলি বিকাশে সহায়তা করে যখন ডিরেক্টরিতে ফাইল পরিবর্তন সনাক্ত করা হয়।

আপনার কোড বা ডেভেলপমেন্ট পদ্ধতিতে নোডেমনের কোনো অতিরিক্ত পরিবর্তন প্রয়োজন হয় না। নোডেমন নোডের জন্য একটি প্রতিস্থাপন মোড়ক। নোডেমন ব্যবহার করতে, আপনার স্ক্রিপ্টটি চালানোর সময় কমান্ড লাইনে নোড শব্দটি প্রতিস্থাপন করুন।

</details >


 <details>
<summary>মিডলওয়্যার আসলে কি ? </summary>
. মিডলওয়্যার রিকুয়েস্ট ও রেস্পন্সের মধ্যে সম্পর্ক স্থাপনকারী । ইউজার এর HTTP রিকুয়েস্ট ফিল্টার করে রিকুয়েস্টের পরে রেস্পন্স কি হবে তা মিডলওয়্যারে লেখা থাকে।

</details >



 <details>
<summary>Morgan  মিডলওয়্যার  কি ? </summary>
মরগ্যান হলো middlewarer  এর থার্ড পার্টি  একটি লাইব্রেরি।  এর আমাদের আমাদের   প্রজেক্ট এর সবকিছু স্টেটাস সম্পর্কে জানা যায়।  

মরগ্যান ব্যবহার করার জন্য আমাদের যা যা করতে  হবে। ...

- মরণ ইনস্টল করতে হবে 
- মরগ্যান require  করতে হবে 
- app.use  এর মাধ্যমে মরগ্যান ফাঙ্কশন কল করে দিতে হবে এবং পেরামিটার হিসেবে dev দিতে হবে 

```javascript 
// global middleware
const morgan = require("morgan");
app.use(morgan("dev"))
```

</details >
 <details>
<summary>Using middleware to specific routes </summary>

আমাদের যদি নির্দিষ্ট কোনো route এ middleware  ব্যবহার করতে চাই তাহলে আমাদের  সেটা  সম্ভব।  ব্যবহার করার নিয়ম হলো - 
- route  এর সেকেন্ড পেরামিটার হিসেবে ব্যবহার করা যাবে 
- একাধিক middleware ব্যবহার করা যাবে 

```javascript

app.get("/about",morgan("dev"), (req, res)=> {
    res.send("Get  About route   ")
})

```
</details>

 <details>
<summary>Custom  MiddleWare  Create  </summary>

আমরা কাস্টম middleware  বানাতে পারি যাতে করে আমরা নিজের কন্ডিশন  বা শর্ত অনুযায়ী কাজ করতে পারি।  
কাস্টম  middleware  বানাতে হলে আমাদের কে  যা  যা করতে  হবে তা  হলো - 
- একটি  ফাঙ্কশন নিতে  হবে 
-  তিনটি পেরামিটার (request, response, next) নেওয়া যায়। 
- next   ব্যবহার না করলে পরবর্তী রাউটার এ কাজ করবে না 


```javascript
function   customMiddleWare (req, res, next){
    if (req.url === "/about") {
        res.send("Sorry This page is blocked ")
    }
    next()
}

app.use(customMiddleWare)
```
</details>


 <details>
<summary>What is Express Router   </summary>
এক্সপ্রেস রাউটার ক্লাস মডুলার মাউন্টেবল রুট হ্যান্ডলার তৈরি করতে ব্যবহার করা যেতে পারে। একটি রাউটার উদাহরণ একটি সম্পূর্ণ মিডলওয়্যার এবং রাউটিং সিস্টেম; এই কারণে এটি প্রায়ই একটি মিনি-অ্যাপ হিসাবে উল্লেখ করা হয়।

```javascript 
// user  router 
const   router  = express.Router();

router.get("/login", (req, res) => {
    res.send("I am Login  router")
})

// logout router 
router.get("/logout", (req, res) => {
    res.send("I am logout  router")
})

router.get("/signup", (req, res) => {
    res.send("I am signup  router")
})

app.use("/user", router)

```


</details>