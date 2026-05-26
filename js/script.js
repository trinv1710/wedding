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
  '24': 'Vợ chồng chị Nguyên',
  '25': 'Bạn Thành',
  '26': 'Chị Thương',
  '27': 'Vợ chồng chị Nhân',
  '28': 'Vợ chồng chị Hiền',
  '29': 'Vợ chồng anh Huy',
  '30': 'Vợ chồng chị Hà',
  '31': 'Vợ chồng anh Bình',
  '32': 'Vợ chồng chị Nhi AM',
  '33': 'Vợ chồng anh Khánh Fiber',
  '34': 'Vợ chồng anh Lương',
  '35': 'Chị Lê',
  '36': 'Vợ chồng anh Tiến AM',
  '37': 'Vợ chồng chị Trang GDV',
  '38': 'Vợ chồng chị Dung',
  '39': 'Vợ chồng anh Thắng',
  '40': 'Vợ chồng chị Hồng',
  '41': 'Vợ chồng anh Hoan',
  '42': 'Vợ chồng anh Danh AM',
  '43': 'Vợ chồng chị Liên',
  '44': 'Vợ chồng anh Tuấn',
  '45': 'Vợ chồng chị Phương GDV',
  '46': 'Vợ chồng anh Thuận AM',
  '47': 'Vợ chồng anh Luân + chị Bình',
  '48': 'Chị Ngọc',
  '49': 'Vợ chồng chị Huyền + anh Dũng',
  '50': 'Vợ chồng anh Lợi',
  '51': 'Vợ chồng chú Dũng',
  '52': 'Em Nguyên',
  '53': 'Anh Hiếu',
  '54': 'Vợ chồng chị Huệ',
  '55': 'Vợ chồng anh Chung + chị Nga',
  '56': 'Vợ chồng anh Sáng',
  '57': 'Em Trinh Huỳnh',
  '58': 'Vợ chồng chị Thuận',
  '59': 'Vợ chồng chị Thà AM',
  '60': 'Chị Thảo + Bé Minh',
  '61': 'Anh Phước',
  '62': 'Vợ chồng anh Tú',
  '63': 'Vợ chồng chị Hồng',
  '64': 'Em Châu',
  '65': 'Vợ chồng chị Khuyên',
  '66': 'Vợ chồng chị Hạnh',
  '67': 'Vợ chồng chị Phượng',
  '68': 'Vợ chồng chị Liêm',
  '69': 'Vợ chồng chị Thảo',
  '70': 'Chị Khánh Ly GDV',
  '71': 'Vợ chồng chị Hoa',
  '72': 'Vợ chồng anh Cường',
  '73': 'Chị Đường',
  '74': 'Vợ chồng anh Thọ',
  '75': 'Vợ chồng anh Tuấn',
  '76': 'Vợ chồng chị Vinh',
  '77': 'Vợ chồng chị Bích',
  '78': 'Vợ chồng anh Ngọc',
  '79': 'Vợ chồng chú Thân',
  '80': 'Chị Thương',
  '81': 'Vợ chồng chị Phượng',
  '82': 'Vợ chồng anh Hải',
  '83': 'Vợ chồng chú Hải',
  '84': 'Vợ chồng chị Trinh',
  '85': 'Vợ chồng anh Huy',
  '86': 'Vợ chồng chị Thinh',
  '87': 'Bạn Phương Thảo',
  '88': 'Chị Hạnh AM',
  '89': 'Vợ chồng anh Hoàng',
  '90': 'Vợ chồng chú Xin',
  '91': 'Em Nguyên AM',
  '92': 'Vợ chồng chị Dung',
  '93': 'Vợ chồng anh Lâm',
  '94': 'Vợ chồng chị Diễm',
  '95': 'Vợ chồng anh Phương AM',
  '96': 'Gia đình chị Hương',
  '97': 'Vợ chồng chú Thăng',
  '98': 'Chị Chân',
  '300': 'Vợ chồng anh Hùng AM',
  '301': 'Bạn Đức Anh',
  '302': 'Bạn Khả Vi',
  '303': 'Bạn Linh',
  '304': 'Bạn Hiếu',
  '305': 'Anh Phan Anh',
  '306': 'Anh Phan Hưng',
  '307': 'Chị Min',
  '308': 'Bạn Tâm',
  '309': 'Chị Vy',
  '310': 'Chị Hương',
  '311': 'Gia đình chị Thúy',
  '312': 'Gia đình Chị Hiền',
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
