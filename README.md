# sqlcdcstream-example

An example MVC ASP.NET application utilising sqlcdcstream for realtime updates

## Prerequisits 

Visual Studio 2012
SQL Server 2008 or above 
Node v0.8 or above

## Install 

```
> git clone git@github.com:No9/sqlcdcstream-example.git
```

### Node Install

```
> cd sqlcdcstream-example\node 
> npm install
```

If your database server does not currently have sqlcdcstream schema do either of the following
```
> node node-modules\sqlcdcstream\install-database.js
```

Or run the script node-modules\sqlcdcstream\sql\installsqlcdc.sql on the database server
```
> osql -E -n-1 -i node-modules\sqlcdcstream\sql\installsqlcdc.sql -o install-database.log
```

This creates a database on the local instance to store the id of the latest record.
You will find the output of these commands in install-database.log
The script will not delete the database if it already exists.

### ASP.NET Sample Application

```
> cd sqlcdcstream-example\dotnet\sql
> osql -E -n-1 -i moviedb.sql -o install-database.log
```

## Run 

```
> cd sqlcdcstream-example\node 
> node index.js
```

1. Open sqlcdcstream-example\dotnet\c#\MvcMovieCS_TU.sln in visual studio
2. Run the website
3. Open another another browser window so you have two or more open
4. Change some data in one of the screens and the other screen should be updated