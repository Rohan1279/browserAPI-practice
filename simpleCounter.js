let count = localStorage.getItem('count')
const numberField= document.getElementById('number-field');
numberField.innerText = localStorage.getItem('count');

document.getElementById('btn-plus').addEventListener('click',()=>{
    count++ ;
    setNumberFieldValue(count);
    localStorage.setItem('count', count )
})
document.getElementById('btn-minus').addEventListener('click',()=>{
    count-- ;
    setNumberFieldValue(count);
    localStorage.setItem('count', count )
})
document.getElementById('btn-clear').addEventListener('click',()=>{
    localStorage.clear();
    localStorage.setItem('count',0);
    numberField.innerText = 0;
})
const setNumberFieldValue = (count) => {
    numberField.innerText = count;
  
}
