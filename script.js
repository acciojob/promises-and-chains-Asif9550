//your JS code here. If required.
document.getElementById('userForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const age = document.getElementById('age').value.trim();

  // Input validation
  if (!name || !age) {
    alert('inputs cannot be empty');
    return;
  }

  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (parseInt(age, 10) > 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000); // 4 seconds delay
  })
    .then((message) => alert(message))
    .catch((error) => alert(error));
});
