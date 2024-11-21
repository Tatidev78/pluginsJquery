    $(document).ready(function(){

        $('.menu-hamburguer').click(function(){
            $('nav').slideToggle();
        });

        $('#telefone').mask('(00) 00000-0000');

        $('form').validate({
            rules:{
                nome:{
                    required: true
                },
                email:{
                    required: true,
                    email: true
                },
                telefone:{
                    required: true
                },
                veiculoInteresse:{
                    required: true
                },
                mensagem:{
                    required: true
                },
            },
            messages: {
                nome:{
                    required: "Por favor, insira seu nome completo"
                },
                email:{
                    required:"Por favor insir seu e-mail."
                    email:"Por favor, insira um endereço de e-mail"
                },
                telefone:{
                    required: "Por favor, insira seu telefone."
                },
        
            },
            submitHandler: function(form){
                console.log(form);
            },
            invalidHandler: function (evento, validator){
                let camposIncorretos = validator.numberOfInvalids();
                if (camposIncorretos){
                    alert(`Existem ${camposIncorretos} campos incorretos`)
                }
            }
            
        });

            $('.lista-veiculos button').click(function(){
                const destino =$('#contato');
                const nomeveiculo =$(this).parent().find('h3').text();

                $('veiculo-interesse').val(nomeveiculo);

                $('#telefone, #cpf, #cep').on('input', function () { this.value = this.value.replace(/\D/g, ''); });

            
                $('html').animate({
                    scrollTop: destino.offset().top
                }, 1000);
            
            
    });