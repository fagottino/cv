var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        document.getElementById("logo").innerHTML = myObj.nameSurname;
    }
};
xmlhttp.open("GET", "../data.json", true);
xmlhttp.send();