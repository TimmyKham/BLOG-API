# API Blog

## Overview
The API allows users to retrieve all items from the application in micro service via a REST architecture. This API will mainly be used to create a blog.

It will also create its own articles, show article data, delete articles and modify articles.

### [POST] Create article
Allows the creation of a single article.

|                            |                  |
|----------------------------|------------------|
| Requires authentication ?  | No               |
| Who can use it ?           | Owner and users  |
| Response formats           | application/json |

* HTTP request : POST → article/create

#### Parameters :
```javascript
{
  'titre': String, // Optional
  'date_article': Date, // Optional
  'description': String // Optional
}
```

#### Response :
```javascript
  {
    _id: Object_ID,
    titre: String,
    date_article: Date,
    description: String
  }
```

### [DELETE] Destroy article by id
Delete an article.

* HTTP request : DELETE → article/destroy/{id}

#### Response :
```javascript
  {
    _id: Object_ID,
    titre: String,
    date_article: Date,
    description: String
  }
```

### [GET] Show article by id
Show an article.

* HTTP request : GET → article/show/{id}

#### Response :
```javascript
  {
    _id: Object_ID,
    titre: String,
    date_article: Date,
    description: String
  }
```

### [PUT] Update article

* HTTP request : PUT → article/update/{id}

#### Parameters :
```javascript
{
  'titre': String, // Optional
  'description': String // Optional
}
```

#### Response :
```javascript
  {
    _id: Object_ID,
    titre: String,
    date_article: Date,
    description: String
  }
```


### Requirements
* node 10
* npm
* yarn
* git
* mongodb (please configure config.js for link mongodb with your localhost)

### Install
```yarn install```

### Build
```yarn build```

### Start (prod mode)
``` yarn start```

### Start (dev mode)
``` yarn dev```

### Launch tests
```yarn test```
