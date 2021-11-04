# Clinica OnLine SR

La Clinica SR ofrece, a traves de esta aplicación, la posibilidad de gestionar todo lo referido a turnos a traves de la web. De esta manera permite a los usuarios, independientemente del tipo que sea, lograr una independencia absoluta para poder gestionar aquello que le resulte necesario.

Dependiendo del rol del usuario en cuestion, éste podrá gestionar turnos, horarios, usuarios, historias clínicas, emitir reportes y obtener estadísticas que la aplicación generará a partir de la interaccion de cada integrante del sistema.

De uso sencillo e intuitivo, el usuario podra resolver aquello que necesite en cuestion de minutos.

Hay tres roles a los cuales el usuario podrá corresponder. Dichos roles y sus funcionalidades se enumeran a continuación:

- <strong>Rol 'Paciente': </strong>sera el público de la clínica. Tendrá disponibles las siguientes acciones:
- - Solicitar turno.
- - Ver sus turnos agendados.
- - Gestionar sus turnos.
- - Consultar su historia clinica.

- <strong>Rol 'Profesional':</strong> serán los médicos y técnicos que atenderán a los pacientes. Tendrá disponibles las siguientes acciones:
- - Gestionar sus horarios disponibles.
- - Gestionar sus turnos reservados.
- - Ingresar diagnósticos, comentarios y observaciones realizados durante el encuentro con el paciente.

- <strong>Rol 'Admin':</strong> será el administrador de la aplicación, debe tener algun nivel de jerarquía. Tendrá disponibles las siguientes acciones:
- - Generar nuevos usuarios.
- - Gestionar los usuarios.
- - Consultar y gestionar los turnos de toda la clínica.
- - Consultar la historia clinica de los pacientes.

A continuación se describirán las acciones mencionadas anteriormente.

## Secciones de la aplicación
- Login

Aquí el usuario podra ingresar al sistema, o bien generar un nuevo usuario. Es importante remarcar que al generar un nuevo usuario, el sistema enviará un correo de verificación a la casilla de e-mail registrada, sin dicha verificación el usuario no podrá loguearse. Por otro lado, si el usuario que se intenta registrar es de tipo 'Profesional' (médicos, técnicos, etc.) ademas deberá ser habilitado por un usuario de tipo 'Admin'.

Pantalla Login:
![image](https://user-images.githubusercontent.com/26911197/140414522-57b3d2d3-b9ca-49ec-896b-e141c572240a.png)

Pantalla Registro:
![image](https://user-images.githubusercontent.com/26911197/140414672-87329a5d-f964-4674-a617-14f87bace8d5.png)

- Home

Una vez que el usuario ingresa al sistema, automáticamente será redirigido a la pantalla 'Home', aquí contará con una sección donde se mostrará la información personal del usuario, y por debajo se listaran aquellas opciones que tenga disponible, las cuales variaran segun el rol del usuario ingresado. 
A continuación se listan los distintos roles y sus respectivas funcionalidades:

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
