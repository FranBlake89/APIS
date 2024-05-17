
<div align="center">

<img alt="API Logo" src="../static/icons/icon-flask.svg" width="300"/><br /><br />

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/) 
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white) 
![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white) 
![Mongo DB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white) 
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

</div><hr />

# API for Portfolio

> [!NOTE] 
> This project was created thinking in the difficulties to have an updated portfolio. Having as main goal to simplify the process to update, modify, delete, create the projects on ours portfolio on a simple way. This project is one of two projects, corresponding to the backend.

  > [!IMPORTANT]
  > Check this related project:
  > [FrontEnd portfolio project - Next Js](https://github.com/franblake89/portalAPI-nextjs)

   
## Acknowledgements

- ### Organization Project
   ```
    flask_api/
    │
    ├── src/
    │   ├── models/
    │   │   └── __init__.py
    │   │
    │   ├── routes/
    │   │   └── __init__.py
    │   │
    │   ├── utils/
    │   │   └── __init__.py
    │   │
    │   ├── test/
    │   │   └── __init__.py
    │   │
    │   └── __init__.py
    │
    ├── venv/ 
    │
    ├── main.py
    ├── config.py
    ├── setup.py
    ├── MANIFEST.in
    └── README.md

   ```


- ### Init the project
   ```
    flask --app api_portfolio -debug run
   ```

- ### Command to create the whole project
    ```
    $ mkdir project_name
    $ cd project_name

    $ python3 -m venv venv # somes use .venv to keep it hidden
    $ source venv/bin/activate
    $ pip3 install Flask
    $ mkdir main_folder_name
    $ touch main_folder_name/__init__.py
    $ touch setup.py
    $ touch MANIFEST.in 
   ```

## API Reference

#### Get all items

```http
  GET /api/projects
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/projects/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of project to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.


## Running Tests

To run tests, run the following command

```bash
  In progress...
```


## Authors

- [@Fran_CR](https://www.github.com/franBlake89)


## License

This project is licensed under a custom license that restricts commercial use, private use, and patent use unless explicit permission is granted by the original author. It includes specific conditions and limitations to ensure compliance. For detailed information, see the [LICENSE](../LICENSE.md) file.