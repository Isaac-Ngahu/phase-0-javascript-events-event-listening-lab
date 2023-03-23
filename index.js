function addingEventListener() {
    const input = document.getElementById('input');

function clickAlert() {
  alert('I was clicked very hard!');
}

input.addEventListener('click', clickAlert());
}
addingEventListener();