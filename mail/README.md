# Mail-Ecuavisa
Servicio de envío automático de emails (SMTP) 

## Requisitos
- Node Js v14.x
- Express 4.18.2

## Librerías
- sendpulse-api 1.1.5
- node-fetch 3.2.10

## Programas & utilidades (windows)
- Vscode
- Git & github
- Postman 
- Cualquier navegador

## Utilización

- `https://mail-ecuavisa.vercel.app/`

     Usando método `POST` se debe enviar un body para el envío del correo.

    - Estructura del body:

        -       {
                sesionState: "OK",
                emailData: string,
                emailFrom: "suscripciones@ecuavisa.com",
                emailTo: string,
                CC: string,
                subject: string
                }

        - Importante: 
           - `emailData` valor tipo string que puede contener etiquetas html. 

              - p. ej: `<h3>Email de prueba</h3><p><a href='URL'>Enlace</a></p>`
                        

           - `sesionState` debe tener el string "OK" para realizar el envío del email.
           - `emailFrom` debe tener el string "suscripciones@ecuavisa.com" para realizar el envío del email.

        - Campos requeridos: `sesionState, emailData, emailFrom, emailTo`