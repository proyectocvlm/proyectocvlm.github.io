

function myFunction() {
    var x = document.createElement("ASIDE");
    x.setAttribute("id", "myAside");
    document.body.appendChild(x);
  
    var heading = document.createElement("H3");
    var txt1 = document.createTextNode("Idioma Ingles B1");
    heading.appendChild(txt1);
    document.getElementById("myAside").appendChild(heading);
  
    var para = document.createElement("p");
    var txt2 = document.createTextNode("Disponibilidad Inmediata");
    para.appendChild(txt2);
    document.getElementById("myAside").appendChild(para);
  }
