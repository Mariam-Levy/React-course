# Flujo de Datos Unidireccional

En React se utiliza el llamado flujo de datos unidireccional (one-way data flow). Esto significa que en las aplicaciones React, los datos se pueden pasar de los componentes padres a los componentes hijos mediante el uso de props, pero nunca en sentido contrario (de hijos a padres).

![one-way](./one-way%20data%20flow.png)

<img src="./flujo-unidireccional.md" alt="flujo" width="200">

## **Razones por las que React utiliza un flujo de datos unidireccional**:

- _Predecibilidad y comprensión_:
- Las aplicaciones son mucho más predecibles y fáciles de entender para los desarrolladores porque es más fácil determinar de dónde proceden los datos si solo fluyen en una dirección.

- _Facilidad de depuración_:
- Este enfoque simplifica la depuración (debugging) de las aplicaciones, ya que la fuente de los datos es clara y no hay necesidad de rastrear cambios en múltiples direcciones.

- _Eficiencia_:
- La vinculación bidireccional de datos suele ser menos eficiente y, por tanto, menos eficaz. El flujo de datos unidireccional permite a React optimizar mejor la actualización y renderización de los componentes.
