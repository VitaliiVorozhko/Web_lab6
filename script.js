//-----------------------------------------------------------------

var fbutton = document.getElementById("fbutton");
var string = document.getElementById("str");

fbutton.onclick=()=>{
    alert(findB(string.value));
}

function findB(string){
    let matches = string.match(/a+[0-9]+a+/g);
    return matches.join('\n');
}

//-----------------------------------------------------------------

var sbutton = document.getElementById("sbutton");
var text = document.getElementById("str2");

sbutton.onclick=()=>{
    alert(findFirstaaa(text.value));
}

function findFirstaaa(string){
    string = string.replace(/^aaa/, '!');
    return string;
}
//-----------------------------------------------------------------

var thbutton = document.getElementById("thbutton");
var text = document.getElementById("str3");

thbutton.onclick=()=>{
    alert(findFirstaaa(text.value));
}

function findFirstaaa(string){
    string = string.replace('', '!');
    return string;
}
//-----------------------------------------------------------------

var fourbutton = document.getElementById("fourbutton");
var hex = document.getElementById("hex");

fourbutton.onclick=()=>{
    alert(checkDate(hex.value));
}

function checkDate(hex){
    var hex_regex = /[0-9A-Fa-f]{6}/g;
    if (hex_regex.test(hex)) {
        return true;
    }
    else {
        return false;
    }
}

//-----------------------------------------------------------------

var areabutton = document.getElementById("areabutton");
var area = document.getElementById("textarea");

areabutton.onclick=()=>{
    alert(clean(area.value));
}
function clean(text){
    return text.replace(/<!--(?!>)[\S\s]*?-->/g, '')
}
