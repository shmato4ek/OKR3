document.getElementById('b1').onclick = task1
document.getElementById('b2').onclick = task2
document.getElementById('b3').onclick = task3
document.getElementById('b4').onclick = task4
document.getElementById('b5').onfocus = task5_1
document.getElementById('b5').onblur  = task5_2
document.querySelector('#ok1').onclick = save1
document.querySelector('#ok2').onclick = save2
document.querySelector('#ok3').onclick = save3
document.querySelector('#ok4').onclick = save4
document.querySelector('#ok5').onclick = save5
document.querySelector('#ok6').onclick = save6
document.querySelector('#d1').onclick = hide_changes1
document.querySelector('#d2').onclick = hide_changes2
document.querySelector('#d3').onclick = hide_changes3
document.querySelector('#d4').onclick = hide_changes4
document.querySelector('#d5').onclick = hide_changes5
document.querySelector('#d6').onclick = hide_changes6

window.onload = () => {
    paint()
    let flag2 = false
    let num = 0
    for(let i=1; i<7; i++){
        if(localStorage.getItem(i)) {flag2=true; num=i }
        console.log(flag2+' '+i);
    }
    if(flag2){
        hide()
        id = '#d'+num
        document.querySelector(id).style.visibility = 'visible'
        show_changes('1')
        show_changes('2')
        show_changes('3')
        show_changes('4')
        show_changes('5')
        show_changes('6')
    }
        setTimeout(() =>{
            while(getCookie('min')&&getCookie('max')){
                const min = getCookie('min')
                const max = getCookie('max')
                const cookies = confirm('Max: ' + max + ' Min: ' + min + '\nDelete cookies?')
                if(cookies){
                    removeCookie('min')
                    removeCookie('max')
                    document.querySelector('#min_max').style.visibility = 'visible'
                    location.reload()
                }
                else{
                    alert('Page contains cookies, please update it')
                }
            }
            document.querySelector('#min_max').style.visibility = 'visible'
        }
        , 1)
}

function task1(){
    const text2 = document.querySelector('#tag1')
    const text6 = document.querySelector('#tag2')
    const temp = text2.textContent
    text2.textContent = text6.textContent
    text6.textContent = temp
}

function task2(){
    const d1 = 20
    const d2 = 6
    const S = 0.5*d1*d2	
    document.querySelector('.t5').querySelector('p').after('   S = ' + S + '   ')
}

function task3(){
    let num = document.querySelector('#min_max').querySelector('input').value.split(' ')
    let flag = true
    for(let i = 0; i < num.length && flag; i++){
        num[i] = +num[i]
        if(!Number.isInteger(num[i])){flag = false}
    }
    if(num.length == 10 && flag){
        let max = num[0]
        for(let i = 0; i < num.length; i++){
            num[i] = +num[i]
            if(num[i] > max){max = num[i]}
        }
        let min = num[0]
        for(let i = 0; i < num.length; i++){
            num[i] = +num[i]
            if(num[i] < min){min = num[i]}
        }
        setCookie('min',min)
        setCookie('max',max)
        alert('Max: ' + max + ' Min: ' + min)
    }
    else{
        alert('You entered wrong data')
        document.querySelector('#min_max').querySelector('input').value = ''
    }
}

function task4(){
    const color = document.getElementById('border_color').querySelector('input').value
    localStorage.setItem('border_color',color)
    paint()
}	

function paint(){
    const color = localStorage.getItem('border_color')
    document.querySelector('.k1').style.border = ['solid',0.3+'rem',color].join(' ')
    document.querySelector('.k2').style.border = ['solid',0.3+'rem',color].join(' ')
    document.querySelector('.k3').style.border = ['solid',0.3+'rem',color].join(' ')
    document.querySelector('.k4').style.border = ['solid',0.3+'rem',color].join(' ')
    document.querySelector('.k5').style.border = ['solid',0.3+'rem',color].join(' ')
    document.querySelector('.k6').style.border = ['solid',0.3+'rem',color].join(' ')
}

function task5_1(){
    document.querySelector('#b5').value = 'Focus'
}
function task5_2(){
    document.querySelector('#b5').value = 'Submit'
} 
function hide(){
    document.querySelector('#edit1').style.visibility = 'hidden'
    document.querySelector('#edit2').style.visibility = 'hidden'
    document.querySelector('#edit3').style.visibility = 'hidden'
    document.querySelector('#edit4').style.visibility = 'hidden'
    document.querySelector('#edit5').style.visibility = 'hidden'
    document.querySelector('#edit6').style.visibility = 'hidden'
}
function save1(){
    localStorage.setItem('1', document.querySelector('#edit1')[0].value)
}
function save2(){
    localStorage.setItem('2', document.querySelector('#edit2')[0].value)
}
function save3(){
    localStorage.setItem('3', document.querySelector('#edit3')[0].value)
}
function save4(){
    localStorage.setItem('4', document.querySelector('#edit4')[0].value)
}
function save5(){
    localStorage.setItem('5', document.querySelector('#edit5')[0].value)
}
function save6(){
    localStorage.setItem('6', document.querySelector('#edit6')[0].value)
}
function show_changes(num){
    content = localStorage.getItem(num)
    clas = '.t'+num
    if(content){
        if(isValid(content)){
            document.querySelector(clas).innerHTML = content
        }
        else{
            document.querySelector(clas).textContent = content
        }
        hide()
        id = '#d'+num
        document.querySelector(id).style.visibility = 'visible'
    }
}
function hide_changes1(){
    localStorage.removeItem('1')
    document.querySelector('#d1').style.visibility = 'hidden'
    location.reload()
}
function hide_changes2(){
    localStorage.removeItem('2')
    document.querySelector('#d2').style.visibility = 'hidden'
    location.reload()
}
function hide_changes3(){
    localStorage.removeItem('3')
    document.querySelector('#d3').style.visibility = 'hidden'
    location.reload()
}
function hide_changes4(){
    localStorage.removeItem('4')
    document.querySelector('#d4').style.visibility = 'hidden'
    location.reload()
}
function hide_changes5(){
    localStorage.removeItem('5')
    document.querySelector('#d5').style.visibility = 'hidden'
    location.reload()
}
function hide_changes6(){
    localStorage.removeItem('6')
    document.querySelector('#d6').style.visibility = 'hidden'
    location.reload()
}
function getCookie(name)
{
    let cookies = document.cookie.split(';')
    for(let i = 0;i < cookies.length;i++)
        if(cookies[i].trim().split('=')[0] == name)
            return cookies[i].trim().split('=')[1]
    return null;
}
function setCookie(name, value)
{
    document.cookie = name + '=' + value;
}
function removeCookie (name)
{
    document.cookie = name+'=; max-age=-1'
}
function isValid(html)
{
    const f = document.createElement('div');
    f.innerHTML = html;
    return f.innerHTML === html;
}