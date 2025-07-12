// Get DOM elements
const clock = document.getElementById('clock');
const timeDisplay = document.getElementById('time');
const dateDisplay = document.getElementById('date');
const themeToggle = document.getElementById('themeToggle');

let is24Hour = false;

// Function to update time and date
function updateTime() {
    const now = new Date();

    // Format time
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = '';

    if (!is24Hour) {
        ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
    }

    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    const timeString = is24Hour
        ? `${hours}:${minutes}:${seconds}`
        : `${hours}:${minutes}:${seconds} ${ampm}`;

    timeDisplay.textContent = timeString;

    // Format date
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('en-US', options);
    dateDisplay.textContent = dateString;
}

// Initial call
updateTime();
setInterval(updateTime, 1000);

// Toggle between 12-hour and 24-hour format
document.addEventListener('DOMContentLoaded', () => {
    // Optional: Add a button to toggle format
    const formatToggle = document.createElement('button');
    formatToggle.textContent = 'Toggle 12/24h';
    formatToggle.style.marginTop = '1rem';
    formatToggle.onclick = () => {
        is24Hour = !is24Hour;
        updateTime();
    };
    document.body.appendChild(formatToggle);
});

// Theme toggle
themeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});