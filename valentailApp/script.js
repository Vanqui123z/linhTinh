(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json"; 

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();

const messages = [
    "Cho hôn 10 cái luôn!",
    "Cho hôn 20 cái luôn!",
    "Cho hôn 100 cái luôn!",
    "Khắp mặt luôn ?",
    "Hôn toàn thân luôn ????",
    "thật luôn:3"
];

let messageIndex = 0;
let lock= false;
let clickNoButton= false;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    if(lock){
           noButton.style.display="none" 
        }
    yesButton.textContent = messages[messageIndex];

      // Nếu đang ở tin nhắn cuối cùng
    if (messageIndex === messages.length - 2) {
        noButton.textContent = "Không còn lựa chọn khác đâu cưng";
        lock=true;
    }

    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
    const NoSize = parseFloat(window.getComputedStyle(noButton).fontSize);
    noButton.style.fontSize = `${NoSize * 0.9}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}