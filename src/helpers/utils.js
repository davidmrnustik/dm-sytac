var Utils = function(){};

Utils.prototype.addClass = function(el, className){
  if (el.classList) {
    el.classList.add(className);
  } else {
    el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
  }
};

Utils.prototype.addClass = function(el, className){
  if (el.classList) {
    el.classList.remove(className);
  } else {
    el.className = el.className.replace();
  }
};

Utils.prototype.addClass = function() {
  if (typeof window.innerHeight != 'undefined') {
    return window.innerHeight;
  } else if (typeof document.documentElement != 'undefined'
       && typeof document.documentElement.clientHeight !=
       'undefined' && document.documentElement.clientHeight !== 0) {
    return document.documentElement.clientHeight;
  }

  return document.getElementsByTagName('body')[0].clientWidth;
};

module.exports = Utils;