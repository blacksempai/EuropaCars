let fileListDT = new DataTransfer()

let fileInput = document.getElementById('file')
let fileList = document.getElementById('file_list')
let fileFormField = document.getElementById('file_form_field')

fileInput.addEventListener('change', function(event) { 
    const { files } = fileInput;
    for (let i = 0; i < files.length; i++) {
        fileListDT.items.add(files[i])
    }
    fileInput.files = fileListDT.files;
    reDrawFileList();
});


function reDrawFileList() {
    fileList.innerHTML = null;
    if(fileInput.files.length > 0){
        fileFormField.classList.add('files_valid');
        for (let i = 0; i < fileInput.files.length; i++) {
            fileList.innerHTML += `
                <p class="file_list_item">
                    <span class="file_list_name">${fileInput.files[i].name}...................................................................</span> 
                    <i class="remove_file_btn" onclick="removeFile(${i})">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
                    </i> 
                </p>
            `
        }
    }
    else {
        fileList.innerHTML = 'Foto laden: scheckheft usw'
        fileFormField.classList.remove('files_valid')
    }
}

function removeFile(index) {
    let dt = new DataTransfer()
    let { files } = fileInput
    
    for (let i = 0; i < files.length; i++) {
      if (index !== i)
        dt.items.add(files[i])
    }
    
    fileInput.files = dt.files;
    fileListDT = dt;
    reDrawFileList()
}


//Mobile 


let mobileFileListDT = new DataTransfer()

let mobileFileInput = document.getElementById('mobile_file')
let mobileFileList = document.getElementById('mobile_file_list')
let mobileFileFormField = document.getElementById('mobile_files_field')

mobileFileInput.addEventListener('change', function(event) { 
    const { files } = mobileFileInput;
    for (let i = 0; i < files.length; i++) {
        mobileFileListDT.items.add(files[i])
    }
    mobileFileInput.files = mobileFileListDT.files;
    reDrawMobileFileList();
});


function reDrawMobileFileList() {
    mobileFileList.innerHTML = null;
    if(mobileFileInput.files.length > 0){
        mobileFileFormField.classList.add('files_valid');
        for (let i = 0; i < mobileFileInput.files.length; i++) {
            mobileFileList.innerHTML += `
                <p class="mobile_file_list_item">
                    <span class="mobile_file_list_name">${mobileFileInput.files[i].name}...................................................................</span> 
                    <i class="remove_file_btn" onclick="removeMobileFile(${i})">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
                    </i> 
                </p>
            `
        }
    }
    else {
        resetMobileFileList();
    }
}

function resetMobileFileList() {
    mobileFileList.innerHTML = 'Foto laden: scheckheft usw';
    mobileFileFormField.classList.remove('files_valid');
    mobileFileListDT.clearData();
}

function removeMobileFile(index) {
    let dt = new DataTransfer()
    let { files } = mobileFileInput
    
    for (let i = 0; i < files.length; i++) {
      if (index !== i)
        dt.items.add(files[i])
    }
    
    mobileFileInput.files = dt.files;
    mobileFileListDT = dt;
    reDrawMobileFileList()
}