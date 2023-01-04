// let name = ''
// name = localStorage.getItem('name');
// while(!name)
// {
//   name = prompt("Nhap ten cua ban");
//   if(name){
//   localStorage.setItem("name",name);
//   name = localStorage.getItem('name');
//   }
// }
// const text = document.getElementById("text");
// text.innerHTML = 'Hello ' + name;
console.log(document.querySelector("#form-info"));
document.querySelector("#form-info").addEventListener("submit",(event) => {
  event.preventDefault();
  const name = document.querySelector("#name").value,
        age = document.querySelector("#age").value,
        uniClass = document.querySelector("#uniClass").value
  setinfo(name,age,uniClass);
})
function setinfo(name,age,uniclass){
  const nameInfo = document.querySelector("#name-info"),
        ageInfo = document.querySelector("#age-info"),
        uniclassInfo = document.querySelector("#uniClass-info")
  nameInfo.innerText = "My name is " + name + ". "
  ageInfo.innerText = "I am " + age + "year old."
  uniclassInfo.innerText = "I am in class " + uniclass; 
}