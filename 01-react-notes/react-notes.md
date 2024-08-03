# REACT

**React:** es una librería de JS extremadamente popular, declarativa, basada en componentes, impulsada por estados, para construir interfaces de usuario, creada por Facebook.

- **librería o framework de JS:** A diferencia de los frameworks que ofrecen un conjunto completo de soluciones y dictan una estructura, React se enfoca solo en la capa de vista y se describe oficialmente como una librería, complementándose con otras librerías para funciones adicionales.
- **extremadamente popular:**
- **declarativa:** le decimos a React qué aspecto debe tener un componente, y en última instancia, toda la interfaz de usuario, basándonos en el estado actual.
- **basada en componentes:** los componentes son los bloques de construcción de las interfaces de usuario, como botones, campos de entrada, barras de búsqueda, etc.
- **impulsada por estados:**
- **Creada por Facebook:** creada en el 2011 por Jordan Walke, trabajador de Facebook.

**JSX:** es básicamente una sintaxis que combina partes de HTML, CSS y JS, e incluso nos permite hacer referencia a otros componentes de React.

**React es realmente bueno en dos cosas:**

- La representación de los componentes de una página web como interfaz de usuario en función de su estado actual. 
- Es muy bueno en mantener la interfaz de usuario sincronizada con el estado mediante el re-renderizado, en otras palabras, reaccionando cuando el estado de uno de los componentes cambia. 

---
<br>

### **Reglas importantes al escribir componentes en React:**
- **1.- El nombre de la función debe comenzar con una letra mayúscula:** los componentes funcionales deben ser nombrados con una letra inicial en mayúscula (PascalCase). Esto es importante porque React utiliza la primera letra para distinguir entre componentes y elementos HTML nativos.

- **2.- La función debe devolver algún tipo de marca (markup), generalmente en forma de JSX:** Los componentes funcionales en React deben devolver JSX, que es una sintaxis similar a HTML utilizada para describir la interfaz de usuario.

- **3.- Usar `className` en lugar de `class`:** No se puede usar la palabra reservada class en JSX para asignar clases CSS, ya que es una palabra clave en JavaScript. En su lugar, debes usar className.


***NOTA:***

- Un componente puede devolver `null`, pero eso significa que no renderizará nada. Esto puede ser útil en ciertos casos donde no deseas mostrar nada en la interfaz de usuario.

- Un componente solo puede devolver exactamente un elemento raíz. Si necesitas devolver múltiples elementos, debes envolverlos en un contenedor, como un `<div>` , o usar un `<>` (Fragmento) para evitar agregar elementos innecesarios al DOM.
<br>

---

<br>

### **Renderizado Condicional en React:** 
El renderizado condicional en React permite mostrar u ocultar partes de la interfaz de usuario basadas en condiciones específicas. Puedes usar varias técnicas para lograrlo:

- Renderizado condicional con el operador lógico `&&`:
  - Si la primera parte de la expresión es `true` o un valor _"truthy"_ (un valor que se evalúa como verdadero en un contexto booleano), entonces la segunda parte de la expresión se renderizará.

- Renderizado condicional con el operador ternario ( `? :` ):
  - El operador ternario tiene tres partes:
      - 1.-Condición: la expresión que se evalúa.
      - 2.-Resultado si es verdadera: lo que se renderiza si la condición es `true` 
      - 3.-Resultado si es falsa: lo que se renderiza si la condición es `false`.
  
- Renderizado condicional con múltiples `return`:
  - Dentro de un componente funcional, puedes usar múltiples declaraciones return para manejar diferentes condiciones de renderizado.

---

<br>

### React Fragment
Permite agrupar varios elementos sin añadir nodos adicionales al árbol del DOM. Esto es útil cuando necesitas devolver múltiples elementos desde un componente, pero no quieres introducir un `<div>` u otro contenedor innecesario que podría afectar el estilo o la estructura de tu HTML.

- **Características principales:**
    - 1.- _Agrupación sin rastro en el DOM_: React Fragment no añade ningún elemento extra al DOM. Es una forma de agrupar hijos en un componente sin alterar la estructura de la salida HTML.

- **Sintaxis:**
   - 1.- Puedes usar la etiqueta `<Fragment></Fragment>`.
   - 2.- Para mayor simplicidad, React también soporta la sintaxis corta `<> </>`


---

<br>

## Componentes en React

### 1.- Bloques de construcción de la interfaz de usuario:
- Los componentes son los bloques fundamentales de cualquier interfaz de usuario en React. Cada componente es una pieza autónoma que encapsula sus propios datos, lógica y apariencia.

### 2.- JSX y la apariencia de los componentes:
- Los componentes en React se definen utilizando una sintaxis declarativa llamada **JSX** (JavaScript XML), que combina la lógica de JavaScript con una estructura similar a HTML.
- Cada componente devuelve un bloque de JSX que describe lo que el usuario verá en la pantalla.

### 3.- Contenido en JSX:
- Un trozo de JSX puede contener marcado (markup) similar a HTML, estilos en línea (CSS) y lógica JavaScript. Esto permite crear interfaces de usuario complejas de forma sencilla y declarativa.

### 4.- Pasar datos entre componentes con `props`:
- Para compartir datos entre componentes, un componente padre puede pasar datos a un componente hijo directo utilizando **props** (abreviatura de "properties").
- Cada valor que se quiere pasar a un componente hijo se define como un prop.
- **Importante**: Los props solo pueden pasar datos de un componente padre a sus hijos, pero no al revés. Los datos fluyen unidireccionalmente de padres a hijos.

### 5.- Renderización de listas y renderizado condicional:
- Es común en aplicaciones React renderizar múltiples componentes del mismo tipo iterando sobre un array. Esto se conoce como **crear una lista** de componentes.
- También puedes renderizar condicionalmente componentes utilizando herramientas de JavaScript como el operador ternario (`? :`), el operador lógico `&&`, o múltiples declaraciones `return` dentro de un componente.


---

<br>

### EJEMPLO

![resumen-propio](https://github.com/user-attachments/assets/f2d4d57e-4d1c-42d6-8fe9-bf6d08ceb8ef)

<br>

---
<br>

## Eventos en React
  - Sintaxis de eventos en JSX:
    - **1.-** En lugar de usar los nombres de eventos en minúsculas como en HTML, en React se utilizan camelCase. Por ejemplo, `onClick` en lugar de onclick. ![onclick](https://github.com/user-attachments/assets/3e20a200-5a28-4297-ae83-0b810c15fa4a)

    - **2.-** Los manejadores de eventos en React se pasan como funciones. Puedes definir estas funciones en línea o como métodos separados.![onMouseEnter](https://github.com/user-attachments/assets/46393014-c73e-4c95-90f6-141f8460b363)

---
<br>






