// Inseriamo un input per visualizzare in pagina un testo inserito da un utente.
// Inseriamo una immagine e accanto un numero che identifica il numero di prodotti desiderati, i dati devono venire da Vue.
// Poi aggiungiamo un pulsante per aumentare questo numero.
const root = new Vue ({
    el: '#main-container',
    data: {
        // Inseriamo un input per visualizzare in pagina un testo inserito da un utente.
        input: {
            type:'text',
            placeholder: 'inserisci il tuo testo',
            message: 'Hello vue, this is a message for you.'
        },
        // Inseriamo una immagine e accanto un numero che identifica il numero di prodotti desiderati, i dati devono venire da Vue.
        product: {
            image_src: 'https://i.picsum.photos/id/367/200/200.jpg?hmac=6NmiWxiENMBIeAXEfu9fN20uigiBudgYzqHfz-eXZYk',
            image_alt: 'Immagine non trovata!',
            product_num: 10
        }, 
        button: {
            id: 'add-prod',
            name:'aggiungi prodotto'
        }
    },
    methods:{
        showText: function(event) {
            this._data.input.message = event.target.value;
        },
        addProduct: function(event) {
            event.preventDefault();
            this._data.product.product_num += 1;
        }
    }
})