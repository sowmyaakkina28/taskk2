function getfile(file,callback){
   var xhr = new XMLHttpRequest();
   xhr.overrideMimeType("application/json");
   xhr.open("GET",file,true);
   xhr.onreadystatechange = function(){
     if(xhr.readyState === 4 && xhr.status == "200"){
       callback(xhr.responseText);
     }
   };
 xhr.send();
 }
 getfile("data.json",function(text) {
   var data = JSON.parse(text);
   console.log(data);
   details(data.p1)
 });
  function details(d){
    var child = document.querySelector(".childone");
  for(i in d){
    var dd=document.createElement('div')
        dd.className='card'
    var img = document.createElement("img");
        img.className='ig'
        img.src = d[i].img;
        dd.appendChild(img);
        child.appendChild(dd)
    var name = document.createElement("h3");
    name.textContent = d[i].name;
    dd.appendChild(name);
    child.appendChild(dd)
    var ph=document.createElement('h4')
      ph.textContent=d[i].phoneno;
      dd.appendChild(ph)
      child.appendChild(dd)
    var ml=document.createElement('h4')
      ml.textContent=d[i].email;
      dd.appendChild(ml)
      child.appendChild(dd)
    var a=document.createElement('h4')
    a.textContent=d[i].ad;
      dd.appendChild(a)
      child.appendChild(dd)
}
}