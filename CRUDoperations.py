#python program to perform CRUD operations on database
import pymysql


conn=pymysql.connect(host="localhost", user="root", passwd="", db="my_python")


cursor=conn.cursor()

#query to create table named 'emp_details'
"""cursor.execute(''' CREATE TABLE emp_details
    (id int primary key,
    name varchar(20),
    city varchar(20),
    salary float
    )

''')"""

#query to insert details into table
"""cursor.execute(''' insert into emp_details values
    (1,"Kuldeep","Ankleshwar",70000),
    (2,"Mayank","Bharuch",65000),
    (3,"Hemil","Surat",73000),
    (4,"Vinay","Vadodara",72000.500),
    (5,"Praduman","Bharuch",67000);

''')"""

#query to delete details from table
"""cursor.execute('''delete from emp_details where id=2;

''')"""

#query to update details in table
"""cursor.execute(''' update emp_details set name="Kuldeep Sharma" where id=1;

''')"""


#query to fetch details from table
cursor.execute(''' select * from emp_details 
''')
records=cursor.fetchall()
print("total number of rows in table: ",cursor.rowcount)

for row in records:
    print("Id = ", row[0])
    print("Name = ", row[1])
    print("City = ", row[2])
    print("Salary = ", row[3],"\n")
   

conn.commit()
conn.close()
