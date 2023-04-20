// Här deklareras variabler för personliga uppgifter om en person
const name = "David Ageland";
const age = "Ålder: 17 år";
const title = "Yrke: Student";
const email = "Email: david.ageland@gmail.com";
const phone = "Telefon: 073-334-6608";
const bio = "Kort beskrivning om personen och deras bakgrund.";
// Här skapar en lista av färdigheter och en lista av arbetserfarenheter
const skills = ["Färdighet 1", "Färdighet 2", "Färdighet 3"];
const experience = [
  {
    title: "Tjänst 1",
    company: "Företag 1",
    duration: "År 1 - År 2",
    description: "Kort beskrivning av rollen och ansvarsområden."
  },
  {
    title: "Tjänst 2",
    company: "Företag 2",
    duration: "År 2 - År 3",
    description: "Kort beskrivning av rollen och ansvarsområden."
  }
];
// Här hämtas element från HTML-filen och dess innehåll uppdateras med variabelvärden och listor
document.getElementById("name").innerText = name;
document.getElementById("age").innerText = age;
document.getElementById("title").innerText = title;
document.getElementById("email").innerText = email;
document.getElementById("phone").innerText = phone;
document.getElementById("bio").innerText = bio;

const skillsList = document.getElementById("skills");
// För varje färdighet i listan, skapas en li-element som innehåller färdigheten och läggs till skillsList
skills.forEach(skill => {
  const listItem = document.createElement("li");
  listItem.innerText = skill;
  skillsList.appendChild(listItem);
});

const experienceContainer = document.getElementById("experience");
// För varje arbetserfarenhet i listan, skapas ett div-element med titel, företag, duration och beskrivning och läggs till experienceContainer
experience.forEach(item => {
  const expItem = document.createElement("div");
  expItem.innerHTML = `
    <h3>${item.title}</h3>
    <h4>${item.company}</h4>
    <p>${item.duration}</p>
    <p>${item.description}</p>
  `;
  experienceContainer.appendChild(expItem);
});
// En funktion för att byta profilbild när användaren laddar upp en fil
function changeProfileImage(event) {
  const input = event.target;
  const reader = new FileReader();

  reader.onload = function () {
    const dataURL = reader.result;
    document.getElementById("profileImage").src = dataURL;
  };

  if (input.files && input.files[0]) {
    reader.readAsDataURL(input.files[0]);
  }
}
