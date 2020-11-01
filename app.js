document.getElementById('b1').onclick = task1
document.getElementById('b2').onclick = task2
document.getElementById('b3').onclick = task3
document.getElementById('b4').onclick = task4

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
    const color = document.querySelector('#border_color').querySelector('input').value
    localStorage.setItem('border_color',color)
    paint()
}	

function paint(){
    const color = localStorage.getItem('border_color')
    document.querySelector('.t1').style.border = ['solid',0.3+'rem',color].join(' ')
    document.querySelector('.t2').style.border = ['solid',0.3+'rem',color].join(' ')
    document.querySelector('.t3').style.border = ['solid',0.3+'rem',color].join(' ')
    document.querySelector('.t4').style.border = ['solid',0.3+'rem',color].join(' ')
    document.querySelector('.t5').style.border = ['solid',0.3+'rem',color].join(' ')
    document.querySelector('.t6').style.border = ['solid',0.3+'rem',color].join(' ')
}