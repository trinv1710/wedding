// Countdown function
function updateCountdown() {
  const targetDate = new Date('2026-06-13T00:00:00').getTime();
  const now = new Date().getTime();
  const timeRemaining = targetDate - now;

  if (timeRemaining <= 0) {
    // Countdown finished
    document.querySelector('.vs-time-days').textContent = '0';
    document.querySelector('.vs-time-hours').textContent = '0';
    document.querySelector('.vs-time-minutes').textContent = '0';
    document.querySelector('.vs-time-seconds').textContent = '0';
    return;
  }

  // Calculate time units
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Update DOM
  document.querySelector('.vs-time-days').textContent = days;
  document.querySelector('.vs-time-hours').textContent = hours;
  document.querySelector('.vs-time-minutes').textContent = minutes;
  document.querySelector('.vs-time-seconds').textContent = seconds;
}

// Update countdown immediately and then every second
updateCountdown();
setInterval(updateCountdown, 1000);
