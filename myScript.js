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
                window.location.href = './MarketingIntelligence.html';
              });
  document.getElementById('exe')
              .addEventListener('click', function () {
                window.location.href = './ExecutionIntelligency.html';
              });           
  document.getElementById('btn')
              .addEventListener('click', function () {
                window.location.href = './contactus.html';
              });           
  document.getElementById('FVPlogo')
              .addEventListener('click', function () {
                window.location.href = './index.html';
              });           