-- where clauses

SELECT * FROM emp WHERE name='Mittal' 
1	"Mittal"	"bvbjj"	338683
10	"Mittal"	"bvbjj"	338683
11	"Mittal"	"bvbjj"	338683
12	"Mittal"	"bvbjj"	338683
14	"Mittal"	"bvbjj"	338683


SELECT * FROM emp where emp_id>10; 
11	"Mittal"	"bvbjj"	338683
12	"Mittal"	"bvbjj"	338683
14	"Mittal"	"bvbjj"	338683
18	"hi"	"hello"	234
670	"ffff"	"ffgg"	34
22	"tri"	"toda"	91111
222	"tri"	"toda"	91111
56	"Varsha"	"morena"	87456



-- Dictinct clauses
SELECT DISTINCT name FROM emp ORDER BY name

"Akash"
"ayush"
"dar"
"ffff"
"har"
"hi"
"Mittal"
"tri"
"var"
"Varsha"
"Varun Mittal"

-- GroupBy clauses
SELECT emp_id, COUNT(*)
FROM emp
GROUP BY emp_id;

222	1
18	1
11	1
9	1
3	1

SELECT name "Name", 
COUNT(*) "Number"
FROM emp
GROUP BY name
ORDER BY 2 DESC;


"Mittal"	5
"tri"	2
"ayush"	1
"Akash"	1
"har"	1
"ffff"	1
"Varun Mittal"	1
"Varsha"	1
"var"	1
"dar"	1
"hi"	1

-- OrderBy clauses

SELECT emp_id,name
FROM emp
ORDER BY name;

2	"Akash"
3	"ayush"
9	"dar"
670	"ffff"
5	"har"
18	"hi"
10	"Mittal"
14	"Mittal"


-- having clause

SELECT name
FROM emp
GROUP BY emp_id
HAVING COUNT(*)>0;

"ffff"
"tri"
"Varun Mittal"
"Mittal"
"Akash"
"tri"
"hi"
"Mittal"
"dar"
"ayush"
"Varsha"
"Mittal"
"har"
"Mittal"
"var"
"Mittal"


