# Banco Ripley Test

# Links

| Plataforma | Links |
| ------ | ------ |
| GitHub | https://github.com/CaritoDasilva/mini-bank-be |
| EC2 Deploy | http://18.222.204.233/api/clients/ |
| Portafolio | https://www.caritodasilva.work/ |

# API Documentation:
  - /api/clients/ => Trae todos los clientes registrados
  - /api/clients/:rut => Trae un cliente buscando por rut.
  - /api/accounts/:rut  => Muestra una cuenta de un cliente en específico
  - /api/accounts/:rut  => Muestra una cuenta de un cliente en específico
  - /api/clients/new => Crea un nuevo cliente, objeto en el body según se especifica
>       
    {
        "name": string,
        "rut": string,
        "password": string,
        "email": string

    }
- /api/accounts => Muestra todas las cuentas
- /api/accounts/transfer => Maneja la transferencia a teerceros. Se envía el siguiente body:
>    
    {
    "amount_to_update": number,
    "destination_client_account": string,
    "operation_owner": string,
    "operation_type": string
    }

- "/api/accounts/update/:rut/ => Maneja los depositos y retiros. Se envía el siguiente body:
>    
    {
    "amountToUpdate": number,
    "isDeposit": boolean,
    "operation_type": string

}


## Implementación

> Se construyó una api que permite actualizar las cuentas de los clientes, ya sea que se quiera realizar un depósito, un retiro o una transferencia. También permite consultar por clientes registrados, sus cuentas y si se requiere la de un cliente en particular.
> Se implementó la solución con una base de datos no relacional pero dependiendo del tamaño de negocio y las posibles relaciones y alcances se pudiese tomar una decisión distinta.
> También se hizo una configuración inicial de a medición del coverage para un futuro desarrollo de test unitarios.
> Por último mencionar que el desarrollo front del ejercicio fue realizado en Angular, para que se puedan gestionar las operaciones de parte del cliente.
>Se utilizo una arquitectura MVC para la estructura del proyecto, dejando el manejo de la lógica del negocio en la capa de servicios.


### Instalación

Instalación de dependencias
```sh
$ npm install
```

Para correr el proyecto

```sh
$ npm run start
```

Para ver el coverage

```sh
$ npm run test:coverage
```

