//  function checkAge(age) {
    //     if (age >= 18) {
    //       return true;
    //     } else {
    //       return confirm('У вас є дозвіл ваших батьків?');
    //     }
    //   }
      
    //   let age = prompt('Скільки вам років?', 18);
      
    //   if ( checkAge(age) ) {
    //     alert( 'Доступ надано' );
    //   } else {
    //     alert( 'У доступі відмовлено' );
    //   }


    console.log(sayHi())
    function sayHi() {
        let message = "Привіт";
        return message;
      }

      let func = sayHi;  
    //   console.log(sayHi())




    // function ask(question, yes, no) {
    //     if (confirm(question)) showOk()
    //     else showCancel();
    //   }
      
    //   function showOk() {
    //     alert( "Ви погодились." );
    //     console.log( "Ви погодились." );
    //   }
      
    //   function showCancel() {
    //     alert( "Ви скасували виконання." );
    //     console.log( "Ви скасували виконання." );
    //   }
      
    //   // використання: функції showOk, showCancel передаються як аргументи для ask
    //   ask("Ви згодні?" );
    //   ask("Ви скасували виконання?");

    let age = prompt("Скільки вам років?", 18);

    // оголошуємо функцію відповідно до умови
    if (age < 18) {
    
      function welcome() {
        alert("Привіт!");
      }
    
    } else {
    
      function welcome() {
        alert("Вітання!");
      }
    
    }
    
    // ...спробуємо викликати функцію
    welcome(); 