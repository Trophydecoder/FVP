function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

  
  

  document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });


  document.getElementById('mar')
              .addEventListener('click', function () {
                window.location.href = 'file:///C:/Users/Sthe/Documents/websites/Flowing%20Visuals/Marketing%20intelligence.html';
              });
  document.getElementById('exe')
              .addEventListener('click', function () {
                window.location.href = 'file:///C:/Users/Sthe/Documents/websites/Flowing%20Visuals/Execution%20Intelligency.html';
              });           
  document.getElementById('btn')
              .addEventListener('click', function () {
                window.location.href = 'file:///C:/Users/Sthe/Documents/websites/Flowing%20Visuals/contactus.html';
              });           
  document.getElementById('FVPlogo')
              .addEventListener('click', function () {
                window.location.href = 'file:///C:/Users/Sthe/Documents/websites/Flowing%20Visuals/index.html';
              });           