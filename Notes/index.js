let username;

document.getElementById("My").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("MH1").textContent = ` Hello ${username}`;
};