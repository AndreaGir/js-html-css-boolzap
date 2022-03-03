 const app = new Vue(
    {
        el: '#tutto',
        data:{
            listaContatti: [
                {
                    nome: 'Andrea',
                    messaggio: 'Ci vediamo dopo?',
                    img: 'img/avatar1.png', 
                    ora: '11:27',
                },
                {
                    nome: 'Francesco',
                    messaggio: 'Ciaoo',
                    img: 'img/img4.jfif', 
                    ora: '10:00',
                },
                {
                    nome: 'Marco',
                    messaggio: 'come stai?',
                    img: 'img/img2.png', 
                    ora: '1:32',
                },
                {
                    nome: 'federico',
                    messaggio: 'che fai?',
                    img: 'img/avatar5.png', 
                    ora: '10:38',
                },
                
            ]
        },
        methods: {
            cambiaChat: function(){
                
            }
        }
    }
) 