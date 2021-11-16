const data = [
    {
      name: "Moon",
      images: {
        png: "./assets/destination/image-moon.png",
        webp: "./assets/destination/image-moon.webp"
      },
      description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 km",
      travel: "3 days"
    },
    {
      name: "Mars",
      images: {
        png: "./assets/destination/image-mars.png",
        webp: "./assets/destination/image-mars.webp"
      },
      description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      distance: "225 mil. km",
      travel: "9 months"
    },
    {
      name: "Europa",
      images: {
        png: "./assets/destination/image-europa.png",
        webp: "./assets/destination/image-europa.webp"
      },
      description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      distance: "628 mil. km",
      travel: "3 years"
    },
    {
      name: "Titan",
      images: {
        png: "./assets/destination/image-titan.png",
        webp: "./assets/destination/image-titan.webp"
      },
      description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      distance: "1.6 bil. km",
      travel: "7 years"
    }
  ]

const moon = document.getElementById("moon");
const mars = document.getElementById("mars");
const europa = document.getElementById("europa");
const titan = document.getElementById("titan");

moon.addEventListener("click", () => {
    moon.setAttribute("aria-selected", true);
    mars.setAttribute("aria-selected", false);
    europa.setAttribute("aria-selected", false);
    titan.setAttribute("aria-selected", false);
    renderDestination("Moon", data);
});

mars.addEventListener("click", () => {
    moon.setAttribute("aria-selected", false);
    mars.setAttribute("aria-selected", true);
    europa.setAttribute("aria-selected", false);
    titan.setAttribute("aria-selected", false);
    renderDestination("Mars", data);
});

europa.addEventListener("click", () => {
    moon.setAttribute("aria-selected", false);
    mars.setAttribute("aria-selected", false);
    europa.setAttribute("aria-selected", true);
    titan.setAttribute("aria-selected", false);
    renderDestination("Europa", data);
});

titan.addEventListener("click", () => {
    moon.setAttribute("aria-selected", false);
    mars.setAttribute("aria-selected", false);
    europa.setAttribute("aria-selected", false);
    titan.setAttribute("aria-selected", true);
    renderDestination("Titan", data);
});

function renderDestination (name, arr){
    const info = arr.filter(el => el.name === name)[0];
    document.getElementById("destination-picture").innerHTML = `
    <source srcset=${info.images.webp} type="image/webp">
    <img src=${info.images.png} alt=${info.name}>
    `;
    document.getElementById("destination-name").innerHTML = `${info.name}`;
    document.getElementById("destination-description").innerHTML = `${info.description}`;
    document.getElementById("destination-distance").innerHTML = `${info.distance}`;
    document.getElementById("destination-travel").innerHTML = `${info.travel}`;
}
