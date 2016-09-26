# GraphQL experiment

### What is GraphQL?
GraphQL is a data query language developed internally by Facebook in 2012 before being publicly released in 2015. It provides an alternate to REST and ad-hoc webservice architectures.

- More on [Wikipedia](http://daringfireball.net)
- GraphQL [official](http://graphql.org/)

### Personal goals
- To create collect and configure pacakges needed to build an API using GraphQL and NodeJS.
- To make it easy-to-use for Webpack, React & Redux based single page applications.
- To add an extra layer of security for private endpoints. 
- To consider using the app on distributed systems.

### Credit
- Tutorial on YouTube by [Lee Benson](https://github.com/leebenson)
- Inspiration by [Lee Byron](https://github.com/leebyron)

### Contact
- Gabriel Mičko on [Twitter](https://twitter.com/gabriel_micko), [GitHub](https://github.com/gabrielmicko)


### Running the app

Database (db.js):
```javascript
const Conn = new Sequelize(
	'', //Database
	'', //Username
	'', //Password
	{
		dialect: 'mysql', //Type of the database
		host: '' //Host
	}
);
```

Install:
```sh
$ npm install
$ babel-node server.js
```

Open: [localhost:3000](http://localhost:3000).


### Version
0.0.1