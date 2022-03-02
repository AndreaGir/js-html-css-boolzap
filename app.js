const app = new Vue(
    {
        el: '#tutto',
        data:{
            listaContatti: [
                {
                    nome: 'Andrea',
                    messaggio: 'Ci vediamo dopo?',
                    img: 'img/img3.jfif', 
                },
                {
                    nome: 'Francesco',
                    messaggio: 'Ciaoo',
                    img: 'img/img4.jfif', 
                },
                {
                    nome: 'Marco',
                    messaggio: 'come stai?',
                    img: 'img/img2.jfif', 
                },
                
            ]
        }
    }
)