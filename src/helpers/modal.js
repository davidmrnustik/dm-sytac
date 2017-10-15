// Open / Close modal window.

import Utils from './utils';

let Modal = function(){},
    utils = new Utils();

function applyCloseModal(parent){
  utils.removeClass(parent, 'modal_open');
  utils.removeClass(document.documentElement, 'modal-page');

  document.body.style.paddingRight = "";
  setTimeout(function(){
    parent.style.display = 'none';
  }, 150);
}

Modal.prototype.closeModal = function(id){
  var closeBut = document.querySelectorAll('.modal_open [data-modal-close]');

  for (var i = 0, l = closeBut.length; i < l; i++) {
    var item = closeBut[i],
        parent = item.parentElement.parentElement;

    $(document).on('keyup', function(e){
      if (e.keyCode == 27){
        applyCloseModal(parent);
      }
    });

    if(id == parent.getAttribute('id')) {
      parent.addEventListener('click', function(e){
        if(e.target.className == 'modal__content_container' || e.target.className == 'image-container' || e.target.classList.contains('js-modal-close') || e.target.className == 'modal__close'){
          applyCloseModal(parent);
        }
      });
    }
  }
};
Modal.prototype.openModal = function(id, content){
  var modals = document.querySelectorAll('.modal');
  console.log(modals);
  let open = this;

  for (var i = 0, l = modals.length; i < l; i++) {
    var item = modals[i];
    if(id == item.getAttribute('id')){
      item.style.display = 'block';
      setTimeout(function(){
        utils.addClass(item, 'modal_open');
        utils.addClass(document.documentElement, 'modal-page');
        var el = document.createElement('div'),
            modalContent = item.lastElementChild.lastElementChild;
        modalContent.textContent = '';
        utils.addClass(el, 'image-container');
        el.style.backgroundImage = 'url(' + content + ')';
        item.lastElementChild.lastElementChild.appendChild(el);
        open.closeModal(id);
      }, 150);
    }
  };
};

Modal.prototype.init = function(){
  let modalTriggers = document.querySelectorAll('a[data-modal]');
  let init = this;
  modalTriggers.forEach(function(trigger, index) {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      init.openModal(trigger.getAttribute('href').substr(1), trigger.getAttribute('data-modal-content'));
    });
  });
};

module.exports = Modal;