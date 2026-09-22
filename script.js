/* =========================================
   COSMOS EXPLORER
   Main JavaScript
========================================= */


/* =========================================
   NAVIGATION
========================================= */

const sections = document.querySelectorAll(".page-section");
const navButtons = document.querySelectorAll(".nav-btn");


function showSection(sectionId) {

    sections.forEach(section => {
        section.classList.remove("active-section");
    });

    const target = document.getElementById(sectionId);

    if (target) {
        target.classList.add("active-section");
    }


    navButtons.forEach(button => {

        button.classList.remove("active");

        if (button.dataset.section === sectionId) {
            button.classList.add("active");
        }

    });


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


navButtons.forEach(button => {

    button.addEventListener("click", () => {

        showSection(button.dataset.section);

    });

});



/* =========================================
   PLANET DATABASE
========================================= */

const planets = [

    {
        name: "Mercury",
        type: "Terrestrial Planet",
        icon: "☿️",
        distance: "57.9 million km",
        diameter: "4,879 km",
        moons: "0",
        day: "58.6 Earth days",
        year: "88 Earth days",
        gravity: "3.7 m/s²",
        description:
            "Mercury is the smallest planet and the closest planet to the Sun. It has a rocky surface covered with craters and experiences very large temperature changes.",
        facts: [
            "Mercury is the closest planet to the Sun.",
            "It is the smallest planet in the solar system.",
            "Mercury has no natural moons.",
            "Its surface is heavily covered with impact craters.",
            "A year on Mercury lasts only 88 Earth days.",
            "Mercury rotates very slowly compared with Earth.",
            "Mercury has an extremely thin atmosphere called an exosphere.",
            "Its surface contains large plains and cliffs.",
            "Temperatures can change dramatically between day and night.",
            "Mercury has a very large iron core.",
            "The planet has a weak magnetic field.",
            "Mercury can sometimes be seen from Earth near sunrise or sunset."
        ]
    },


    {
        name: "Venus",
        type: "Terrestrial Planet",
        icon: "♀️",
        distance: "108.2 million km",
        diameter: "12,104 km",
        moons: "0",
        day: "243 Earth days",
        year: "225 Earth days",
        gravity: "8.9 m/s²",
        description:
            "Venus is a rocky world with an extremely thick atmosphere. It is the hottest planet in the solar system because of its powerful greenhouse effect.",
        facts: [
            "Venus is the second planet from the Sun.",
            "It is similar in size to Earth.",
            "Venus has no natural moons.",
            "Its atmosphere is mostly carbon dioxide.",
            "Thick clouds contain sulfuric acid.",
            "Venus has an extremely strong greenhouse effect.",
            "It is the hottest planet in the solar system.",
            "Venus rotates in the opposite direction to most planets.",
            "One rotation takes about 243 Earth days.",
            "Its year lasts about 225 Earth days.",
            "Venus has many volcanoes and volcanic features.",
            "The surface pressure is far greater than Earth's."
        ]
    },


    {
        name: "Earth",
        type: "Terrestrial Planet",
        icon: "🌍",
        distance: "149.6 million km",
        diameter: "12,756 km",
        moons: "1",
        day: "23.9 hours",
        year: "365.25 days",
        gravity: "9.8 m/s²",
        description:
            "Earth is our home planet and the only world currently known to support life. It has liquid surface water, a protective atmosphere and a magnetic field.",
        facts: [
            "Earth is the third planet from the Sun.",
            "Earth has one natural moon.",
            "Liquid water covers most of Earth's surface.",
            "Earth has a nitrogen-rich atmosphere.",
            "Oxygen makes up about one-fifth of the atmosphere.",
            "Earth has active plate tectonics.",
            "The planet has a global magnetic field.",
            "Earth's atmosphere helps regulate temperature.",
            "Earth takes about 365.25 days to orbit the Sun.",
            "Earth rotates once approximately every 24 hours.",
            "Earth is the only planet currently known to have life.",
            "Its surface contains continents and oceans."
        ]
    },


    {
        name: "Mars",
        type: "Terrestrial Planet",
        icon: "♂️",
        distance: "227.9 million km",
        diameter: "6,792 km",
        moons: "2",
        day: "24.6 hours",
        year: "687 Earth days",
        gravity: "3.7 m/s²",
        description:
            "Mars is a cold, rocky planet often called the Red Planet because iron minerals on its surface have oxidized and created its reddish appearance.",
        facts: [
            "Mars is the fourth planet from the Sun.",
            "It is known as the Red Planet.",
            "Mars has two small moons.",
            "The larger moon is Phobos.",
            "The smaller moon is Deimos.",
            "Mars has the largest volcano in the solar system.",
            "Olympus Mons is a giant shield volcano.",
            "Mars contains huge canyon systems.",
            "Valles Marineris stretches thousands of kilometers.",
            "Mars has polar ice caps.",
            "Ancient Mars had flowing water on its surface.",
            "Robotic spacecraft have explored Mars for decades."
        ]
    },


    {
        name: "Jupiter",
        type: "Gas Giant",
        icon: "🟠",
        distance: "778.5 million km",
        diameter: "142,984 km",
        moons: "95+",
        day: "9.9 hours",
        year: "11.86 Earth years",
        gravity: "23.1 m/s²",
        description:
            "Jupiter is the largest planet in the solar system. It is a gas giant with powerful storms, many moons and a famous feature called the Great Red Spot.",
        facts: [
            "Jupiter is the largest planet.",
            "It is the fifth planet from the Sun.",
            "Jupiter is a gas giant.",
            "It has a large number of known moons.",
            "Four famous moons are Io, Europa, Ganymede and Callisto.",
            "Ganymede is the largest moon in the solar system.",
            "Jupiter has a powerful magnetic field.",
            "Its atmosphere contains hydrogen and helium.",
            "The Great Red Spot is a giant storm.",
            "Jupiter rotates extremely quickly.",
            "One day lasts less than 10 Earth hours.",
            "Jupiter has faint rings."
        ]
    },


    {
        name: "Saturn",
        type: "Gas Giant",
        icon: "🪐",
        distance: "1.43 billion km",
        diameter: "120,536 km",
        moons: "140+",
        day: "10.7 hours",
        year: "29.45 Earth years",
        gravity: "9.0 m/s²",
        description:
            "Saturn is a giant planet famous for its spectacular ring system. The rings are made mostly from countless pieces of ice and rock.",
        facts: [
            "Saturn is the sixth planet from the Sun.",
            "It is the second-largest planet.",
            "Saturn is a gas giant.",
            "Its rings are its most recognizable feature.",
            "The rings contain ice particles and rocky material.",
            "Saturn has many known moons.",
            "Titan is Saturn's largest moon.",
            "Titan has a thick atmosphere.",
            "Enceladus has an icy surface.",
            "Enceladus has evidence of a subsurface ocean.",
            "Saturn rotates very quickly.",
            "Saturn is less dense than water."
        ]
    },


    {
        name: "Uranus",
        type: "Ice Giant",
        icon: "🔵",
        distance: "2.87 billion km",
        diameter: "51,118 km",
        moons: "27",
        day: "17.2 hours",
        year: "84 Earth years",
        gravity: "8.7 m/s²",
        description:
            "Uranus is an ice giant with a blue-green appearance caused by methane in its atmosphere. Its extreme axial tilt makes it especially unusual.",
        facts: [
            "Uranus is the seventh planet from the Sun.",
            "It is an ice giant.",
            "Methane gives Uranus its blue-green color.",
            "Uranus has a system of faint rings.",
            "It has dozens of known moons.",
            "Uranus rotates with an extreme axial tilt.",
            "Its tilt causes unusual seasons.",
            "A year on Uranus lasts about 84 Earth years.",
            "Its atmosphere contains hydrogen and helium.",
            "Methane absorbs much of the red light.",
            "Uranus is extremely cold.",
            "The planet was discovered in the modern era with a telescope."
        ]
    },


    {
        name: "Neptune",
        type: "Ice Giant",
        icon: "🔷",
        distance: "4.50 billion km",
        diameter: "49,528 km",
        moons: "14",
        day: "16.1 hours",
        year: "164.8 Earth years",
        gravity: "11.0 m/s²",
        description:
            "Neptune is the farthest recognized major planet from the Sun. It is an ice giant known for powerful winds and a deep blue appearance.",
        facts: [
            "Neptune is the eighth planet from the Sun.",
            "It is the farthest major planet from the Sun.",
            "Neptune is an ice giant.",
            "Methane contributes to its blue color.",
            "Neptune has extremely powerful winds.",
            "Its atmosphere contains hydrogen and helium.",
            "Neptune has a faint ring system.",
            "Triton is its largest moon.",
            "Triton has an unusual retrograde orbit.",
            "Neptune takes almost 165 Earth years to orbit the Sun.",
            "Neptune has large storm systems.",
            "The planet was discovered in 1846."
        ]
    }

];



/* =========================================
   PLANET RENDERING
========================================= */

function renderPlanets(list = planets) {

    const grid = document.getElementById("planetGrid");

    if (!grid) return;

    if (list.length === 0) {

        grid.innerHTML = `
            <div style="
                grid-column:1/-1;
                padding:40px;
                text-align:center;
                color:#aeb7d0;
            ">
                No planets found.
            </div>
        `;

        return;
    }


    grid.innerHTML = list.map((planet, index) => {

        return `
            <article class="planet-card">

                <div class="planet-icon">
                    ${planet.icon}
                </div>

                <h3>${planet.name}</h3>

                <span class="planet-type">
                    ${planet.type}
                </span>

                <p>
                    ${planet.description}
                </p>

                <button
                    class="details-btn"
                    data-index="${index}"
                >
                    View Details →
                </button>

            </article>
        `;

    }).join("");


    const buttons = grid.querySelectorAll(".details-btn");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            const index = Number(button.dataset.index);

            openPlanet(list[index]);

        });

    });

}



/* =========================================
   PLANET DETAILS
========================================= */

function openPlanet(planet) {

    if (!planet) return;

    const detailSection = document.getElementById("planetDetail");

    /*
       The current app uses cards directly.
       Create a temporary detailed overlay section.
    */

    const old = document.getElementById("planetModal");

    if (old) {
        old.remove();
    }


    const modal = document.createElement("div");

    modal.id = "planetModal";

    modal.style.position = "fixed";
    modal.style.inset = "0";
    modal.style.zIndex = "1000";
    modal.style.overflowY = "auto";
    modal.style.background = "rgba(3,5,15,.97)";
    modal.style.padding = "40px 5%";


    modal.innerHTML = `

        <div style="
            max-width:1100px;
            margin:auto;
        ">

            <button
                id="closePlanet"
                style="
                    padding:12px 18px;
                    border:1px solid rgba(255,255,255,.1);
                    border-radius:12px;
                    background:rgba(255,255,255,.07);
                    color:white;
                    cursor:pointer;
                    margin-bottom:25px;
                "
            >
                ← Back to Planets
            </button>


            <div style="
                padding:35px;
                border-radius:28px;
                background:rgba(17,24,45,.9);
                border:1px solid rgba(255,255,255,.08);
            ">

                <div style="
                    font-size:100px;
                    margin-bottom:10px;
                ">
                    ${planet.icon}
                </div>


                <span style="
                    color:#4de7ff;
                    letter-spacing:2px;
                    font-size:12px;
                ">
                    ${planet.type}
                </span>


                <h2 style="
                    font-size:52px;
                    margin:10px 0 18px;
                ">
                    ${planet.name}
                </h2>


                <p style="
                    color:#aeb7d0;
                    line-height:1.8;
                    font-size:17px;
                    max-width:900px;
                ">
                    ${planet.description}
                </p>


                <div style="
                    display:grid;
                    grid-template-columns:repeat(auto-fit,minmax(160px,1fr));
                    gap:12px;
                    margin-top:30px;
                ">

                    <div class="stat">
                        <span>Distance</span>
                        <strong>${planet.distance}</strong>
                    </div>

                    <div class="stat">
                        <span>Diameter</span>
                        <strong>${planet.diameter}</strong>
                    </div>

                    <div class="stat">
                        <span>Moons</span>
                        <strong>${planet.moons}</strong>
                    </div>

                    <div class="stat">
                        <span>Day</span>
                        <strong>${planet.day}</strong>
                    </div>

                    <div class="stat">
                        <span>Year</span>
                        <strong>${planet.year}</strong>
                    </div>

                    <div class="stat">
                        <span>Gravity</span>
                        <strong>${planet.gravity}</strong>
                    </div>

                </div>


                <h3 style="
                    margin-top:40px;
                    margin-bottom:20px;
                    font-size:28px;
                ">
                    🌌 Planet Facts
                </h3>


                <div style="
                    display:grid;
                    gap:10px;
                ">

                    ${planet.facts.map((fact, index) => `
                        <div style="
                            padding:15px 18px;
                            border-radius:13px;
                            background:rgba(255,255,255,.045);
                            color:#d7ddf2;
                        ">
                            <strong style="color:#6ea8ff;">
                                ${String(index + 1).padStart(2, "0")}
                            </strong>
                            — ${fact}
                        </div>
                    `).join("")}

                </div>

            </div>

        </div>
    `;


    document.body.appendChild(modal);


    document.getElementById("closePlanet").addEventListener("click", () => {
        modal.remove();
    });

}



/* =========================================
   PLANET SEARCH
========================================= */

const planetSearch = document.getElementById("planetSearch");


if (planetSearch) {

    planetSearch.addEventListener("input", () => {

        const query = planetSearch.value.toLowerCase().trim();

        const filtered = planets.filter(planet => {

            return (
                planet.name.toLowerCase().includes(query) ||
                planet.type.toLowerCase().includes(query)
            );

        });

        renderPlanets(filtered);

    });

}



/* =========================================
   INITIALIZE
========================================= */

renderPlanets();

showSection("home");
