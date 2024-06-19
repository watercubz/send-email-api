## Documentación de la API

Esta documentación describe las principales funcionalidades y rutas disponibles en la API.

## Rutas Disponibles

```
- GET    users
- POST   register
- POST   login
- POST   uploadImg
```

### `/api/users`

Esta ruta devuelve todos los usuarios registrados en el sistema.

- **Método HTTP:** `GET`
- **Ejemplo de uso:**

  ```http
  GET /api/users

  ```

### `/api/login`

Esta ruta permite a un usuario iniciar sesión en el sistema.

- **Método HTTP:** `POST`
- **Parámetros:** Se envían en el cuerpo de la solicitud (JSON o form-urlencoded).
- **Ejemplo de uso:**
  ```http
  POST /api/login
  ```

### `/api/register`

Esta ruta registra a un nuevo usuario en el sistema.

- **Método HTTP:** `POST`
- **Parámetros:** Se envían en el cuerpo de la solicitud (JSON o form-urlencoded).
- **Ejemplo de uso:**
  ```http
  POST /api/register
  ```

Esta ruta permite la subida de imagen por parte del usuario y la asocia con su ID

- **Método HTTP:** `POST`
- **Parámetros**: Se envian en el cuerpo de la solicitud(Content-Type: multipart/form-data).
- **Ejemplo de uso:**
  ```http
  POST /api/upload:userId
  ```

## Funcionalidad de Envío de Correo Electrónico

Cuando un usuario se registra exitosamente en el sistema, se le enviará un correo electrónico de bienvenida.

El correo electrónico contiene detalles sobre la cuenta y puede incluir un enlace para activar la cuenta o simplemente una confirmación de registro. Estas características aún no están implementadas pero pueden añadirse según sea necesario.

Esta funcionalidad se puede modificar para implementar características adicionales como confirmación de correo electrónico, restablecimiento de contraseña, confirmación de pago, entre otros.

## Implementación

La implementación real de las rutas y la lógica para enviar correos electrónicos puede variar según la aplicación y las herramientas utilizadas.

Es crucial manejar adecuadamente los datos de usuario, validar la entrada y asegurar las comunicaciones para proteger la privacidad y seguridad de los usuarios.

Para más detalles técnicos, por favor, consulta la documentación del servidor y las bibliotecas utilizadas en el desarrollo.

Contacto: eurysosagarcia@gmail.com
