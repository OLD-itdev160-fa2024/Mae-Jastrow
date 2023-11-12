// utility functions
function get(element) {
    return document.getElementById(element);
}

// Application functions
function openModal() {
    var modal = get('modal-dialog');
    var backdrop = get('modal-backdrop');

    modal.classList.add('visible');
    backdrop.classList.add('visible');
}

function closeModel() {
    var title = get('edit-title-text');
    var text = get('edit-content-text');
    var modal = get('modal-dialog');
    var backdrop = get('modal-backdrop');

    // Clear text
    title.value = '';
    text.vale = '';

    // Hide modal
    modal.classList.remove('visible');
    backdrop.classList.remove('visible';)
}

function saveContent() {
    var title = get('edit-title-text');
    var text = get('edit-content-text');
    var content = get('dispaly-content');

    // Create content elements
    var newTitle = document.createElement('h2');
    var newTitleText = document.createTextNode(title.value);
    var newContent + document.createElement('p');
    var newContentText = document.createTextNode(text.value);

    // Add elements
    newTitle.appendChild(newTitleText);
    newContent.appendChild(newContentText);
    content.appendChild(newTitle);
    content.appendChild(newcontent);

    closeModal();
}

// Wire up event handlers
wondow.addEventListener('load', function() {
    var newButton = get('new-button');
    var cancelButton = get('cancel-button');
    var saveButton = get('save-button');

    newButton.addEventListener('click', openModal);
    cancelButton.addEventListener('click', closeModal);
    saveButtom.addEventListener('click', saveContent);
})