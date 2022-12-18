const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
    //write new record
    await prisma.node.create({
        data: {
            name: 'ccc',
            age: '28'
        }
    })

    //update/adjust record
    const post = await prisma.node.update({
        where: { id: 1 },
        data: { age: '29' },
      })

    //get all records
    const allUsers = await prisma.node.findMany()
    console.log(allUsers)
}

//Connection
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })