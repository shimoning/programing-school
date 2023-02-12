window.addEventListener("load",function() {
  Array.from(document.getElementsByClassName('toggle')).forEach(function(toggle) {
    console.log({toggle})
    toggle.addEventListener('click', function() {
      toggle.querySelectorAll('.code').forEach(function (hidden) {
        if (hidden.classList.contains('hide')) {
          hidden.classList.remove('hide');
        } else {
          hidden.classList.add('hide');
        }
      })
    });
  });

  Array.from(document.getElementsByClassName('copy')).forEach(function(copy) {
    copy.addEventListener('click', function() {
      const code = decodeURI(copy.nextElementSibling.firstElementChild.innerHTML)
      if (navigator.clipboard) {
        return navigator.clipboard.writeText(code);
      } else {
        alert("このブラウザは対応していません");
      }
    });
  });
});
