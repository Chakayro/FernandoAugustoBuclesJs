let menu = parseInt(
    prompt(
      "Ingrese el número del ejercicio que desea ejecutar: \n1. Tabla de multiplicar \n2. ingreso de numeros que se acumulan\n3. Adivina un número del 1 al 100 \n4. numero primo. \n5. un numero que muestre sus divisores \n6. array de 10 elementos y los muestre por consola \n7. un array de 10 numeros y muestre el doble\n8. un array con 5 miembros de la familia \n9. array de 10 numeros y muestre los numeros impares. \n10. array que calcule la suma de pares e impares respectivamente\n11. array de 10 numeros y muestre el mas grande \n12. array de 10 numeros e imprima el pequeño \n13. piedra papel o tijera con dos jugadores \n14. triangulo de 5 asteriscos por lado \n15. triangulo de 5 asteriscos por lado invertido \n16. array de 10 numeros desordenados y los imprima de manera ordenada \n17. Salir"
    )
  );
  
  while (menu < 1 || menu > 17) {
    menu = parseInt(
      prompt(
        "Ingrese un número válido: \n1. Tabla de multiplicar \n2. ingreso de numeros que se acumulan\n3. Adivina un número del 1 al 100 \n4. numero primo. \n5. un numero que muestre sus divisores \n6. array de 10 elementos y los muestre por consola \n7. un array de 10 numeros y muestre el doble\n8. un array con 5 miembros de la familia \n9. array de 10 numeros y muestre los numeros impares. \n10. array que calcule la suma de pares e impares respectivamente\n11. array de 10 numeros y muestre el mas grande \n12. array de 10 numeros e imprima el pequeño \n13. piedra papel o tijera con dos jugadores \n14. triangulo de 5 asteriscos por lado \n15. triangulo de 5 asteriscos por lado invertido \n16. array de 10 numeros desordenados y los imprima de manera ordenada \n17. Salir"
      )
    );
  }
  
  switch (menu) {
    case 1:
      let menu = parseInt(
        prompt(
          "Ingrese el número del ejercicio que desea ejecutar: \n1. Tabla de multiplicar del 1 al 10 \n2. Tabla de multiplicar de un número específico \n3. Salir"
        )
      );
      while (menu < 1 || menu > 3) {
        menu = parseInt(
          prompt(
            "Ingrese un número válido: \n1. Tabla de multiplicar del 1 al 10 \n2. Tabla de multiplicar de un número específico \n3. Salir"
          )
        );
      }
      switch (menu) {
        case 1:
          for (let i = 1; i <= 10; i++) {
            for (let j = 1; j <= 10; j++) {
              console.log(i + " x " + j + " = " + i * j);
            }
            console.log(" ");
          }
          break;
        case 2:
          let x;
          let y = 1;
          x = parseInt(prompt("Ingrese un número"));
          for (let i = 0; i <= 9; i++) {
            y = x * (i + 1);
            console.log(x + " x " + (i + 1) + " = " + y);
          }
          break;
      }
      break;
    case 2:
      let acumulado = 0;
      let i;
  
      while (i != 0) {
        i = parseInt(prompt("Ingrese un número"));
        acumulado += i;
        console.log(
          "la suma de los numeros ingresados hasta ahora es: " + acumulado
        );
      }
  
      console.log(
        "felicidades. lograste salir del bucle y la suma toltal es " + acumulado
      );
      break;
    case 3:
      let numero = Math.floor(Math.random() * 100) + 1;
      for (let i = 0; i < 100; i++) {
        adivinar = parseInt(prompt("Adivina un número entre 1 y 100"));
        if (adivinar === numero) {
          console.log(
            "Adivinaste el número es: " + numero + " en " + i + " intentos"
          );
          break;
        } else if (adivinar < numero) {
          console.log("El número " + adivinar + " es menor al numero a adivinar");
        } else {
          console.log("El número " + adivinar + " es mayor al numero a adivinar");
        }
      }
      break;
    case 4:
      let conversión;
      let primo = parseInt(
        prompt("Ingrese un número y te dire si es primo o no")
      );
      if (primo < 0) {
        conversión = primo * -1;
      } else {
        conversión = primo;
      }
  
      switch (conversión) {
        case 0:
          console.log("El número " + primo + " no es primo");
          break;
        case 1:
          console.log(
            "El número " +
              primo +
              " no se considera ni primo ni compuesto, por lo tanto no es primo4."
          );
          break;
        default:
          let contador = 0;
          for (let i = 2; i < conversión; i++) {
            if (conversión % i === 0) {
              contador++;
            }
          }
          if (contador === 0) {
            console.log("El número " + primo + " es primo");
          } else {
            console.log("El número " + primo + " no es primo");
          }
      }
  
      break;
    case 5:
      let contador = 0;
      let divisor = parseInt(prompt("Ingrese un número"));
      for (let i = 1; i <= divisor; i++) {
        if (divisor % i === 0) {
          contador++;
          console.log(
            divisor +
              " es divisible por " +
              i +
              " y el resultado es " +
              divisor / i
          );
        }
      }
      console.log("El número " + divisor + " tiene " + contador + " divisores");
      break;
    case 6:
      let elementos = [];
      for (let i = 0; i < 10; i++) {
        let numeros = Math.floor(Math.random() * 250) + 1;
        elementos[i] = numeros;
        console.log(
          "El número aleatorio en posición  " + (i + 1) + " es: " + elementos[i]
        );
      }
      console.log(elementos);
      break;
    case 7:
      let elementos2 = [];
      let dobbles;
      for (let i = 0; i < 10; i++) {
        let numeros = Math.floor(Math.random() * 250) + 1;
        elementos2[i] = numeros;
        dobles = numeros * 2;
        console.log(
          "El número aleatorio en posición " +
            (i + 1) +
            " es: " +
            elementos2[i] +
            " y su doble es: " +
            dobles
        );
      }
      console.log(elementos2);
      break;
      break;
    case 8:
      const Familia = [
        {
          nombre: "Juan",
          edad: 18,
          parentesco: "Hermano",
          estatura: 1.7,
        },
        {
          nombre: "Maria",
          edad: 37,
          parentesco: "Madre",
          estatura: 1.6,
        },
        {
          nombre: "Pedro",
          edad: 35,
          parentesco: "Padre",
          estatura: 1.8,
        },
        {
          nombre: "Ana",
          edad: 40,
          parentesco: "Tia",
          estatura: 1.65,
        },
        {
          nombre: "Lucia",
          edad: 65,
          parentesco: "Abuela",
          estatura: 1.55,
        },
      ];
      console.log("miembros de la familia");
      for (let i = 0; i < Familia.length; i++) {
        console.log(
          Familia[i].nombre +
            " es mi " +
            Familia[i].parentesco +
            ", tiene " +
            Familia[i].edad +
            " años y su Estatura es: " +
            Familia[i].estatura +
            " cm de altura"
        );
      }
      break;
    case 9:
      let elementos3 = [];
      let impares;
      for (let i = 0; i < 10; i++) {
        let numeros = Math.floor(Math.random() * 150) + 1;
        elementos3[i] = numeros;
        impares = numeros % 2;
        if (impares != 0) {
          console.log(
            "El número aleatorio en posición " +
              (i + 1) +
              " es: " +
              elementos3[i] +
              " y es impar"
          );
        }
      }
      console.log(elementos3);
      break;
    case 10:
      let aumento;
      let par,
        impar,
        parSuma = 0,
        imparSuma = 0;
      while (aumento != 0) {
        aumento = parseInt(prompt("Ingrese un número"));
        if (aumento % 2 === 0) {
          par = aumento;
          parSuma += aumento;
          console.log(
            "el primer numero par es: " +
              par +
              " y la suma de los numeros pares ingresados hasta ahora es: " +
              parSuma
          );
        } else {
          impar = aumento;
          imparSuma += aumento;
          console.log(
            "el primer numero impar es: " +
              impar +
              " y la suma de los numeros impares ingresados hasta ahora es: " +
              imparSuma
          );
        }
      }
      console.log(
        "felicidades. lograste salir del bucle y la suma toltal de impares es " +
          imparSuma +
          " y la suma total de pares es " +
          parSuma
      );
      break;
    case 11:
      let elementos4 = [];
      let mayor = 0;
      for (let i = 0; i < 10; i++) {
        let numeros = Math.floor(Math.random() * 100) + 1;
        elementos4[i] = numeros;
        if (numeros > mayor) {
          mayor = numeros;
        }
      }
      console.log(elementos4);
      console.log("El número mayor es: " + mayor);
      break;
    case 12:
      let elementos5 = [];
      let menor = 100;
      for (let i = 0; i < 10; i++) {
        let numeros = Math.floor(Math.random() * 100) + 1;
        elementos5[i] = numeros;
        if (numeros < menor) {
          menor = numeros;
        }
      }
      console.log(elementos5);
      console.log("El número menor es: " + menor);
      break;
    case 13:
      let PPT = ["piedra", "papel", "tijeras"];
      const jugador1 = prompt("Jugador 1: ingresa tu nombre");
      const jugador2 = prompt("Jugador 2: ingresa tu nombre");
      let opcion1 = parseInt(
        prompt(
          jugador1 +
            " Escoge una de las 3 opciones: \n1. para piedra \n2. para papel\n3. para tijeras"
        )
      );
      while (opcion1 < 1 || opcion1 > 3) {
        opcion1 = parseInt(
          prompt(
            jugador1 +
              " Opcion invalida por favor escoge una de las 3 opciones: \n1. para piedra \n2. para papel\n3. para tijeras"
          )
        );
      }
      let opcion2 = parseInt(
        prompt(
          jugador2 +
            " Escoge una de las 3 opciones: \n1. para piedra \n2. para papel\n3. para tijeras"
        )
      );
      while (opcion2 < 1 || opcion2 > 3) {
        opcion2 = parseInt(
          prompt(
            jugador2 +
              " Opcion invalida por favor escoge una de las 3 opciones: \n1. para piedra \n2. para papel\n3. para tijeras"
          )
        );
      }
      console.log(
        jugador1 +
          " escogió " +
          PPT[opcion1 - 1] +
          " y " +
          jugador2 +
          " escogió " +
          PPT[opcion2 - 1]
      );
      if (opcion1 === opcion2) {
        console.log("Empate");
      } else if (
        (opcion1 === 1 && opcion2 === 3) ||
        (opcion1 === 2 && opcion2 === 1) ||
        (opcion1 === 3 && opcion2 === 2)
      ) {
        console.log(jugador1 + " gana");
      } else {
        console.log(jugador2 + " gana");
      }
  
      break;
    case 14:
      for (let i = 1; i <= 5; i++) {
        console.log("*".repeat(i));
      }
      break;
    case 15:
      for (let i = 5; i >= 1; i--) {
        console.log("*".repeat(i));
      }
      break;
    case 16:
      let elementos6 = [];
      let ordenados = [];
      let arregloMayor = 100;
      let arregloMenor = 0;
      for (let i = 0; i < 10; i++) {
        let numeros = Math.floor(Math.random() * 100) + 1;
        elementos6[i] = numeros;
      }
      
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          if (elementos6[j] < arregloMayor) {
            arregloMayor = elementos6[j];
          }
        }
        ordenados[i] = arregloMayor;
        arregloMenor = arregloMayor;
        arregloMayor = 100;
      }
      console.log(elementos6);
      console.log(ordenados);
  
      break;
    case 17:
      console.log("Gracias por usar el programa, besos y abrazos 😘🤗");
      break;
  }
  