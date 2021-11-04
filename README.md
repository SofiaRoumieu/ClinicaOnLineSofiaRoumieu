# Clinica OnLine SR

La Clinica SR ofrece, a traves de esta aplicación, la posibilidad de gestionar todo lo referido a turnos a traves de la web. De esta manera permite a los usuarios, independientemente del tipo que sea, lograr una independencia absoluta para poder gestionar aquello que le resulte necesario.

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
- <strong>Login</strong>

Para poder acceder a las diferentes acciones, el usuario deberá ingresar al sistema completando ciertos datos que acrediten su identidad. En caso de no poseer un usuario registrado,podra generar uno nuevo. Es importante remarcar que al generar un nuevo usuario, el sistema enviará un correo de verificación a la casilla de e-mail registrada, sin dicha verificación el usuario no podrá loguearse. Por otro lado, si el usuario que se intenta registrar es de tipo 'Profesional' (médicos, técnicos, etc.) ademas deberá ser habilitado por un usuario de tipo 'Admin'.
Desde esta pantalla el usuario podrá ingresar al sistema o dirigirse a la sección de registro, haciendo clic en el link 'Registrate'.

Pantalla Login

![image](https://user-images.githubusercontent.com/26911197/140414522-57b3d2d3-b9ca-49ec-896b-e141c572240a.png)

- <strong>Registro</strong>

El usuario deberá seleccionar qué tipo de usuario desea registrar, en caso de que el registro lo este queriendo llevar a cabo un Admin, también podrá registrar un nuevo usuario Admin.

La información requerida será basicamente la misma para los tres tipos de usuarios: nombre, apellido, edad, cuil, e-mail, contraseña, foto de perfil. En caso de registrar un Paciente, se pedirá la obra social y una segunda foto de perfil. En caso de registrar un Profesional, se pedirá que se seleccione a qué especialidad/es se dedica.

Pantalla Registro

![image](https://user-images.githubusercontent.com/26911197/140414672-87329a5d-f964-4674-a617-14f87bace8d5.png)

- <strong>Home</strong>

Una vez que el usuario ingresa al sistema, automáticamente será redirigido a la pantalla 'Home', aquí contará con una sección donde se mostrará la información personal del usuario, y por debajo se listaran aquellas acciones que tenga disponible, las cuales variaran segun su rol. 

Pantalla Home, de un usuario de tipo 'Admin'
![image](https://user-images.githubusercontent.com/26911197/140418395-5eee827e-0b47-47a7-a21b-1d265ade8f1a.png)

- <strong>Mis Turnos</strong>
