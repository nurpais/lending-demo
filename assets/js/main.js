window.addEventListener('DOMContentLoaded', () => {
  navbar();
  document.querySelector('body').classList.remove('preload');
});

function navbar() {
  if (document.querySelector('.navbar-mobile')) {
    const dropdowns = document.querySelectorAll('.navbar-mobile-dropdown');
    const burger = document.querySelector('.navbar-mobile-burger');

    dropdowns.forEach((dropdown) =>
      dropdown.addEventListener('click', (e) => {
        e.currentTarget.classList.toggle('active');
      })
    );

    burger.addEventListener('click', () => document.documentElement.classList.toggle('navbar-active'));

    window.addEventListener('click', (e) => {
      if (!e.target.closest('.navbar-mobile')) document.documentElement.classList.remove('navbar-active');
    });

    window.addEventListener('resize', () => document.documentElement.classList.remove('navbar-active'));
  }
  if (document.querySelector('.navbar')) {
    const dropdowns = document.querySelectorAll('.navbar-dropdown');

    window.addEventListener('click', (e) => {
      if (!e.target.closest('.navbar')) dropdowns.forEach((item) => item.classList.remove('active'));
    });

    dropdowns.forEach((dropdown) =>
      dropdown.addEventListener('click', (e) => {
        if (e.currentTarget.classList.contains('active')) {
          e.currentTarget.classList.remove('active');
        } else {
          dropdowns.forEach((item) => item.classList.remove('active'));
          e.currentTarget.classList.add('active');
        }
      })
    );
  }
}
