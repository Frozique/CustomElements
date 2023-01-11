const element = document.querySelector('select');
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: '',
  placeholder: true,
  placeholderValue: 'Материал'
});

var selector = document.querySelector("input[type='tel']");

var im = new Inputmask("+7 (999)9999999");
im.mask(selector);


const validation = new JustValidate('#form',
  {
    focusInvalidField: true,
    lockForm: true,
    tooltip: {
      position: 'top',
      color: '#FF5C00',
    },
    errorsContainer: '.errors-container',
  },
);

validation
  .addField('#name', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели имя',
    },
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Слишком короткое имя',
    },
    {
      rule: 'maxLength',
      value: 30,
      errorMessage: 'Слишком длинное имя',
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели email',
    },
    {
      rule: 'email',
      errorMessage: 'Введите корректный e-mail',
    },
  ])
  .addField('#tel', [
    {
      rule: 'required',
      errorMessage: 'Вы не ввели телефон',
    },
    {
      validator: function (name, value) {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      },
      errorMessage: 'Слишком короткий номер',
    },
  ]);


