-- //left join

select * from emp left join employees on emp.emp_id=employees.emp_id;

1	"Mittal"	"bvbjj"	338683	1	"Tarun"	3500
2	"Akash"	"Jaipur"	2345	2	"Varun"	9500
3	"ayush"	"dho"	78	3	"Arun"	9500
11	"Mittal"	"bvbjj"	338683			
12	"Mittal"	"bvbjj"	338683			
10	"Mittal"	"bvbjj"	338683			
18	"hi"	"hello"	234			
56	"Varsha"	"morena"	87456			
5	"har"	"hello"	234			




select * from employees left join emp on employees.emp_id=emp.emp_id;

1	"Tarun"	3500	1	"Mittal"	"bvbjj"	338683
2	"Varun"	9500	2	"Akash"	"Jaipur"	2345
3	"Arun"	9500	3	"ayush"	"dho"	78



-- right join

select * from emp right join employees on emp.emp_id=employees.emp_id;

1	"Mittal"	"bvbjj"	338683	1	"Tarun"	3500
2	"Akash"	"Jaipur"	2345	2	"Varun"	9500
3	"ayush"	"dho"	78	3	"Arun"	9500

select * from employees right join emp on employees.emp_id=emp.emp_id;


1	"Tarun"	3500	1	"Mittal"	"bvbjj"	338683
2	"Varun"	9500	2	"Akash"	"Jaipur"	2345
3	"Arun"	9500	3	"ayush"	"dho"	78
			11	"Mittal"	"bvbjj"	338683
			12	"Mittal"	"bvbjj"	338683
			10	"Mittal"	"bvbjj"	338683
			18	"hi"	"hello"	234
			56	"Varsha"	"morena"	87456


-- full join



select * from emp full join employees on emp.emp_id=employees.emp_id;


1	"Mittal"	"bvbjj"	338683	1	"Tarun"	3500
2	"Akash"	"Jaipur"	2345	2	"Varun"	9500
3	"ayush"	"dho"	78	3	"Arun"	9500
11	"Mittal"	"bvbjj"	338683			
12	"Mittal"	"bvbjj"	338683			
10	"Mittal"	"bvbjj"	338683			
18	"hi"	"hello"	234			
56	"Varsha"	"morena"	87456			
5	"har"	"hello"	234			


-- natural join

select * from employees natural join emp ;

-- no outpur return as there is not any same columns match

-- inner join



select * from emp inner join employees on emp.emp_id=employees.emp_id;

1	"Mittal"	"bvbjj"	338683	1	"Tarun"	3500
2	"Akash"	"Jaipur"	2345	2	"Varun"	9500
3	"ayush"	"dho"	78	3	"Arun"	9500

-- natural join

