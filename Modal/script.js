window.onload = function()
{
    getModalReady();
}

function getModalReady()
{
    var img = document.getElementsByClassName("img");
    for(var i=0; i<img.length; i++)
    {
        img[i].onclick = function(){
            openModal(this.src);
        }
    }
}

function openModal(src)
{
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modalImg");

    modal.style.display = "block";
    modalImg.src = src;
}

var crossbtn = document.getElementById("crossbtn");
crossbtn.onclick = function()
{
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}