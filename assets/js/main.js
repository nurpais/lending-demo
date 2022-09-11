window.addEventListener('DOMContentLoaded', () => {
  navbar();
  accordion();
  tabs();
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

function accordion() {
  // Mobile accordion
  if (document.querySelector('.acc-mobile')) {
    const accordions = document.querySelectorAll('.acc-mobile-dropdown');

    accordions.forEach((accordion) =>
      accordion.addEventListener('click', (e) => {
        e.currentTarget.closest('.acc-mobile').classList.toggle('active');
        console.log(e.currentTarget.nextElementSibling);
        const content = e.currentTarget.nextElementSibling;

        if (e.currentTarget.closest('.acc-mobile').classList.contains('active')) {
          content.style.height = content.scrollHeight + 12 + 'px';
          content.style.paddingBottom = 12 + 'px';
        } else {
          content.style.height = null;
          content.style.paddingBottom = null;
        }
      })
    );
  }
}

// Desktop tabs
function tabs() {
  if (document.querySelector('.tabs-wrapper')) {
    const tabWrapper = document.querySelectorAll('.tabs');

    const nextBtn = document.querySelector('#next-tab');
    const prevBtn = document.querySelector('#prev-tab');

    nextBtn.addEventListener('click', () => {
      tabWrapper[0].classList.remove('active');
      tabWrapper[1].classList.add('active');
    });

    prevBtn.addEventListener('click', () => {
      tabWrapper[1].classList.remove('active');
      tabWrapper[0].classList.add('active');
    });

    const tabsBtn = document.querySelectorAll('[data-tab]');

    tabsBtn.forEach((btn) =>
      btn.addEventListener('click', (e) => {
        tabsBtn.forEach((btn) => btn.classList.remove('active'));
        e.currentTarget.classList.add('active');
        switchTabContent();
      })
    );

    function switchTabContent() {
      const activeBtn = document.querySelector('.tab.active');

      const contents = document.querySelectorAll('.tab-content');

      contents.forEach((content) => content.classList.add('hidden'));

      contents[activeBtn.getAttribute('data-tab') - 1].classList.remove('hidden');
    }

    switchTabContent();
  }
}
