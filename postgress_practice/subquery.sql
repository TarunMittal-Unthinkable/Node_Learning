SELECT first_name,last_name, salary FROM employees
WHERE salary >
(SELECT max(salary) FROM employees
WHERE first_name='Alexander');

Steven     King       24000.00
Neena       Kochhar    17000.00
Lex        De Haan    17000.00
Nancy       Greenberg  12000.00
Den         Raphaely   11000.00



SELECT employee_id, last_name, 
(CASE WHEN department_id=(
SELECT department_id from departments WHERE location_id=2500) 
THEN 'Canada' ELSE 'USA' END) 
FROM employees;



         101  Kochhar      USA
         102  De Haan      USA
         103  Hunold       USA
         104  Ernst        USA


SELECT employee_id,first_name,last_name,salary
FROM employees 
WHERE salary > 
(SELECT AVG(SALARY) FROM employees); 


         101  Neena        Kochhar     17000.00
         102  Lex          De Haan     17000.00
         103  Alexander    Hunold       9000.00
         108  Nancy        Greenberg   12000.00
         109  Daniel       Faviet       9000.00


SELECT department_id, AVG(SALARY) 
FROM employees GROUP BY department_id 
HAVING AVG(SALARY)>=ALL 
(SELECT AVG(SALARY) FROM employees 
GROUP BY department_id);


90  19333.333333333333



SELECT first_name, last_name,department_id 
FROM employees 
WHERE department_id= ANY
(SELECT DEPARTMENT_ID 
FROM departments WHERE location_id=1700);



 Lex          De Haan               90
 Nancy        Greenberg             100
 Daniel       Faviet                100
 John         Chen                  100
 Ismael       Sciarra               100


 SELECT last_name, salary, department_id 
FROM employees outerr
WHERE salary>
(SELECT AVG(salary) 
FROM employees 
WHERE department_id = outerr.department_id);


King       24000.00            90
Hunold     9000.00            60
Ernst       6000.00             60
Greenberg  12000.00           100
Faviet      9000.00           100
Raphaely   11000.00             30