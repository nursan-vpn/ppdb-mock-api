import express from "express";
import cors from "cors";
import { faker } from '@faker-js/faker';
import bodyParser from 'body-parser'
import busboy from "connect-busboy";

const app = express();
const port = 4040;

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(busboy())

app.get('/ppdb/banner', (req, res) => {
    const success = {
        "code": 200,
        "error": false,
        "message": "",
        "data": {
            id: 1,
            title: "Test Banner",
            description: "This is a test banner",
            picture: "https://example.com/banner.jpg"
        }
    }

    const empty = {
        "code": 200,
        "error": false,
        "message": "",
        "data": {}
    }

    res.send(success);
})

app.post('/ppdb/banner',(req,res) => {
    const success = {
        "code": 200,
        "error": false,
        "message": "",
        "data": {
            id: 1,
            title: "Test Banner",
            description: "This is a test banner",
            picture: "https://example.com/banner.jpg"
        }
    }

    const error = {
        "code": 403,
        "error": false,
        "message": "Only one banner allowed on each province/city/foundation and school level (Elementary School, Middle School, High School)",
        "data": {}
    }

    setTimeout(() => {
        res.status(200).send(success);
    },2000)

    // res.status(200).send(success);
    // res.status(403).send(error);
})

app.put('/ppdb/banner',(req,res) => {
    const success = {
        "code": 200,
        "error": false,
        "message": "",
        "data": {
            id: 1 + Math.floor(Math.random() * 100),
            title: "Test Banner",
            description: "This is a test banner",
            picture: "https://example.com/banner.jpg"
        }
    }

    const error = {
        "code": 400,
        "error": false,
        "message": "Server File error message",
        "data": {}
    }

    res.status(200).send(success);
    // res.status(400).send(error);
})

app.get('/ppdb/registration-information/:id/', (req, res) => {
    const data = generatePathInformation();
    const detail = {
        ...data,
        registration_details: [
            {
                id: 1,
                registration_information: data,
                type: "0",
                title: "Syarat Pendaftaran",
                description: faker.lorem.paragraph(),
                document: faker.internet.url() + faker.system.filePath()
            }
        ]
    }
    const success = {
        "code": 200,
        "error": false,
        "message": "",
        "data": detail
    }

    setTimeout(() => {
        res.status(200).send(success);
    },2000)
})


app.get('/ppdb/registration-information/', (req, res) => {
    const count = req.query.count || 10;
    const data = getRegistrationInfo(10);
    
    const success = {
        "code": 200,
        "error": false,
        "message": "",
        "data": data
    }

    setTimeout(() => {
        res.status(200).send(success);
    },5000)
})

app.post('/ppdb/registration-information/', (req, res) => {
    const data = generatePathInformation();
    const success = {
        "code": 200,
        "error": false,
        "message": "",
        "data": data
    }

    setTimeout(() => {
        res.status(200).send(success);
    },5000)
})

app.put('/ppdb/registration-information/:id', (req, res) => {
    const data = generatePathInformation();
    const success = {
        "code": 200,
        "error": false,
        "message": "",
        "data": data
    }

    setTimeout(() => {
        res.status(200).send(success);
    },5000)
})

app.delete('/ppdb/registration-information/:id', (req, res) => {
    const success = {
        "code": 200,
        "error": false,
        "message": "",
        "data": []
    }

    setTimeout(() => {
        res.status(200).send(success);
    },5000)
})


app.post('/ppdb/registration-detail/', (req, res) => {
    console.log(req.busboy)
    const success = {
        "code": 200,
        "error": false,
        "message": "",
        "data": {
                type: "0",
                title: "Syarat Pendaftaran",
                description: faker.lorem.paragraph(),
                document: faker.internet.url() + faker.system.filePath()
        }
    }

    setTimeout(() => {
        res.status(200).send(success);
    },5000)
})

app.put('/ppdb/registration-detail/:id', (req, res) => {
    console.log(req.body)
    const success = {
        "code": 200,
        "error": false,
        "message": "",
        "data": {
                type: "0",
                title: "Syarat Pendaftaran",
                description: faker.lorem.paragraph(),
                document: faker.internet.url() + faker.system.filePath()
        }
    }

    setTimeout(() => {
        res.status(200).send(success);
    },5000)
})

export function getRegistrationInfo(count = 10) {
    let result = [];
    for (let i = 0; i < count; i++) {
        result.push(generatePathInformation())
    }

    return result;
}

function generatePathInformation() {
    return {
        id: faker.number.int({min: 1, max: 100}),
        name: faker.person.jobDescriptor(),
        level: faker.helpers.arrayElement(['0','1','2']),
        type: faker.helpers.arrayElement(['0','1','2', '3','4'])
    }
}


app.listen(port, () => {
    console.log(`Mock Server listening on port ${port}`)
})