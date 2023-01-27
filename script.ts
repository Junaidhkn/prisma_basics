import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// A `main` function so that you can use async/await
async function main() {
	// ... you will write your Prisma Client queries here
	// //  Gell All Users
	// const getAllUsers = await prisma.user.findMany();
	// //  Create User
	// const createUser = await prisma.user.create({
	// 	data: {
	// 		email: 'alice@prisma.io',
	// 	},
	// });
	// //  Update the User
	// 	const updateUser = await prisma.user.update({
	// 		where: {
	// 			email: 'alice@prisma.io',
	// 		},
	// 		data: {
	// 			name: 'alice',
	// 		},
	// 	});

	// // Create Post

	// const newPost = await prisma.post.create({
	// 	data: {
	// 		title: 'Post One',
	// 	},
	// });

	const updatePost = await prisma.post.update({
		where: {
			id: '63d3b26e1aef9c18f3416b59',
		},
		data: {
			author: {
				connect: {
					email: 'alice@prisma.io',
				},
			},
		},
	});
}

main()
	.catch((e) => {
		throw e;
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
