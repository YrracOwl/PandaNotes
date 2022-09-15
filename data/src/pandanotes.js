
hotkeys.filter = function(event){ return true;}; // 同时拦截input textarea select的快捷键处理
hotkeys('ctrl+s,ctrl+n', function (event, handler){
  event.preventDefault();
  switch (handler.key) {
    case 'ctrl+s': 
      (async ()=>{
        var result = saveMD();
        saveMarkdown(result);
      })();
      break;
    case 'ctrl+n': 
      (async ()=>{
        var result = saveMD();
        newMarkdown(result);
        initText("")
      })();
      break;
    default: alert(event);
  }
});

function exploerHtmls(path) {
  var newPath = "file:///" + path;
  $('#exploerHtml').attr("href",newPath)
  document.getElementById("exploerHtml").click();
}

$(document).ready(function() {
"use strict";
document.head.innerHTML = window.markdeep.stylesheet() + document.head.innerHTML;

$('#markdeep_input').on("change keyup paste", function() {
  var input = $('#markdeep_input').val() + "\n";
  $('#markdeep_preview').html(window.markdeep.format(input));  // <----------- magic
  postprocessMarkdeep();
});

});

function postprocessMarkdeep() {
// for some reason, markdeep creates an additional, superflous <p> tag right
// at the beginning, so let's get rid of that
$('.markdeep .md > p:first-child').hide();

// anchors mess up the spacing, so purge them too
$('.markdeep .md a.target').hide();

// tell mathjax to render math
$('.markdeep').each(function() {
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, $(this).get()]);
});
}

function saveMD() {
  var MDtext = $('#markdeep_input').val();
  // console.log(MDtext);
  return MDtext;
};

function initText(strs) {
  $('#markdeep_input').text(strs);
  var input = $('#markdeep_input').val() + "\n";
  $('#markdeep_preview').html(window.markdeep.format(input));  // <----------- magic
  postprocessMarkdeep();
};

function insertTxt(strs) {
  document.getElementById("markdeep_input").value = $('#markdeep_input').val() + "\n" + strs + "\n";
  var input = $('#markdeep_input').val() + "\n";
  $('#markdeep_preview').html(window.markdeep.format(input));  // <----------- magic
  postprocessMarkdeep();
};

const mark_h1 = "# 标题";
const mark_h2 = "## 标题";
const mark_h3 = "### 标题";
const mark_ol = "1. 第一个\n1. 第二个\n1. 第三个\n\n";
const mark_ul = "- 第一个\n* 第二个\n+ 第三个\n\n";
const mark_todo = `
[x] 第一级待办

[ ] 第一级待办

[ ] 子待办

[x] ~~同级子待办，用删除线修饰~~~

- [ ] 也可以用这样的方式
- [x] 不空行就是连续的子待办
- [ ] 你看是吧

`;
const mark_table = `
Maine | Iowa | Colorado 
-------|------|----------
1   |  4   |   10
ME   |  IA  |   CO
Blue  | Red  | Brown
[Table [states]: Caption with label.]

`;
const mark_image = `![Figure [numbers]: A picture of a robot](robot.jpg)`;
const mark_link = `[hyperlink](https://example.com)`;
const mark_refs = `
Markdeep also supports footnotes, endnotes [^syntax], and citations
[#Kajiya86] using a similar syntax. The actual notes and bibliography
may be placed at the bottom of the document:

~~~~~~~~~~~~~~~~none
[#Kajiya86]: James T. Kajiya. 1986 ...

[^syntax]: Endnotes look like ...
~~~~~~~~~~~~~~~~

Multiple citations (but not footnotes) may be included within brackets:

~~~~~~~~~~~~~~~~~~none
...the early Monte Carlo rendering methods [#Cook84, #Kajiya86].
~~~~~~~~~~~~~~~~~~

[#Kajiya86]: James T. Kajiya. 1986. The Rendering Equation. 
In _Proceedings of Computer Graphics and Interactive Techniques 
(SIGGRAPH '86)_, ACM, 143-150. http://dx.doi.org/10.1145/15922.15902


[^syntax]: Endnotes look like reference-style links with an empty text
field. Endnotes may not contain multiple paragraphs (sorry, David
Foster Wallace), although they may refer to _other_ endnotes.

`;
const mark_definition = `
Apple
:   Pomaceous fruit of plants of the genus Malus in 
the family Rosaceae.

Multiple paragraphs are supported.

Orange
:   The fruit of an evergreen tree of the genus Citrus.

- Can also
- Put lists
- In definitions

Definition lists with short definitions are formatted more tersely:

Grapes
: Available in purple ("red") and green ("white") varieties.

Bananas
: Only yellow.

`;
const mark_calendar = `
2022-01-01: 日程1
- 待办1
- 待办2

2022-01-10: 日程2
- 待办1
- 待办2

2022-01-25: 日程3
- 待办1
- 待办2

2022-02-21: 游玩
**可能去道观看看**


`;

var myMenu = [{
    // Menu Icon. 
    // This example uses Font Awesome Iconic Font.
    icon: '',   

    // Menu Label
    label: '<i class="ri-h-1"></i> 插入标题', 

    // Callback
    action: function(option, contextMenuIndex, optionIndex) {}, 

    // An array of submenu objects
    submenu: [
      {
      // sub menus
      icon: '',  
      label: '<i class="ri-h-1"></i> 一级标题',  
      action: function(option, contextMenuIndex, optionIndex) {
        insertTxt(mark_h1);
      }, 
      submenu: null,  
      disabled: false  
      },
      {
      // sub menus
      icon: '',  
      label: '<i class="ri-h-2"></i> 二级标题',  
      action: function(option, contextMenuIndex, optionIndex) {
        insertTxt(mark_h2);
      }, 
      submenu: null,  
      disabled: false  
      },
      {
      // sub menus
      icon: '',  
      label: '<i class="ri-h-3"></i> 三级标题',  
      action: function(option, contextMenuIndex, optionIndex) {
        insertTxt(mark_h3);
      }, 
      submenu: null,  
      disabled: false  
      },
    ],
    // is disabled?
    disabled: false   //Disabled status of the option
  },
  {
    icon: '', 
    label: '<i class="ri-list-unordered"></i> 插入无序列表 ',  
    action: function(option, contextMenuIndex, optionIndex) {insertTxt(mark_ul);}, 
    submenu: null, 
    disabled: false 
  },
  {
    icon: '', 
    label: '<i class="ri-list-ordered"></i> 插入有序列表', 
    action: function(option, contextMenuIndex, optionIndex) {insertTxt(mark_ol);},
    submenu: null,  
    disabled: false  
  },
  {
    icon: '', 
    label: '<i class="ri-links-line"></i> 插入链接', 
    action: function(option, contextMenuIndex, optionIndex) {insertTxt(mark_link);},
    submenu: null,  
    disabled: false  
  },
  {
    icon: '', 
    label: '<i class="ri-image-add-line"></i> 插入图像', 
    action: function(option, contextMenuIndex, optionIndex) {insertTxt(mark_image);},
    submenu: null,  
    disabled: false  
  },
  {
    icon: '', 
    label: '<i class="ri-task-line"></i> 插入待办', 
    action: function(option, contextMenuIndex, optionIndex) {insertTxt(mark_todo);},
    submenu: null,  
    disabled: false  
  },
  {
    icon: '', 
    label: '<i class="ri-table-2"></i> 插入表格', 
    action: function(option, contextMenuIndex, optionIndex) {insertTxt(mark_table);},
    submenu: null,  
    disabled: false  
  },
  {
    icon: '', 
    label: '<i class="ri-sticky-note-line"></i> 插入引用', 
    action: function(option, contextMenuIndex, optionIndex) {insertTxt(mark_refs);},
    submenu: null,  
    disabled: false  
  },
  {
    icon: '', 
    label: '<i class="ri-file-paper-2-line"></i> 插入定义', 
    action: function(option, contextMenuIndex, optionIndex) {insertTxt(mark_definition);},
    submenu: null,  
    disabled: false  
  },
  {
    icon: '', 
    label: '<i class="ri-calendar-todo-fill"></i> 插入日程', 
    action: function(option, contextMenuIndex, optionIndex) {insertTxt(mark_calendar);},
    submenu: null,  
    disabled: false  
  },
  {
    //Menu separator
    separator: true   
  },
  {
    icon: '', 
    label: '<i class="ri-external-link-line"></i> <a href="https://casual-effects.com/markdeep/" target="_blank">参考语法</a>', 
    action: function(option, contextMenuIndex, optionIndex) {},
    submenu: null,  
    disabled: false  
  },
];

$('#markdeep_input').on('contextmenu', function(e) {
  e.preventDefault();
  superCm.createMenu(myMenu, e);
});
