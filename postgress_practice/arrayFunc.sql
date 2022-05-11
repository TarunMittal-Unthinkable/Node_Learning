-- constructing ranges

select int4range(1,6),numrange(1.67,6.78,'[]'),daterange('200101','200101','[]'),
tsrange(localtimestamp,localtimestamp+interval '8 days','(]');

"[1,6)"	"[1.67,6.78]"	"[2020-01-01,2020-01-02)"	"(""2022-05-12 00:37:46.296783"",""2022-05-20 00:37:46.296783""]"

-- array 
select array[1,2,3]
{1,2,3}

select array[1,2,3], array[2.12225::float],array[current_date,current_date+5];
{1,2,3}	{2.12225}	"{2022-05-12,2022-05-17}"


-- operator on array
select array[1,2,3,4]=array[1,2,3,4]
true


select array[1,2,3,4]=array[1,2,3,4],
array[1,2,3,4]=array[1,2,4],
array[1,2,3,4]<=array[1,3,4],
array[1,3,4]>=array[1,2,3,4],
array[1,2,3,4]<>array[2,3,4,5],
array[1,2,3,4]<array[1,2,3],
array[1,2,4]>array[1,2,3,4];

true	false	true	true	true	false	true


-- inclusion operator

select array[1,2,3,4]@>array[2,3,4]
true

select array[1,2,3,4]@>array[2,3,4],
array['a','b']<@array['a','b'],
array[1,2,3,4]&&array[2,3,4];

true	true	true

-- array concat
select array[1,2,3] || array[4,5,6]
{1,2,3,4,5,6}

select array_cat(array[1,2,3],array[4,5,6])
{1,2,3,4,5,6}

select 8 || array[4,5,6]
{8,4,5,6}

select array_append(array[1,2,3],4)
{1,2,3,4}

-- search

select array_position(array[1,2,3,4],4)
4

select array_positions(array[1,4,2,3,4],4)

{2,5}

-- modification

select array_remove(array[1,2,3,4],4),
array_remove(array[1,2,3,4],2),
array_replace(array[1,2,3,4],2,10),
array_replace(array[1,3,4],3,30)

{1,2,3}	{1,3,4}	{1,10,3,4}	{1,30,4}


-- in,notin,all

select 20 in (20,10,98)
true

select 20 not in (20,10,98)
false


select 25=all(array[20,25,35])
false

create table stringfunc(firstname text not null,
					   lastname text not null,
					   address text not null,
					   dob text not null,
					   mob_no integer not null
                       phones text []);

insert into stringfunc1 (firstname,phones) 
VALUES ('Tarun','{"(787)-989-989"}');


