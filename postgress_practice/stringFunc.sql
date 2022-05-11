-- create database
create database string; 

-- create table
create table stringfunc(firstname text not null,
					   lastname text not null,
					   address text not null,
					   dob text not null,
					   mob_no integer not null);

-- insert table value                       
insert into stringfunc (firstname,lastname,address,dob,mob_no) 
VALUES ('Tarun','Mittal','raj','05-04-2001',765456);

-- select table

select * from stringfunc;

"Tarun"	"Mittal"	"raj"	"05-04-2001"	765456
"Varun"	"Mittal"	"raj"	"05-04-2001"	765456


select UPPER(firstname) from stringfunc;
"TARUN"
"VARUN"

select LOWER(firstname) from stringfunc;
"tarun"
"varun"

select INITCAP(firstname) from stringfunc;
"Tarun"
"Varun"

select INITCAP(CONCAT(firstname,' ',lastname)) as fullname from stringfunc;
"Tarun Mittal"
"Varun Mittal"

select LEFT(firstname,3) as fullname from stringfunc;
"Tar"
"Var"

select RIGHT(firstname,3) as fullname from stringfunc;
"run"
"run"

select RIGHT(CONCAT(firstname,' ',lastname),2) as fullname from stringfunc;
"al"
"al"

select RIGHT(CONCAT(firstname,' ',lastname),2) as fullname, count(*) as total from stringfunc  
group by 1 order by 1;
"al"	2


select REVERSE(firstname) as reverse from stringfunc;
"nuraT"
"nuraV"

select SPLIT_PART('fg,fg,jk',',',3) as reverse from stringfunc;
"jk"
"jk"

select LTRIM('firstname','f') ;
"irstname"

select RTRIM('firstname','e') ;
"firstnam"

select BTRIM('firstnamef','f') ;
"irstname"

select TRIM(LEADING FROM '  dsdsdd');


select LENGTH(firstname) as len from stringfunc;
5
5

select position('r' in firstname) as pos from stringfunc;
3
3

select repeat(firstname,4) as rep from stringfunc;
"TarunTarunTarunTarun"
"VarunVarunVarunVarun"

select replace(firstname,'T','M') as rep from stringfunc;
"Marun"
"Varun"

select substring(firstname from 1 for 3) as rep from stringfunc;
"Tar"
"Var"