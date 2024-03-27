function updateTime() {
   let now = new Date();
   let hours = now.getHours() > 12 ? now.getHours() - 12 : now.getHours();
   let amPm = now.getHours() >= 12 ? 'PM' : 'AM';
   let minutes = now.getMinutes().toString().padStart(2, "0");
   let seconds = now.getSeconds().toString().padStart(2, "0");
   document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds} ${amPm}`;
}
setInterval(updateTime, 1000);
