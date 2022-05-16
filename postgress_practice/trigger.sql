
-- employee table
create table employees
(id int primary key not null, 
 name text not null, salary int not null);


-- to maintain log of employee table
 create table audit
(id int primary key not null, 
 name text not null, entry_date text);


--  function that call on trigger activation

create or replace function audit_log()
returns trigger as $$
begin
insert into audit(id, name, entry_date) 
values(new.id, new.name,current_timestamp);
return new;
end;$$ language plpgsql;


-- trigger
create trigger audit_trigger 
after insert on employees 
for each row execute procedure audit_log();


insert into employees values(1,'Tarun',3500);

select * from audit;

1 Tarun 2022-05-13 10:00:45


-- Before triffer

CREATE OR REPLACE FUNCTION befo_insert()
  RETURNS trigger AS
$$
BEGIN
NEW.FIRST_NAME = LTRIM(NEW.FIRST_NAME);
NEW.LAST_NAME = LTRIM(NEW.LAST_NAME);
NEW.JOB_ID = UPPER(NEW.JOB_ID);
RETURN NEW;
END;

$$
LANGUAGE 'plpgsql';


CREATE TRIGGER che_val_befo_ins
  BEFORE INSERT
  ON emp_details
  FOR EACH ROW
  EXECUTE PROCEDURE befo_insert();

-- this trigger will remove space if found on left side of first and last namr
-- and convert job_id to upper