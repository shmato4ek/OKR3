document.getElementById('b1').onclick = task1
document.getElementById('b2').onclick = task2
document.getElementById('b3').onclick = task3
document.getElementById('b4').onclick = task4
document.getElementById('b5').onfocus = task5_1
document.getElementById('b5').onblur  = task5_2

window.onload = () => {
    paint()
    setTimeout(() =>{
        if(getCookie('min')&&getCookie('max')){
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
        else{
            document.querySelector('#min_max').style.visibility = 'visible'
        }
    }
    , 1)
}

function task1(){
    const text2 = document.querySelector('.tag1')
    const text6 = document.querySelector('.tag2')
    const temp = text2.textContent
    text2.textContent = text6.textContent
    text6.textContent = temp
}

function task2(){
    const d1 = 10
    const d2 = 8
    const S = 0.5*d1*d2	
    document.querySelector('.t5').querySelector('p').after('   S = ' + S + '   ')
}

function task4(){
    const color = document.getElementById('border_color').querySelector('input').value
    localStorage.setItem('border_color',color)
    paint()
}	

function paint(){
    const color = localStorage.getItem('border_color')
    document.getElementById('text1').style.border = ['solid',0.3+'rem',color].join(' ')
    document.querySelector('.t2').style.border = ['solid',0.3+'rem',color].join(' ')
    document.querySelector('.t3').style.border = ['solid',0.3+'rem',color].join(' ')
    document.querySelector('.t4').style.border = ['solid',0.3+'rem',color].join(' ')
    document.querySelector('.t5').style.border = ['solid',0.3+'rem',color].join(' ')
    document.querySelector('.t6').style.border = ['solid',0.3+'rem',color].join(' ')
}

function task5_1(){
    document.getElementById('b5').value = 'Focus'
}
function task5_2(){
    document.getElementById('b5').value = 'Task 5'
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