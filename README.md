# Store app

This app is used for the management of two entities Store and Item.

**Stack:** React, Python (Flask), PosgreSQL.

**Features:** User management, Store, items.

### FrontEnd
The frontend was built with React and typescript.


**Styles**
- semantic-ui
- semantic-ui-react

**Libraries**
- Itercionalization with i18next.
- redux saga.
- Semantic UI React.
- axios
- react-dropzone
- react-hook-form
- react-image-crop
- react-router-dom

**Redux**
- redux
- react-redux
- react-saga


### Backend
The backend was built with python Flask.

**Libraries**
- JWT Authenticaton.
- Itercionalization with flask-babel.
- Migrations.
- Flask-Marshmallow.
- Flask-SQLAlchemy.
- Flask-restful.
- Flask-blueprints.
- Cloudinary for images.
- Maigun for emails.

**Important:** Since the Mailgun account is not a premiun account, email notifications are just awailable for one user.

## Instructions
### Front end
Install all dependencies 

```
npm i
```

Start the app

```
npm start
```

### Back end
Create the virtual environtment

```
python3.6 -m venv venv
```

Activate the virtual environment

```
source venv/bin/activate
```

Install all dependencies from requirements.txt file

```
pip install -r requirements.txt
```

Go to the folder /code and start the app

```
python app.py
```


**Important:** In order to get the backend working you must provide a .env file with all variables listed in the .env.example document. The path of the .env document must be in the same place as .env.example

## Live demo
See the live demo here:


<dl>
<a href="http://128.199.43.48/storeapp/dashboard/app/home" target="_blank">Demo</a>
</dl>



