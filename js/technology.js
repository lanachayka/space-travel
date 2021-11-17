const data = [
    {
        name: "Launch vehicle",
        images: {
            "portrait": "./assets/technology/image-launch-vehicle-portrait.jpg",
            "landscape": "./assets/technology/image-launch-vehicle-landscape.jpg"
        },
        description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    },
    {
        name: "Spaceport",
        images: {
            "portrait": "./assets/technology/image-spaceport-portrait.jpg",
            "landscape": "./assets/technology/image-spaceport-landscape.jpg"
        },
        description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
    },
    {
        name: "Space capsule",
        images: {
            portrait: "./assets/technology/image-space-capsule-portrait.jpg",
            landscape: "./assets/technology/image-space-capsule-landscape.jpg"
        },
        description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    }
];

const launch = document.getElementById("launch");
const spaceport = document.getElementById("spaceport");
const capsule = document.getElementById("capsule");

launch.addEventListener("click", () => {
    launch.setAttribute("aria-selected", true);
    spaceport.setAttribute("aria-selected", false);
    capsule.setAttribute("aria-selected", false);
    renderDestination("Launch vehicle", data);
});

spaceport.addEventListener("click", () => {
    launch.setAttribute("aria-selected", false);
    spaceport.setAttribute("aria-selected", true);
    capsule.setAttribute("aria-selected", false);
    renderDestination("Spaceport", data);
});

capsule.addEventListener("click", () => {
    launch.setAttribute("aria-selected", false);
    spaceport.setAttribute("aria-selected", false);
    capsule.setAttribute("aria-selected", true);
    renderDestination("Space capsule", data);
});


function renderDestination (name, arr){
    const info = arr.filter(el => el.name === name)[0];
    document.getElementById("technology-picture").innerHTML = `
    <source media="(min-width: 45em)" srcset=${info.images.portrait}> 
      <img src=${info.images.landscape}></img>
    `;
    document.getElementById("technology-name").innerHTML = `${info.name}`;
    document.getElementById("technology-description").innerHTML = `${info.description}`;
}