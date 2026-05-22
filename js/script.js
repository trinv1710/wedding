const guestNames = {
  '1': 'Bạn Anh Phong',
  '2': 'Bạn Hiền',
  '3': 'Bạn Ngọc Bỉ',
  '4': 'Bạn Thảo',
  '5': 'Bạn Quyền',
  '6': 'Bạn Đình Chí',
  '7': 'Bạn Bích Hồng',
  '8': 'Bích Vy',
  '9': 'Bạn Hiền',
  '10': 'Bạn Hữu Hùng',
  '11': 'Bạn Minh Trung',
  '12': 'Bạn Việt Hoàng',
  '13': 'Bạn Tú Trinh',
  '14': 'Bạn Thúy Hà',
  '15': 'Bạn Như Quỳnh',
  '16': 'Bạn Thảo Quỳnh',
  '17': 'Bạn Ái My',
  '18': 'Bạn Tiến',
  '19': 'Bạn Tài',
  '20': 'Bạn Thúy Vy + Thanh Dương',
  '21': 'Bạn Công',
  '22': 'Bạn Vũ Thiện + anh Vinh',
  '23': 'Bạn Khoa + Vi',
};

function updateGuestName() {
  const guest = new URLSearchParams(window.location.search).get('guest');
  const name = guestNames[guest];
  if (!name) return;
  for (const id of ['guest-name', 'splash-guest']) {
    const el = document.getElementById(id);
    if (el) el.textContent = name;
  }
}

updateGuestName();

// Countdown function
function updateCountdown() {
  const targetDate = new Date('2026-06-07T00:00:00').getTime();
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

// Gift box modal
const giftBoxTrigger = document.querySelector('.gift-box-trigger');
const giftBoxModal = document.querySelector('.gift-box-modal');
const giftBoxClose = document.querySelector('.gift-box-close');
const giftBoxCopy = document.querySelector('.gift-box-copy');

function openGiftBox() {
  if (!giftBoxModal) return;
  giftBoxModal.classList.remove('hidden');
  giftBoxModal.classList.add('flex');
}

function closeGiftBox() {
  if (!giftBoxModal) return;
  giftBoxModal.classList.add('hidden');
  giftBoxModal.classList.remove('flex');
}

if (giftBoxTrigger) giftBoxTrigger.addEventListener('click', openGiftBox);
if (giftBoxClose) giftBoxClose.addEventListener('click', closeGiftBox);
if (giftBoxModal) {
  giftBoxModal.addEventListener('click', (e) => {
    if (e.target === giftBoxModal) closeGiftBox();
  });
}
if (giftBoxCopy) {
  giftBoxCopy.addEventListener('click', () => {
    const account = giftBoxCopy.dataset.account || '';
    const done = () => {
      const original = giftBoxCopy.textContent;
      giftBoxCopy.textContent = 'Đã sao chép!';
      setTimeout(() => { giftBoxCopy.textContent = original; }, 1500);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(account).then(done).catch(done);
    } else {
      const ta = document.createElement('textarea');
      ta.value = account;
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); } catch (_) {}
      document.body.removeChild(ta);
      done();
    }
  });
}
