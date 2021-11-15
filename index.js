var q = document.getElementsByClassName("question");
var i;
for (i = 0; i < q.length; i++) {
    q[i].addEventListener("click", function () {
    
        this.classList.toggle("active");
    
        var fun = this.nextElementSibling;
        if (fun.style.display === "block") {
            fun.style.display = "none";
        } else {
            fun.style.display = "block";
        }
    });
}