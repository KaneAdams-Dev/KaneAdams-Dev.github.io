const projects = {
    Mobbers: {
        title: "Mobbers",
        description: "Roguelike where you play as the mobs of the dungeon",
        thumbnail: "/Images/Zombeez/SH_AKBoss.PNG",
        previews: ["/Images/Mobbers/Lib.gif", "/Images/Mobbers/test.gif"],
        summary: "Roguelike where you play as the Mobs in a dungeon and want out",
        role: "Lead Programmer",
        size: "5-10",
        tools: "Unity, C#, GitHub",
        timeline: "September 2022 to December 2022",
        ProjectLink: "Projects/Mobbers.html",
        slideshow: ["/Images/Zombeez/SH_AKBoss.PNG", "/Images/Zombeez/SH_M60Boss.PNG", "/Images/Mobbers/Lib.gif", "/Images/Mobbers/test.gif", "/Videos/Mobbers 2024-07-09 09-30-03.mp4"]
    },

    Mobberville: {
        title: "Mobberville",
        description: "Farming game where you... play as a mob of a dungeon... ",
        thumbnail: "/Images/Zombeez/SH_AKBoss.PNG",
        previews: ["/Images/Mobbers/Lib.gif", "/Images/Mobbers/test.gif"],
        summary: "Huh!",
        role: "Lead Programmer",
        size: "8",
        tools: "Unreal Engine 5, C++, GitHub, Premiere Pro",
        timeline: "June 2023 to August 2023",
        ProjectLink: "Projects/Mobbers.html",
        slideshow: ["/Images/Zombeez/SH_AKBoss.PNG", "/Images/Zombeez/SH_M60Boss.PNG", "/Images/Mobbers/Lib.gif", "/Images/Mobbers/test.gif", "/Videos/Mobbers 2024-07-09 09-30-03.mp4"]
    },

    TerrainGenerator: {
        title: "Terrain Generator",
        description: "Terrain generation with demos on specific procedural demos",
        thumbnail: "/Images/Zombeez/SH_AKBoss.PNG",
        previews: ["/Images/Mobbers/Lib.gif", "/Images/Mobbers/test.gif"],
        summary: "MSc Procedural Generation project ",
        role: "Procedural Programmer",
        size: "1",
        tools: "Unity, C#, GitHub",
        timeline: "September 2022 to December 2022",
        ProjectLink: "Projects/TerrainGeneration.html",
        slideshow: ["/Images/Zombeez/SH_AKBoss.PNG", "/Images/Zombeez/SH_M60Boss.PNG", "/Images/Mobbers/Lib.gif", "/Images/Mobbers/test.gif", "/Videos/Mobbers 2024-07-09 09-30-03.mp4"]
    },

    Zombeez: {
        title: "Survival Horde",
        description: "Survive the horde of zombies, and meet some friends along the way!",
        thumbnail: "/Images/Zombeez/SH_AKBoss.PNG",
        previews: ["/Images/Mobbers/Lib.gif", "/Images/Mobbers/test.gif"],
        summary: "Game Jam submission with the objective to get the survivors from",
        role: "Unity Developer",
        size: "Solo",
        tools: "Unity, C#, GitHub, Asperite",
        timeline: "June 2024",
        ProjectLink: "",
        slideshow: ["/Images/Zombeez/SH_AKBoss.PNG", "/Images/Zombeez/SH_M60Boss.PNG", "/Images/Mobbers/Lib.gif", "/Images/Mobbers/test.gif", "/Videos/Mobbers 2024-07-09 09-30-03.mp4"]
    },

    AiO: {
        title: "Art Is Opinion",
        description: "Paint what you can see... literally!",
        thumbnail: "/Images/Zombeez/SH_AKBoss.PNG",
        previews: ["/Images/Mobbers/Lib.gif", "/Images/Mobbers/test.gif"],
        summary: "BSc Second year group project",
        role: "Programmer",
        size: "4",
        tools: "Unity, C#, GitHub, Tobii",
        timeline: "December 2019 to August 2021",
        ProjectLink: "",
        slideshow: ["/Images/Zombeez/SH_AKBoss.PNG", "/Images/Zombeez/SH_M60Boss.PNG", "/Images/Mobbers/Lib.gif", "/Images/Mobbers/test.gif", "/Videos/Mobbers 2024-07-09 09-30-03.mp4"]
    },

    Rambleon: {
        title: "Tales of Rableon",
        description: "Pixelart Metroidvania with RPG elements where you play as a chosen.",
        thumbnail: "/Images/Zombeez/SH_AKBoss.PNG",
        previews: ["/Images/Mobbers/Lib.gif", "/Images/Mobbers/test.gif"],
        summary: "Final year group project where ",
        role: "Programmer",
        size: "4",
        tools: "Unity, C#, GitHub, Inkle",
        timeline: "January 2023 to June 2023",
        ProjectLink: "",
        slideshow: ["/Images/Zombeez/SH_AKBoss.PNG", "/Images/Zombeez/SH_M60Boss.PNG", "/Images/Mobbers/Lib.gif", "/Images/Mobbers/test.gif", "/Videos/Mobbers 2024-07-09 09-30-03.mp4"]
    },

    ML: {
        title: "Machine Learning",
        description: "Created a Machine .",
        thumbnail: "/Images/Zombeez/SH_AKBoss.PNG",
        previews: ["/Images/Mobbers/Lib.gif", "/Images/Mobbers/test.gif"],
        summary: "Final year group project where ",
        role: "Programmer",
        size: "4",
        tools: "Unity, C#, GitHub, Inkle",
        timeline: "January 2023 to June 2023",
        ProjectLink: "",
        slideshow: ["/Images/Zombeez/SH_AKBoss.PNG", "/Images/Zombeez/SH_M60Boss.PNG", "/Images/Mobbers/Lib.gif", "/Images/Mobbers/test.gif", "/Videos/Mobbers 2024-07-09 09-30-03.mp4"]
    },
};

currentThumbnail;
currentImageID;

function PopulateProjects() {
    let projectCount = 0;
    Object.keys(projects).forEach(projectID => {
        if (projectCount >= 12) {
            console.warn("Maximum number of projects reached");
            return;
        }

        let isAdded = ApplyProjectData(projectID);
        if (isAdded) {
            projectCount++;
        }
    });
}

function ApplyProjectData(a_id) {
    const project = projects[a_id];
    if (!project) {
        console.error(`ProjectLink ' {
            childElement.href = project[key];${a_id}' not found.`);
        return false;
    }

    // CreateCard(a_id);

    const projectElement = document.getElementById(a_id);
    if (!projectElement) {
        console.error(`Element with ID '${a_id}'not found.`);
        return false;
    }

    Object.keys(project).forEach(key => {
        const childElement = projectElement.querySelector(`.${key}`);

        if (childElement) {
            if (key === "thumbnail") {
                childElement.src = project[key];
            } else if (key === "ProjectLink") {
                childElement.href = project[key];
            } else {
                childElement.textContent = project[key];
            }
        }
    });

    return true;
}

function CreateCard(a_id) {
    let popup_card = document.createElement("div")
    popup_card.id = a_id;
    popup_card.class = "project-card";
    // card.setAttribute()

    popup_card.innerHTML = `
    <img class="thumbnail" src="/Images/Zombeez/SH_AKBoss.PNG" href="#popup2">
            <div class="project-title">
                <h3 class="title">Mobberville</h3>
                <p class="description">Farming game where you play... as the mobs of a dungeon... huh...</p>
            </div>
    `

    const currentDiv = document.getElementById("projects-gallery");
    document.body.insertBefore(card, currentDiv);
}

function GetRandomPreview(a_projectID) {
    if (a_projectID in projects) {
        const clips = projects[a_projectID].previews;

        return clips[Math.floor(Math.random() * clips.length)];
    } else {
        console.error(`'${a_projectID}' does not exist in projects`);
    }
}

function PlayPreview(a_projectID) {
    const projectCard = document.getElementById(a_projectID);
    currentImageID = projectCard.querySelector('.thumbnail');
    currentThumbnail = currentImageID.src;

    let chosenClip = GetRandomPreview(a_projectID);
    if (!chosenClip) {
        console.error("No clip chosen.");
        return;
    }

    currentImageID.src = chosenClip;
}

function StopPreview() {
    currentImageID.src = currentThumbnail;
}

function OpenPopup(a_id) {
    let card = document.getElementById('Popup');
    card.style.display = "block";
    UpdatePopup(card, a_id);
}

function ClosePopup() {
    let card = document.getElementById('Popup');
    card.style.display = "none";
}

function UpdatePopup(a_card, a_projectID) {
    let breakdown = a_card.querySelector('.breakdown');

    breakdown.innerHTML = `
    <b>Summary: </b> ${projects[a_projectID].summary}
    <br><br>
    <b>Role: </b> ${projects[a_projectID].role}
    <br><br>
    <b>Team Size: </b> ${projects[a_projectID].size}
    <br><br>
    <b>Tools: </b> ${projects[a_projectID].tools}
    <br><br>
    <b>Timeline: </b> ${projects[a_projectID].timeline}
    <br><br>
    <a href="${projects[a_projectID].ProjectLink}"><button>Go To Page</button></a>
    `;

    let popup_slideshow = a_card.querySelector('.photo-gallery');

    popup_slideshow.innerHTML = `
        <div class="slides">
            <img src="${projects[a_projectID].slideshow[0]}" />
        </div>
        <div class="slides">
            <img src="${projects[a_projectID].slideshow[1]}" />
        </div>
        <div class="slides">
            <img src="${projects[a_projectID].slideshow[2]}" />
        </div>
        <div class="slides">
            <img src="${projects[a_projectID].slideshow[3]}" />
        </div>
        <div class="slides">
            <video controls>
                <source src="${projects[a_projectID].slideshow[4]}">
            </video>
        </div>

        <a class="prev" onclick="changeSlide(-1)">«</a>
        <a class="next" onclick="changeSlide(1)">»</a>
    `;
}
