const cstSel = customSelect(document.getElementsByClassName('select'));
cstSel.forEach((cs)=>{
    cs.container.addEventListener('custom-select:close', (e) => {
        if(e.target.querySelector('#marke')){
            markeFilterInput.style.display = 'none';
            markeFilterInput.value = '';
            markeFilterInput.dispatchEvent(new Event('input'));
        }
        if(e.target.querySelector('#modell')){
            modelFilterInput.style.display = 'none';
            modelFilterInput.value = '';
            modelFilterInput.dispatchEvent(new Event('input'));
        }         
        if(e.target.querySelector('.select').value){
            let formField = e.target.closest('.form_field');
            formField.classList.add('focused');
        }
    });
    cs.container.addEventListener('custom-select:open', (e) => {
        e.target.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});    
        if(e.target.querySelector('#marke')){
            markeFilterInput.style.display = 'block';
            markeFilterInput.value = '';
            markeFilterInput.dispatchEvent(new Event('input'));
        }   
        if(e.target.querySelector('#modell')){
            modelFilterInput.style.display = 'block';
            modelFilterInput.value = '';
            modelFilterInput.dispatchEvent(new Event('input'));
        }   
        let formField = e.target.closest('.form_field');
        formField.classList.remove('focused');
    });
    cs.select.addEventListener('change', (e)=>{
        if(e.target.id == 'fahrzeugtyp'){
            let selected = e.target.parentNode.querySelector('.is-selected');
            e.target.parentNode.querySelector('.custom-select-opener').innerHTML = `
                <span>${selected.innerHTML}</span>
            `
        }
    })
});

let placeholders = document.querySelectorAll('.custom-select-option:nth-child(1)');
for(let p of placeholders) {
    p.style.display = 'none';
}

let customInputs = document.getElementsByClassName('custom_input');
for(let ci of customInputs) {
    ci.addEventListener('focusout', (e) => { 
        if(e.target.value){
            let formField = e.target.closest('.form_field');      
            formField.classList.add('focused');
        }
    });
    ci.addEventListener('focusin', (e) => {       
        let formField = e.target.closest('.form_field');
        formField.classList.remove('focused');
    });
}
    
let psKw = document.getElementById('ps_kw');
let ps = document.getElementById('ps');
let kw = document.getElementById('kw');
psKw.addEventListener('change',(e)=>{
    if(e.target.checked) {
        kw.classList.add('toggle_checked');
        ps.classList.remove('toggle_checked');
    }
    else {
        kw.classList.remove('toggle_checked');
        ps.classList.add('toggle_checked');
    }
});

//Cars Icons
let kleinwagen = document.createElement('i');
kleinwagen.classList.add('icon-Kleinwagen');
let cabrio = document.createElement('i');
cabrio.classList.add('icon-Cabrio');
let limousine = document.createElement('i');
limousine.classList.add('icon-Limousine');
let kombi = document.createElement('i');
kombi.classList.add('icon-Kombi');
let sportwagenCoupe = document.createElement('i');
sportwagenCoupe.classList.add('icon-Coupe');
let suvGelandewagen = document.createElement('i');
suvGelandewagen.classList.add('icon-Gelandewagen');
let VAN = document.createElement('i');
VAN.classList.add('icon-VAN');
document.querySelector('.fahrzeugtyp .custom-select-option:nth-child(2)').prepend(kombi);
document.querySelector('.fahrzeugtyp .custom-select-option:nth-child(3)').prepend(limousine);
document.querySelector('.fahrzeugtyp .custom-select-option:nth-child(4)').prepend(kleinwagen);
document.querySelector('.fahrzeugtyp .custom-select-option:nth-child(5)').prepend(cabrio);
document.querySelector('.fahrzeugtyp .custom-select-option:nth-child(6)').prepend(sportwagenCoupe);
document.querySelector('.fahrzeugtyp .custom-select-option:nth-child(7)').prepend(suvGelandewagen);
document.querySelector('.fahrzeugtyp .custom-select-option:nth-child(8)').prepend(VAN);

//Filter
let unbekannte = document.createElement('p');
unbekannte.id = 'unbekannte';
unbekannte.innerText = 'Unbekannte Marke';

let markeSelect = cstSel[0];
let modelSelect = cstSel[1];

let markeFilterInput = document.createElement('input');
markeFilterInput.classList.add('search_filter');
markeFilterInput.type = 'text';
markeFilterInput.placeholder = 'Search';
markeFilterInput.id = 'marke_filter';
markeSelect.container.prepend(markeFilterInput);

let modelFilterInput = document.createElement('input');
modelFilterInput.classList.add('search_filter');
modelFilterInput.type = 'text';
modelFilterInput.placeholder = 'Search';
modelFilterInput.id = 'marke_filter';
modelSelect.container.prepend(modelFilterInput);

// markeFilterInput.addEventListener('click',(e)=>{
//     setTimeout(()=>{markeSelect.open = true;},0)
// })

modelFilterInput.addEventListener('input',(e)=> {
    let formField = e.target.closest('.form_field');
    formField.classList.remove('focused');
    if(modelSelect.container.querySelector('.custom-select-panel #unbekannte')){
        modelSelect.container.querySelector('.custom-select-panel #unbekannte').remove();
    }
    let query = e.target.value;
    let isAllHidden = true;
    for(let option of modelSelect.container.querySelectorAll('.custom-select-option')) {
        option.classList.remove('hide');
        if(!option.innerHTML.toLowerCase().startsWith(query.toLowerCase())) {
            option.classList.add('hide');
        }
        else {
            isAllHidden = false;
        }
    }
    if(isAllHidden) {
        modelSelect.container.querySelector('.custom-select-panel').append(unbekannte);
        formField.classList.add('focused');
    }   
})

markeFilterInput.addEventListener('input',(e)=> {
    let formField = e.target.closest('.form_field');
    formField.classList.remove('focused');
    if(markeSelect.container.querySelector('.custom-select-panel #unbekannte')){
        markeSelect.container.querySelector('.custom-select-panel #unbekannte').remove();
    }
    let query = e.target.value;
    let isAllHidden = true;
    for(let option of markeSelect.container.querySelectorAll('.custom-select-option')) {
        option.classList.remove('hide');
        if(!option.innerHTML.toLowerCase().startsWith(query.toLowerCase())) {
            option.classList.add('hide');
        }
        else {
            isAllHidden = false;
        }
    }
    if(isAllHidden) {
        markeSelect.container.querySelector('.custom-select-panel').append(unbekannte);
        formField.classList.add('focused');
    }   
})


//Form Submitting
let form = document.getElementById('form');
let submit = document.getElementById('submit_btn');
let formFields = document.getElementsByClassName('form_field');
let ausstattungFormField = document.getElementById('modal_form_field');
submit.addEventListener('click', (e)=>{
    for(let f of formFields) {
        if(!f.classList.contains('optional_field')){
            f.classList.add('focused');
        }
    }

    let isAusstattungReady = document.querySelectorAll('.custom_checkbox:checked').length > 0;

    if(!isAusstattungReady) {
        ausstattungFormField.classList.add('ausstattung_invalid');
    }

    if(form.checkValidity() && isAusstattungReady) {
        form.submit();
    }
})