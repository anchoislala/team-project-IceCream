(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open]'),
      closeModalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-modal]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();

  (() => {
    const refs = {
      openModalBtn: document.querySelector('[header-modal-open]'),
      closeModalBtn: document.querySelector('[header-modal-close]'),
      modal: document.querySelector('[header-modal]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();


  (() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-location-open]'),
      closeModalBtn: document.querySelector('[data-modal-location-close]'),
      modal: document.querySelector('[data-modal-location]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();

  (() => {
    const refs = {
      openModalBtn: document.querySelector('[franchise-modal-open]'),
      closeModalBtn: document.querySelector('[franchise-modal-close]'),
      modal: document.querySelector('[franchise-modal]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();