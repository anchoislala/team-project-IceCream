(() => {
    const refs = {
      openModalBtn: document.querySelector('[cream-modal-open]'),
      closeModalBtn: document.querySelector('[cream-modal-close]'),
      modal: document.querySelector('[cream-modal]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();

  (() => {
    const refs = {
      openModalBtn: document.querySelector('[coffee-modal-open]'),
      closeModalBtn: document.querySelector('[coffee-modal-close]'),
      modal: document.querySelector('[coffee-modal]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();


  (() => {
    const refs = {
      openModalBtn: document.querySelector('[milkshakes-modal-open]'),
      closeModalBtn: document.querySelector('[milkshakes-modal-close]'),
      modal: document.querySelector('[milkshakes-modal]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();