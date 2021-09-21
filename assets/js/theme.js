const languageNav = document.querySelector('.language-nav');
const languageNavTrigger = languageNav.querySelector('.language-nav-head');
const languageNavList = languageNav.querySelector('.language-nav-main');

const handleLanguageNavPopup = () => {  
  if (languageNav) {
    if (languageNavTrigger) {
      languageNavTrigger.addEventListener('click', () => {
        
        languageNavList.className.includes('is-open')  
          ? languageNavList.className = languageNavList.className.replace('is-open', '') 
          : languageNavList.className += ' is-open'
      })
    }
  }
}

const handleLanguageItemPick = (item) => {
  item.addEventListener('click', (e) => {
    const value = e.target.dataset.value;
    const label = e.target.innerText;

    languageNavTrigger.querySelector('.language-nav-head-text').innerText = label;
    languageNavList.className = languageNavList.className.replace('is-open', '');

    window.location.pathname = `/${value}`
  })
}

const handleLanguageItemTargets = () => {
  const languageNavListTargets = languageNavList.querySelectorAll('.language-nav-main-list-item');

  if (languageNavListTargets) {
    languageNavListTargets.forEach((item) => handleLanguageItemPick(item));
  }
}

handleLanguageNavPopup();
handleLanguageItemTargets();