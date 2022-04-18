# HW_1. First part. Linux terminal (GitBash)

**1. Посмотреть, где я**

``` bash
pwd
```
**2. Создать папку**

``` bash
mkdir folder1
```
**3. Зайти в папку**

``` bash
cd folder1
```
**4. Создать 3 папки**

``` bash
mkdir folder2 folder3 folder4
```
**5. Зайти в любую папку**

``` bash
cd folder3
```
**6. Создать 5 файлов**

``` bash
touch file1.txt file2.txt file3.txt file1.json file2.json
```
**7. Создать 3 папки**

``` bash
mkdir folder5 folder6 folder7
```
**8. Вывести список содержимого папок**

``` bash
ls -la folder5 folder6 folder7
```
**9. Открыть любой txt файл**

``` bash
vim file1.txt
```
**10. Написать туда что-нибудь, любой текст**

``` bash
i #режим редактирования
123
456
789
101112
```
**11. Сохранить и выйти**

``` bash
esc #выход из режима редактирования
:wq #выйти и сохранить
```
**12 Выйти из папки на уровень выше**

``` bash
cd ..
```
**13. Переместить любые 2 фйла, которые вы создали, в любую другую папку**

``` bash
mv ./folder3/file1.txt ./folder3/file2.txt ./folder3/folder5/
```
**14. Скопировать любые 2 файла, которые вы создали, в любую другую папку**

``` bash
cp ./folder3/folder5/file1.txt ./folder3/folder5/file2.txt ./folder3/folder6/
```
**15. Найти файл по имени**

``` bash
find . -name file1.txt 
```
**16. Просмотреть содержимое файла в реальном времени (команда grep)**

``` bash
sudo tail -f file1.txt | grep -С 3 WW #вывод в реальном времени по ключу WW 3 строки до и 3 строки после ключа
```
**17. Вывести несколько первых строк из текстового файла**

``` bash
head -3 file1.txt #выводим первые 3 строки
```
**18. Вывести несколько последних строк из текстового файла**

``` bash
tail -3 file1.txt #выводим последние 3 строки
```
**19. Просмотреть содержимое длинного файла (команда less)**

``` bash
less -s name_file1.txt #-s убрать пустые строки
/text #поиск вниз по тексту
?text #поиск вверх по тексту
q #выйти
```
**20. Вывести дату и время в терминале**

``` bash
date
```
## Задания повышенной сложности

**1. Отправить http запрос на сервер http://162.55.220.72:5005/terminal-hw-request**

``` bash
curl http://162.55.220.72:5005/terminal-hw-request

#в ответе задача Send the next URL in terminal: http://162.55.220.72:5005/get_method?name=(set_your_String)&age=(set_your_number)

curl "http://162.55.220.72:5005/get_method?name=(Valeria)&age=(27)"
```
**2. Написать скрипт который выполнит автоматически пункты 3, 4, 5, 6, 7, 8, 13**

``` bash
cat > myfirstscript #создаем файл, куда запишем скрипт

#!/bin/bash
cd folder1 #п.3
mkdir folder2 folder3 folder4 #п.4
cd folder3 #п.5
touch file1.txt file2.txt file3.txt file4.txt file5.txt #п.6
mkdir folder5 folder6 folder7 #п.7
echo "Вывести список содержимого папок"
ls -la folder5 folder6 folder7 #п.8
mv ./folder3/file1.txt ./folder3/file2.txt ./folder3/folder5/ #п.13

ctrl+C #сохраняем файл и закрываем редактор файла 

chmod +x ./myfirstscript #делаем файл исполняемым
./myfirstscript #вызов скрипта
```
