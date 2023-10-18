#LMS Frontend

### Setup instruction

1. Clone the project 

```
    git clone https://github.com/Aditya9103/LMS_Frontend.git
```

2. Move into the directory
```
    cd lms-frontend
```

3. install dependencies

```
    npm i
```

4. run the server

```   npm run dev
```
### Setup instruction for tailwind

[Tailwind official instruction doc](https://tailwindcss.com/docs/installation)

1. Install Tailwind

```
    npm install -D tailwindcss
```

2. Install tailwind config file
```    npx tailwindcss init
```
3. Add file extension to tailwind config file in the contents property 
```
    "./src/**/*.{html,js,jsx,ts,tsx}"
```

4. Add the tailwind directives at the top of the `index.css` file

```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```
### Adding plugin and dependencies

```
    npm install @reduxjs/toolkit  react-redux react-router-dom react-icons react-chartjs-2 daisyui axios react-hot-toast @tailwindcss/line-clamp
```