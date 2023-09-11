


//  для перехода на страницу меню
    document.getElementById("Зарегистрируйтесь здесь").addEventListener("click", function() {
      window.location.href = "menu.html";
    });

    // для перехода на вторую HTML-страницу
    document.getElementById("login.html").addEventListener("click", function() {
      window.location.href = "html2.html";
    });

   
fetch('/api/registration') // Замените '/api/data' на реальный URL 
.then(response => response.json())
.then(data => {
  // Обработка полученных данных и вставка их в HTML-страницу
  document.getElementById('result').textContent = data.message;
})
.catch(error => {
  console.error('Произошла ошибка:', error);
});