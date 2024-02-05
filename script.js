document.addEventListener('DOMContentLoaded', () => {
    const remainingElement = document.querySelector('#remainingTime');

    const calculateRemainingTime = () => {
        const hours = document.querySelector('#hoursInput').valueAsNumber || 0;
        const mins = document.querySelector('#minutesInput').valueAsNumber || 0;
        const speed = document.querySelector('#speedInput').valueAsNumber || 1;

        const totalMinutes = hours * 60 + mins;
        const actualTime = totalMinutes / speed;

        const actualHours = Math.floor(actualTime / 60);
        const actualMins = Math.round(actualTime % 60);

        const remainingTimeString = `${actualHours} hours and ${actualMins} minutes`;

        remainingElement.textContent = remainingTimeString;
    }

    // Add event listeners for input changes
    document.getElementById('hoursInput').addEventListener('input', calculateRemainingTime);
    document.getElementById('minutesInput').addEventListener('input', calculateRemainingTime);
    document.getElementById('speedInput').addEventListener('input', calculateRemainingTime);

    // Initial calculation
    calculateRemainingTime();
});