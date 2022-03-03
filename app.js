 const app = new Vue(
    {
        el: '#tutto',
        data:{

            active: false, 

            listaContatti: [
                {
                    nome: 'Andrea',
                    messaggio: 'Ci vediamo dopo?',
                    img: 'img/avatar1.png', 
                    ora: '11:27',
                    risp: 'non so che ora faccio',
                },
                {
                    nome: 'Francesco',
                    messaggio: 'Ciaoo',
                    img: 'img/img4.jfif', 
                    ora: '10:00',
                    risp: 'Ciao francesco',
                },
                {
                    nome: 'Marco',
                    messaggio: 'come stai?',
                    img: 'img/img2.png', 
                    ora: '1:32',
                    risp: 'bene grazie',
                },
                {
                    nome: 'federico',
                    messaggio: 'che fai?',
                    img: 'img/avatar5.png', 
                    ora: '10:38',
                    risp: 'faccio gli esercizi, tu?',
                },
                
            ],

            currentIndex: 0,

            

        },
        methods: {
            avanti: function(){
                if( this.currentIndex  < this.listaContatti.length -1  ) 
                this.currentIndex++
                 else
                    this.currentIndex = 0 
            },
            
        },
        
    }
) 