const navslide = () => {
            const hamburger = document.querySelector(".hamburger");
            const nav = document.querySelector(".nav");

            hamburger.addEventListener('click', () => {
                nav.classList.toggle("nav2");
             });
            }


function validate_file(){
	var fileInput= document.getElementById('file');
	var filetype=fileInput.value;
	var allowedExtensions =/(\.doc|\.docx|\.pdf|\.txt)$/i;
	if(!allowedExtensions.exec(filetype)){
		alert("Please, Choose file in given format");
		filetype='';
		document.getElementById('file').value=null;
		return false;
	}
} 
