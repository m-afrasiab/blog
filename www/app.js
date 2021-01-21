document.addEventListener('show', function (event) {
  var page = event.target;
  
setTimeout(
  function() 
  {
 if (page.id === 'page1') {
    page.querySelector('.need').onclick = function () {
      document
        .querySelector('#myNavigator')
        .pushPage('need.html', { data: { } });
    };
     page.querySelector('.merit').onclick = function () {
      document
        .querySelector('#myNavigator')
        .pushPage('merit.html', { data: { } });
    };
     page.querySelector('.peef').onclick = function () {
      document
        .querySelector('#myNavigator')
        .pushPage('peef.html', { data: { } });
    };
    page.querySelector('.hecl').onclick = function () {
      document
        .querySelector('#myNavigator')
        .pushPage('hecl.html', { data: { } });
    };
     page.querySelector('.hecf').onclick = function () {
      document
        .querySelector('#myNavigator')
        .pushPage('hecf.html', { data: { } });
    };
    page.querySelector('.ugrad').onclick = function () {
      document
        .querySelector('#myNavigator')
        .pushPage('ugrad.html', { data: { } });
    };
    page.querySelector('.pgrad').onclick = function () {
      document
        .querySelector('#myNavigator')
        .pushPage('pgrad.html', { data: { } });
    };
    
  }

   if (page.id === 'need') {
for (i = 0; i < 100; i++)
        page.querySelector('.post'+i).onclick = function () {
          document
            .querySelector('#myNavigator')
            .pushPage('post.html', { data: {} });
        };
      }
if (page.id === 'merit') {
for (i = 0; i < 100; i++)
        page.querySelector('.post'+i).onclick = function () {
          document
            .querySelector('#myNavigator')
            .pushPage('post.html', { data: {} });
        };
      }
  if (page.id === 'peef') {
for (i = 0; i < 100; i++)
        page.querySelector('.post'+i).onclick = function () {
          document
            .querySelector('#myNavigator')
            .pushPage('post.html', { data: {} });
        };
      }
if (page.id === 'hecl') {
for (i = 0; i < 100; i++)
        page.querySelector('.post'+i).onclick = function () {
          document
            .querySelector('#myNavigator')
            .pushPage('post.html', { data: {} });
        };
      }
if (page.id === 'hecf') {
for (i = 0; i < 100; i++)
        page.querySelector('.post'+i).onclick = function () {
          document
            .querySelector('#myNavigator')
            .pushPage('post.html', { data: {} });
        };
      }
if (page.id === 'pgrad') {
for (i = 0; i < 100; i++)
        page.querySelector('.post'+i).onclick = function () {
          document
            .querySelector('#myNavigator')
            .pushPage('post.html', { data: {} });
        };
      }
if (page.id === 'ugrad') {
for (i = 0; i < 100; i++)
        page.querySelector('.post'+i).onclick = function () {
          document
            .querySelector('#myNavigator')
            .pushPage('post.html', { data: {} });
        };
      }

  }, 1000);
});
                    