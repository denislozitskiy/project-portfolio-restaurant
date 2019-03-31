"use strict";
(function() {
    /* 
     * if (debugMode == true) => shows the change of price and counters in console 
       in the following format (overallPrice, price, counter, globalCounter)  
     * if (debugMode == true) => показывает изменения цены и счётчиков в консоли
       в следующем формате (overallPrice, price, counter, globalCounter).
    */
    let debugMode = true;

    //========================FILLS TEMPLATE WITH DATA || ЗАПОЛНЕНИЕ ШАБЛОНА ДАННЫМИ
    /**
     * Fills template with data and renders it || Заполняет данными и отрисовывает шаблон.
     * Сalculates and renders cost and number of goods || Вычисляет и отрисовыет цену и количество товаров.
    */
    function renderTemplate() {
        let foodMenuTemplate = document.querySelector("#foodMenuTemplate").content.querySelector(".foodMenuItem");
        let fragment = document.createDocumentFragment();

        arrData.forEach(function(item) {   	
            let foodMenuItem = foodMenuTemplate.cloneNode(true);
	    	
            foodMenuItem.querySelector(".card-title").textContent = item.title;
	    	foodMenuItem.querySelector(".card-text").textContent = item.info;
	    	foodMenuItem.querySelector(".price").textContent = item.price;
            foodMenuItem.setAttribute("data-initial-price", item.price);
            foodMenuItem.setAttribute("data-filter-type", item.type);
	    	
            fragment.appendChild(foodMenuItem);
        });

        document.querySelector(".foodMenuContainer").appendChild(fragment);
        
        //======================COUNTER LOGIC || АЛГОРИТМ СЧЁТЧИКА       
        let globalCounter = 0;
        let overallPrice = 0;
        let cartIconCounter = document.querySelector(".fa-shopping-cart");
        let cartMenuCounter = document.querySelector(".cartMenuCounter");
        let cartMenuPrice = document.querySelector(".cartMenuPrice");
        let form = document.querySelector(".reservation form");

        Array.from(document.querySelectorAll(".foodMenuItem")).forEach(function(item) {           
            let UIadd = item.querySelector(".UIadd");
            let UIremove = item.querySelector(".UIremove");
            let price = 0;
            let counter = 0;
            let initialPrice = parseFloat(item.dataset.initialPrice);
            const COUNTER_MAX_VALUE = 10;
            /**
             * Blocks ability of other UIs to decrease the global price 
             * Блокирует возможность других UI уменьшать глобальную цену
            */ 
            let firstDecrementToZero = true;
            let incrementedBefore = false;
            
            /**
             * Сalculates and renders local price || Вычисляет и отрисовывает локальную цену.
             *
             * @param {number} counter Number of goods || Количество выбранного товара.
             * @param {number} price Price of product || Цена товара.
            */
            function calculate_renderLocalPrice(counter, price) {
                price = counter * initialPrice;
                price = price.toFixed(2);
                item.querySelector(".price").textContent = price;
            }
            
            /**
             * Increases local and global counter || Увеличивает локальный и общий счётчик.
             * Increases and rounds overall price || Увеличивает и округляет общую цену.
            */
            function increaseCounters_overallPrice() {
                counter ++;
                globalCounter ++;
                calculate_renderLocalPrice(counter, price);
                overallPrice += initialPrice;
                overallPrice = parseFloat(overallPrice.toFixed(2));
            }

            /**
             * Renders global counter & price in nav section || Показывает глобальный счётчик и цену в секции навигации.
            */
            function renderGlobalCounter_Price() {
                cartIconCounter.setAttribute("data-cart-counter", globalCounter);
                cartMenuCounter.textContent = (globalCounter == 1) ? globalCounter + " item" : globalCounter + " items";
                cartMenuPrice.textContent = overallPrice;
            }
            
            UIadd.addEventListener("click", function() {
                if (counter == COUNTER_MAX_VALUE) {
                    counter = COUNTER_MAX_VALUE;
                } else if (counter == 0) {
                    increaseCounters_overallPrice();
                    firstDecrementToZero = true;
                    incrementedBefore = true;
                } else {
                    increaseCounters_overallPrice();
                }
                this.textContent = counter;
                renderGlobalCounter_Price();
                // Debug module || Модуль отладки
                if (debugMode) console.log(overallPrice, price, counter, globalCounter);
            })
            
            UIremove.addEventListener("click", function() {
                if (counter <= 1) {
                    counter = 0;
                    if (globalCounter < 1) {
                        globalCounter = 0;
                        overallPrice = 0;
                    } else if (firstDecrementToZero === true && incrementedBefore === true) {
                        globalCounter --;
                        overallPrice -= initialPrice;
                        overallPrice = parseFloat(overallPrice.toFixed(2));
                        incrementedBefore = false;
                        firstDecrementToZero = false;
                    }
                    calculate_renderLocalPrice(1, price); // if (counter == 1) => price = initialPrice
                    UIadd.textContent = "+";       
                } else {
                    counter --;
                    globalCounter --;
                    calculate_renderLocalPrice(counter, price);
                    overallPrice -= initialPrice;
                    overallPrice = parseFloat(overallPrice.toFixed(2));
                    UIadd.textContent = counter;
                }
                renderGlobalCounter_Price();
                // Debug module || Модуль отладки
                if (debugMode) console.log(overallPrice, price, counter, globalCounter);
            })

            form.addEventListener("submit", function(evt){
                let dataOutput = "";

                evt.preventDefault();
                
                if (counter > 0) {
                    dataOutput = item.querySelector("h6").textContent + ": " + initialPrice + "$" + " * " + counter;
                    console.log(dataOutput);
                }
            })
        })
	}
    //========================JSONP || ПОДКЛЮЧЕНИЕ ДАННЫХ С ПОМОЩЬЮ JSONP
    let arrData = [];
    window.jsonpCallback = function(items) {
        for (let i = 0; i < items.length; i++) {			
    		arrData.push(items[i]);
    	}
        
        if (arrData.length == 0) {
            document.querySelector(".foodMenuContainer").textContent = "No products were found on a server";
        } else {
            renderTemplate();
        }
    }
    let loader = document.createElement("script");
    loader.type = "text/javascript";
    loader.src = "js/data-min.js?=jsonpCallback";
    document.body.append(loader); 
})();