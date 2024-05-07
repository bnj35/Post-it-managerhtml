document.designMode='off'
function toggleDesignMode(){
    if(document.designMode === 'on'){
        document.designMode='off';
        console.log('designmode off')
    }
    else{
        document.designMode='on';
        console.log('designmode on')
    }
    
}


function refresh(){
    window.location.reload();
}

function addPost() {
document.getElementById('post').insertAdjacentHTML('afterbegin',
    '<div class="tex">' +
    '<div>' +
    '<h1 class="texheader">Copie</h1>' +
    '<h3>Aucun enregistrement sélectionné pour l\'opération de copie</h3>' +
    '</div>' +
    '<div>' +
    '<button onclick="toggleDesignMode()">MODIFIER</button>' +
    '</div>' +
    '</div>'
);
}

function removePost() {
var post = document.querySelector('.tex');
if (post) {
    post.parentNode.removeChild(post);
}
}