document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }

  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var confirmBox = document.getElementById('form-confirm');
      form.style.display = 'none';
      if (confirmBox) confirmBox.style.display = 'block';
      // NOTE: this form does not send data anywhere yet.
      // Hook this up later to an email service (e.g. Formspree)
      // or a backend endpoint once you're ready to go live.
    });
  }
});
