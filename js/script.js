const guestNames = {
  '1': 'Bạn Anh Phong',
  '2': 'Bạn Hiền',
  '3': 'Bạn Ngọc Bỉ',
  '4': 'Bạn Thảo',
  '5': 'Bạn Quyền',
  '6': 'Bạn Đình Chí',
  '7': 'Vợ chồng bạn Bích Hồng',
  '8': 'Bạn Bích Vy +',
  '9': 'Bạn Hiền',
  '10': 'Bạn Hữu Hùng',
  '11': 'Bạn Minh Trung',
  '12': 'Bạn Việt Hoàng',
  '13': 'Bạn Tú Trinh',
  '14': 'Bạn Thúy Hà',
  '15': 'Bạn Như Quỳnh',
  '16': 'Bạn Thảo Quỳnh',
  '17': 'Bạn Ái My',
  '18': 'Bạn Tiến +',
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
  '99': 'Anh An +',
  '100': 'Anh Toàn + bạn Thoa',
  '101': 'Vợ chồng anh Quí',
  '102': 'Anh Nguyên + bạn Nhi',
  '103': 'Em Hà +',
  '104': 'Vợ chồng chị Hoa',
  '105': 'Anh Hoàng Anh',
  '106': 'Vợ chồng anh Linh',
  '107': 'Anh Phi',
  '108': 'Vợ chồng anh Danh',
  '109': 'Vợ chồng chị Mỹ',
  '110': 'Bác Sơn',
  '111': 'Vợ chồng anh Duy',
  '112': 'Vợ chồng anh Minh Tiến',
  '113': 'Bạn Trang + anh Hoàng Anh',
  '114': 'Vợ chồng anh Đức',
  '115': 'Vợ chồng anh Vũ',
  '116': 'Vợ chồng anh Thiên',
  '117': 'Anh Tú +',
  '118': 'Vợ chồng anh Long',
  '119': 'Vợ chồng anh Tuấn',
  '120': 'Vợ chồng chị Lãnh',
  '121': 'Vợ chồng anh Phước',
  '122': 'Anh Ý +',
  '123': 'Vợ chồng anh Nam',
  '124': 'Bạn Phát +',
  '125': 'Vợ chồng chị Sen',
  '126': 'Vợ chồng chị Thương',
  '127': 'Vợ chồng chị Tâm',
  '128': 'Anh Thông + chị Dương',
  '129': 'Em Yến +',
  '130': 'Anh Hải + chị Quỳnh Anh',
  '131': 'Bạn Thức + Ngọc Diệu',
  '132': 'Anh Kiên + chị Nga Chemy',
  '133': 'Em Kim Anh +',
  '134': 'Em Phương Lan +',
  '135': 'Em Kiệt Nguyễn +',
  '136': 'Em Phương +',
  '137': 'Vợ chồng chị Trang',
  '138': 'Vợ chồng anh Liêm',
  '139': 'Vợ chồng chị Phương',
  '140': 'Chị Thủy Tiên',
  '141': 'Vợ chồng anh Lộc',
  '142': 'Vợ chồng anh Trung Tiến',
  '143': 'Vợ chồng bạn Hoa',
  '144': 'Chị Lệ',
  '145': 'Vợ chồng anh Lời',
  '146': 'Em Minh Hiếu +',
  '147': 'Em Dũng + Diễm Kiều',
  '148': 'Vợ chồng chị Hà',
  '149': 'Em Nhông +',
  '150': 'Em Quỳnh +',
  '151': 'Chị Phụng +',
  '152': 'Vợ chồng chị Hằng',
  '153': 'Bạn Hào +',
  '154': 'Em Đạt',
  '155': 'Anh Lợi +',
  '156': 'Em Kiệt Trịnh',
  '157': 'Vợ chồng anh Nguyên',
  '158': 'Em Tuyết +',
  '159': 'Vợ chồng anh Hòa Tiến',
  '160': 'Em Hồng +',
  '161': 'Vợ chồng anh Quý',
  '162': 'Em Ngân +',
  '163': 'Em Diệp +',
  '164': 'Vợ chồng anh Thắng',
  '165': 'Vợ chồng anh Châu',
  '166': 'Anh Bình +',
  '167': 'Vợ chồng anh Chủ',
  '168': 'Vợ chồng anh Tiến',
  '169': 'Vợ chồng bạn Phúc',
  '170': 'Vợ chồng bạn Trọng',
  '171': 'Vợ chồng bạn Hà',
  '172': 'Bạn Minh Long +',
  '173': 'Bạn Ngọc Sáng +',
  '174': 'Bạn Nhật Linh +',
  '175': 'Bạn Nghĩa +',
  '176': 'Bạn Nam +',
  '177': 'Bạn Yến + Phong',
  '178': 'Bạn Thìn + Quyên',
  '179': 'Bạn Quý +',
  '180': 'Bạn Sơn +',
  '181': 'Bạn Na + Điệp',
  '182': 'Bạn Bảo + Trúc',
  '183': 'Bạn Ninh +',
  '184': 'Bạn Chi + Thắng',
  '185': 'Vợ chồng bạn Lan Anh',
  '186': 'Vợ chồng bạn Hậu',
  '187': 'Bạn Sương +',
  '188': 'Vợ chồng bạn Tuyền',
  '189': 'Vợ chồng bạn Lâm',
  '190': 'Bạn Tiển +',
  '191': 'Bạn Long +',
  '192': 'Vợ chồng anh Tư',
  '193': 'Bạn Thắng +',
  '194': 'Bạn Tiến +',
  '195': 'Vợ chồng em Ngân',
  '196': 'Vợ chồng bạn Tuấn',
  '197': 'Bạn Thuận +',
  '198': 'Bạn Trực +',
  '199': 'Em Tiền +',
  '200': 'Em Duy',
  '201': 'Vợ chồng bạn Trang',
  '202': 'Em Diệp +',
  '203': 'Bạn Yến +',
  '204': 'Bạn Hùng +',
  '205': 'Bạn Khanh + anh Cường',
  '206': 'Bạn Thật +',
  '207': 'Bạn Luận +',
  '208': 'Em Thuận +',
  '209': 'Bạn Thanh Hà +',
  '210': 'Bạn Trần Tiến +',
  '211': 'Vợ chồng bạn Thảo',
  '212': 'Em Khánh Cà Mau +',
  '213': 'Em Hiền +',
  '214': 'Chị Dưỡng',
  '215': 'Chị Phương Nam (Cọ)',
  '216': 'Vợ chồng chú Cường',
  '217': 'Em Kiên +',
  '221': 'Vợ chồng bạn Trâm',
  '222': 'Vợ chồng bạn Hiện',
  '223': 'Bạn Tường +',
  '224': 'Vợ chồng bạn Lan Châu',
  '225': 'Bạn Đình Chí +',
  '226': 'Vợ chồng bạn My',
  '227': 'Bạn Mỹ Linh +',
  '228': 'Vợ chồng bé Vi',
  '229': 'Vợ chồng bé Thư',
  '230': 'Bạn Đình Chí +',
  '300': 'Vợ chồng anh Hùng AM',
  '301': 'Bạn Đức Anh +',
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
  '313': 'Gia đình chị Chi',
  '314': 'Bạn Bích Ngân +',
  '315': 'Bé Linh',
  '316': 'Bạn Thanh Hà +',
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

const BRIDE_SIDE_OVERRIDES = new Set(['217']);

function isGroomSide(guest) {
  if (document.body.dataset.event === 'groom') return true;
  if (BRIDE_SIDE_OVERRIDES.has(String(guest))) return false;
  const n = Number(guest);
  return n >= 99 && n <= 299;
}

function updateGuestName() {
  const guest = getGuestId();
  const name = guestNames[guest];
  if (name) {
    for (const id of ['guest-name', 'groom-guest-name', 'splash-guest']) {
      const el = document.getElementById(id);
      if (el) el.textContent = name;
    }
  }
  if (isGroomSide(guest)) {
    const splashDate = document.getElementById('splash-date-value');
    if (splashDate) splashDate.textContent = '13 · 06 · 2026';
    document.getElementById('wedding-app-bride')?.classList.add('hidden');
    document.getElementById('wedding-app-groom')?.classList.remove('hidden');
  }
}

updateGuestName();
window.addEventListener('hashchange', updateGuestName);

// Countdown function
function updateCountdown() {
  const targetDate = new Date(isGroomSide(getGuestId()) ? '2026-06-13T00:00:00' : '2026-06-07T00:00:00').getTime();
  const now = new Date().getTime();
  const timeRemaining = targetDate - now;

  const setText = (cls, val) => document.querySelectorAll(cls).forEach(el => { el.textContent = val; });

  if (timeRemaining <= 0) {
    setText('.vs-time-days', '0');
    setText('.vs-time-hours', '0');
    setText('.vs-time-minutes', '0');
    setText('.vs-time-seconds', '0');
    return;
  }

  setText('.vs-time-days', Math.floor(timeRemaining / (1000 * 60 * 60 * 24)));
  setText('.vs-time-hours', Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  setText('.vs-time-minutes', Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60)));
  setText('.vs-time-seconds', Math.floor((timeRemaining % (1000 * 60)) / 1000));
}

// Update countdown immediately and then every second
updateCountdown();
setInterval(updateCountdown, 1000);

// Gift box — event delegation để hoạt động trên cả bride và groom block
document.addEventListener('click', (e) => {
  if (e.target.closest('.gift-box-trigger')) {
    const modal = e.target.closest('.wedding-card')?.querySelector('.gift-box-modal');
    if (modal) { modal.classList.remove('hidden'); modal.classList.add('flex'); }
    return;
  }
  if (e.target.closest('.gift-box-close')) {
    const modal = e.target.closest('.wedding-card')?.querySelector('.gift-box-modal');
    if (modal) { modal.classList.add('hidden'); modal.classList.remove('flex'); }
    return;
  }
  if (e.target.classList.contains('gift-box-modal')) {
    e.target.classList.add('hidden');
    e.target.classList.remove('flex');
    return;
  }
  if (e.target.closest('.gift-box-copy')) {
    const btn = e.target.closest('.gift-box-copy');
    const account = btn.dataset.account || '';
    const done = () => {
      const original = btn.textContent;
      btn.textContent = 'Đã sao chép!';
      setTimeout(() => { btn.textContent = original; }, 1500);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(account).then(done).catch(done);
    } else {
      const ta = document.createElement('textarea');
      ta.value = account;
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); } catch (_) {}
      ta.remove();
      done();
    }
  }
});
