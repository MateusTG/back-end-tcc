import * as net from 'net'
import prisma from '../../../prisma';
import { Response } from 'express';
const express = require('express')
const router = express.Router();

const PORT = 5001

const clientSockets: any[] = []

const server = net.createServer(socket =>{
    console.log('ESP32 connected.');
    clientSockets.push(socket);

    socket.on('close', () => {
        console.log('ESP32 disconnected.');
        const index = clientSockets.indexOf(socket);
        if (index !== -1) {
            clientSockets.splice(index, 1);
        }
    });
    
    socket.on('data', async data => {
        const receivedData = data.toString().trim();
        console.log('Received data from ESP32: ' + receivedData);
        
        if (receivedData.length > 0) {
            try {
                const {date,time,...jsonData} = JSON.parse(receivedData);
                
                await prisma.location.create({data: {date: new Date(Date.parse(`${date} ${time}`)),...jsonData}})
            } catch (error) {
                console.error('Error parsing JSON data:', error);
            }
        } else {
            console.error('Empty data received.');
        }
    });

});

server.listen(PORT, () => {
    console.log(`TCP server running on port ${PORT}`);
});
router.post('/LocationData', async (req: Request, res: Response) => { 
    try {//@ts-ignore
        const result = await prisma.location.findFirst({orderBy:{date: 'desc'} });
        console.log(result)
        return res.json({'result':result})
    } catch (error) {//@ts-ignore
        console.error('Error:', error.message);
        return res.json(error).status(404)
    }
});
//@ts-ignore

router.get('/LastLocationData', async (req, res) => {
    try {//@ts-ignore
        const result = await prisma.location.findFirst({orderBy:{date: 'desc'} });
        console.log(result)
        return res.json({'result':result})
    } catch (error) {//@ts-ignore
        console.error('Error:', error.message);
        return res.json(error).status(404)
    }
});
  
module.exports = router;
