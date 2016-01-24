# Стартовый шаблон<br>start_template
start template for  frontend<br>
Шаблон для быстрого старта проекта

Часть сборки (а точнее, организация файлов в папке "/app") позаимствована <a href="https://github.com/agragregra/start_html">здесь</a>.
Большое спасибо автору! 

<h2>Что вошло в сборку:</h2>
1 SASS - препроцессор;
2 Gulp - сборщик проектов;
    Плагины, которые вошли в сборку:
	- gulp-autoprefixer
	- gulp-concat-css
	- gulp-livereload
	- gulp-connect
	- gulp-minify-css
	- gulp-notify
	- gulp-rename
	- gulp-sass
    - gulp-uglify
    
3 Bower - пакетный менеджер;
    - Libsass Compass Vertical Rhythm - типографический ритм страниц;
    - Susy Grid - "умная" сетка; 

<h2>Старт проекта:</h2>

1. Копируем репозиторий.
	~~~	
	git clone https://github.com/MikhalevValentin/start_template.git
	~~~

2. Устанавливаем Gulp  и плагины  
	~~~
	npm install
	~~~
    
3. Устанавливаем Bower components  
	~~~
	bower install
	~~~

4. Запускаем gulp 
	~~~
	gulp
	~~~
5. Открываем в браузере  ~~~ http://localhost:8080 ~~~
