# Doctors-R-Us: doctors appointments scheduler

## Project Installation

1. Install dependencies

```bash
$ cd doctors_r_us
$ npm install
```

## Run the application

1. Start server on http://localhost:3000/

   - Development

   ```bash
   $ npm run dev
   ```

   - Production

   ```bash
   $ npm run start
   ```

## API Resources

| Resource     | Description                                                     | Method | EndPoint          |
| ------------ | --------------------------------------------------------------- | ------ | ----------------- |
| doctors      | Get all doctors                                                 | Get    | /api/doctors      |
| doctors      | Post a doctors                                                  | Post   | /api/doctors      |
| doctors      | Delete a doctors                                                | Delete | /api/doctors      |
| appointments | Get all appointments for a particular doctor and particular day | Get    | /api/appointments |
| appointments | Post an appointment                                             | Post   | /api/appointments |
| appointments | Delete an appointment                                           | Delete | /api/appointments |

## Tech Stack

1. NodeJs/ExpressJs
   - Implemented server and RESTFul API with NodeJs and ExpressJs.
2. SQLite3
   - Implemented database with SQLite3 to conveniently store data without a server.
3. Dev Tools
   - Utilized Nodemon for auto reloading.
   - Utilized Postman for API testing.
