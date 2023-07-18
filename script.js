/*const apiKey = '';

const today = new Date();
const yearStart = today.getFullYear();
const monthStart = String(today.getMonth() + 1).padStart(2, '0');
const dayStart = String(today.getDate()).padStart(2, '0');

const formattedDateStart = `${yearStart}-${monthStart}-${dayStart}`;

const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000); // Ajoute 7 jours en millisecondes

const yearEnd = nextWeek.getFullYear();
const monthEnd = String(nextWeek.getMonth() + 1).padStart(2, '0');
const dayEnd = String(nextWeek.getDate()).padStart(2, '0');

const formattedDateEnd = `${yearEnd}-${monthEnd}-${dayEnd}`;

console.log(formattedDateStart+" & "+formattedDateEnd)

const apiUrl = `https://qwest.amagi.tv/v1/api/playlist.json?feed_id=5&start_date=${formattedDateStart}&end_date=${formattedDateEnd}&ptype%5B%5D=normal`; // Remplacez cette URL par l'URL de votre API


// Fonction pour récupérer les données de l'API
async function fetchData() {
    try {
        const response = await fetch(apiUrl, {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        });

        if (!response.ok) {
            throw new Error('Erreur lors de la récupération des données de l\'API');
        }

        const data = await response.json();
        // Utilisez les données récupérées comme vous le souhaitez
        console.log(data);

        // Stockez les données dans une variable si nécessaire
        const apiData = data;

        // Faites quelque chose d'autre avec les données ici...

    } catch (error) {
        console.error(error);
    }
}

// Appelez la fonction pour récupérer les données de l'API
fetchData();*/

let xmlString; // Déclaration de la variable en tant que variable globale

fetch("EPG.xml")
  .then((response) => response.text())
  .then((data) => {
    xmlString = data; // Stocke le contenu XML dans une variable
    //console.log(xmlString); // Affiche le contenu XML
  })
  .catch((error) => {
    console.log("Une erreur s'est produite :", error);
  });

const xmlData = xmlString;

/*// Fonction pour extraire les données du fichier XML et les stocker dans une liste
function parseXML(xmlString) {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
    const schedules = xmlDoc.getElementsByTagName('schedule');
    const dataList = [];

    for (let i = 0; i < schedules.length; i++) {
        const schedule = schedules[i];
        const date = schedule.getElementsByTagName('scheduledate')[0].textContent;
        const program = schedule.getElementsByTagName('programmetitle')[0].textContent;
        const time = schedule.getElementsByTagName('schedulestarttime')[0].textContent;
        dataList.push({ date, program, time });
    }

    return dataList;
}

// Utilisation de la fonction pour obtenir la liste de données
const data = parseXML(xmlString);
console.log(data);*/

// Fonction pour extraire les données de chaque élément <schedule>
function extractScheduleData(schedule) {
  const date = schedule.querySelector("scheduledate").textContent;
  const programTitle = schedule.querySelector("programmetitle").textContent;
  const startTime = schedule.querySelector("schedulestarttime").textContent;

  return { date, programTitle, startTime };
}

// Parse le contenu XML en un objet Document
const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlData, "application/xml");

// Sélectionne tous les éléments <schedule>
const scheduleElements = xmlDoc.querySelectorAll("schedule");

/* for (var j = 8; j < 14; j++) {
  // Crée une array pour stocker les données de la première semaine
  const deuxWeekData = [];

  // Parcourt tous les éléments <schedule>
  scheduleElements.forEach((schedule) => {
    const date = schedule.querySelector("scheduledate").textContent;

    // Vérifie si la date appartient à la première semaine
    if (date.startsWith(j < 10 ? "0" + j + "07" : j + "07")) {
      // Remplacez '0107' par la date de début de la première semaine
      const scheduleData = extractScheduleData(schedule);
      deuxWeekData.push(scheduleData);
    }
  });

  // Récupérer l'élément avec l'ID "test"
  var element = document.getElementById("test" + (j - 6));

  // Parcourir le tableau de personnes
  for (var i = 0; i < deuxWeekData.length; i++) {
    // Créer la div avec la classe "event"
    var eventDiv = document.createElement("div");
    eventDiv.classList.add("event");

    // Créer la div avec la classe "identif" et ajouter l'identifiant
    var identifDiv = document.createElement("div");
    identifDiv.classList.add("time");
    identifDiv.textContent = "" + deuxWeekData[i].startTime;

    // Créer la div avec la classe "name" et ajouter le nom
    var nameDiv = document.createElement("div");
    nameDiv.classList.add("name");
    nameDiv.textContent = "" + deuxWeekData[i].programTitle;

    // Ajouter les divs "identif" et "name" à la div "event"
    eventDiv.appendChild(identifDiv);
    eventDiv.appendChild(nameDiv);

    // Ajouter la div "event" à l'élément avec l'ID "test"
    element.appendChild(eventDiv);
  }
} */

var d = new Date();

for (var j = d.getDate(); j < d.getDate() + 7; j++) {
  // Crée une array pour stocker les données de la première semaine
  const deuxWeekData = [];

  // Parcourt tous les éléments <schedule>
  scheduleElements.forEach((schedule) => {
    const date = schedule.querySelector("scheduledate").textContent;

    // Vérifie si la date appartient à la première semaine
    if (
      date.startsWith(
        j < 10
          ? "0" +
              j +
              (d.getMonth() + 1 < 10
                ? "0" + (d.getMonth() + 1)
                : d.getMonth() + 1)
          : j +
              (d.getMonth() + 1 < 10
                ? "0" + (d.getMonth() + 1)
                : d.getMonth() + 1)
      )
    ) {
      // Remplacez '0107' par la date de début de la première semaine
      const scheduleData = extractScheduleData(schedule);
      deuxWeekData.push(scheduleData);
    }
  });

  // Récupérer l'élément avec l'ID "test"
  var element = document.getElementById("test" + (j - (d.getDate() - 1)));

  // Parcourir le tableau de personnes
  for (var i = 0; i < deuxWeekData.length; i++) {
    // Créer la div avec la classe "event"
    var eventDiv = document.createElement("div");
    eventDiv.classList.add("event");

    // Créer la div avec la classe "identif" et ajouter l'identifiant
    var identifDiv = document.createElement("div");
    identifDiv.classList.add("time");
    identifDiv.textContent = "" + deuxWeekData[i].startTime;

    // Créer la div avec la classe "name" et ajouter le nom
    var nameDiv = document.createElement("div");
    nameDiv.classList.add("name");
    nameDiv.textContent = "" + deuxWeekData[i].programTitle;

    // Ajouter les divs "identif" et "name" à la div "event"
    eventDiv.appendChild(identifDiv);
    eventDiv.appendChild(nameDiv);

    // Ajouter la div "event" à l'élément avec l'ID "test"
    element.appendChild(eventDiv);
  }
}

// Récupérer la référence de la ligne tr avec l'ID "date"
var trElement = document.getElementById("date");

// Obtenir la date d'aujourd'hui
var currentDate = new Date();

// Boucle pour ajouter une cellule par jour jusqu'à une semaine plus tard
for (var i = 0; i <= 6; i++) {
  // Créer une nouvelle date en ajoutant le nombre de jours à la date actuelle
  var date = new Date(currentDate.getTime() + i * 24 * 60 * 60 * 1000);

  // Créer une cellule th pour afficher la date
  var thElement = document.createElement("th");

  // Formater la date au format "dd mois yyyy"
  var formattedDate =
    date.getDate() +
    " " +
    getMonthName(date.getMonth()) +
    " " +
    date.getFullYear();

  // Ajouter la date à la cellule th
  thElement.textContent = formattedDate;

  // Ajouter la cellule th à la ligne tr
  trElement.appendChild(thElement);
}

var qwestTVGuideElement = document.getElementById("qwestTVGuide");
qwestTVGuideElement.textContent =
  "Qwest TV Guide " +
  getMonthName(currentDate.getMonth()) +
  " " +
  currentDate.getDate() +
  " to " +
  getMonthName(currentDate.getMonth()) +
  " " +
  (currentDate.getDate() + 6);

// Fonction pour obtenir le nom du mois à partir de son index
function getMonthName(monthIndex) {
  var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return monthNames[monthIndex];
}
