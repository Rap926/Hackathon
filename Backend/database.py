import pymysql

hostname = '192.168.102.44'
user = 'sqluser'
password = 'password'

db = pymysql.connections.Connection(
  host = hostname,
  user = user,
  password = password
)

cursor = db.cursor()

cursor.execute("SHOW DATABASES;")

for databases in cursor:
  print(databases)

cursor.close()
db.close()