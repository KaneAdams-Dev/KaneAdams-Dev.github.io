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
        ProjectLink: "Projects/Mobbers.html",
    }
};

currentThumbnail;
currentImageID;

function PopulateProjects() {
    Object.keys(projects).forEach(projectID => {
        ApplyProjectData(projectID);
        console.log(projectID);
    });
}

function ApplyProjectData(a_id) {
    const project = projects[a_id];
    if (!project) {
        console.error(`ProjectLink ' {
            childElement.href = project[key];${a_id}' not found.`);
        return
    }

    const projectElement = document.getElementById(a_id);
    if (!projectElement) {
        console.error(`Element with ID '${a_id}'not found.`);
        return;
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
    let card = document.getElementById(a_id);
    card.style.display = "block";
    UpdatePopup(card);
}

function ClosePopup(a_id) {
    let card = document.getElementById(a_id);
    card.style.display = "none";
}

function UpdatePopup(a_card){
    
}
