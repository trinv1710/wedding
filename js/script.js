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
  '99': 'Anh An',
  '100': 'Anh Toàn + Bạn Thoa',
  '101': 'V/C Anh Quí',
  '102': 'Anh Nguyên + Bạn Nhi',
  '103': 'Em Hà',
  '104': 'V/C Chị Hoa',
  '105': 'Anh Hoàng Anh',
  '106': 'V/C Anh Linh',
  '107': 'Anh Phi',
  '108': 'V/C Anh Danh',
  '109': 'V/C Chị Mỹ',
  '110': 'Bác Sơn',
  '111': 'V/C Anh Duy',
  '112': 'V/C Anh Minh Tiến',
  '113': 'Bạn Trang',
  '114': 'V/C Anh Đức',
  '115': 'V/C Anh Vũ',
  '116': 'V/C Anh Thiên',
  '117': 'Anh Tú',
  '118': 'V/C Anh Long',
  '119': 'V/C Anh Tuấn',
  '120': 'V/C Chị Lãnh',
  '121': 'V/C Anh Phước',
  '122': 'Anh Ý',
  '123': 'V/C Anh Nam',
  '124': 'Bạn Phát',
  '125': 'V/C Chị Sen',
  '126': 'V/C Chị Thương',
  '127': 'V/C Chị Tâm',
  '128': 'Anh Thông + Chị Dương',
  '129': 'Em Yến',
  '130': 'Anh Hải + Chị Quỳnh Anh',
  '131': 'Bạn Thức + Ngọc Diệu',
  '132': 'Anh Kiên + Chị Nga Chemy',
  '133': 'Em Kim Anh',
  '134': 'Em Phương Lan',
  '135': 'Nguyễn Tuấn Kiệt',
  '136': 'Đặng Thị Phương',
  '137': 'Trang. T Nguyen',
  '138': 'Liêm',
  '139': 'Phuong.Pham',
  '140': 'Tien Tran',
  '141': 'Loc Nguyen',
  '142': 'Nguyễn Trung Tiến',
  '143': 'Hoa La',
  '144': 'Chị Lệ',
  '145': 'Văn Lời',
  '146': 'Hiếu',
  '147': 'Dũng',
  '148': 'Hà Trần',
  '149': 'Nhông',
  '150': 'Quỳnh',
  '151': 'Phụng',
  '152': 'Hằng Đỗ',
  '153': 'Hào',
  '154': 'Dat Ta',
  '155': 'Lợi Trà',
  '156': 'Kiệt Trịnh',
  '157': 'Nguyen Duy Nguyen',
  '158': 'Tuyết Huỳnh',
  '159': 'Tiến H Nguyễn',
  '160': 'Ánh Hồng',
  '161': 'Phú Quý',
  '162': 'Ngân Võ',
  '163': 'Diệp Phạm',
  '164': 'Anh Thắng',
  '165': 'V/C Anh Châu',
  '166': 'Anh Bình',
  '167': 'V/C Anh Chủ',
  '168': 'V/C Anh Tiến',
  '169': 'V/C Bạn Phúc',
  '170': 'V/C Bạn Trọng',
  '171': 'V/C Bạn Hà',
  '172': 'Bạn Long',
  '173': 'Bạn Sáng',
  '174': 'Bạn Linh',
  '175': 'Bạn Nghĩa',
  '176': 'Bạn Nam',
  '177': 'V/C Bạn Yến + Phong',
  '178': 'V/C Bạn Thìn + Quyên',
  '179': 'Bạn Quý',
  '180': 'Bạn Sơn',
  '181': 'V/C Bạn Na + Điệp',
  '182': 'Bạn Bảo + Trúc',
  '183': 'Bạn Ninh',
  '184': 'V/C Bạn Chi + Thắng',
  '185': 'V/C Bạn Lan Anh',
  '186': 'V/C Bạn Hậu',
  '187': 'Bạn Sương',
  '188': 'V/C Bạn Tuyền',
  '189': 'V/C Bạn Lâm',
  '190': 'Bạn Tiển',
  '191': 'Bạn Long',
  '192': 'V/C Anh Tư',
  '193': 'Bạn Thắng',
  '194': 'Bạn Tiến',
  '195': 'V/C Em Ngân',
  '196': 'V/C Bạn Tuấn',
  '197': 'Bạn Thuận',
  '198': 'Bạn Trực',
  '199': 'Em Tiền',
  '200': 'Em Duy',
  '201': 'V/C Bạn Trang',
  '202': 'V/C Bạn Trâm',
  '203': 'Bạn Yến',
  '204': 'Bạn Hùng',
  '205': 'Bạn Khanh',
  '206': 'Bạn Thật',
  '207': 'Bạn Luận',
  '208': 'Em Thuận',
  '209': 'Bạn Hà Thanh',
  '210': 'Bạn Trần Tiến',
  '211': 'V/C Bạn Thảo',
  '212': 'Em Khánh',
  '213': 'Em Hiền',
  '214': 'Chị Dưỡng',
  '215': 'Chị Phương Nam (Cọ)',
  '216': 'V/C Chú Cường',
  '217': 'Em Kiên',
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

function getGuestId() {
  const fromQuery = new URLSearchParams(window.location.search).get('guest');
  if (fromQuery) return fromQuery;

  const pathMatch = window.location.pathname.match(/\/guest\/(\d+)\/?$/);
  if (pathMatch) return pathMatch[1];

  const hash = window.location.hash.slice(1);
  if (!hash) return null;
  return new URLSearchParams(hash).get('guest');
}

function isGroomSide(guest) {
  const n = Number(guest);
  return n >= 99 && n <= 217;
}

function updateGuestName() {
  const guest = getGuestId();
  const name = guestNames[guest];
  if (name) {
    for (const id of ['guest-name', 'splash-guest']) {
      const el = document.getElementById(id);
      if (el) el.textContent = name;
    }
  }
  if (isGroomSide(guest)) {
    const dateEl = document.getElementById('splash-date-value');
    if (dateEl) dateEl.textContent = '13 · 06 · 2026';
  }
}

updateGuestName();
window.addEventListener('hashchange', updateGuestName);

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
