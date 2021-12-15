// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.


const new_var = new Vue ({
    el: '#main-container',
    data: {
        text_message: 'Hello Vue', //messagio da stampare
        image: {
            src: 'https://i.picsum.photos/id/970/300/300.jpg?hmac=x9ZLs6rRfE1HngAnW7XGcMXjZVep_emsv30sW2gp6k0',
            // src: '', //test alt
            alt: "Immagine non trovata!",
        }
    }
})
// console.log(new_var._data.text_message);