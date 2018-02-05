document.querySelector('body > div > div').style.transform = 'none';
document.querySelector('.sidebar h2').style.border = 'none';

var styleEl = document.createElement('style');
document.body.appendChild(styleEl);
styleSheet = styleEl.sheet;
styleSheet.addRule('.sidebar h2:after', 'border: none;');

let didChangeScrollTop = false;

addEventListener('scroll', () => {

  if (scrollY > 145 && didChangeScrollTop === false) {
  
    document.querySelector('div.docs-wrapper.container > section').style.top = '0px';
    
    didChangeScrollTop = true;
  
  } else if (scrollY < 145) {
  
    document.querySelector('div.docs-wrapper.container > section').style.top = '150px';

    didChangeScrollTop = false;

  }

}, { passive: true });