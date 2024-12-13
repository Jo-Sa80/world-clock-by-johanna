function updateTime() {
  let losAngelesElement = document.querySelector("#losAngeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesAmPmElement = losAngelesElement.querySelector("small");
    let losAngelesDate = moment()
      .tz("America/Los_Angeles")
      .format(" MMMM d YYYY");
    let losAngelesTime = moment().tz("America/Los_Angeles").format(" h:mm:ss");
    let losAngelesAmPm = moment().tz("America/Los_Angeles").format(" A");

    losAngelesDateElement.innerHTML = losAngelesDate;

    losAngelesTimeElement.innerHTML = `${losAngelesTime} <small>${losAngelesAmPm}</small>`;
  }
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisAmPmElement = parisElement.querySelector("small");
    let parisDate = moment().tz("Europe/Paris").format(" MMMM d YYYY");
    let parisTime = moment().tz("Europe/Paris").format(" h:mm:ss");
    let parisAmPm = moment().tz("Europe/Paris").format(" A");

    parisDateElement.innerHTML = parisDate;

    parisTimeElement.innerHTML = `${parisTime} <small>${parisAmPm}</small>`;
  }
}

updateTime();
setInterval(updateTime, 1000);

function showCityTime(event) {
  let citiesElement = document.querySelector("#cities");

  let timeZone = event.target.value;
  let cityName = timeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(timeZone);

  citiesElement.innerHTML = `
    <div class="city-time">
      <div>
        <h2> ${cityName} </h2>
        <div class="date">${cityTime.format(" MMMM d YYYY")}</div>
      </div>
      <div class="time">
        ${cityTime.format(" h:mm:ss")}
        <small>${cityTime.format("A")}</small>
      </div>
    </div>
  `;
}

let selectElement = document.querySelector("#choose-city");

selectElement.addEventListener(`change`, showCityTime);
