window.onload = setViewPort;
window.onresize = setViewPort;
let viewport = document.querySelector("meta[name=viewport]");
let viewheight = window.innerHeight;
function setViewPort() {
    let viewwidth = window.innerWidth;
    viewport.setAttribute("content", "height=" + viewheight + ", width=" + viewwidth + ", initial-scale=1.0, maximum-scale=1.0, user-scalable=0");
};

const mobileForm = document.getElementById('mobile_form');

const downAnchor = document.getElementById('mobile_scroll-info');
const customMobileInputs = document.querySelectorAll('.mobile_custom-input input[type=text], .mobile_custom-input textarea');
for(let i of customMobileInputs) {
    i.addEventListener('focusout', (e) => {
        if(i.value){  
            i.classList.add('focused');
        }
        downAnchor.classList.remove('hidden');
    });
    i.addEventListener('focusin', (e) => {       
        i.classList.remove('focused');
        downAnchor.classList.add('hidden');
    });
}

function focuseInAllMobileInputs() {
    for(let i of customMobileInputs) {
        i.classList.add('focused');
    }
}

function focuseOutAllMobileInputs() {
    for(let i of customMobileInputs) {
        i.classList.remove('focused');
    }
}

// scroll

function scrollDown() {
    window.scrollBy({
        top: window.innerHeight / 1.5,
        behavior: 'smooth',
      });
}

let isScrolledToPageBottom = false;
window.onscroll = function(e) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight-60) {
        downAnchor.classList.add('hidden')
        isScrolledToPageBottom = true;
    }
    else if(isScrolledToPageBottom) {
        isScrolledToPageBottom = false;
        downAnchor.classList.remove('hidden')
    }
};


//------------- Modals -------------
//Reset
const mobileReset = document.getElementById('mobile_reset');
const resetModal = document.getElementById('reset_modal');

mobileReset.addEventListener('click', (e) => {
    resetModal.style.display = "flex";
    document.body.classList.add('modal-open');
})

function closeResetModal(e) {
    e.preventDefault();
    resetModal.style.display = "none";
    document.body.classList.remove('modal-open');
}

function resetForm(e) {
    e.preventDefault();
    closeResetModal(e);
    resetMarkeModal(e);
    resetModelModal(e);
    resetFahrzeugtypModal(e);
    resetGetriebeModal(e);
    resetSportausstattungModal(e);
    resetInnenausstattungModal(e);
    resetScheinwerferModal(e);
    resetEinparkhilfeModal(e);
    resetSonstigeAusstatungModal(e);
    resetMwstModal(e);
    resetMobileFileList();
    mobileKw.classList.remove('mobile_toggle_checked');
    mobilePs.classList.add('mobile_toggle_checked');
    mobileForm.reset();
    focuseOutAllMobileInputs();
    closeResetModal(e);
}

//Marke
const markeModal = document.getElementById('mobile_marke_modal');
const mobileMarkeInputs = markeModal.querySelectorAll('.mobile_radio_variant input');
const mobileMarkeValue = document.getElementById('mobile_marke_value');
const mobileMarkeButton = document.getElementById('mobile_marke_button');

mobileMarkeButton.addEventListener('click', (e) => {
    e.preventDefault();
    mobileMarkeButton.classList.remove('focused');
    openMarkeModal()
})

for(let i of mobileMarkeInputs) {
    i.addEventListener('change', (e)=>{
        if(e.target.checked) {
            mobileMarkeValue.innerHTML = e.target.value;
            mobileMarkeValue.classList.add('filled');
            mobileMarkeButton.classList.add('valid');
        }
        else {
            mobileMarkeValue.innerHTML = 'Bitte wahlen'
            mobileMarkeValue.classList.remove('filled');
            mobileMarkeButton.classList.remove('valid');
        }
    })
}

function openMarkeModal() {
    markeModal.style.display = "flex";
    document.body.classList.add('modal-open');
}

function resetMarkeModal(e) {
    e.preventDefault();
    for(let i of mobileMarkeInputs) {
        if(i.checked) {
            i.checked = false;
            i.dispatchEvent(new Event('change'));
        }
    }
    closeMarkeModal(e);
}

function closeMarkeModal(e) {
    e.preventDefault();
    markeModal.style.display = "none";
    document.body.classList.remove('modal-open');
}

//Model
const modelModal = document.getElementById('mobile_model_modal');
const mobileModelInputs = modelModal.querySelectorAll('.mobile_radio_variant input');
const mobileModelValue = document.getElementById('mobile_model_value');
const mobileModelButton = document.getElementById('mobile_model_button');

mobileModelButton.addEventListener('click', (e) => {
    e.preventDefault();
    mobileModelButton.classList.remove('focused');
    openModelModal()
})

for(let i of mobileModelInputs) {
    i.addEventListener('change', (e)=>{
        if(e.target.checked) {
            mobileModelValue.innerHTML = e.target.value;
            mobileModelValue.classList.add('filled');
            mobileModelButton.classList.add('valid');
        }
        else {
            mobileModelValue.innerHTML = 'Bitte wahlen'
            mobileModelValue.classList.remove('filled');
            mobileModelButton.classList.remove('valid');
        }
    })
}

function openModelModal() {
    modelModal.style.display = "flex";
    document.body.classList.add('modal-open');
}

function resetModelModal(e) {
    e.preventDefault();
    for(let i of mobileModelInputs) {
        if(i.checked) {
            i.checked = false;
            i.dispatchEvent(new Event('change'));
        }
    }
    closeModelModal(e);
}

function closeModelModal(e) {
    e.preventDefault();
    modelModal.style.display = "none";
    document.body.classList.remove('modal-open');
}

//Fahrzeugtyp
const fahrzeugtypModal = document.getElementById('mobile_fahrzeugtyp_modal');
const mobileFahrzeugtypInputs = fahrzeugtypModal.querySelectorAll('.mobile_radio_variant input');
const mobileFahrzeugtypValue = document.getElementById('mobile_fahrzeugtyp_value');
const mobileFahrzeugtypButton = document.getElementById('mobile_fahrzeugtyp_button');

mobileFahrzeugtypButton.addEventListener('click', (e) => {
    e.preventDefault();
    mobileFahrzeugtypButton.classList.remove('focused');
    openFahrzeugtypModal()
})

for(let i of mobileFahrzeugtypInputs) {
    i.addEventListener('change', (e)=>{
        if(e.target.checked) {
            mobileFahrzeugtypValue.innerHTML = e.target.value;
            mobileFahrzeugtypValue.classList.add('filled');
            mobileFahrzeugtypButton.classList.add('valid');
        }
        else {
            mobileFahrzeugtypValue.innerHTML = 'Bitte wahlen'
            mobileFahrzeugtypValue.classList.remove('filled');
            mobileFahrzeugtypButton.classList.remove('valid');
        }
    })
}

function openFahrzeugtypModal() {
    fahrzeugtypModal.style.display = "flex";
    document.body.classList.add('modal-open');
}

function resetFahrzeugtypModal(e) {
    e.preventDefault();
    for(let i of mobileFahrzeugtypInputs) {
        if(i.checked) {
            i.checked = false;
            i.dispatchEvent(new Event('change'));
        }
    }
    closeFahrzeugtypModal(e);
}

function closeFahrzeugtypModal(e) {
    e.preventDefault();
    fahrzeugtypModal.style.display = "none";
    document.body.classList.remove('modal-open');
}

//Getriebe
const getriebeModal = document.getElementById('mobile_getriebe_modal');
const mobileGetriebeInputs = getriebeModal.querySelectorAll('.mobile_radio_variant input');
const mobileGetriebeValue = document.getElementById('mobile_getriebe_value');
const mobileGetriebeButton = document.getElementById('mobile_getriebe_button');

mobileGetriebeButton.addEventListener('click', (e) => {
    e.preventDefault();
    mobileGetriebeButton.classList.remove('focused');
    openGetriebeModal()
})

for(let i of mobileGetriebeInputs) {
    i.addEventListener('change', (e)=>{
        if(e.target.checked) {
            mobileGetriebeValue.innerHTML = e.target.value;
            mobileGetriebeValue.classList.add('filled');
            mobileGetriebeButton.classList.add('valid');
        }
        else {
            mobileGetriebeValue.innerHTML = 'Bitte wahlen'
            mobileGetriebeValue.classList.remove('filled');
            mobileGetriebeButton.classList.remove('valid');
        }
    })
}

function openGetriebeModal() {
    getriebeModal.style.display = "flex";
    document.body.classList.add('modal-open');
}

function resetGetriebeModal(e) {
    e.preventDefault();
    for(let i of mobileGetriebeInputs) {
        if(i.checked) {
            i.checked = false;
            i.dispatchEvent(new Event('change'));
        }
    }
    closeGetriebeModal(e);
}

function closeGetriebeModal(e) {
    e.preventDefault();
    getriebeModal.style.display = "none";
    document.body.classList.remove('modal-open');
}

//Sportausstattung
const sportausstattungModal = document.getElementById('mobile_sportausstattung_modal');
const mobileSportausstattungInputs = sportausstattungModal.querySelectorAll('.mobile_radio_variant input');
const mobileSportausstattungButton = document.getElementById('mobile_sportausstattung_button');
const mobileSportausstattungListElement = document.getElementById('mobile_sportausstattung_list');
let mobileSportausstattungList = [];

mobileSportausstattungButton.addEventListener('click', (e) => {
    e.preventDefault();
    e.target.classList.remove('focused');
    openSportausstattungModal()
})

function openSportausstattungModal() {
    sportausstattungModal.style.display = "flex";
    document.body.classList.add('modal-open');
}

function resetSportausstattungModal(e) {
    e.preventDefault();
    for(let i of mobileSportausstattungInputs) {
        if(i.checked) {
            i.checked = false;
            i.dispatchEvent(new Event('change'));
        }
    }
    mobileSportausstattungList = [];
    drawSportausstattungList();
    mobileSportausstattungButton.classList.remove('filled');
    closeSportausstattungModal(e);
}

function closeSportausstattungModal(e) {
    e.preventDefault();
    sportausstattungModal.style.display = "none";
    document.body.classList.remove('modal-open');
}

for(let i of mobileSportausstattungInputs) {
    i.addEventListener('input', (e) => {
        if(i.checked) {
            let label = i.nextElementSibling;
            let data = {
                name: label.textContent.replace(/[\r\n ]+/g," "),
                id: i.id
            } 
            mobileSportausstattungList.push(data);
            drawSportausstattungList();
            mobileSportausstattungButton.classList.add('filled');
        }
        else {
            mobileSportausstattungList = mobileSportausstattungList.filter(data => data.id != i.id);
            drawSportausstattungList();
            if(mobileSportausstattungList.length === 0){
                mobileSportausstattungButton.classList.remove('filled');
            }
        }
    });
}

function drawSportausstattungList() {
    mobileSportausstattungListElement.innerHTML = '';
    mobileSportausstattungList.forEach((data) => {
        mobileSportausstattungListElement.innerHTML += `
            <li><label for="${data.id}">${data.name}X</label></li>
        `
    })
}

//Innenausstattung
const innenausstattungModal = document.getElementById('mobile_innenausstattung_modal');
const mobileInnenausstattungInputs = innenausstattungModal.querySelectorAll('.mobile_radio_variant input');
const mobileInnenausstattungButton = document.getElementById('mobile_innenausstattung_button');
const mobileInnenausstattungListElement = document.getElementById('mobile_innenausstattung_list');
let mobileInnenausstattungList = [];

mobileInnenausstattungButton.addEventListener('click', (e) => {
    e.preventDefault();
    e.target.classList.remove('focused');
    openInnenausstattungModal()
})

function openInnenausstattungModal() {
    innenausstattungModal.style.display = "flex";
    document.body.classList.add('modal-open');
}

function resetInnenausstattungModal(e) {
    e.preventDefault();
    for(let i of mobileInnenausstattungInputs) {
        if(i.checked) {
            i.checked = false;
            i.dispatchEvent(new Event('change'));
        }
    }
    mobileInnenausstattungList = [];
    drawInnenausstattungList();
    mobileInnenausstattungButton.classList.remove('filled');
    closeInnenausstattungModal(e);
}

function closeInnenausstattungModal(e) {
    e.preventDefault();
    innenausstattungModal.style.display = "none";
    document.body.classList.remove('modal-open');
}

for(let i of mobileInnenausstattungInputs) {
    i.addEventListener('input', (e) => {
        if(i.checked) {
            let label = i.nextElementSibling;
            let data = {
                name: label.textContent.replace(/[\r\n ]+/g," "),
                id: i.id
            } 
            mobileInnenausstattungList.push(data);
            drawInnenausstattungList();
            mobileInnenausstattungButton.classList.add('filled');
        }
        else {
            mobileInnenausstattungList = mobileInnenausstattungList.filter(data => data.id != i.id);
            drawInnenausstattungList();
            if(mobileInnenausstattungList.length === 0){
                mobileInnenausstattungButton.classList.remove('filled');
            }
        }
    });
}

function drawInnenausstattungList() {
    mobileInnenausstattungListElement.innerHTML = '';
    mobileInnenausstattungList.forEach((data) => {
        mobileInnenausstattungListElement.innerHTML += `
            <li><label for="${data.id}">${data.name}X</label></li>
        `
    })
}

//Scheinwerfer
const scheinwerferModal = document.getElementById('mobile_scheinwerfer_modal');
const mobileScheinwerferInputs = scheinwerferModal.querySelectorAll('.mobile_radio_variant input');
const mobileScheinwerferButton = document.getElementById('mobile_scheinwerfer_button');
const mobileScheinwerferListElement = document.getElementById('mobile_scheinwerfer_list');
let mobileScheinwerferList = [];

mobileScheinwerferButton.addEventListener('click', (e) => {
    e.preventDefault();
    e.target.classList.remove('focused');
    openScheinwerferModal()
})

function openScheinwerferModal() {
    scheinwerferModal.style.display = "flex";
    document.body.classList.add('modal-open');
}

function resetScheinwerferModal(e) {
    e.preventDefault();
    for(let i of mobileScheinwerferInputs) {
        if(i.checked) {
            i.checked = false;
            i.dispatchEvent(new Event('change'));
        }
    }
    mobileScheinwerferList = [];
    drawScheinwerferList();
    mobileScheinwerferButton.classList.remove('filled');
    closeScheinwerferModal(e);
}

function closeScheinwerferModal(e) {
    e.preventDefault();
    scheinwerferModal.style.display = "none";
    document.body.classList.remove('modal-open');
}

for(let i of mobileScheinwerferInputs) {
    i.addEventListener('input', (e) => {
        if(i.checked) {
            let label = i.nextElementSibling;
            let data = {
                name: label.textContent.replace(/[\r\n ]+/g," "),
                id: i.id
            } 
            mobileScheinwerferList.push(data);
            drawScheinwerferList();
            mobileScheinwerferButton.classList.add('filled');
        }
        else {
            mobileScheinwerferList = mobileScheinwerferList.filter(data => data.id != i.id);
            drawScheinwerferList();
            if(mobileScheinwerferList.length === 0){
                mobileScheinwerferButton.classList.remove('filled');
            }
        }
    });
}

function drawScheinwerferList() {
    mobileScheinwerferListElement.innerHTML = '';
    mobileScheinwerferList.forEach((data) => {
        mobileScheinwerferListElement.innerHTML += `
            <li><label for="${data.id}">${data.name}X</label></li>
        `
    })
}

//Einparkhilfe
const einparkhilfeModal = document.getElementById('mobile_einparkhilfe_modal');
const mobileEinparkhilfeInputs = einparkhilfeModal.querySelectorAll('.mobile_radio_variant input');
const mobileEinparkhilfeButton = document.getElementById('mobile_einparkhilfe_button');
const mobileEinparkhilfeListElement = document.getElementById('mobile_einparkhilfe_list');
let mobileEinparkhilfeList = [];

mobileEinparkhilfeButton.addEventListener('click', (e) => {
    e.preventDefault();
    e.target.classList.remove('focused');
    openEinparkhilfeModal()
})

function openEinparkhilfeModal() {
    einparkhilfeModal.style.display = "flex";
    document.body.classList.add('modal-open');
}

function resetEinparkhilfeModal(e) {
    e.preventDefault();
    for(let i of mobileEinparkhilfeInputs) {
        if(i.checked) {
            i.checked = false;
            i.dispatchEvent(new Event('change'));
        }
    }
    mobileEinparkhilfeList = [];
    drawEinparkhilfeList();
    mobileEinparkhilfeButton.classList.remove('filled');
    closeEinparkhilfeModal(e);
}

function closeEinparkhilfeModal(e) {
    e.preventDefault();
    einparkhilfeModal.style.display = "none";
    document.body.classList.remove('modal-open');
}

for(let i of mobileEinparkhilfeInputs) {
    i.addEventListener('input', (e) => {
        if(i.checked) {
            let label = i.nextElementSibling;
            let data = {
                name: label.textContent.replace(/[\r\n ]+/g," "),
                id: i.id
            } 
            mobileEinparkhilfeList.push(data);
            drawEinparkhilfeList();
            mobileEinparkhilfeButton.classList.add('filled');
        }
        else {
            mobileEinparkhilfeList = mobileEinparkhilfeList.filter(data => data.id != i.id);
            drawEinparkhilfeList();
            if(mobileEinparkhilfeList.length === 0){
                mobileEinparkhilfeButton.classList.remove('filled');
            }
        }
    });
}

function drawEinparkhilfeList() {
    mobileEinparkhilfeListElement.innerHTML = '';
    mobileEinparkhilfeList.forEach((data) => {
        mobileEinparkhilfeListElement.innerHTML += `
            <li><label for="${data.id}">${data.name}X</label></li>
        `
    })
}


//SonstigeAusstatung
const sonstigeAusstatungModal = document.getElementById('mobile_sonstige_ausstatung_modal');
const mobileSonstigeAusstatungInputs = sonstigeAusstatungModal.querySelectorAll('.mobile_radio_variant input');
const mobileSonstigeAusstatungButton = document.getElementById('mobile_sonstige_ausstatung_button');
const mobileSonstigeAusstatungListElement = document.getElementById('mobile_sonstige_ausstatung_list');
let mobileSonstigeAusstatungList = [];

mobileSonstigeAusstatungButton.addEventListener('click', (e) => {
    e.preventDefault();
    e.target.classList.remove('focused');
    openSonstigeAusstatungModal()
})

function openSonstigeAusstatungModal() {
    sonstigeAusstatungModal.style.display = "flex";
    document.body.classList.add('modal-open');
}

function resetSonstigeAusstatungModal(e) {
    e.preventDefault();
    for(let i of mobileSonstigeAusstatungInputs) {
        if(i.checked) {
            i.checked = false;
            i.dispatchEvent(new Event('change'));
        }
    }
    mobileSonstigeAusstatungList = [];
    drawSonstigeAusstatungList();
    mobileSonstigeAusstatungButton.classList.remove('filled');
    closeSonstigeAusstatungModal(e);
}

function closeSonstigeAusstatungModal(e) {
    e.preventDefault();
    sonstigeAusstatungModal.style.display = "none";
    document.body.classList.remove('modal-open');
}

for(let i of mobileSonstigeAusstatungInputs) {
    i.addEventListener('input', (e) => {
        if(i.checked) {
            let label = i.nextElementSibling;
            let data = {
                name: label.textContent.replace(/[\r\n ]+/g," "),
                id: i.id
            } 
            mobileSonstigeAusstatungList.push(data);
            drawSonstigeAusstatungList();
            mobileSonstigeAusstatungButton.classList.add('filled');
        }
        else {
            mobileSonstigeAusstatungList = mobileSonstigeAusstatungList.filter(data => data.id != i.id);
            drawSonstigeAusstatungList();
            if(mobileSonstigeAusstatungList.length === 0){
                mobileSonstigeAusstatungButton.classList.remove('filled');
            }
        }
    });
}

function drawSonstigeAusstatungList() {
    mobileSonstigeAusstatungListElement.innerHTML = '';
    mobileSonstigeAusstatungList.forEach((data) => {
        mobileSonstigeAusstatungListElement.innerHTML += `
            <li><label for="${data.id}">${data.name}X</label></li>
        `
    })
}

//mwst
const mwstModal = document.getElementById('mobile_mwst_modal');
const mobileMwstInputs = mwstModal.querySelectorAll('.mobile_radio_variant input');
const mobileMwstValue = document.getElementById('mobile_mwst_value');
const mobileMwstButton = document.getElementById('mobile_mwst_button');

mobileMwstButton.addEventListener('click', (e) => {
    e.preventDefault();
    mobileMwstButton.classList.remove('focused');
    openMwstModal();
})

for(let i of mobileMwstInputs) {
    i.addEventListener('change', (e)=>{
        if(e.target.checked) {
            mobileMwstValue.innerHTML = e.target.value;
            mobileMwstValue.classList.add('filled');
            mobileMwstButton.classList.add('valid');
        }
        else {
            mobileMwstValue.innerHTML = 'Bitte wahlen'
            mobileMwstValue.classList.remove('filled');
            mobileMwstButton.classList.remove('valid');
        }
    })
}

function openMwstModal() {
    mwstModal.style.display = "flex";
    document.body.classList.add('modal-open');
}

function resetMwstModal(e) {
    e.preventDefault();
    for(let i of mobileMwstInputs) {
        if(i.checked) {
            i.checked = false;
            i.dispatchEvent(new Event('change'));
        }
    }
    closeMwstModal(e);
}

function closeMwstModal(e) {
    e.preventDefault();
    mwstModal.style.display = "none";
    document.body.classList.remove('modal-open');
}


window.onclick = function(event) {
    switch(event.target) {
        case markeModal:
            closeMarkeModal(event);
            break;
        case modelModal:
            closeModelModal(event);
            break;
        case resetModal:
            closeResetModal(event);
            break;
        case fahrzeugtypModal:
            closeFahrzeugtypModal(event);
            break;
        case getriebeModal:
            closeGetriebeModal(event);
            break;
        case sportausstattungModal:
            closeSportausstattungModal(event);
            break;
        case innenausstattungModal:
            closeInnenausstattungModal(event);
            break;
        case scheinwerferModal:
            closeScheinwerferModal(event);
            break;
        case einparkhilfeModal:
            closeEinparkhilfeModal(event);
            break;
        case sonstigeAusstatungModal:
            closeSonstigeAusstatungModal(event);
            break;
        case mwstModal:
            closeMwstModal(event);
            break;
        default:
            break;      
    }
}


//Filter
//Marke
const mobileMarkeFilter = document.getElementById('mobile_marke_filter');
const mobileMarkeList = document.getElementById('mobile_modal_marke_list');
const letters = mobileMarkeList.querySelectorAll('.mobile_letter');

mobileMarkeFilter.addEventListener('input',(e)=> {
    if(mobileMarkeList.querySelector('#unbekannte')){
        mobileMarkeList.querySelector('#unbekannte').remove();
    }
    let query = e.target.value;
    let isAllHidden = true;
    for(let l of letters) {
        l.closest('.mobile_alphabet_letter').classList.remove('hide');
        if(!l.innerHTML.toLowerCase().startsWith(query.charAt(0).toLowerCase())) {
            l.closest('.mobile_alphabet_letter').classList.add('hide');
        }
    }
    for(let i of mobileMarkeInputs) {
        i.closest('.mobile_radio_variant').classList.remove('hide');
        if(!i.value.toLowerCase().startsWith(query.toLowerCase())) {
            i.closest('.mobile_radio_variant').classList.add('hide');
        }
        else {
            isAllHidden = false;
        }
    }
    if(isAllHidden) {
        mobileMarkeList.append(unbekannte);
    }   
})

//Model
const mobileModelFilter = document.getElementById('mobile_model_filter');
const mobileModelList = document.getElementById('mobile_modal_model_list');

mobileModelFilter.addEventListener('input',(e)=> {
    if(mobileModelList.querySelector('#unbekannte')){
        mobileModelList.querySelector('#unbekannte').remove();
    }
    let query = e.target.value;
    let isAllHidden = true;
    for(let i of mobileModelInputs) {
        i.closest('.mobile_radio_variant').classList.remove('hide');
        if(!i.value.toLowerCase().startsWith(query.toLowerCase())) {
            i.closest('.mobile_radio_variant').classList.add('hide');
        }
        else {
            isAllHidden = false;
        }
    }
    if(isAllHidden) {
        mobileModelList.append(unbekannte);
    }   
})


//TODO: Change to CCS Only
let mobilePsKw = document.getElementById('mobile_ps_kw');
let mobilePs = document.getElementById('mobile_ps');
let mobileKw = document.getElementById('mobile_kw');
mobilePsKw.addEventListener('change',(e)=>{
    if(e.target.checked) {
        mobileKw.classList.add('mobile_toggle_checked');
        mobilePs.classList.remove('mobile_toggle_checked');
    }
    else {
        mobileKw.classList.remove('mobile_toggle_checked');
        mobilePs.classList.add('mobile_toggle_checked');
    }
});

//Submiting Form
let sumbitBtn = document.getElementById('mobile_submit');
let mobileFormFields = mobileForm.querySelectorAll('.mobile_custom-input input, .mobile_custom-button');

sumbitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    for(let f of mobileFormFields) {
        if(!f.classList.contains('optional_field')&&!f.classList.contains('valid')&&!f.classList.contains('mobile_ausstattung_field')){
            f.classList.add('focused');
        }
    }


    if(mobileForm.checkValidity()) {
        mobileForm.submit();
    }
    else {
        const focused = document.querySelector('.mobile_custom-button.focused, .mobile_custom-input input.focused:invalid');
        focused.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }
})
