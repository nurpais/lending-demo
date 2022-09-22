window.addEventListener('DOMContentLoaded', () => {
  navbar();
  accordion();
  tabs();
  videoModal();
  tooltip();
  FAQaccordion();
  contactForm();
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

function videoModal() {
  if (document.querySelector('[data-modal]')) {
    const modals = document.querySelectorAll('.modal');
    const triggers = document.querySelectorAll('[data-modal]');
    const closeBtns = document.querySelectorAll('[data-modal-close]');

    // Open the target modal
    triggers.forEach((btn) =>
      btn.addEventListener('click', (e) => {
        const triggerModal = e.currentTarget.getAttribute('data-modal');
        gsap.to(triggerModal, { autoAlpha: 1, opacity: 1, duration: 0.3 });
      })
    );

    // Close when click the close button
    closeBtns.forEach((btn) =>
      btn.addEventListener('click', (e) => {
        const closeModal = e.currentTarget.getAttribute('data-modal-close');
        gsap.to(closeModal, { autoAlpha: 0, opacity: 0, duration: 0.3 });
        document.querySelectorAll('iframe').forEach((v) => (v.src = v.src));
      })
    );

    // Close when click outside
    modals.forEach((modal) =>
      modal.addEventListener('click', (e) => {
        if (!e.target.closest('.modal-content')) {
          gsap.to(e.currentTarget, { autoAlpha: 0, opacity: 0, duration: 0.3 });
          document.querySelectorAll('iframe').forEach((v) => (v.src = v.src));
        }
      })
    );
  }
}

function tooltip() {
  if (document.querySelector('.tooltip')) {
    const tooltips = document.querySelectorAll('.tooltip');

    tooltips.forEach((tooltip) => {
      tooltip.addEventListener('mouseenter', () => {
        tooltip.querySelector('.tooltip-text').style.display = 'block';
      });

      tooltip.addEventListener('mouseleave', () => {
        tooltip.querySelector('.tooltip-text').style.display = 'none';
      });
    });
  }
}

function FAQaccordion() {
  let accordions = document.querySelectorAll('.accordion');

  accordions.forEach(function (el) {
    let headings = el.querySelectorAll('.accordion__heading');

    headings.forEach(function (el) {
      el.addEventListener('click', function (e) {
        let accordionBody = e.target.parentNode.querySelector('.accordion__body');

        if (Boolean(accordionBody.style.maxHeight)) {
          e.target.parentNode.classList.remove('is-open');
          accordionBody.style.paddingBottom = '0';
          accordionBody.style.maxHeight = null;
        } else {
          headings.forEach(function (el) {
            el.parentNode.classList.remove('is-open');
            el.parentNode.querySelector('.accordion__body').style.paddingBottom = '0';
            el.parentNode.querySelector('.accordion__body').style.maxHeight = null;
          });
          e.target.parentNode.classList.add('is-open');
          accordionBody.style.maxHeight = accordionBody.scrollHeight + 24 + 'px';
          accordionBody.style.paddingBottom = '24px';
        }
      });
    });
  });
}

function contactForm() {
  if (document.querySelector('#select-topic')) {
    document.querySelector('#select-topic').addEventListener('change', function (e) {
      document.querySelectorAll('.topic').forEach((topic) => (topic.style.display = 'none'));
      document.querySelector(`[data-topic="${e.target.value}"]`).style.display = 'block';
    });
  }
}
