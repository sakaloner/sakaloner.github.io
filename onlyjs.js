const app = Vue.createApp({
    data() {
        return{
            page: 0,
            slider_value: 0,
            product: 'Titulo',
            link: '',
            titulo: '',
            autor: '',
            rate: '',
            entradas_articles: [
             {'link':'linker', 'titulo': 'Las cascadas magicas','autor': 'Michael Giovanni', 'rate': 6.7},
             {'link':'nose', 'titulo':'Jesucristo Redentor','autor': 'Manuel Guevara', 'rate': 10}
            ],
            entradas_books: [
               {'link':'www.LibrosChimbas.com', 'titulo':'Las flores rosas', 'autor':'Margaret Atwood'}
            ],
            entradas_podcasts: [
               {'link':'www.laPampa.com', 'titulo':'Ep4 How to get rich', 'autor':'Joe rogan'}
            ],
            entradas_music: [
               {'link':'www.MusicGonorreica.com', 'titulo':'Nirvana Reloaded', 'autor':'Smell like teens spirtis'}
            ]
         }
    },
    methods: {
        save_form(){
            var slider = document.getElementById("myRange");
            console.log(slider.value);
            
            if (this.page === 0) {
               this.entradas_articles.push({
                  'titulo': this.titulo,
                  'autor': this.autor,
                  'link': this.link,
                  'rate': slider.value
               })
            }
            else if (this.page === 1) {
               this.entradas_books.push({
                  'titulo': this.titulo,
                  'autor': this.autor,
                  'link': this.link,
                  'rate': slider.value
               })
            }
            else if (this.page === 2) {
               this.entradas_podcasts.push({
                  'titulo': this.titulo,
                  'autor': this.autor,
                  'link': this.link,
                  'rate': slider.value
               })
            }
            else if (this.page === 3) {
               this.entradas_music.push({
                  'titulo': this.titulo,
                  'autor': this.autor,
                  'link': this.link,
                  'rate': slider.value
               })
            };
            // Vaciar
            this.titulo = '';
            this.autor = '';
            this.link = '';
            this.entradas_articles.sort((a, b) => (a.rate > b.rate) ? 1 : -1);        
        },
        chpage(){
           console.log(this.page);
        }
        
      },
   computed: {
      sortedArray: function() {
         if (this.page === 0) {
            function compare(a, b) {
               if (a.rate < b.rate)
               return -1;
               if (a.rate > b.rate)
               return 1;
               return 0;
            }
            return [...this.entradas_articles].sort(compare);
         }
         else if (this.page === 1) {
            function compare(a, b) {
               if (a.rate < b.rate)
               return -1;
               if (a.rate > b.rate)
               return 1;
               return 0;
            }
            return [...this.entradas_books].sort(compare);
         }
         else if (this.page === 2) {
            function compare(a, b) {
               if (a.rate < b.rate)
               return -1;
               if (a.rate > b.rate)
               return 1;
               return 0;
            }
            return [...this.entradas_podcasts].sort(compare);
         }
         else if (this.page === 3) {
            function compare(a, b) {
               if (a.rate < b.rate)
               return -1;
               if (a.rate > b.rate)
               return 1;
               return 0;
            }
            return [...this.entradas_music].sort(compare);
         };
       }
      },



    mounted: function () {
      var slider = document.getElementById("myRange");
      var output = document.getElementById("demo");
      output.innerHTML = slider.value; // Display the default slider value
      

      // Update the current slider value (each time you drag the slider handle)
      slider.oninput = function() {
      output.innerHTML = this.value;
      
      } 
    }
})
app.mount('#app')
