

var drop;
function initiate(){
    
    drop = document.getElementById('dropbox');
    drop.addEventListener('dragenter', function(e){ e.preventDefault(); });
    drop.addEventListener('dragover', function(e){ e.preventDefault(); });
    drop.addEventListener('drop', dropped);
}


function dropped(e){

    e.preventDefault();

    var files = e.dataTransfer.files[0];
    var fr = new FileReader();
    fr.readAsDataURL (files);
        
        fr.onload = function() {

            var img = new Image ();
            img.src = fr.result
            drop.appendChild(img);
            
        }

    
}

addEventListener('load', initiate);