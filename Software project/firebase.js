/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const admin = require("firebase-admin")
const functions = require("firebase-functions")
admin.initializeApp()
// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.helloWorld = onRequest((request, response) => {
    logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase!");
});
//get cpus 
exports.getCpu = functions.https.onRequest((request, response) => {
    // 1. Connect to our Firestore database
    let cpusToReturn = []
    admin.firestore().collection('CPU').get().then((cpusSnapshot) => {
        if (cpusSnapshot.empty) {
            console.log('No matching documents.');
            response.send('No data in database');
            return;
        }
        cpusSnapshot.forEach(doc => {
            //get names of cpus from db using query
            if (request.query.Name) {
                if (request.query.Name == doc.data().Name) {
                    cpusToReturn.push(doc.data());
                }
            } else {
                cpusToReturn.push(doc.data());
            }

        });
        // 2. Send data back to client
        response.send(cpusToReturn);
    })
});
//get cases
exports.getCase = functions.https.onRequest((request, response) => {
    // 1. Connect to our Firestore database
    let caseToReturn = []
    admin.firestore().collection('Case').get().then((caseSnapshot) => {
        if (caseSnapshot.empty) {
            console.log('No matching documents.');
            response.send('No data in database');
            return;
        }
        caseSnapshot.forEach(doc => {
            //get names of case from db using query
            if (request.query.Name) {
                if (request.query.Name == doc.data().Name) {
                    caseToReturn.push(doc.data());
                }
            } else {
                caseToReturn.push(doc.data());
            }

        });
        // 2. Send data back to client
        response.send(caseToReturn);
    })
});
//get gpus
exports.getGpu = functions.https.onRequest((request, response) => {
    // 1. Connect to our Firestore database
    let gpuToReturn = []
    admin.firestore().collection('Gpu').get().then((gpuSnapshot) => {
        if (gpuSnapshot.empty) {
            console.log('No matching documents.');
            response.send('No data in database');
            return;
        }
        caseSnapshot.forEach(doc => {
            //get names of gpus from db using query
            if (request.query.Name) {
                if (request.query.Name == doc.data().Name) {
                    gpuToReturn.push(doc.data());
                }
            } else {
                gpuToReturn.push(doc.data());
            }

        });
        // 2. Send data back to client
        response.send(gpuToReturn);
    })
});
//get motherboard
exports.getMotherboard = functions.https.onRequest((request, response) => {
    // 1. Connect to our Firestore database
    let motherboardToReturn = []
    admin.firestore().collection('Motherboard').get().then((motherboardSnapshot) => {
        if (motherboardSnapshot.empty) {
            console.log('No matching documents.');
            response.send('No data in database');
            return;
        }
        caseSnapshot.forEach(doc => {
            //get names of motherboard from db using query
            if (request.query.Name) {
                if (request.query.Name == doc.data().Name) {
                    motherboardToReturn.push(doc.data());
                }
            } else {
                motherboardToReturn.push(doc.data());
            }

        });
        // 2. Send data back to client
        response.send(motherboardToReturn);
    })
});
//get psu
exports.getPsu = functions.https.onRequest((request, response) => {
    // 1. Connect to our Firestore database
    let psuToReturn = []
    admin.firestore().collection('Psu').get().then((psuSnapshot) => {
        if (psuSnapshot.empty) {
            console.log('No matching documents.');
            response.send('No data in database');
            return;
        }
        caseSnapshot.forEach(doc => {
            //get names of psu from db using query
            if (request.query.Name) {
                if (request.query.Name == doc.data().Name) {
                    psuToReturn.push(doc.data());
                }
            } else {
                psuToReturn.push(doc.data());
            }

        });
        // 2. Send data back to client
        response.send(psuToReturn);
    })
});

//get RAM
exports.getRam = functions.https.onRequest((request, response) => {
    // 1. Connect to our Firestore database
    let ramToReturn = []
    admin.firestore().collection('Ram').get().then((ramSnapshot) => {
        if (ramSnapshot.empty) {
            console.log('No matching documents.');
            response.send('No data in database');
            return;
        }
        caseSnapshot.forEach(doc => {
            //get names of psu from db using query
            if (request.query.Name) {
                if (request.query.Name == doc.data().Name) {
                    ramToReturn.push(doc.data());
                }
            } else {
                ramToReturn.push(doc.data());
            }

        });
        // 2. Send data back to client
        response.send(ramToReturn);
    })
});

//get Storage
exports.getStorage = functions.https.onRequest((request, response) => {
    // 1. Connect to our Firestore database
    let storageToReturn = []
    admin.firestore().collection('Storage').get().then((storageSnapshot) => {
        if (storageSnapshot.empty) {
            console.log('No matching documents.');
            response.send('No data in database');
            return;
        }
        caseSnapshot.forEach(doc => {
            //get names of psu from db using query
            if (request.query.Name) {
                if (request.query.Name == doc.data().Name) {
                    storageToReturn.push(doc.data());
                }
            } else {
                storageToReturn.push(doc.data());
            }

        });
        // 2. Send data back to client
        response.send(storageToReturn);
    })
});
