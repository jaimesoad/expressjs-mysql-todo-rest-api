DROP DATABASE IF EXISTS Todos;
CREATE DATABASE Todos;

use Todos;

create table todos (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    message VARCHAR(100) NOT NULL,
    completed BIT NOT NULL DEFAULT false
);

create procedure AddTodo(
    IN p_message VARCHAR(100)
)
BEGIN
    INSERT INTO todos (message)
    VALUE (p_message);
END;

create procedure LoadTodo(
    IN p_id INTEGER
)
BEGIN
    select * from todos
    where id = p_id;
END;

create procedure LoadTodos()
BEGIN
    select * from todos;
END;

create procedure GetLastTodo()
BEGIN
    select * from todos
    order by id desc limit 1;
END;

drop procedure if exists ToggleTodo;
create procedure ToggleTodo(
    in p_id int
)
BEGIN
    declare v_completed TINYINT(1);

    select completed
    into v_completed
    FROM todos
    where id = p_id;

    if v_completed = 1 then
        set v_completed := 0;

    else
        set v_completed := 1;
    end if;

    update todos
        set completed = v_completed
    where id = p_id;
end;

drop procedure if exists DeleteTodo;
create procedure DeleteTodo(
    in p_id int
)
begin
    delete from todos
        where id = p_id;
end;