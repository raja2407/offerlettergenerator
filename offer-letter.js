
/*
const paragraph = document.querySelector('#paragraph');

const params = new URLSearchParams(window.location.search);

params.forEach((value, key)=> {
    

    paragraph.append(`${key} = ${value}`);
    paragraph.append(document.createElement('br'));
});
*/

const myValues = window.location.search;

const urlparams = new URLSearchParams(myValues);

const param1 = urlparams.get('fname');
console.log("Candidatename:",param1);
document.getElementById('lblName').innerHTML = param1;

const param2 = urlparams.get('candidatelocation');
console.log("Candidatelocation:",param2);
document.getElementById('lblcandidatelocation').innerHTML = param2;

const param3 = urlparams.get('joininglocation');
console.log("joininglocation:",param3);
document.getElementById('lbljoininglocation').innerHTML = param3;

const param4 = urlparams.get('designation');
console.log("designation:",param4);
document.getElementById('lbldesignation').innerHTML = param4;

const param5 = urlparams.get('grade');
console.log("grade:",param5);
document.getElementById('lblgrade').innerHTML = param5;

const param6 = urlparams.get('notice');
console.log("notice-period:",param6);
document.getElementById('lblnotice').innerHTML = param6;

const param7 = urlparams.get('date');
console.log("Date:",param7);
document.getElementById('lbldatejoining').innerHTML = param7;

const param8 = urlparams.get('dateg');
console.log("dateofgeneration:",param8);
document.getElementById('lbldateg').innerHTML = param8;


