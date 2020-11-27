'use strict';

window.addEventListener('DOMContentLoaded', () => {

const  tabsParent = document.querySelector('.tag-list'),
      tab = tabsParent.querySelectorAll('.tag-item'),
      tabContent  = document.querySelectorAll('.tab-content');

      function hideTabContent() {
          tabContent.forEach((e) => {
            e.classList.add('hide');
            e.classList.remove('show', 'fade');
          });
      } 

      function showTabContent(i = 0) {
          tabContent[i].classList.add('show', 'fade');
          tabContent[i].classList.remove('hide');
      }

      hideTabContent();
      showTabContent();

      tabsParent.addEventListener('click', (element) => {
        const target = element.target;
        if (target && target.classList.contains('tag-item')) {
            tab.forEach((element, i)  => {
                if (target == element) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
      });

      const deadline = '2021-01-01';

      function getRemainingTime(endtime) {
          const t = Date.parse(endtime) - new Date(),
          days = Math.floor((t / (1000 * 60 * 60 * 24))),
          hours = Math.floor(( t / (1000 * 60 * 60) % 24)),
          minutes = Math.floor((t / 1000 / 60 ) % 60),
          seconds = Math.floor((t / 1000) % 60);

          return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
          };
      }

      function getZero(num) {
        if (num >= 0 && num <10) {
            return `0${num}`;
        } else {
            return num;
        }
      }
    
      function setClock(selector, endtime) {
          const timer = document.querySelector(selector),
          days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = timer.querySelector('#seconds'),
          timeInterval = setInterval(updateClock, 1000);

        updateClock();
        
          function updateClock() {
              const t = getRemainingTime(endtime);
              days.innerHTML = getZero(t.days);
              hours.innerHTML = getZero(t.hours);
              minutes.innerHTML = getZero(t.minutes);
              seconds.innerHTML = getZero(t.seconds);

              if (t.total <= 0) {
                clearInterval(timeInterval);
            }
          }
      }

      setClock('.timer', deadline);

});