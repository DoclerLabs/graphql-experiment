import {
	GraphQLObjectType,
	GraphQLInt,
	GraphQLString,
	GraphQLList,
	GraphQLSchema
} from 'graphql';
import Db from './db';


const Person = new GraphQLObjectType({
	name: 'Person',
	description: 'This represents a Person',
	fields: () => {
		return {
			id: {
				type: GraphQLInt,
				resolve(person) {
					return person.id
				}
			},
			firstName: {
				type: GraphQLString,
				resolve(person) {
					return person.firstName
				}
			},
			lastName: {
				type: GraphQLString,
				resolve(person) {
					return person.lastName
				}
			},
			email: {
				type: GraphQLString,
				resolve(person) {
					return person.email
				}
			},
			posts: {
				type: new GraphQLList(Post),
				resolve(person) {
					return person.getPosts()
				}
			}
		}
	}
});

const Post = new GraphQLObjectType({
	name: 'Post',
	description: 'These are the posts',
	fields: () => {
		return {
			id: {
				type: GraphQLInt,
				resolve(post) {
					return post.id
				}
			},
			title: {
				type: GraphQLString,
				resolve(post) {
					return post.title
				}
			},
			content: {
				type: GraphQLString,
				resolve(post) {
					return post.content
				}
			},
			person: {
				type: Person,
				resolve(post) {
					return post.getPerson()
				}
			}
		}
	}
});

const Query = new GraphQLObjectType({
	name: 'Query',
	description: 'This is a root query',
	fields: () => {
		return {
			people: {
				type: new GraphQLList(Person),
				args: {
					id: {
						type: GraphQLInt
					},
					email: {
						type: GraphQLString
					}
				},
				resolve(root, args) {
					return Db.models.person.findAll({
						where: args
					});
				}
			},
			posts: {
				type: new GraphQLList(Post),
				resolve(root, args) {
					return Db.models.post.findAll({
						where: args
					});
				}
			}
		}
	}
});

const Schema = new GraphQLSchema({
	query: Query
});

export default Schema;