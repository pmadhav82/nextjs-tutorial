## Getting started

Create a new nextjs project
```
npx create-next-app@latest
```
Give a project name and accept default value. To run the project run 
```
 npm run dev
 ```

## Routing

* All routes must be placed inside the **app** folder
* Every file that corresponds to the route must be named `page.jsx` or `page.tsx`
* Each folder corresponds to the path segment in the browser URL


For the home page route in a folder `app` create a file name `page.tsx`
```
export default function Home() {
  return (<h1>

    This is home page!
  </h1>);
}
```

`layout.tsx` file is for nav bar and footer which can be shared in all the pages of the app. In `layout.tsx` file

```
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header>This is header of the page</header>
        {children}
        <footer>This is footer of the page</footer>
        </body>
    </html>
  )
}
```

To create a route `/about` we need to create a folder named `about` inside `app` folder and create a file name `page.tsx` in `about` folder. This will be the route for `/about`

```
  const About = ()=>{

    return <>
    <h2>This is about page!</h2>
    </>
}

export default About;
```

## Nested Routing
Nested route such as `/blog`,  `/blog/first` and `/blog/second`
to achieve this routes:
for that we can create a folder named `blog` and create a `page.tsx` file for `/blog` route
for `/blog/first` we can create another folder named `first` inside `blog` folder and create a file `page.tsx` same for `/blog/second`. Create a folder inside `blog` folder named `second` and create a `page.tsx` file in that `second` folder.