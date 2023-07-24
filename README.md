# clone_netflix
site with partially similar functionality and using a third-party api display movies


1. To run the web version by the application:
     
  1.1) You can download the archive from the repository, unzip it and open the folder via VS Code. Go to the index.html file and run the file through Live Server.

  1.2) Or create an empty folder, open it via VS Code and in the terminal specify the command (git clone https://github.com/AleksandrTrybrat/clone_netflix.git).

  1.3) A folder clone_netflix will appear in your folder. Find index.html file in it and repeat launching the web version according to point 1.1.

2. To run the desktop version of the application, repeat the above steps for downloading files:
     
  2.1) If you used item 1.2, then, in the terminal, specify the command cd clone_netflix. This will navigate to the folder with the application files.

The following points apply if the files were downloaded according to 1.1 or 1.2:

  2.2) In the terminal enter the command npm ci - to install all packages and dependencies used to run the application, the node_modules folder should appear.

  2.3) After that, to start the dextop application, specify the command npm start in the terminal and the application window will appear.

  2.4) To create a build of the application, to get the .exe file, specify the command npm run build in the terminal. The build folder with all necessary files will appear in the root of the project.

  2.5) To run tests by Jest, change package.json "main" like this  "main": "./jest/api.js"  and specify the command npm run test in the terminal. Tests will be run and displayed as a coverage table.
 

=============================================


 1. Для запуска веб версии приложения:
      
   1.1) Можно скачать архив с репозитория, разархивировать его и открыть папку через VS Code. Перейти в файл index.html и запустить файл через Live Server.
 
   1.2) Или создать пустую папку, открыть ее через VS Code и в терминале указать команду (git clone https://github.com/AleksandrTrybrat/clone_netflix.git). 
 
   1.3) В вашей папке появится папка clone_netflix. Находим в ней файл index.html и повторяем запуск веб версии согласно пункта 1.1. 

2. Для запуска десктопной версии приложения, повторите указаные пункты выше по скачиванию файлов:
     
  2.1) Если воспользовались пунктом 1.2 то, в терминале укажите команду cd clone_netflix. Так выполнится переход в папку с файлами приложения.
  
Следующие пункты применимы, если файлы были загружены в соответствии с 1.1 или 1.2:
     
  2.2) В терминале введите команду npm ci - для установки всех пакетов и зависимостей используемых для работы приложения, должна появится папка node_modules.

  2.3) После этого для запуска декстопного приложения в терминале укажите команду npm start и появится окно приложения.

  2.4) Для создания build сборки приложения для получения .exe файла, в терминале укажите команду npm run build. И в корне проекта появится папка build со всеми необходимыми файлами.

  2.5) Для запуска тестирования основных модулей проекта с использованием фреймворка Jest, используйте поле JSON объекта package.json "main": в редакции "main": "./jest/api.js", а в терминале укажите команду npm run test. Тесты будут запущенны с выводом таблицы, с покрытием тестами.



