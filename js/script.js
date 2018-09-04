'use strict';
(function(){

    function Button(text) {                 //funkcja konstrukcyjna Button
        this.text = text || 'Hello';        //ustawiamy domyślną wartość właściwości text - Hello
    }

    Button.prototype = {                    //metoda create prototype (przypieta do funkcji konstrukcyjnej Button)
        create: function() {                //metoda będzie tworzyc nowe przyciski na stronie
            var self = this;                //zmienna self potrzebna by nie stracić kontekstu gdy funkcja jest parametrem innej funkcji
            this.$element = $('<button>');   //we właściwości element mamy przycisk button
            this.$element.text(this.text);      //dodajemy za pomocą metody text tekst do przycisku
            this.$element.click(function() {
                alert(self.text);
            });
            $('body').append(this.$element);        //bierzemy body i przypinamy do niego element
            //lub this.$element.appendTo($('body));     //pobieramy element i przypinamy go do body
        }
    }

    var btn1 = new Button('Hello!');
    btn1.create();
    console.log(btn1);
})();