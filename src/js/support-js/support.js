const refs = {
  list: document.querySelector('.support-list'),
  btnDown: document.querySelector('.support-btn-down'),
  btnUp: document.querySelector('.support-btn-up'),
  bottomQuard: document.querySelector('.bottom-quard'),
};

refs.btnDown.addEventListener('click', scrollDown);

function scrollDown() {
  refs.list.scrollBy({
    top: 1000,
    behavior: 'smooth',
  });
  refs.btnDown.style.display = 'none';
  refs.btnUp.style.display = 'block';
}

refs.btnUp.addEventListener('click', scrollUp);

function scrollUp() {
  refs.list.scrollBy({
    top: -1000,
    behavior: 'smooth',
  });
  refs.btnDown.style.display = 'block';
  refs.btnUp.style.display = 'none';
}

const charityFunds = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: null,
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: null,
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: null,
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: null,
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: null,
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: null,
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: null,
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: null,
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: null,
  },
];

const supportItems = document.querySelectorAll('.support-item');

supportItems.forEach(item => {
  const link = item.querySelector('.support-a');
  const title = link.getAttribute('title').trim();

  const fund = charityFunds.find(fund => fund.title === title);

  if (fund) {
    const url = fund.url;

    link.addEventListener('click', event => {
      event.preventDefault();

      window.open(url, '_blank');
    });
  }
});
