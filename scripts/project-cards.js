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
    }
};

currentThumbnail;
currentImageID;

function PopulateProjects() {
    let projectCount = 0;
    Object.keys(projects).forEach(projectID => {
        if (projectCount >= 12){
            console.warn("Maximum number of projects reached");
            return;
        }

        let isAdded = ApplyProjectData(projectID);
        if (isAdded){
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
    <a href="${projects[a_projectID].ProjectLink}"><button>Got To Page</button></a>
    `;
}
