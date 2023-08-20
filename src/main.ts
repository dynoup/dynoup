import EventPage from './pages/eventloop';
import CreateDOM from './core/DOM/createDOMRoot';

const root = CreateDOM();

// Routes List
const eventPage = EventPage();
if (!root) {
  console.log(
    'There is no root entry on index.html file, pls check index.html.'
  );
}

if (root) {
  // Route Selected 라우팅 구현 예정
  root.innerHTML = eventPage;
}
