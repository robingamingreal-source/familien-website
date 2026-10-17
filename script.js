const now = new Date();

const day = now.getDate();        
const month = now.getMonth() + 1;  
const year = now.getFullYear();

console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);

document.getElementById("day").innerText = `Heute ist der ${day}.${month}.${year}`;

if (day === 17 && month === 10) {
    document.getElementById("bdony-event").innerText = "Happy Birthday, Jürgen! 🎉";
}
else if (day === 26 && month === 12) {
    document.getElementById("bdony-event").innerText = "Happy Birthday, Robin! 🎉";
}
else if (day === 19 && month === 12) {
    document.getElementById("bdony-event").innerText = "Happy Birthday, Sonja! 🎉";
}
else if (day === 2 && month === 5) {
    document.getElementById("bdony-event").innerText = "Happy Birthday, Victoria! 🎉";
}
else if (day === 1 && month === 1) {
    document.getElementById("bdony-event").innerText = "Happy New Year! 🎉";
}
else if (day === 24 && month === 12) {
    document.getElementById("bdony-event").innerText = "Frohe Weihnachten! 🎄";
}
else if (day === 31 && month === 12) {
    document.getElementById("bdony-event").innerText = "Heute ist der Letzte Tag des Jahres! 🎉";
}
else {
    document.getElementById("bdony-event").innerText = "";
}