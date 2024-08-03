btn.addEventListener('click', onClick);

async function onClick() {
  fetch(form.action, {
    method: "POST",
    body: new FormData(form)
  }).then(res => res.json())
    .then(o => responseDiv.innerText = JSON.stringify(o, null, 2));
}
