'use strict';
// creaacion de servido con HAPI
const  hapi = require('@hapi/hapi'); //creacion de variable
const  init = async () => { //creaacion de puerto a escuchar durante la ejecucion del proyecto
    const  server = hapi.server({
        port:3000,//puerto a escchar
        host: 'localhost',//dominio local
    });

    await server.start(); //esperamos a que el servidor inicie
    console.log('Server running on %s', server.info.uri);//mensaje a mostrar durante la ejecucion

    /* Agregamos rutas al servidor  */
    server.route({
        method: 'GET', //
        path: '/', // definicion de la ruta por defecto  y por ejemplo (/)ruta principal
        handler: (request, h) => {
            return 'hello world'
        }
    })
    };
    process.on('unhandledRejection', (err) => {
        console.log(err);
        process.exit(1);
    });

    init();
