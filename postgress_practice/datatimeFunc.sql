show datestyle;
"ISO, DMY"

-- sting to date format

set DateStyle='ISO, MDY';
"ISO, MDY"

select TO_DATE('2022-01-01','YYYY-MM-DD');
"2022-01-01"

select TO_DATE('20220101','YYYYMMDD');
"2022-01-01"

select TO_DATE('01-01-2022','DD-MM-YYYY');
"2022-01-01"

select TO_DATE('2022-01-01','DD-MM-YYYY');
ERROR:  date/time field value out of range: "2022-01-01"

select TO_DATE('December 1, 2022','Month DD,YYYY');
"2022-12-01"




select TO_TIMESTAMP('December 1, 2022 10:30;30','Month DD,YYYY HH:MI:SS');
"2022-12-01 10:30:30+05:30"

select TO_TIMESTAMP('December 1, 2022 20:8:00','Month DD,YYYY HH24:MI:SS');
"2022-12-01 20:08:00+05:30"

-- formatting date

select CURRENT_TIMESTAMP;
"2022-05-11 18:37:52.912504+05:30"

select CURRENT_TIMESTAMP, To_CHAR('2022-10-10  10:00:00'::TIMESTAMP,'YYYY Month DD');

"2022-05-11 18:39:46.157907+05:30"	"2022 October   10"


select CURRENT_TIMESTAMP, TO_CHAR
('2022-10-10T10:00:00-6:00'::TIMESTAMPTZ,'YYYY Month DD hh:mm:ss tz');

"2022-05-11 18:42:37.408399+05:30"	"2022 October   10 09:10:00 ist"



-- Date Construction method
select MAKE_DATE(2020,02,09);

"2020-02-09"

select MAKE_DATE(2020,13,09);
ERROR:  date field value out of range: 2020-13-09

select MAKE_TIME(2,3,4.12);
"02:03:04.12"

select MAKE_TIMESTAMP(2022,12,23,10,24,32);
"2022-12-23 10:24:32"

select MAKE_INTERVAL(2022,12,23,10,24,32);
"2023 years 171 days 24:32:00"

select MAKE_INTERVAL(months=>10,days=>2,mins=>34);
"10 mons 2 days 00:34:00"

select MAKE_TIMESTAMPTZ(2022,12,23,10,24,32);
"2022-12-23 10:24:32+05:30"

select CURRENT_DATE;
"2022-05-11"

select CURRENT_TIME;
"19:00:42.481322+05:30"


select EXTRACT('YEAR' from CURRENT_TIMESTAMP);
2022

select TIME '23:45:34'+INTERVAL '5 SECOND';
"23:45:39"

select (DATE '2020-01-01',DATE '2020-12-31') OVERLAPS (DATE '2020-05-06',DATE '2021-12-31');
true

show TIME ZONE;
"Asia/Kolkata"

select * from pg_timezone_names;
"Hongkong"	"HKT"	"08:00:00"	false
"Iceland"	"GMT"	"00:00:00"	false
"Atlantic/South_Georgia"	"-02"	"-02:00:00"	false
"Atlantic/St_Helena"	"GMT"	"00:00:00"	false
"Atlantic/Bermuda"	"ADT"	"-03:00:00"	true
"Atlantic/Cape_Verde"	"-01"	"-01:00:00"	false
"Atlantic/Stanley"	"-03"	"-03:00:00"	false
"Atlantic/Faeroe"	"WEST"	"01:00:00"	true
"Atlantic/Faroe"	"WEST"	"01:00:00"	true
"Atlantic/Madeira"	"WEST"	"01:00:00"	true
"Atlantic/Azores"	"+00"	"00:00:00"	true
"Atlantic/Canary"	"WEST"	"01:00:00"	true
"Atlantic/Reykjavik"	"GMT"	"00:00:00"	false
"Atlantic/Jan_Mayen"	"CEST"	"02:00:00"	true
"MET"	"MEST"	"02:00:00"	true
"ROK"	"KST"	"09:00:00"	false
"NZ"	"NZST"	"12:00:00"	false
"Africa/Kampala"	"EAT"	"03:00:00"	false
"Africa/Cairo"	"EET"	"02:00:00"	false
"Africa/Banjul"	"GMT"	"00:00:00"	false ....



select * from pg_timezone_abbrevs;
"ADT"	"-03:00:00"	true
"AEDT"	"11:00:00"	true
"AESST"	"11:00:00"	true
"AEST"	"10:00:00"	false
"AFT"	"04:30:00"	false
"AKDT"	"-08:00:00"	true
"AKST"	"-09:00:00"	false
"ALMST"	"07:00:00"	true
"ALMT"	"06:00:00"	false
"AMST"	"04:00:00"	false
"AMT"	"-04:00:00"	false
"ANAST"	"12:00:00"	false

