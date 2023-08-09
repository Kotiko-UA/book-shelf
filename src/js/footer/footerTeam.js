const liTeamEl = document.querySelectorAll('.list-team');
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { teams } from './teamsGrup';

liTeamEl.forEach(item => item.addEventListener('click', openModalTeam));

function openModalTeam(e) {
  if (e.target.nodeName === 'UL') {
    return;
  }
  const id = e.currentTarget.id;
  markapModal(teams[`${id}`]);
}

function markapModal({ img, h, p, aTeam }) {
  basicLightbox
    .create(
      `
 <img width="400" height="100" alt="${h}" src="${img}">
 <h3 class="teamName">${h}</h3>
 <p class="developer-class">${p}</p>
 <p class="mail-team">Mail: ${aTeam}</p>
`
    )
    .show();
}
