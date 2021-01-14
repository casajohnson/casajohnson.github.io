const utils = {
  qsa: (selector) => Array.from(document.querySelectorAll(selector)),
  solveFor: (el, currentTop, parentTop) => {
    const previousEl = el.previousElementSibling;
    const previousElTop = parseInt(previousEl.style.top, 10);
    const previousElBottom = previousEl.getBoundingClientRect().bottom - parentTop;

    // Check for overlaps
    if (currentTop === previousElTop) {
      const newTop = currentTop + previousEl.getBoundingClientRect().height;
      return newTop;
    } else if (currentTop < previousElBottom) {
      const newTop = previousElBottom;
      return newTop;
    } else {
      return currentTop;
    }
  },
  getOS: () => {
    const ua = window.navigator.userAgent;
    const currentPlatform = window.navigator.platform;
    const macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K', 'Mac'];
    const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
    const iosPlatforms = ['iPhone'];

    let os = null;

    if (macosPlatforms.includes(currentPlatform)) {
      os = 'Mac';
    } else if (iosPlatforms.includes(currentPlatform)) {
      os = 'iOS';
    } else if (windowsPlatforms.includes(currentPlatform)) {
      os = 'Windows';
    } else if (/Android/.test(ua)) {
      os = 'Android';
    }

    // Detect touch for iPad
    if (os === 'Mac' && 'ontouchend' in document) {
      os = 'iPad';
    }

    return os;
  }
}

function calculateFootnotesPos() {
  utils.qsa('sup')
    .forEach(el => {
      const id = el.getAttribute('id').replace('fnref-', '');
      const parent = document.querySelector('.footnotes');
      let top = Math.round(el.getBoundingClientRect().top - parent.getBoundingClientRect().top);
      const note = document.querySelector(`#fn-${id}`);

      if (note.previousElementSibling) {
        top = utils.solveFor(note, top, parent.getBoundingClientRect().top);
      }

      note.style.top = `${top}px`;
      note.style.opacity = 1;
    });
}

function loadMap() {
  const mapContainer = document.querySelector("#js-map");

  if (mapContainer == null || mapboxgl == null) {
    return;
  }

  const long = parseFloat(mapContainer.getAttribute('data-long'));
  const lat = parseFloat(mapContainer.getAttribute('data-lat'));

  mapboxgl.accessToken = 'pk.eyJ1IjoicmVoYXQiLCJhIjoiY2p5ZTBmbzQ3MGk0aDNtbnRobGYxaDJyMCJ9.jrSMGpyvykhOxsTAvNWpVw';
  const map = new mapboxgl.Map({
    container: 'js-map',
    style: 'mapbox://styles/mapbox/light-v10',
    center: [long, lat],
    zoom: 16
  });

  const marker = new mapboxgl.Marker()
    .setLngLat([long, lat])
    .addTo(map);

  map.scrollZoom.disable();
}

function changeDownloadArrow() {
  const os = utils.getOS();
  utils.qsa('.appicon')
    .filter(el => (el.getAttribute('data-device').toLowerCase() === os.toLowerCase()))
    .forEach(el => el.classList.add('is-active'));
}

function changeiAWindow() {
  const os = utils.getOS();

  console.log(`Current OS: ${os}`);

  const values = {
    'mac': 'ia__window--mac',
    'ios': 'ia__window--iphone',
    'ipad': 'ia__window--ipad',
    'windows': 'ia__window--windows',
    'android': 'ia__window--android',
  };

  utils.qsa('.ia__window')
    .filter(el => (el.classList.contains('is-dynamic')))
    .forEach(el => el.classList.add(values[os.toLowerCase()]));
}

async function handleSubmit(e, form) {
  e.preventDefault();

  const emailValue = form.elements['email'].value;
  const dataId = form.getAttribute('data-id');

  if (!emailValue) return;

  const opts = {
    method: 'post',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8' },
    body: `action=subscribe&email=${encodeURIComponent(emailValue)}&id=${dataId}`,
  };

  const disableForm = (status) => {
    if (!status) {
      form.elements['email'].removeAttribute('disabled');
      form.elements['submit'].removeAttribute('disabled');
      form.elements['email'].value = '';
      return;
    }

    form.elements['email'].setAttribute('disabled', status);
    form.elements['submit'].setAttribute('disabled', status);
  };

  const setErrorMsg = (msg) => {
    form.previousElementSibling.previousElementSibling.innerHTML = msg;
  }

  const setSuccessMsg = (msg) => {
    form.previousElementSibling.innerHTML = msg;
  }

  // Reset errors and form before fetching from Mailchimp
  setErrorMsg('');
  disableForm(true);

  try {
    const res = await fetch('/wp-admin/admin-ajax.php', opts);
    const data = await res.json();

    if (data.errors) {
      if (data.errors.http_request_failed) {
        setErrorMsg("We're sorry, an http request failed.");
      }
    }

    const body = JSON.parse(data.body);

    if (body.result === 'success') {
      setSuccessMsg("👍 Thank you for subscribing. We're excited to have you on board!");
      form.classList.add('is-hidden');
    }

    if (body.result === 'error' && /subscribed/.test(body.msg)) {
      disableForm(false);
      setErrorMsg("You have been already subscribed.");
    }

    if (body.result === 'error' && /requests/.test(body.msg)) {
      setErrorMsg("You have too many signup requests.");
    }

  } catch (err) {
    console.log(err);
    disableForm(err);
  }
}

function handleVideo() {
  const playBtn = document.querySelector('.play-icon');
  const video = document.querySelector('.writer__video');

  if (video == null) {
    console.log("Video element with class 'writer__video' doesn't exist");
    return;
  }

  video.addEventListener('pause', function() {
    if (video.seeking) return;
    this.classList.remove('is-visible');
  });

  playBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if(video.hasAttribute('src')) {
      video.classList.add('is-visible');
      video.play();
      return;
    }

    video.setAttribute('src', 'https://player.vimeo.com/external/272327854.hd.mp4?s=72845e3b56c2b8a5f190f00ca934a5efd36a2f07&profile_id=174');
    video.load();
    video.classList.add('is-visible');
    video.play();
  });
}

function toggleMenu() {
  const header = document.querySelector('.header-primary');
  const nav = document.querySelector('.header-primary > .nav-primary');
  const btn = document.querySelector('.header-primary > .toggler');

  if (btn == null) {
    return;
  }

  // Timeline for burger icon.
  const tl = gsap.timeline({ paused: true, defaults: { duration: 0.01 }});
  tl.to('.bread__top', { y: '6.5px' });
  tl.to('.bread__bottom', { y: '-6.5px' }, '<');
  tl.to(nav, { opacity: 1 }, '<0.1');
  tl.to('.bread__top', { rotate: 45 }, '<0.1');
  tl.to('.bread__bottom', { rotate: -45 }, '<');

  btn.addEventListener('click', function() {
    const isClosed = header.classList.contains('is-closed');

    if (!isClosed) {
      gsap.to(nav, 0.1, { height: 0 });
      tl.reverse();
      header.classList.add('is-closed');
    } else {
      gsap.set(nav, { height: 'auto', opacity: 0 });
      gsap.from(nav, 0.1, { height: 0 });
      tl.play();
      header.classList.remove('is-closed');
    }
  });
}

window.addEventListener('DOMContentLoaded', (event) => {
  changeiAWindow();
  changeDownloadArrow();
});

window.onload = () => {
  calculateFootnotesPos();
  window.addEventListener('resize', calculateFootnotesPos);
  loadMap();
  handleVideo();
  toggleMenu();
};


