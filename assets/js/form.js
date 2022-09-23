// window.addEventListener('DOMContentLoaded', () => {
//   if (document.querySelector('.form-btn')) {
//     const formBtns = document.querySelectorAll('.form-btn');
//     const formContents = document.querySelectorAll('.form-content');

//     let active = 0;

//     switchContent();

//     formBtns.forEach((btn) =>
//       btn.addEventListener('click', (e) => {
//         if (!Boolean(formContents[active].querySelector('.form-select').value)) {
//           formContents[active].querySelector('.form-error').classList.remove('hidden');
//         }
//         if (Boolean(formContents[active].querySelector('.form-select').value)) {
//           active++;
//           switchContent();
//         }

//         // const parent = e.target.closest('.form-content');
//         // parent.classList.add('hidden');
//         // parent.nextElementSibling.classList.add('active');
//       })
//     );

//     function switchContent() {
//       formContents.forEach((content) => content.classList.remove('active'));
//       formContents[active].classList.add('active');
//     }
//   }
// });

const validInputs = (inputs) => {
  let matches = [];
  for (var key in inputs) {
    var value = inputs[key].value;

    if (value !== '') matches.push(value);
  }

  return matches.length == Object.keys(inputs).length;
};

document.addEventListener('alpine:init', () => {
  Alpine.data('App', () => ({
    step: 1,
    body: {
      email: '',
      loanPurpose: '',
      range: '',
      name: '',
      email: '',
      phone: '',
      quickly: '',
      status: '',
    },
    next(elements, step) {
      for (const i in elements) {
        if (!Boolean(elements[i].value)) {
          elements[i].nextElementSibling.classList.remove('hidden');
        } else {
          elements[i].nextElementSibling.classList.add('hidden');
        }
      }

      if (validInputs(elements)) this.step = step;
    },
    nextFinish(elements, step) {
      for (const i in elements) {
        if (!Boolean(elements[i].value)) {
          elements[i].nextElementSibling.classList.remove('hidden');
        } else {
          elements[i].nextElementSibling.classList.add('hidden');
        }
      }

      if (validInputs(elements)) {
        this.step = step;
        console.log(this.body);
      }
    },
    validate(e) {
      if (e.target.value !== '') {
        e.target.nextElementSibling.classList.add('hidden');
      } else {
        e.target.nextElementSibling.classList.remove('hidden');
      }
    },
  }));
});
