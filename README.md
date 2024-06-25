# Тестовое задание EM.
Ниже представлено описание структуры реализации обоих заданий. Для выполнения использовался язык *TypeScript*, фрэймворк *NestJS*, в качестве СУБД *PostgreSQL*, а так же инструмент для миграции баз данных *Liquibase*.

## Задание 1.

Задание 1 располагается в папке **task1**. Задача реализована с использованием микросервисной архитектуры. В качестве фреймворка был выбран *NestJS*. Внутри **task1** содержатся 3 папки:

* **gateway** - Основной сервер, который принимает запросы и распределяет их по микросервисам. Содержит следующие endpoint'ы:
    * **POST /user/create** - Создаёт нового пользователя (добавляет в базу данных).
    * **PATCH /user/update** - Обновляет информацию о пользователе с указанным id. На вход принимает id и новые значения полей, которые нужно изменить.
    * **GET /user/all-users** - Возвращает список всех пользователей.
    * **GET /user-logger/users** - Возвращает список всех изменений, связанных с конкретным пользователем. Кроме id принимает номер страницы, которую нужно вывести. Число элементов на одной странице равно пяти.
* **user-manager** - Микросервис, управляющий пользователями. Отвечает за следующий функционал:
    * Создание нового пользователя.
    * Обновление информации о существующем пользователе.
    * Возвращает список всех существующих пользователей.
    * При создании пользователя и обновлении информации о нём микросервис user-logger информируется о соответствующем событии.
* **user-logger** - Микросервис, отслеживающий изменения, происходящими с пользователями. Отвечает за следующий функционал:
    * Добавление в таблицу с логами записи о создании пользователя и обновления данных о нём.
    * Возвращает список всех действий над конкретным пользователем, разделённых на страницы.

## Задание 2.
Задание 2 располагается в папке **task2**. Реализация включает в себя сервер на *NestJS* и проект *Liquibase*. Внутри task2 находятся 2 папки:
* **backend** - Содержит серверную часть. Реализован endpoint:
    * **PATCH /users/reset-troubles** - Заменяет все значения *true* на *false* в поле **troubles** таблицы с пользователями. В качестве ответа возвращает количество затронутых строк.
* **database** - Содержит проект *Liquibase*, который создаёт таблицу **users** в базе дынных и наполняет её данными из .csv файла. Объём данных - 1 млн. строк.