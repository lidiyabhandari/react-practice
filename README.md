# Hook Definition 
```js 
  import {useEffect} from "react"

  // only within component
  // 1st usecase
  useEffect(() => {
    // tracking, user activity, state change listners
    console.log("I am always called when the component is re-render")
  })

  // 2nd usecase
  useEffect(() => { 
    // if you need the data on your component during the first load of the component 
    console.log("I am only called when the component is mounted")

    // delay 
    setTimeout(() => {
      setCredentials({email:"asdfasdf", password: "asdfasdf"})
    }, 3000)
  }, [])
```

## Input Components
  - Controlled (Edit form/Update form)
    ```jsx
      <input
          type="email"
          id="username"
          name="email"
          onChange={changeHandler}
          required
          defaultValue="" 
          value=""
          placeholder="Enter your username here..."
          className="text-gray-800 border border-gray-700 dark:border-gray-600 dark:bg-gray-400 w-full rounded-md p-2 dark:placeholder:text-gray-700 placeholder:italic"
        />
    ```
  - Uncontrolled (Create form)
    ```jsx
      <input
          type="email"
          id="username"
          name="email"
          onChange={changeHandler}
          required
          placeholder="Enter your username here..."
          className="text-gray-800 border border-gray-700 dark:border-gray-600 dark:bg-gray-400 w-full rounded-md p-2 dark:placeholder:text-gray-700 placeholder:italic"
        />
    ```

## API Integrate
  - Backend Developer provide
    - URL Endpoints
  - 4 api 
    - REST API 
      - 4 Processes 
        - CRUD 
          - Create
            - method: post
          - Read 
            - method: get
          - Update 
            - method: put/patch
          - Delete
            - method: delete
    - GraphQl
      - 2 methods 
        - Mutation 
        - Query

## fetch package (nodejs)
## Axios 
## Webstorage 
  - Cookies
    - string
    - name=value

    - domain and path, and duration dependent
    - self destory on maturity
    - max of 50 cookies can be stored each cookie size is of about 4096 chars 
    - a bit secure than local/session storage 
    - attached with request
    - `document.cookie = "name=value; expires=isoDate; "`
    - `js-cookies`
  - LocalStorage 
    - string
    - name=value
    - domain dependent
    
    - 5~10mb
    - `localStorage.setItem("name", "value")`,
    - `localStorage.getItem("name")`,
    - `localStorage.removeItem("name")`
    - `localStorage.clear()`
  - SessionStorage
    - string
    - name=value
    - only available for a tab
    - `sessionStorage.setItem("name", "value")`,
    - `sessionStorage.getItem("name")`,
    - `sessionStorage.removeItem("name")`
    - `sessionStorage.clear()`


## Project Hierarchy 
  - main.tsx  -> RouterConfig
      - AuthLayout              - UserLayout
        - pages
          - components

  - Banner as a route 
    - <RouterConfig>
      - <UserLayout>
        - <Outlet>
          - <BannerEditPage>
            - <BannerForm>

## Optimizing React Component 
  - Image optimization
  - Code Splitting 
  - Optimizing import(Lazy and suspense loading)