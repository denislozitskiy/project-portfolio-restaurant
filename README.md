# Restaurant
Mobile friendly template with JSONP callback, filter, counter and console data output.

## Setup
To use Gulp you need Node.js

* [Node.js installation](https://github.com/nodejs/node)

```bash
$git clone https://github.com/denislozitskiy/project-portfolio-restaurant.git <your project name>
$cd <your project name>
$npm install
```

### Gulp Features
<img width="114px" height="257px" align="right" src="https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png"/>

* Sass -  preprocessor scripting language that is interpreted or compiled into CSS.
* Autoprefixer - PostCSS plugin to parse CSS and add vendor prefixes to CSS rules.
* CSSO - minifies CSS.
* Imagemin - minifies PNG, JPEG, GIF and SVG images.
* Gulp-minify - minifies JavaScript with [Terser](https://www.npmjs.com/package/terser).
* Local server - http://localhost:3000.
* BrowserSync - completely reloads the page after every change.

### Gulp Commands
* ```$ gulp build``` - assembles the project.
* ```$ gulp serve``` - enables all the features above.

## Code explanation
### Main Idea
Choose different dishes, see their price and amount at nav section of the template, submit the form to get the list of what you choosed.

### Used libraries 
* Bootstrap v4.3.1 
* jQuery v3.3.1 (required for Bootstrap).

### CSS
* Used CamelCase for my classes to distinguish them from Bootstrap's.
* The emphasis is on use of Bootstrap.

### JavaScript
* Comments style. 
 ```js
 /** Function explanation
  * New statement
  @param {dataType} <param name> Param's explanation.
 */
 
 /* Multi-line comment
  * New statement
 */
 
 // Single-line comment  
 ```

* Debug mode.

 Setting ```debugMode = true``` will allow to oversee the change of price and counters in console.
 ```js
 let debugMode = true;
 
 UIbutton.addEventListener("click", function() {
     ...
     // Debug module
     if (debugMode) console.log(overallPrice, price, counter, globalCounter);
 })
 ```

* Data output.
 
 On form submit data will be shown in console.
 ```js
 dishTitle: initialPrice$ * counter
 ```

---

---

---
# Restaurant
Шаблон оптимизированный под мобильные устройства с JSONP запросом, фильтром, счётчиком и выводом данных в консоль.

## Установка
Для использования Gulp нужен Node.js

* [Установка Node.js](https://github.com/nodejs/node)

```bash
$git clone https://github.com/denislozitskiy/project-portfolio-restaurant.git <your project name>
$cd <your project name>
$npm install
```

### Функции Gulp
<img width="114px" height="257px" align="right" src="https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png"/>

* Sass -  препроцессор предназначенный для упрощения CSS.
* Autoprefixer - плагин PostCSS предназначенный для анализа CSS и добавления префиксов к CSS стилям.
* CSSO - минифицирует CSS.
* Imagemin - минифицирует PNG, JPEG, GIF and SVG файлы.
* Gulp-minify - минифицирует JavaScript с использованием [Terser](https://www.npmjs.com/package/terser).
* Локальный сервер - http://localhost:3000.
* BrowserSync - полностью обновляет страницу после каждого изменения.

### Команды Gulp
* ```$ gulp build``` - собирает проект.
* ```$ gulp serve``` - включает функции описанные выше.

## Объяснение кода
### Основная идея
Выбирайте различные блюда, посмотрите их цену и количество в разделе навигации шаблона, отправьте форму, чтобы получить список того, что вы выбрали.

### Использованные библиотеки 
* Bootstrap v4.3.1 
* jQuery v3.3.1 (необходим для Bootstrap).

### CSS
* Использован «ВерблюжийРегистр» для моих классов, чтобы отличить их от Bootstrap классов.
* Упор сделан на использование Bootstrap.

### JavaScript
* Стиль комментариев. 
 ```js
 /** Объяснение функции
  * Новое утверждение
  @param {типДанных} <имя параметра> Объяснение параметра.
 */
 
 /* Многострочный комментарий
  * Новое утверждение
 */
 
 // Однострочный комментарий 
 ```

* Режим отладки.

 При выставлении ```debugMode = true``` появляется возможность следить на изменениями цены и счётчиков в консоли.
 ```js
 let debugMode = true;
 
 UIbutton.addEventListener("click", function() {
     ...
     // Модуль отладки
     if (debugMode) console.log(overallPrice, price, counter, globalCounter);
 })
 ```

* Вывод данных.
 
 При отправке формы данные будут показаны в консоли.
 ```js
 названиеБлюда: начальнаяЦена$ * счётчик
 ```
