/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 * 
 */

/*https://liquipedia.net/commons/images/c/ce/Sentinels_Zekken_at_Masters_Madrid.jpg*/
const zekken_URL = "Images/1600px-Sentinels_Zekken_at_Masters_Madrid.jpg";
const tenZ_URL = "https://liquipedia.net/commons/images/c/c7/TenZ_at_Masters_Madrid_2024.jpg";
const johnQT_URL = "https://liquipedia.net/commons/images/b/ba/Sentinels_JohnQT_at_Masters_Madrid.jpg";
const zellsis_URL = "https://liquipedia.net/commons/images/c/c1/Sentinels_Zellsis_at_Masters_Madrid.jpg";
const sacy_URL = "https://liquipedia.net/commons/images/1/18/Sentinels_Sacy_at_Masters_Madrid.jpg";

const munchkin_URL = "https://liquipedia.net/commons/images/c/c9/GenG_Munchkin_at_VCT_Pacific_2024_Kickoff.jpg";
const t3xture_URL = "https://liquipedia.net/commons/images/6/62/GenG_t3xture_at_VCT_Pacific_2024_Kickoff.jpg";
const meteor_URL = "https://liquipedia.net/commons/images/f/f8/GenG_Meteor_at_VCT_Pacific_2024_Kickoff.jpg";
const lakia_URL = "https://liquipedia.net/commons/images/8/8f/GenG_Lakia_at_VCT_Pacific_2024_Kickoff.jpg";
const karon_URL = "https://liquipedia.net/commons/images/3/3e/GenG_Karon_at_VCT_Pacific_2024_Kickoff.jpg";

const something_URL = "https://liquipedia.net/commons/images/b/b2/Paper_Rex_something_at_VCT_Pacific_2024_Kickoff.jpg";
const mindfreak_URL = "https://liquipedia.net/commons/images/1/1a/PRX_mindfreak_at_VCT_Pacific_2024_Kickoff.jpg";
const f0rsaken_URL = "https://liquipedia.net/commons/images/9/9e/Paper_Rex_f0rsakeNat_VCT_Pacific_2024_Kickoff.jpg";
const d4v41_URL = "https://liquipedia.net/commons/images/d/d7/Paper_Rex_d4v41_at_VCT_Pacific_2024_Kickoff.jpg";
const monyet_URL = "https://liquipedia.net/commons/images/8/82/Paper_Rex_Monyet_at_VCT_Pacific_2024_Kickoff.jpg";

const saadhak_URL = "https://liquipedia.net/commons/images/b/b0/LOUD_Saadhak_at_VCT_2024_Masters_Madrid.jpg";
const qck_URL = "https://liquipedia.net/commons/images/c/c1/LOUD_qck_at_Masters_Madrid.jpg";
const less_URL = "https://liquipedia.net/commons/images/6/67/Less_at_the_Masters_Reykjav%C3%ADk_2022.jpg";
const tuyz_URL = "https://liquipedia.net/commons/images/7/7f/Tuyz_at_the_Valorant_Champions_2023.jpg";
const cauanzin_URL = "https://liquipedia.net/commons/images/e/e8/Cauanzin_at_the_VCT_2023_LOCKIN_S%C3%A3o_Paulo.jpg";

// Mapping player names to their image URLs
const playerImages = {
    "Zekken": zekken_URL,
    "TenZ": tenZ_URL,
    "JohnQT": johnQT_URL,
    "Zellsis": zellsis_URL,
    "Sacy": sacy_URL,
    "Munchkin": munchkin_URL,
    "T3xture": t3xture_URL,
    "Meteor": meteor_URL,
    "Lakia": lakia_URL,
    "Karon": karon_URL,
    "Something": something_URL,
    "Mindfreak": mindfreak_URL,
    "F0rsaken": f0rsaken_URL,
    "D4v41": d4v41_URL,
    "Monyet": monyet_URL,
    "Saadhak": saadhak_URL,
    "Qck": qck_URL,
    "Less": less_URL,
    "Tuyz": tuyz_URL,
    "Cauanzin": cauanzin_URL
};

// This is an array of data (Professional Valorant Players and their stats/info)
let playersInfo = [
    { name:"Zekken", team: "Sentinels", role: "Duelist", kills: 381, deaths: 314, assists: 90, rating: 1.13},
    { name: "TenZ", team: "Sentinels", role: "Controller", kills: 314, deaths: 300, assists: 226, rating: 1.07},
    { name: "JohnQT", team: "Sentinels", role: "IGL", kills: 293, deaths: 251, assists: 117, rating: 1.12},
    { name: "Zellsis", team: "Sentinels", role: "Flex", kills: 263, deaths: 282, assists: 172, rating: 1.01},
    { name: "Sacy", team: "Sentinels", role: "Initiator", kills: 249, deaths: 289, assists: 169, rating: 0.97},
    { name: "Munchkin", team: "Gen.G", role: "IGL", kills: 220, deaths: 201, assists: 131, rating: 1.08},
    { name: "T3xture", team: "Gen.G", role: "Duelist", kills: 264, deaths: 246, assists: 53, rating: 1.04},
    { name: "Meteor", team: "Gen.G", role: "Flex", kills: 268, deaths: 236, assists: 61, rating: 1.05},
    { name: "Lakia", team: "Gen.G", role: "Initiator", kills: 177, deaths: 228, assists: 87, rating: 0.86},
    { name: "Karon", team: "Gen.G", role: "Controller", kills: 242, deaths: 229, assists: 119, rating: 1.05},
    { name: "Something", team: "Paper Rex", role: "Duelist", kills: 274, deaths: 254, assists: 79, rating: 1.05},
    { name: "Mindfreak", team: "Paper Rex", role: "Controller", kills: 220, deaths: 201, assists: 131, rating: 0.84},
    { name: "F0rsaken", team: "Paper Rex", role: "Flex", kills: 273, deaths: 268, assists: 132, rating: 1.02},
    { name: "D4v41", team: "Paper Rex", role: "Initiator", kills: 234, deaths: 259, assists: 143, rating: 0.98},
    { name: "Monyet", team: "Paper Rex", role: "Duelist", kills: 250, deaths: 289, assists: 110, rating: 0.89},
    { name: "Saadhak", team : "Loud", role: "IGL", kills: 162, deaths: 163, assists: 94, rating: 1.02},
    { name: "Qck", team : "Loud", role: "Duelist", kills: 193, deaths: 187, assists: 39, rating: 0.96},
    { name: "Less", team : "Loud", role: "Flex", kills: 195, deaths: 148, assists: 80, rating: 1.21},
    { name: "Tuyz", team : "Loud", role: "Controller", kills: 186, deaths: 144, assists: 80, rating: 1.18},
    { name: "Cauanzin", team : "Loud", role: "Initiator", kills: 195, deaths: 178, assists: 72, rating: 1.08}
];

// This function adds cards the page to display the data in the array
function showCards(playersToShow = playersInfo) {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = ""; // Clear existing content

    playersToShow.forEach(player => {
        const card = document.createElement('div');
        card.classList.add('card');
        let playerImageURL = playerImages[player.name];
        editCardContent(card, player, playerImageURL);
        cardContainer.appendChild(card);
    });
}

function editCardContent(card, player, imageURL) {
    card.innerHTML = `
        <div class="card-content">
            <h2>${player.name}</h2>
            <img src="${imageURL}" alt="Photo of ${player.name}" style="width:100%;">
            <p>Team: ${player.team}</p>
            <p>Role: ${player.role}</p>
            <p>Kills: ${player.kills}</p>
            <p>Deaths: ${player.deaths}</p>
            <p>Assists: ${player.assists}</p>
            <p>Rating: ${player.rating}</p>
        </div>
    `;
    card.style.display = "block";
}

function searchPlayer() {
    const searchTerm = document.getElementById('playerSearch').value.toLowerCase();
    const filteredPlayers = playersInfo.filter(player => 
        player.name.toLowerCase().includes(searchTerm)
    );
    showCards(filteredPlayers);
}

function filterByRating() {
    const selectedRating = document.getElementById('ratingFilter').value;
    let filteredPlayers;

    if (selectedRating === "all") {
        filteredPlayers = playersInfo; // Show all players
    } else if (selectedRating === "0") {
        filteredPlayers = playersInfo.filter(player => player.rating < 1); // Filter for ratings less than 1
    } else {
        // For "More than" options, parse the selected value and filter accordingly
        const ratingThreshold = parseFloat(selectedRating);
        filteredPlayers = playersInfo.filter(player => player.rating > ratingThreshold);
    }

    showCards(filteredPlayers);
}

function sortPlayersByRole() {
    const selectedRole = document.getElementById('roleSort').value;
    let sortedPlayers;

    if (selectedRole === "All") {
        sortedPlayers = playersInfo; // No sorting, just use the original order
    } else {
        sortedPlayers = playersInfo.filter(player => player.role === selectedRole);
    }

    showCards(sortedPlayers);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", () => showCards());

function quoteAlert() {
    console.log("Button Clicked!")
    alert("Thank you for taking the time to explore my page regarding the top 4 teams who played at VCT Masters Madrid! Stay tuned for more projects coming soon! :)");
}
