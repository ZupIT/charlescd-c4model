/**
 * Copyright 2021 ZUP IT SERVICOS EM TECNOLOGIA E INOVACAO SA
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const languageNav = document.querySelector('.language-nav');
const languageNavTrigger = languageNav.querySelector('.language-nav-head');
const languageNavList = languageNav.getElementsByClassName('language-nav-main');

const handleLanguageNavPopup = () => {
  if (languageNav && languageNavList && languageNavList.length) {
    languageNav.addEventListener('click', () => {
      languageNavList[0].classList.toggle('is-open')
    })
  }
}

const handleLanguageItemTargets = () => {
  if (languageNavList && languageNavList.length) {
    const languageNavListTargets = languageNavList[0].querySelectorAll('.language-nav-main-list-item');

    if (languageNavListTargets) {
      languageNavListTargets.forEach((item) => {
        item.addEventListener('click', (e) => {
          const value = e.target.dataset.value;
          const label = e.target.innerText;
          if (languageNavTrigger) {
            languageNavTrigger.querySelector('.language-nav-head-text').innerText = label;
            languageNavList[0].classList.toggle('is-open')
          }
          window.location.pathname = value
        })
      });
    }
  }
}

const changeHeadLanguageOnInit = () => {
  if (languageNavTrigger) {
    if (window.location.pathname.includes('pt-br')) {
      languageNavTrigger.querySelector('.language-nav-head-text').innerText = 'Português';
    } else {
      languageNavTrigger.querySelector('.language-nav-head-text').innerText = 'English';
    }
  }
}

handleLanguageNavPopup();
handleLanguageItemTargets();
changeHeadLanguageOnInit();