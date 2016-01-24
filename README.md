# Шаблон для быстрого старта проекта<br>

Часть сборки (а точнее, организация файлов в папке "/app") позаимствована <a href="https://github.com/agragregra/start_html">здесь</a>.
Большое спасибо автору! 

<h2>Что вошло в сборку:</h2>
1 SASS - препроцессор;<br>
2 Gulp - сборщик проектов;<br>
    Плагины, которые вошли в сборку:<br>
    <ul style="list-style-type: none;">
        <li>- gulp-autoprefixer</li>
        <li>- gulp-concat-css</li>
        <li>- gulp-livereload</li>
        <li>- gulp-connect</li>
        <li>- gulp-minify-css</li>
        <li>- gulp-notify</li>
        <li>- gulp-rename</li>
        <li>- gulp-sass</li>
        <li>- gulp-uglify</li>
    </ul>
    
3 Bower - пакетный менеджер;<br>
    - Libsass Compass Vertical Rhythm - типографический ритм страниц;<br>
    - Susy Grid - "умная" сетка; <br>

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
5. Открываем в браузере 
    <pre>
        <code>http://localhost:8080</code>
    </pre>
