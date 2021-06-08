
# Ejercicios básicos de TypeScript

## Preparación

- Crea un fichero `tsconfig.json` en el mismo directorio, con el comando `tsc --init` :

```json
{
  "compilerOptions": {
    "target":"esnext",
    "module":"esnext",
    "outDir": "dist",
    "noImplicitAny": true,
  }
}
```
- Crea el fichero index.html que mostrará el resultado del ejercicio.
## Iteración 1: Body mass index

Crea un fichero con el nombre: __`bmiCalculator.ts`__

Escribe una función `calculateBmi()` que mida el índice de masa corporal, [BMI](https://en.wikipedia.org/wiki/Body_mass_index), basado en un peso dado (en kilogramos) y una altura(en centímetros) y devuelva un mensaje que incluya el resultado calculado. 

Llama a la función en el mismo fichero con parámetros "hard-codeados" e imprime por consola el resultado.

Ej:
```js
console.log(calculateBmi(180, 74))
```

debería imprimir:

```sh
Normal (healthy weight)
```



## Iteración 2: Exercise calculator

Create el código del ejercicio en el fichero `exerciseCalculator.ts`

Escribe una función `calculateExercises()` que calcule la media de tiempo de horas de ejercicio diario y lo compare con una __cantidad objetivo__ de horas de ejercicio diarias. La función debe devolver un objeto que incluya los siguientes valores:

  - Número de días
  - Número de días entrenados
  - Valor objetivo original
  - Tiempo medio calculado
  - Boleano que describa si se alcanzó el objetivo
  - Una valoración entre 1 y 3 que indique el grado de cumplimiento. La métrica es de elección propia.
  - Un valor de texto explicando el resultado

Las horas de ejercicio diario se pasarán a la función como un [array](https://www.typescriptlang.org/docs/handbook/basic-types.html#array) que contenga el número de horas ejercitadas por dia dentro del periodo de entrenamiento.

Ej. Una semana con 3 horas de entrenamiento el lunes, ninguna el martes, 2h el miércoles, 4.5h el jueves, etc. se representaría de la siguiente manera:

```js
[3, 0, 2, 4.5, 0, 3, 1]
```

Para el objeto Resultado se debería crear un [interface](https://www.typescriptlang.org/docs/handbook/interfaces.html).

Si se llamara a la función con los parámetros [3, 0, 2, 4.5, 0, 3, 1] y 2 (Objetivo diario) debería devolver:

```js
{ periodLength: 7,
  trainingDays: 5,
  success: false,
  rating: 2,
  ratingDescription: 'not too bad but could be better',
  target: 2,
  average: 1.9285714285714286 }
```

Crea un script para `npm run calculateExercises`</i> que llame a la función con valores "hard-codeados".

## Iteración 3: Command line

Modifica los ejercicios previos para pasar los parámetros por línea de comandos a `bmiCalculator` y `exerciseCalculator`.

El programa funcionaría así:

```sh
$ npm run calculateBmi 180 91

Overweight
```

and

```sh
$ npm run calculateExercises 2 1 0 2 4.5 0 3 1 0 4

{ periodLength: 9,
  trainingDays: 6,
  success: false,
  rating: 2,
  ratingDescription: 'not too bad but could be better',
  target: 2,
  average: 1.7222222222222223 }
```

En este ejemplo, el primer argumento es el valor objetivo.

Maneja las excepciones y los errores de forma apropiada.

El exerciseCalculator debería aceptar inputs de distintas longitudes.

Determina tu mismo como recoger todos los inputs necesarios.


