const personInfo = {};


const getInputFieldById = (id) => {
    const inputField = document.getElementById(id);
    console.log(inputField.value)
    return inputField;
} 
document.getElementById('btn-delete-name').addEventListener('click',()=>{
    // const name = getInputValueById('name-field');
    personInfo['name'] = '';

})
document.getElementById('btn-send-name').addEventListener('click',()=>{
    const name = getInputFieldById('name-field').value;
    personInfo['name'] = name;
    console.log(personInfo)
    getInputFieldById('name-field').value = '';
})
document.getElementById('btn-delete-email').addEventListener('click',()=>{
    // const email = getInputValueById('email-field');
    personInfo['email'] = '';

})
document.getElementById('btn-send-email').addEventListener('click',()=>{
    const email = getInputFieldById('email-field').value;
    personInfo['email'] = email;
    console.log(personInfo)
    getInputFieldById('email-field').value = '';
    
})
document.getElementById('btn-delete-message').addEventListener('click',()=>{
    document.getElementById('message-field').value = '';
    personInfo['message'] = '';

})
document.getElementById('btn-send-message').addEventListener('click',()=>{
    const message = getInputFieldById('message-field').value;
    personInfo['message'] = message;
    console.log(personInfo)
    getInputFieldById('message-field').value = '';
 
    
})
document.getElementById('btn-reset').addEventListener('click',()=> {
    localStorage.clear();
})
document.getElementById('btn-send').addEventListener('click',()=> {
    localStorage.setItem('personInfo',JSON.stringify(personInfo));
})