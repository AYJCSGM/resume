/**********************************文档区*****************************************/
var text1=`/*
* 大家好，我是AYJCSGM。
* 下面我来简单介绍一下我自己。
* 但是文字介绍过于单调。
* 今天，来点不一样的。
* 来做一个动态简历。
*/

*{
  transition: all 1s;
}
html{
  background: #eee;
}
#code{
  border: 1px solid #aaa;
  padding: 3%;
}

/* 这样太单调了，给代码来点颜色 */
.token.punctuation {
  color: #999;
}
.token.selector {
  color: #690;
}
.token.property {
  color: #905;
}

/* 在加上动态阴影吧 */
#code{
  animation: glow 800ms ease-out infinite alternate;
}

/* 现在正式开始 */

/* 我需要一张白纸 */
#paper {
  position: fixed;
  right: 0;
  width: 48%;
  height: 100vh;
  padding: 16px;
  background: #ccc;
}
#paper>.content{
  background: #fff;
  width: 100%;
  height: 100%;
  padding: 20px;
}

/* 于是我就可以在白纸上写字了，请看右边 */

`;

var text2=`# 自我介绍

黄秋平
----
23岁，Java软件工程师，三年Java EE 从业经验，目前在北京工作。
有良好的文档编写和代码书写规范，能独立解决问题、百折不挠、细节控。
<br/>


技能
----
* 后端开发
* 聚合支付
* 单点登录
* 权限管理
* 公众号/小程序开发
* API接口开发
* Linux
* 开源爱好者
* 博客系统

技术及语言
----
  - **Java**: SpringBoot、SpringCloud、SpringMVC、MyBatis、Shiro、Freemarker
  - **前端**: VueJs、Bootstrap、LayUI、jQuery UI
  - **数据库**: MySQL/MariaDB、SQLServer、Oracle、MongoDB、redis、memcached
  - **web 服务器**: Nginx、Tomcat、Apache、Jetty
  - **OS**: Linux、Windows
  - **Others**: Git、Svn、Maven、XMind、Visio、IDEA

工作经历
----
1. [北京江融信科技有限公司](http://www.jiangrongxin.com/)


开源项目
----
1. [基于SpringBoot + Semantic UI + JPA的个人博客](https://github.com/AYJCSGM/spring-boot-blog)
2. [问卷调查系统](https://github.com/AYJCSGM/survey-system)
3. [企业级博客](https://github.com/AYJCSGM/Enterprise-Blog)
4. [客户管理系统](https://github.com/AYJCSGM/ClientManageSystem)
5. [一个会动的简历](https://github.com/AYJCSGM/resume)
6. [仓库管理系统](https://gitee.com/ayjcsgm/WM)
7. [AYJCSGM的技术博客网站](https://github.com/AYJCSGM/AYJCSGM.github.io)

链接
----
* [技术博客](https://ayjcsgm.github.io/)
* [GitHub](https://github.com/AYJCSGM)
* [码云](https://gitee.com/ayjcsgm)
* [CSDN](https://blog.csdn.net/weixin_43664418)
* [开发笔记](https://github.com/AYJCSGM/AYJCSGM.github.io)

[归档文章](https://ayjcsgm.github.io/)
----
1. [Java](https://ayjcsgm.github.io/tags/java/)
2. [Linux](https://ayjcsgm.github.io/tags/Linux/)
3. [Spring](https://ayjcsgm.github.io/tags/Spring)
4. [MySQL](https://ayjcsgm.github.io/tags/SQL)
5. [Hexo](https://ayjcsgm.github.io/tags/Hexo)
6. [Docker](https://ayjcsgm.github.io/tags/Docker/)

联系我
----
* 联系QQ：**1141341095** 
* 主要涉及技术：**Java后端开发**、**聚合支付**、**公众号开发**、**开源爱好者**、**Linux** 

> 如果你喜欢这个效果，Fork [我的项目](https://github.com/AYJCSGM/resume)，打造你自己的简历！
`;

var text3=`
/* 由于使用的是Mmarkdown格式 */
/* 需要转换为Html */

/*
* 接下来使用一个优秀的库
* 将我们的Mmarkdown转换为Html
*/

`;
var text4=`
/*
 * 这就是我的会动的简历
 * 谢谢观看
 */
`

/**********************************执行代码区*****************************************/
writeLeft(()=>{
  qx(()=>{
      createPaper(()=>{
      writeRight(()=>{
        mdHtml(()=>{
          md(()=>{
            end()
          })
        })
      })
    })
  })
})




/**********************************函数区*****************************************/
/**********************************把text1的代码添加到左边区域和style标签中*****************************************/
function writeLeft(fn){
  let code=document.getElementById("code")
  let styleTag=document.getElementById("styleTag")
  let n=0;
  let intervalId1=setInterval(function(){
    code.innerHTML=Prism.highlight(text1.substring(0,n), Prism.languages.css);
    styleTag.innerHTML=text1.substring(0,n);
    code.scrollTop=code.scrollHeight;
    n += 1
    if(n>=text1.length){
      window.clearInterval(intervalId1);
      fn();
    }
  },10)
}

/***********************************开始在右边创建一个空白纸用来写markdown******************************************/
function createPaper(fn){
  let paper=document.createElement('div');
  paper.id='paper';
  let paperPre=document.createElement('pre');
  paperPre.className='content';
  paper.appendChild(paperPre);
  document.body.appendChild(paper);
  fn();
}

/**********************************把text2的代码添加到右边区域中*****************************************/
function writeRight(fn){
  let n1=0;
  let intervalId2=setInterval(function(){
    let rightCode=document.querySelector('#paper>.content');
    rightCode.innerHTML=text2.substring(0,n1);
    rightCode.scrollTop=rightCode.scrollHeight;
    n1 += 1
    if(n1>=text2.length){
      window.clearInterval(intervalId2);
      fn();
    }
  },10)
}

/**********************************将左边倾斜*****************************************/
function qx(fn){
  let code=`#left{transform:skewY(1deg);}`;
  let pre=styleTag.innerHTML;
  styleTag.innerHTML=pre+code;
  fn();
}

/**********************************把text3的代码添加到左边区域中*****************************************/
function mdHtml(fn){
  let code=document.getElementById("code")
  let styleTag=document.getElementById("styleTag")
  let prefix=code.innerHTML
  let n=0;
  let intervalId3=setInterval(function(){
    code.innerHTML=prefix+Prism.highlight(text3.substring(0,n), Prism.languages.css);
    code.scrollTop=code.scrollHeight;
    n += 1
    if(n>=text3.length){
      window.clearInterval(intervalId3);
      fn();
    }
  },10)
}

/**********************************把markdown转换为html*****************************************/
function md(fn){
  let div = document.createElement('div');
  div.className = 'html markdown-body content';
  div.innerHTML = marked(text2);
  let markdownContainer = document.querySelector('#paper > .content');
  markdownContainer.replaceWith(div);
  fn();
}

/**********************************结束语*****************************************/
function end(){
  let code=document.getElementById("code")
  let styleTag=document.getElementById("styleTag")
  let pre=code.innerHTML
  let n=0;
  let intervalId4=setInterval(function(){
    code.innerHTML=pre+Prism.highlight(text4.substring(0,n), Prism.languages.css);
    code.scrollTop=code.scrollHeight;
    n += 1
    if(n>=text4.length){
      window.clearInterval(intervalId4);
    }
  },10)
}



