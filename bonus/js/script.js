// Inseriamo un input per visualizzare in pagina un testo inserito da un utente.
// Inseriamo una immagine e accanto un numero che identifica il numero di prodotti desiderati, i dati devono venire da Vue.
// Poi aggiungiamo un pulsante per aumentare questo numero.
const root = new Vue ({
    el: '#main-container',
    data: {
        input: {
            type:'text',
            placeholder: 'inserisci il tuo testo',
            message: 'Hello vue, this is a message for you.'
        },
        image: {
            src: 'https://i.picsum.photos/id/1037/300/300.jpg?hmac=9F2IJQqPBGhh-aMA1c3bQoLbB45XW7YCMO9LJwDKA2A',
            alt: 'Immagine non trovata!'
        }
    },
    methods:{
        showText: function(event) {
            this._data.input.message = event.target.value;
        }
    }
})