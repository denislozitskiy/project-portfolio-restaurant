"use strict";
(function() {
	//=============SMOOTH SCROLL OF MENU LINKS || ПЛАВНОЕ ПРОКРУЧИВАНИЕ ССЫЛОК МЕНЮ
    Array.from(document.querySelectorAll(".menuLink")).forEach(function(item) {
        item.addEventListener("click", function(evt) {
            let href = item.getAttribute("href");

            evt.preventDefault();
            document.querySelector("." + href).scrollIntoView({behavior: 'smooth', block: "start"});
        })
    });
    //=============SHOW REMAINING FOOD ITEMS || ПОКАЗЫВАЕТ ОСТАВШИЕСЯ FOOD ПРЕДМЕТЫ
    let exploreBtn = document.querySelector(".exploreBtn");

    exploreBtn.addEventListener("click", function() {
    	this.classList.remove("d-block"); // Removes Bootstrap class || Убирает Bootstrap класс
    	this.style.display = "none"; // Hides exploreBtn || Прячет exploreBtn
    	Array.from(document.querySelectorAll(".foodMenuItem:nth-child(even)")).forEach(function(item) {
            item.style.display = "block";
    	});
    });
    //====================FILTER || ФИЛЬТР
    let filterButtons = document.querySelectorAll(".foodMenuButton");

    Array.from(filterButtons).forEach(function(button) {
    	button.addEventListener("click", function() {
    		let activeButton = document.querySelector(".foodMenuActive");
    		let buttonType = button.getAttribute("data-filter-type");
    		let foodItems = document.querySelectorAll(".foodMenuItem");
    		let filteredItems = document.querySelectorAll(".foodMenuItem[data-filter-type=" + buttonType + "]");

    		activeButton.classList.remove("foodMenuActive");
    		button.classList.add("foodMenuActive");

    		Array.from(foodItems).forEach(function(item) {
    			(buttonType == "All") ? item.style.display = "block" : item.style.display = "none";
    			
    			exploreBtn.style.display = "none"; // Hides exploreBtn || Прячет exploreBtn
                exploreBtn.classList.remove("d-block"); // Removes Bootstrap class || Убирает Bootstrap класс   
    		});

            Array.from(filteredItems).forEach(function(item) {
              	item.style.display = "block";
            });
    	});
    });
    //====================== FORM VALIDATION || ВАЛИДАЦИЯ ФОРМЫ 
    // Sets today's date as min value to the form || Устанавливает сегодняшнюю дату как минимальное значение для формы
    let todayDate = new Date();
    let day = todayDate.getDate();
    let month = todayDate.getMonth() + 1; // getMonth() starts with 0 || getMonth() начинается с 0
    let year = todayDate.getFullYear();

    /* 
     * getDate() and getMonth() returns date in single number format 
     * getDate() и getMonth() возращает дату в формате единого числа
    */
    if (day < 10) {
    	day = "0" + day; 
    }
    
    if (month < 10) {
    	month = "0" + month;
    }

    todayDate = year + '-' + month + '-' + day; // Sets date to needed format || Устанавливает дату в нужный формат

    document.querySelector("input[type=date]").setAttribute("min", todayDate);
    document.querySelector("input[type=date]").setAttribute("value", todayDate);
    
    /* 
     * Sets min & max time to the form (Better to do this in JS for better browser support)
     * Устанавливает min и max время для формы (Лучше сделать это в JS для лучшей поддержки браузеров)
    */
    document.querySelector("input[type=time]").setAttribute("min", "08:00");
    document.querySelector("input[type=time]").setAttribute("max", "23:00");
})();